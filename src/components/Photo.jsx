import { useState } from 'react';
import { unsplash } from '../data/images.js';

// Foto externa com carregamento preguiçoso; se faltar ou falhar, mostra um bloco de cor liso.
export default function Photo({ id, w = 800, alt = '', className = '' }) {
  const [failed, setFailed] = useState(false);
  if (!id || failed) {
    return <div className={`photo photo--fallback ${className}`} aria-hidden="true"></div>;
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
