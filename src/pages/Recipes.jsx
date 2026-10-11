import { useState } from 'react';
import RecipeCard from '../components/RecipeCard.jsx';
import { categories } from '../data/images.js';
import { recipes, mainIngredients, DIFFICULTIES, totalTime } from '../data/recipes.js';

const EMPTY = { time: null, difficulty: null, ingredient: null, category: null, onePot: false };

const TIMES = [
  { value: null, label: 'Qualquer tempo' },
  { value: 20, label: 'Até 20 min' },
  { value: 30, label: 'Até 30 min' },
  { value: 45, label: 'Até 45 min' },
];

// Aceita filtros iniciais vindos da Home: #/receitas?time=20&difficulty=Fácil
function initialFilters() {
  const q = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const time = Number(q.get('time')) || null;
  return { time, difficulty: q.get('difficulty'), ingredient: q.get('ingredient'), category: q.get('category'), onePot: q.get('onePot') === '1' };
}

const norm = (t) => String(t).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export default function Recipes({ onlyFavorites = false, favorites = [] }) {
  const [f, setF] = useState(onlyFavorites ? EMPTY : initialFilters);
  const [q, setQ] = useState('');
  const set = (k) => (v) => setF({ ...f, [k]: v });
  const active = f.time || f.difficulty || f.ingredient || f.category || f.onePot || q;
  const clear = () => { setF(EMPTY); setQ(''); };

  const base = recipes.filter(
    (r) =>
      (!onlyFavorites || favorites.includes(r.id)) &&
      (!f.time || totalTime(r) <= f.time) &&
      (!f.difficulty || r.difficulty === f.difficulty) &&
      (!f.onePot || r.onePot) &&
      (!f.ingredient || r.mainIngredient === f.ingredient) &&
      (!q || norm(`${r.title} ${r.mainIngredient} ${r.summary}`).includes(norm(q))),
  );
  const list = base.filter((r) => !f.category || r.category === f.category);
  const countOf = (c) => base.filter((r) => !c || r.category === c).length;

  return (
    <>
      <header className="page-head">
        <h1>{onlyFavorites ? 'Suas favoritas' : 'Cardápio para 1'}</h1>
        <p className="muted">
          {onlyFavorites ? 'As receitas que você quer ter sempre por perto.' : 'Tudo na medida de uma pessoa. Busque pelo nome ou filtre pelo que combina com seu momento.'}
        </p>
      </header>

      <div className="finder">
        <label className="search">
          <span className="sr-only">Buscar receita</span>
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar receita ou ingrediente (ex.: ovo, frango, bolo)" />
        </label>

        {!onlyFavorites && (
          <div className="tabs" role="group" aria-label="Refeição">
            {[{ id: null, label: 'Tudo' }, ...categories.map((c) => ({ id: c.id, label: c.id }))].map((c) => (
              <button key={String(c.id)} type="button" className={`tab ${f.category === c.id ? 'is-on' : ''}`} aria-pressed={f.category === c.id} onClick={() => set('category')(c.id)}>
                {c.label} <span className="tab__n">{countOf(c.id)}</span>
              </button>
            ))}
          </div>
        )}

        <div className="selects">
          <label>Tempo
            <select value={f.time ?? ''} onChange={(e) => set('time')(Number(e.target.value) || null)}>
              {TIMES.map((t) => <option key={String(t.value)} value={t.value ?? ''}>{t.label}</option>)}
            </select>
          </label>
          <label>Dificuldade
            <select value={f.difficulty ?? ''} onChange={(e) => set('difficulty')(e.target.value || null)}>
              <option value="">Todas</option>
              {DIFFICULTIES.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </label>
          <label>Ingrediente
            <select value={f.ingredient ?? ''} onChange={(e) => set('ingredient')(e.target.value || null)}>
              <option value="">Qualquer</option>
              {[...mainIngredients].sort((x, y) => x.localeCompare(y, 'pt-BR')).map((i) => <option key={i} value={i}>{i}</option>)}
            </select>
          </label>
          {!onlyFavorites && (
            <button type="button" className={`chip ${f.onePot ? 'is-on' : ''}`} aria-pressed={f.onePot} onClick={() => set('onePot')(!f.onePot)}>Uma panela só</button>
          )}
        </div>
      </div>

      <p className="muted results" aria-live="polite">
        {list.length} {list.length === 1 ? 'receita encontrada' : 'receitas encontradas'}
        {active && <button type="button" className="link-btn" onClick={clear}>Limpar filtros</button>}
      </p>

      {list.length > 0 ? (
        <div className="grid grid--dense">{list.map((r) => <RecipeCard key={r.id} recipe={r} dense />)}</div>
      ) : (
        <div className="empty card">
          <span aria-hidden="true">{onlyFavorites && !active ? '♡' : '🥄'}</span>
          <h2>{onlyFavorites && !active ? 'Ainda não tem favoritas' : 'Nada com esses filtros'}</h2>
          <p className="muted">
            {onlyFavorites && !active ? 'Toque no coração de uma receita para guardá-la aqui.' : 'Tente tirar um filtro. Ainda há bastante coisa gostosa por aqui.'}
          </p>
          {onlyFavorites && !active
            ? <a className="btn btn--primary" href="#/receitas">Explorar receitas</a>
            : <button type="button" className="btn btn--primary" onClick={clear}>Limpar filtros</button>}
        </div>
      )}
    </>
  );
}
