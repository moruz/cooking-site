import { useMemo } from 'react';
import RecipeCard from '../components/RecipeCard.jsx';
import Encouragement from '../components/Encouragement.jsx';
import Photo from '../components/Photo.jsx';
import { recipes, getRecipe } from '../data/recipes.js';
import { homeMoods, steps3, tipOfTheDay, starterIds } from '../data/content.js';
import { categories } from '../data/images.js';
import { useAppState } from '../hooks/useAppState.jsx';
import { navigate } from '../hooks/useHashRoute.js';

// Sorteio que muda a cada dia, para a vitrine da página inicial não ficar sempre igual.
const dailyPick = (list, n) => {
  let seed = Math.floor(Date.now() / 86400000);
  const rand = () => ((seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296);
  return [...list].sort(() => rand() - 0.5).slice(0, n);
};

export default function Home() {
  const { progress, cookedCount } = useAppState();
  const resume = Object.entries(progress).find(([, p]) => !p.done && p.step > 0);
  const resumeRecipe = resume && getRecipe(resume[0]);
  const totalCooked = Object.values(cookedCount).reduce((a, b) => a + b, 0);
  const tip = useMemo(() => tipOfTheDay[new Date().getDate() % tipOfTheDay.length], []);
  const starters = starterIds.map(getRecipe).filter(Boolean);
  const dateList = recipes.filter((r) => r.category === 'Date a dois');
  const dateShow = useMemo(() => dailyPick(dateList, 4), [dateList.length]);
  const showcase = useMemo(() => dailyPick(recipes.filter((r) => r.photo && r.servings !== 2 && !starterIds.includes(r.id)), 16), []);

  const surprise = () => {
    const pool = recipes.filter((r) => r.difficulty !== 'Um desafio leve');
    navigate(`/receita/${pool[Math.floor(Math.random() * pool.length)].id}`);
  };

  return (
    <>
      <section className="banner">
        <div className="banner__text">
          <h1>Comida simples, feita <em>do seu jeito.</em></h1>
          <p>Escolha um prato, siga o passo a passo e pronto.{totalCooked > 0 && ` Você já cozinhou ${totalCooked} ${totalCooked === 1 ? 'vez' : 'vezes'}. Que orgulho!`}</p>
        </div>
        <div className="banner__actions">
          <a className="btn btn--primary" href="#/receitas">Ver todas as receitas</a>
          <button type="button" className="btn btn--outline" onClick={surprise}>Me surpreenda</button>
        </div>
      </section>

      <div className="quick">
        <div className="cats cats--compact" role="group" aria-label="Escolha pela refeição">
          {categories.map((c) => (
            <a key={c.id} className="cat" href={`#/receitas?category=${encodeURIComponent(c.id)}`}>
              <Photo id={c.photo} w={400} alt="" />
              <span className="cat__label"><strong>{c.id}</strong></span>
            </a>
          ))}
        </div>
        <div className="moodrow" role="group" aria-label="Ou escolha pelo seu momento">
          {homeMoods.map((m) => (
            <a key={m.id} className="moodpill" href={`#/receitas?${new URLSearchParams(m.filter).toString()}`}>
              {m.label}
            </a>
          ))}
        </div>
      </div>

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
            <p className="muted section-sub">As receitas mais fáceis, prontas em poucos minutos.</p>
          </div>
        </div>
        <div className="grid grid--dense">
          {starters.map((r) => <RecipeCard key={r.id} recipe={r} dense />)}
        </div>
      </section>

      <section aria-labelledby="destaques">
        <div className="section-head">
          <h2 id="destaques">Para cozinhar hoje</h2>
          <a className="section-link" href="#/receitas">Ver todas as {recipes.length} →</a>
        </div>
        <div className="grid grid--dense">
          {showcase.map((r) => <RecipeCard key={r.id} recipe={r} dense />)}
        </div>
        <p className="more"><a className="btn btn--outline" href="#/receitas">Ver todas as {recipes.length} receitas</a></p>
      </section>

      <section aria-labelledby="date">
        <div className="section-head">
          <div>
            <h2 id="date">Jantar a dois</h2>
            <p className="muted section-sub">Receitas para duas pessoas: massas, risotos, carnes e sobremesas para um date em casa.</p>
          </div>
          <a className="section-link" href="#/receitas?category=Date%20a%20dois">Ver as {dateList.length} →</a>
        </div>
        <div className="grid grid--dense">
          {dateShow.map((r) => <RecipeCard key={r.id} recipe={r} dense />)}
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

      <Encouragement emoji="💛"><strong>Dica do dia:</strong> {tip}</Encouragement>
    </>
  );
}
