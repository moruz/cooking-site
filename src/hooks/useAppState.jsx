import { createContext, useCallback, useContext, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

const Ctx = createContext(null);

// Favoritos, checklist de ingredientes e progresso por receita.
export function AppStateProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage('pratoum:favoritas', []);
  const [checked, setChecked] = useLocalStorage('pratoum:ingredientes', {});
  const [progress, setProgress] = useLocalStorage('pratoum:progresso', {}); // { id: { step, done } }
  const [cookedCount, setCookedCount] = useLocalStorage('pratoum:feitas', {});

  const toggleFavorite = useCallback(
    (id) => setFavorites(favorites.includes(id) ? favorites.filter((f) => f !== id) : [...favorites, id]),
    [favorites, setFavorites],
  );

  const toggleIngredient = useCallback(
    (recipeId, ingId) => {
      const list = checked[recipeId] || [];
      setChecked({ ...checked, [recipeId]: list.includes(ingId) ? list.filter((i) => i !== ingId) : [...list, ingId] });
    },
    [checked, setChecked],
  );

  const clearIngredients = useCallback((recipeId) => setChecked({ ...checked, [recipeId]: [] }), [checked, setChecked]);

  const setStep = useCallback(
    (recipeId, step) => setProgress({ ...progress, [recipeId]: { step, done: false } }),
    [progress, setProgress],
  );

  const finishRecipe = useCallback(
    (recipeId) => {
      setProgress({ ...progress, [recipeId]: { step: 0, done: true } });
      setCookedCount({ ...cookedCount, [recipeId]: (cookedCount[recipeId] || 0) + 1 });
    },
    [progress, setProgress, cookedCount, setCookedCount],
  );

  const resetProgress = useCallback(
    (recipeId) => {
      const { [recipeId]: _x, ...rest } = progress;
      setProgress(rest);
    },
    [progress, setProgress],
  );

  const value = useMemo(
    () => ({ favorites, checked, progress, cookedCount, toggleFavorite, toggleIngredient, clearIngredients, setStep, finishRecipe, resetProgress }),
    [favorites, checked, progress, cookedCount, toggleFavorite, toggleIngredient, clearIngredients, setStep, finishRecipe, resetProgress],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useAppState = () => useContext(Ctx);
