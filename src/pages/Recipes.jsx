import { useState } from 'react';
import Chips from '../components/Chips.jsx';
import RecipeCard from '../components/RecipeCard.jsx';
import { recipes, mainIngredients, DIFFICULTIES, totalTime } from '../data/recipes.js';

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
  return { time, difficulty: q.get('difficulty'), ingredient: q.get('ingredient') };
}

export default function Recipes({ onlyFavorites = false, favorites = [] }) {
  const [f, setF] = useState(onlyFavorites ? { time: null, difficulty: null, ingredient: null } : initialFilters);
  const set = (k) => (v) => setF({ ...f, [k]: v });
  const active = f.time || f.difficulty || f.ingredient;

  const list = recipes.filter(
    (r) =>
      (!onlyFavorites || favorites.includes(r.id)) &&
      (!f.time || totalTime(r) <= f.time) &&
      (!f.difficulty || r.difficulty === f.difficulty) &&
      (!f.ingredient || r.mainIngredient === f.ingredient),
  );

  return (
    <>
      <header className="page-head">
        <h1>{onlyFavorites ? 'Suas favoritas' : 'Receitas para 1'}</h1>
        <p className="muted">
          {onlyFavorites ? 'As receitas que você quer ter sempre por perto.' : 'Todas já na medida certa para uma pessoa. Filtre pelo que combina com seu momento.'}
        </p>
      </header>

      <div className="filters">
        <Chips label="Tempo" value={f.time} onChange={set('time')} options={TIMES} />
        <Chips label="Dificuldade" value={f.difficulty} onChange={set('difficulty')} options={[{ value: null, label: 'Todas' }, ...DIFFICULTIES.map((d) => ({ value: d, label: d }))]} />
        <Chips label="Ingrediente principal" value={f.ingredient} onChange={set('ingredient')} options={[{ value: null, label: 'Todos' }, ...mainIngredients.map((i) => ({ value: i, label: i }))]} />
      </div>

      <p className="muted results" aria-live="polite">
        {list.length} {list.length === 1 ? 'receita encontrada' : 'receitas encontradas'}
        {active && <button type="button" className="link-btn" onClick={() => setF({ time: null, difficulty: null, ingredient: null })}>Limpar filtros</button>}
      </p>

      {list.length > 0 ? (
        <div className="grid">{list.map((r) => <RecipeCard key={r.id} recipe={r} />)}</div>
      ) : (
        <div className="empty card">
          <span aria-hidden="true">{onlyFavorites && !active ? '♡' : '🥄'}</span>
          <h2>{onlyFavorites && !active ? 'Ainda não tem favoritas' : 'Nada com esses filtros'}</h2>
          <p className="muted">
            {onlyFavorites && !active ? 'Toque no coração de uma receita para guardá-la aqui.' : 'Tente tirar um filtro. Ainda há bastante coisa gostosa por aqui.'}
          </p>
          {onlyFavorites && !active
            ? <a className="btn btn--primary" href="#/receitas">Explorar receitas</a>
            : <button type="button" className="btn btn--primary" onClick={() => setF({ time: null, difficulty: null, ingredient: null })}>Limpar filtros</button>}
        </div>
      )}
    </>
  );
}
