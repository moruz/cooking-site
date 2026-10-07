import { useAppState } from '../hooks/useAppState.jsx';
import ProgressBar from './ProgressBar.jsx';

export default function IngredientChecklist({ recipe }) {
  const { checked, toggleIngredient, clearIngredients } = useAppState();
  const list = checked[recipe.id] || [];
  const all = list.length === recipe.ingredients.length;
  return (
    <div>
      <div className="checklist__head">
        <p className="muted" aria-live="polite">
          {all ? 'Tudo separado. Pode começar! 🎉' : `${list.length} de ${recipe.ingredients.length} separados`}
        </p>
        {list.length > 0 && (
          <button type="button" className="link-btn" onClick={() => clearIngredients(recipe.id)}>Desmarcar tudo</button>
        )}
      </div>
      <ProgressBar value={list.length} max={recipe.ingredients.length} label="Ingredientes separados" />
      <ul className="checklist">
        {recipe.ingredients.map((ing) => {
          const on = list.includes(ing.id);
          return (
            <li key={ing.id}>
              <label className={on ? 'is-on' : ''}>
                <input type="checkbox" checked={on} onChange={() => toggleIngredient(recipe.id, ing.id)} />
                <span className="box" aria-hidden="true">{on ? '✓' : ''}</span>
                <span className="checklist__text">
                  <strong>{ing.qty}</strong> {ing.name}
                  {ing.note && <small>{ing.note}</small>}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
