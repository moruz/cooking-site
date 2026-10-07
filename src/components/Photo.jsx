import { useState } from 'react';
import { unsplash } from '../data/images.js';

// Foto externa com carregamento preguiçoso e fallback para o emoji.
export default function Photo({ id, w = 800, alt = '', fallback = '🍽️', className = '' }) {
  const [failed, setFailed] = useState(false);
  if (!id || failed) {
    return <div className={`photo photo--fallback ${className}`} aria-hidden="true"><span>{fallback}</span></div>;
  }
  return (
    <img
      className={`photo ${className}`}
      src={unsplash(id, w)}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
