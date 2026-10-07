import { BRAND } from '../data/content.js';

const links = [
  { to: 'inicio', label: 'Início', icon: '🏠' },
  { to: 'receitas', label: 'Receitas', icon: '🍽️' },
  { to: 'dicas', label: 'Dicas', icon: '💡' },
  { to: 'favoritas', label: 'Favoritas', icon: '♥' },
];

export default function Layout({ route, children }) {
  const active = route.name === 'receita' ? 'receitas' : route.name;
  return (
    <>
      <a className="skip" href="#conteudo">Ir para o conteúdo</a>
      <header className="topbar">
        <div className="container topbar__in">
          <a className="brand" href="#/inicio" aria-label={`${BRAND} — página inicial`}>
            <span className="brand__mark" aria-hidden="true">🍳</span>
            <span>{BRAND}</span>
          </a>
          <nav className="topnav" aria-label="Navegação principal">
            {links.map((l) => (
              <a key={l.to} href={`#/${l.to}`} aria-current={active === l.to ? 'page' : undefined}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="conteudo" className="container main">{children}</main>

      <footer className="footer container">
        <p>
          <strong>{BRAND}</strong> — receitas originais para uma pessoa só.
        </p>
        <p>Feito para quem está começando. Errar faz parte, e você está indo bem.</p>
      </footer>

      <nav className="bottomnav" aria-label="Navegação principal">
        {links.map((l) => (
          <a key={l.to} href={`#/${l.to}`} aria-current={active === l.to ? 'page' : undefined}>
            <span aria-hidden="true" className="bottomnav__icon">{l.icon}</span>
            <span>{l.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
