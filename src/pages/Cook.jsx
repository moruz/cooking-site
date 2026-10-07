import { useCallback, useEffect, useRef, useState } from 'react';
import StepTimer from '../components/StepTimer.jsx';
import Toast from '../components/Toast.jsx';
import IngredientChecklist from '../components/IngredientChecklist.jsx';
import { getRecipe } from '../data/recipes.js';
import { cheers, finishMessages } from '../data/content.js';
import { useAppState } from '../hooks/useAppState.jsx';
import { navigate } from '../hooks/useHashRoute.js';
import { alertDone, useTimers } from '../hooks/useTimers.js';
import { useWakeLock } from '../hooks/useWakeLock.js';
import NotFound from './NotFound.jsx';

// Modo cozinhar: uma etapa por vez, tela cheia, botões grandes na zona do polegar.
export default function Cook({ id }) {
  const recipe = getRecipe(id);
  if (!recipe) return <NotFound />;
  return <CookInner key={recipe.id} recipe={recipe} />;
}

function CookInner({ recipe }) {
  const { progress, setStep, finishRecipe } = useAppState();
  const saved = progress[recipe.id];
  const last = recipe.steps.length - 1;
  const [index, setIndex] = useState(saved && !saved.done ? Math.min(saved.step, last) : 0);
  const [finished, setFinished] = useState(false);
  const [sheet, setSheet] = useState(false);
  const [toast, setToast] = useState('');
  const toastTimer = useRef();

  const say = useCallback((msg) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2600);
  }, []);
  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const { timers, start, pause, reset } = useTimers((key) => {
    alertDone();
    const [, i] = key.split(':');
    say(`⏲ ${recipe.steps[Number(i)].timer.label}: o tempo acabou!`);
  });

  useWakeLock(!finished);

  const step = recipe.steps[index];

  const go = useCallback(
    (next) => {
      if (next < 0) return;
      if (next > last) {
        finishRecipe(recipe.id);
        setFinished(true);
        return;
      }
      setIndex(next);
      setStep(recipe.id, next);
      if (next > index) say(cheers[next % cheers.length]);
      document.querySelector('.cook__scroll')?.scrollTo(0, 0);
    },
    [index, last, recipe.id, setStep, finishRecipe, say],
  );

  useEffect(() => {
    const onKey = (e) => {
      if (sheet || finished) return;
      if (e.key === 'ArrowRight') go(index + 1);
      if (e.key === 'ArrowLeft') go(index - 1);
      if (e.key === 'Escape') navigate(`/receita/${recipe.id}`);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, index, sheet, finished, recipe.id]);

  if (finished) {
    return (
      <div className="cook cook--done">
        <div className="cook__finish">
          <span className="cook__party" aria-hidden="true">🎉</span>
          <h1>{finishMessages[recipe.id.length % finishMessages.length]}</h1>
          <p className="muted">Você terminou <strong>{recipe.title}</strong>. Sente, respire e aproveite com calma.</p>
          <div className="cook__finish-actions">
            <a className="btn btn--primary btn--lg" href="#/receitas">Escolher a próxima receita</a>
            <a className="btn btn--soft btn--lg" href={`#/receita/${recipe.id}`}>Voltar para a receita</a>
          </div>
          <p className="finish-note">Dica: guarde as sobras em pote fechado e consuma em até 3 dias.</p>
        </div>
      </div>
    );
  }

  const key = `${recipe.id}:${index}`;

  return (
    <div className="cook">
      <header className="cook__top">
        <a className="cook__close" href={`#/receita/${recipe.id}`} aria-label="Sair do modo cozinhar e voltar para a receita">✕</a>
        <div className="cook__title">
          <span className="cook__recipe">{recipe.title}</span>
          <span className="cook__count">Passo {index + 1} de {recipe.steps.length}</span>
        </div>
        <button type="button" className="btn btn--soft btn--sm" onClick={() => setSheet(true)}>Ingredientes</button>
      </header>

      <div className="segments" role="progressbar" aria-valuemin={1} aria-valuemax={recipe.steps.length} aria-valuenow={index + 1} aria-label="Progresso da receita">
        {recipe.steps.map((s, i) => (
          <button
            key={s.title}
            type="button"
            className={`segments__seg ${i < index ? 'is-done' : ''} ${i === index ? 'is-now' : ''}`}
            onClick={() => go(i)}
            aria-label={`Ir para o passo ${i + 1}: ${s.title}`}
          />
        ))}
      </div>

      <div className="cook__scroll">
        <section className="cook__step" aria-live="polite">
          <p className="eyebrow">{index === 0 ? 'Vamos começar' : index === last ? 'Último passo' : `Passo ${index + 1}`}</p>
          <h1>{step.title}</h1>
          <p className="cook__text">{step.text}</p>

          {step.timer && (
            <StepTimer
              timer={timers[key]}
              def={step.timer}
              onStart={() => start(key, step.timer.seconds)}
              onPause={() => pause(key)}
              onReset={() => reset(key)}
            />
          )}

          <div className="cook__look">
            <p className="cook__look-title">👀 Como deve ficar</p>
            <p>{step.look}</p>
          </div>

          {step.careful && (
            <div className="cook__careful">
              <p className="cook__look-title">⚠️ Cuidado</p>
              <p>{step.careful}</p>
            </div>
          )}

          {index === 0 && (
            <button type="button" className="link-btn cook__hint" onClick={() => setSheet(true)}>
              Já separou os ingredientes? Toque aqui para conferir.
            </button>
          )}
        </section>
      </div>

      <Toast message={toast} />

      <footer className="cook__nav">
        <button type="button" className="btn btn--soft btn--lg" onClick={() => go(index - 1)} disabled={index === 0}>
          ← Voltar
        </button>
        <button type="button" className="btn btn--primary btn--lg" onClick={() => go(index + 1)}>
          {index === last ? 'Terminei! 🎉' : 'Próximo passo →'}
        </button>
      </footer>

      {sheet && (
        <div className="sheet" role="dialog" aria-modal="true" aria-label="Ingredientes">
          <div className="sheet__backdrop" onClick={() => setSheet(false)} />
          <div className="sheet__panel">
            <div className="sheet__head">
              <h2>Ingredientes</h2>
              <button type="button" className="btn btn--soft btn--sm" onClick={() => setSheet(false)} autoFocus>Fechar</button>
            </div>
            <IngredientChecklist recipe={recipe} />
          </div>
        </div>
      )}
    </div>
  );
}
