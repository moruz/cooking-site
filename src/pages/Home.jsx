import { useMemo } from 'react';
import RecipeCard from '../components/RecipeCard.jsx';
import Photo from '../components/Photo.jsx';
import Encouragement from '../components/Encouragement.jsx';
import { recipes, getRecipe } from '../data/recipes.js';
import { homeMoods, steps3, tipOfTheDay, promises, about } from '../data/content.js';
import { categories, photos } from '../data/images.js';
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
        <div className="hero__text">
          <p className="eyebrow">Cozinha caseira · porção para 1</p>
          <h1>Um prato bonito, <em>feito para você.</em></h1>
          <p className="hero__lead">
            Receitas do dia a dia na medida de uma pessoa: almoço, jantar, sobremesa e bebida, com passo a passo calmo e sem pressa.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href="#/receitas">Ver o cardápio</a>
            <button type="button" className="btn btn--soft btn--lg" onClick={surprise}>🎲 Não sei o que cozinhar</button>
          </div>
          {totalCooked > 0 && <p className="hero__stat">Você já cozinhou {totalCooked} {totalCooked === 1 ? 'vez' : 'vezes'} por aqui. Que orgulho! 🎉</p>}
        </div>
        <div className="hero__photo">
          <Photo id={photos.hero} w={1200} alt="Prato bem apresentado em uma mesa de restaurante" fallback="🍽️" />
        </div>
      </section>

      <ul className="promises" aria-label="Nossos diferenciais">
        {promises.map((p) => (
          <li key={p.title}>
            <span aria-hidden="true">{p.emoji}</span>
            <strong>{p.title}</strong>
            <small>{p.text}</small>
          </li>
        ))}
      </ul>

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

      <section aria-labelledby="refeicoes">
        <div className="section-head">
          <h2 id="refeicoes">O que vai ser hoje?</h2>
          <a href="#/receitas" className="link">Ver tudo</a>
        </div>
        <div className="cats">
          {categories.map((c) => (
            <a key={c.id} className="cat" href={`#/receitas?category=${encodeURIComponent(c.id)}`}>
              <Photo id={c.photo} w={500} alt="" fallback={c.emoji} />
              <span className="cat__label"><strong>{c.id}</strong><small>{c.hint}</small></span>
            </a>
          ))}
        </div>
      </section>

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
          <h2 id="destaques">Pratos da casa</h2>
          <a href="#/receitas" className="link">Ver todas</a>
        </div>
        <div className="grid">
          {recipes.filter((r) => ['risoto-cogumelo-uma-panela', 'salada-morna-grao-de-bico', 'estrogonofe-simples', 'mousse-chocolate-caneca', 'panqueca-banana-aveia', 'limonada-cremosa'].includes(r.id)).map((r) => <RecipeCard key={r.id} recipe={r} />)}
        </div>
      </section>

      <section className="about" aria-labelledby="sobre">
        <div className="about__gallery" aria-hidden="true">
          <Photo id={photos.ambiente1} w={800} className="about__img about__img--a" />
          <Photo id={photos.ambiente2} w={600} className="about__img about__img--b" />
          <Photo id={photos.ambiente3} w={600} className="about__img about__img--c" />
        </div>
        <div className="about__text">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 id="sobre">{about.title}</h2>
          <p className="muted">{about.text}</p>
          <ul className="about__list">{about.points.map((p) => <li key={p}>{p}</li>)}</ul>
          <a className="btn btn--primary" href="#/receitas">Explorar o cardápio</a>
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
