import { useMemo } from 'react';
import RecipeCard from '../components/RecipeCard.jsx';
import Encouragement from '../components/Encouragement.jsx';
import { recipes, getRecipe } from '../data/recipes.js';
import { homeMoods, steps3, tipOfTheDay } from '../data/content.js';
import { useAppState } from '../hooks/useAppState.jsx';
import { navigate } from '../hooks/useHashRoute.js';

export default function Home() {
  const { progress, cookedCount } = useAppState();
  const resume = Object.entries(progress).find(([, p]) => !p.done && p.step > 0);
  const resumeRecipe = resume && getRecipe(resume[0]);
  const totalCooked = Object.values(cookedCount).reduce((a, b) => a + b, 0);
  const tip = useMemo(() => tipOfTheDay[new Date().getDate() % tipOfTheDay.length], []);

  const surprise = () => {
    const pool = recipes.filter((r) => r.difficulty !== 'Um desafio leve');
    navigate(`/receita/${pool[Math.floor(Math.random() * pool.length)].id}`);
  };

  return (
    <>
      <section className="hero">
        <p className="eyebrow">Receitas para uma pessoa só</p>
        <h1>Cozinhar para você <em>não precisa ser difícil.</em></h1>
        <p className="hero__lead">
          Um passo de cada vez, com o que você vai ver, sentir e ouvir em cada etapa. Sem pressa, sem julgamento.
        </p>
        <div className="hero__actions">
          <button type="button" className="btn btn--primary btn--lg" onClick={surprise}>🎲 Não sei o que cozinhar</button>
          <a className="btn btn--soft btn--lg" href="#/receitas">Ver todas as receitas</a>
        </div>
        {totalCooked > 0 && <p className="hero__stat">Você já cozinhou {totalCooked} {totalCooked === 1 ? 'vez' : 'vezes'} por aqui. Que orgulho! 🎉</p>}
      </section>

      {resumeRecipe && (
        <a className="card resume" href={`#/cozinhar/${resumeRecipe.id}`}>
          <span className="resume__emoji" aria-hidden="true">{resumeRecipe.emoji}</span>
          <span>
            <small>Continue de onde parou</small>
            <strong>{resumeRecipe.title}</strong>
            <small>Passo {resume[1].step + 1} de {resumeRecipe.steps.length}</small>
          </span>
          <span className="resume__go" aria-hidden="true">→</span>
        </a>
      )}

      <section aria-labelledby="humor">
        <h2 id="humor">Como você está hoje?</h2>
        <div className="moods">
          {homeMoods.map((m) => (
            <a key={m.id} className="card mood" href={`#/receitas?${new URLSearchParams(m.filter).toString()}`}>
              <span className="mood__emoji" aria-hidden="true">{m.emoji}</span>
              <strong>{m.label}</strong>
              <small>{m.hint}</small>
            </a>
          ))}
        </div>
      </section>

      <section aria-labelledby="destaques">
        <div className="section-head">
          <h2 id="destaques">Para começar hoje</h2>
          <a href="#/receitas" className="link">Ver todas</a>
        </div>
        <div className="grid">
          {recipes.slice(0, 3).map((r) => <RecipeCard key={r.id} recipe={r} />)}
        </div>
      </section>

      <section aria-labelledby="como">
        <h2 id="como">Como funciona</h2>
        <ol className="how">
          {steps3.map((s) => (
            <li key={s.n} className="card">
              <span className="how__n" aria-hidden="true">{s.n}</span>
              <div><strong>{s.title}</strong><p className="muted">{s.text}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <Encouragement emoji="💛"><strong>Dica do dia:</strong> {tip}</Encouragement>
    </>
  );
}
