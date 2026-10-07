import { useMemo } from 'react';
import RecipeCard from '../components/RecipeCard.jsx';
import Encouragement from '../components/Encouragement.jsx';
import Photo from '../components/Photo.jsx';
import { recipes, getRecipe } from '../data/recipes.js';
import { homeMoods, steps3, tipOfTheDay, starterIds, badges } from '../data/content.js';
import { categories, photos } from '../data/images.js';
import { useAppState } from '../hooks/useAppState.jsx';
import { navigate } from '../hooks/useHashRoute.js';

const SHOWCASE = ['risoto-cogumelo-uma-panela', 'salada-morna-grao-de-bico', 'estrogonofe-simples', 'mousse-chocolate-caneca', 'panqueca-banana-aveia', 'limonada-cremosa'];

export default function Home() {
  const { progress, cookedCount } = useAppState();
  const resume = Object.entries(progress).find(([, p]) => !p.done && p.step > 0);
  const resumeRecipe = resume && getRecipe(resume[0]);
  const totalCooked = Object.values(cookedCount).reduce((a, b) => a + b, 0);
  const tip = useMemo(() => tipOfTheDay[new Date().getDate() % tipOfTheDay.length], []);
  const starters = starterIds.map(getRecipe).filter(Boolean);
  const showcase = SHOWCASE.map(getRecipe).filter(Boolean);

  const surprise = () => {
    const pool = recipes.filter((r) => r.difficulty !== 'Um desafio leve');
    navigate(`/receita/${pool[Math.floor(Math.random() * pool.length)].id}`);
  };

  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <p className="eyebrow">Receitas para quem cozinha só</p>
          <h1>Comida simples, feita <em>do seu jeito.</em></h1>
          <p className="hero__lead">
            Escolha um prato, siga o passo a passo e pronto. Não precisa saber cozinhar.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href="#/receitas">Ver o que cozinhar</a>
            <button type="button" className="btn btn--outline btn--lg" onClick={surprise}>Me surpreenda</button>
          </div>
          <ul className="hero__badges">{badges.map((b) => <li key={b}>{b}</li>)}</ul>
          {totalCooked > 0 && <p className="hero__stat">Você já cozinhou {totalCooked} {totalCooked === 1 ? 'vez' : 'vezes'} por aqui. Que orgulho!</p>}
        </div>
        <div className="hero__photo">
          <Photo id={photos.hero} w={1200} alt="Prato bem apresentado" fallback="🍽️" />
        </div>
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

      <section aria-labelledby="comece">
        <div className="section-head">
          <div>
            <h2 id="comece">Primeira vez? Comece por aqui</h2>
            <p className="muted section-sub">As três receitas mais fáceis, prontas em poucos minutos.</p>
          </div>
        </div>
        <div className="grid">
          {starters.map((r) => <RecipeCard key={r.id} recipe={r} />)}
        </div>
      </section>

      <section aria-labelledby="como">
        <h2 id="como">Como funciona</h2>
        <ol className="how">
          {steps3.map((s) => (
            <li key={s.n}>
              <span className="how__n" aria-hidden="true">{s.n}</span>
              <div><strong>{s.title}</strong><p className="muted">{s.text}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="refeicoes">
        <h2 id="refeicoes">Escolha pela refeição</h2>
        <div className="cats">
          {categories.map((c) => (
            <a key={c.id} className="cat" href={`#/receitas?category=${encodeURIComponent(c.id)}`}>
              <Photo id={c.photo} w={500} alt="" fallback={c.emoji} />
              <span className="cat__label"><strong>{c.id}</strong><small>{c.hint}</small></span>
            </a>
          ))}
        </div>
        <div className="moodrow" role="group" aria-label="Ou escolha pelo seu momento">
          <span className="moodrow__label">Ou pelo seu momento:</span>
          {homeMoods.map((m) => (
            <a key={m.id} className="moodpill" href={`#/receitas?${new URLSearchParams(m.filter).toString()}`}>
              <span aria-hidden="true">{m.emoji}</span> {m.label}
            </a>
          ))}
        </div>
      </section>

      <section aria-labelledby="destaques">
        <div className="section-head">
          <h2 id="destaques">Mais pratos para experimentar</h2>
        </div>
        <div className="grid">
          {showcase.map((r) => <RecipeCard key={r.id} recipe={r} />)}
        </div>
        <p className="more"><a className="btn btn--outline" href="#/receitas">Ver todas as {recipes.length} receitas</a></p>
      </section>

      <Encouragement emoji="💛"><strong>Dica do dia:</strong> {tip}</Encouragement>
    </>
  );
}
