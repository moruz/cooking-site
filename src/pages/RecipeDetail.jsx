import { useState } from 'react';
import Encouragement from '../components/Encouragement.jsx';
import FavoriteButton from '../components/FavoriteButton.jsx';
import IngredientChecklist from '../components/IngredientChecklist.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import { getRecipe } from '../data/recipes.js';
import { useAppState } from '../hooks/useAppState.jsx';
import NotFound from './NotFound.jsx';

export default function RecipeDetail({ id }) {
  const recipe = getRecipe(id);
  const { progress, resetProgress } = useAppState();
  const [openStep, setOpenStep] = useState(null);
  if (!recipe) return <NotFound />;

  const p = progress[recipe.id];
  const started = p && !p.done && p.step > 0;

  return (
    <article className="detail">
      <a className="back" href="#/receitas">← Todas as receitas</a>

      <header className={`detail__head tone-${recipe.tone}`}>
        <span className="detail__emoji" aria-hidden="true">{recipe.emoji}</span>
        <div>
          <h1>{recipe.title}</h1>
          <p>{recipe.summary}</p>
        </div>
      </header>

      <dl className="facts">
        <div><dt>Preparo</dt><dd>{recipe.prepMin} min</dd></div>
        <div><dt>Cozimento</dt><dd>{recipe.cookMin} min</dd></div>
        <div><dt>Dificuldade</dt><dd>{recipe.difficulty}</dd></div>
        <div><dt>Porções</dt><dd>1 pessoa</dd></div>
      </dl>

      <div className="detail__actions">
        <a className="btn btn--primary btn--lg" href={`#/cozinhar/${recipe.id}`}>
          {started ? `Continuar no passo ${p.step + 1}` : 'Começar a cozinhar'}
        </a>
        <FavoriteButton id={recipe.id} title={recipe.title} label />
        {started && <button type="button" className="btn btn--ghost" onClick={() => resetProgress(recipe.id)}>Recomeçar</button>}
      </div>
      {started && (
        <div className="detail__progress">
          <ProgressBar value={p.step} max={recipe.steps.length} label="Progresso na receita" />
          <small className="muted">{p.step} de {recipe.steps.length} passos concluídos</small>
        </div>
      )}

      <div className="detail__cols">
        <section className="card block" aria-labelledby="ing">
          <h2 id="ing">Ingredientes</h2>
          <IngredientChecklist recipe={recipe} />
        </section>

        <section className="card block" aria-labelledby="ute">
          <h2 id="ute">Utensílios</h2>
          <ul className="tags">{recipe.utensils.map((u) => <li key={u}>{u}</li>)}</ul>
          <h2 id="sub" className="mt">Trocas fáceis</h2>
          <ul className="subs">
            {recipe.substitutions.map((s) => (
              <li key={s.from}><strong>{s.from}</strong><span>→ {s.to}</span></li>
            ))}
          </ul>
        </section>
      </div>

      <section className="block-plain" aria-labelledby="passos">
        <h2 id="passos">Passo a passo <small>({recipe.steps.length} passos)</small></h2>
        <p className="muted">Uma prévia. Para cozinhar com timers e uma etapa por vez, use o modo cozinhar.</p>
        <ol className="steps-preview">
          {recipe.steps.map((s, i) => {
            const open = openStep === i;
            return (
              <li key={s.title} className="card">
                <button type="button" aria-expanded={open} onClick={() => setOpenStep(open ? null : i)}>
                  <span className="steps-preview__n">{i + 1}</span>
                  <span>{s.title}{s.timer && <small> · ⏲ {Math.round(s.timer.seconds / 60) || '<1'} min</small>}</span>
                  <span aria-hidden="true">{open ? '−' : '+'}</span>
                </button>
                {open && (
                  <div className="steps-preview__body">
                    <p>{s.text}</p>
                    <p className="look"><strong>Como deve ficar:</strong> {s.look}</p>
                    {s.careful && <p className="careful"><strong>Atenção:</strong> {s.careful}</p>}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </section>

      <section className="block-plain" aria-labelledby="erros">
        <h2 id="erros">Erros comuns (e como evitar)</h2>
        <ul className="mistakes">
          {recipe.mistakes.map((m) => (
            <li key={m.problem} className="card">
              <strong>{m.problem}</strong>
              <p>{m.fix}</p>
            </li>
          ))}
        </ul>
      </section>

      <Encouragement>{recipe.encouragement}</Encouragement>
    </article>
  );
}
