import { formatTime } from '../hooks/useTimers.js';
import ProgressBar from './ProgressBar.jsx';

export default function StepTimer({ timer, def, onStart, onPause, onReset }) {
  const remaining = timer ? timer.remaining : def.seconds;
  const running = !!timer?.endAt;
  const done = timer?.done;
  return (
    <section className={`timer ${done ? 'is-done' : ''} ${running ? 'is-running' : ''}`} aria-label={`Temporizador: ${def.label}`}>
      <div>
        <p className="timer__label">⏲ {def.label}</p>
        <p className="timer__time" aria-live="off">{done ? 'Tempo!' : formatTime(remaining)}</p>
      </div>
      <div className="timer__actions">
        {running ? (
          <button type="button" className="btn btn--soft" onClick={onPause}>Pausar</button>
        ) : (
          <button type="button" className="btn btn--soft" onClick={onStart}>{done ? 'Reiniciar' : timer ? 'Continuar' : 'Iniciar'}</button>
        )}
        {(timer || done) && <button type="button" className="btn btn--ghost" onClick={onReset}>Zerar</button>}
      </div>
      {(running || (timer && !done)) && <ProgressBar value={def.seconds - remaining} max={def.seconds} label="Tempo decorrido" />}
    </section>
  );
}
