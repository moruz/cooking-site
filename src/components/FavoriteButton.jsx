import { useAppState } from '../hooks/useAppState.jsx';

export default function FavoriteButton({ id, title, label = false }) {
  const { favorites, toggleFavorite } = useAppState();
  const on = favorites.includes(id);
  return (
    <button
      type="button"
      className={`fav ${on ? 'is-on' : ''} ${label ? 'fav--label' : ''}`}
      aria-pressed={on}
      aria-label={on ? `Remover ${title} das favoritas` : `Salvar ${title} nas favoritas`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(id);
      }}
    >
      <span aria-hidden="true">{on ? '♥' : '♡'}</span>
      {label && <span>{on ? 'Salva' : 'Salvar'}</span>}
    </button>
  );
}
