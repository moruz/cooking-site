import { useEffect, useState } from 'react';

const parse = () => {
  const hash = window.location.hash.replace(/^#\/?/, '').split('?')[0];
  const [name = '', param] = hash.split('/');
  return { name: name || 'inicio', param };
};

export const navigate = (path) => {
  window.location.hash = path;
};

// Roteador mínimo baseado em hash: funciona em qualquer hospedagem estática.
export function useHashRoute() {
  const [route, setRoute] = useState(parse);
  useEffect(() => {
    const onChange = () => {
      setRoute(parse());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}
