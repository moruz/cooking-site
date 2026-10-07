import { useCallback, useEffect, useState } from 'react';

// Estado persistido no navegador. Se o armazenamento estiver bloqueado, o app continua funcionando.
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* sem armazenamento: segue sem salvar */
    }
  }, [key, value]);

  return [value, useCallback((v) => setValue(v), [])];
}
