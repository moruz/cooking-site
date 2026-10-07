import { useCallback, useEffect, useRef, useState } from 'react';

// Vários temporizadores por receita, baseados em horário final (não perdem tempo se a aba ficar em segundo plano).
export function useTimers(onDone) {
  const [timers, setTimers] = useState({});
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  const hasRunning = Object.values(timers).some((t) => t.endAt);

  useEffect(() => {
    if (!hasRunning) return undefined;
    const id = setInterval(() => {
      const now = Date.now();
      const finished = [];
      setTimers((prev) => {
        const next = { ...prev };
        for (const [key, t] of Object.entries(prev)) {
          if (!t.endAt) continue;
          const left = Math.max(0, Math.ceil((t.endAt - now) / 1000));
          if (left === 0) {
            next[key] = { ...t, remaining: 0, endAt: null, done: true };
            finished.push(key);
          } else if (left !== t.remaining) {
            next[key] = { ...t, remaining: left };
          }
        }
        return next;
      });
      finished.forEach((k) => doneRef.current?.(k));
    }, 250);
    return () => clearInterval(id);
  }, [hasRunning]);

  const start = useCallback((key, seconds) => {
    setTimers((prev) => {
      const cur = prev[key];
      const remaining = cur && !cur.done && cur.remaining > 0 ? cur.remaining : seconds;
      return { ...prev, [key]: { total: seconds, remaining, endAt: Date.now() + remaining * 1000, done: false } };
    });
  }, []);

  const pause = useCallback((key) => {
    setTimers((prev) => {
      const t = prev[key];
      if (!t?.endAt) return prev;
      return { ...prev, [key]: { ...t, endAt: null, remaining: Math.max(0, Math.ceil((t.endAt - Date.now()) / 1000)) } };
    });
  }, []);

  const reset = useCallback((key) => {
    setTimers((prev) => {
      const { [key]: _removed, ...rest } = prev;
      return rest;
    });
  }, []);

  return { timers, start, pause, reset };
}

export const formatTime = (s) => {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
};

// Aviso sonoro e vibração quando o tempo acaba.
export function alertDone() {
  try {
    navigator.vibrate?.([300, 150, 300, 150, 300]);
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    [0, 0.35, 0.7].forEach((delay) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + delay + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + 0.25);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.3);
    });
  } catch {
    /* sem som: tudo bem */
  }
}
