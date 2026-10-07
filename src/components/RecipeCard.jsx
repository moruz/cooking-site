import { totalTime } from '../data/recipes.js';
import { useAppState } from '../hooks/useAppState.jsx';
import Photo from './Photo.jsx';
import FavoriteButton from './FavoriteButton.jsx';

export default function RecipeCard({ recipe }) {
  const { progress } = useAppState();
  const p = progress[recipe.id];
  const inProgress = p && !p.done && p.step > 0;
  return (
    <article className="card recipe-card">
      <a className="recipe-card__link" href={`#/receita/${recipe.id}`} aria-label={`Abrir receita: ${recipe.title}`}>
        <div className={`recipe-card__art tone-${recipe.tone}`}>
          <Photo id={recipe.photo} w={600} alt={recipe.title} fallback={recipe.emoji} />
        </div>
        <div className="recipe-card__body">
          <p className="recipe-card__tags">
            <span>{recipe.category}</span>{recipe.onePot && <span className="tag-onepot">Uma panela só</span>}
          </p>
          <h3>{recipe.title}</h3>
          <p className="muted">{recipe.summary}</p>
          <ul className="meta">
            <li>⏱ {totalTime(recipe)} min</li>
            <li>{recipe.difficulty}</li>
            <li>1 porção</li>
          </ul>
          {inProgress && <span className="pill pill--sage">Você parou no passo {p.step + 1}</span>}
          {p?.done && <span className="pill pill--butter">Já cozinhei ✓</span>}
        </div>
      </a>
      <FavoriteButton id={recipe.id} title={recipe.title} />
    </article>
  );
}
