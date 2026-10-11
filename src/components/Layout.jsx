import { BRAND } from '../data/content.js';
import Logo from './Logo.jsx';

const links = [
  { to: 'inicio', label: 'Início', icon: '🏠' },
  { to: 'receitas', label: 'Cardápio', icon: '🍽️' },
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
            <Logo size={42} />
            <span className="brand__text">
              <span className="brand__name">Prato <em>Fácil</em></span>
              <span className="brand__tag">cozinha sem medo</span>
            </span>
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
        <p><strong>{BRAND}</strong> — cozinha simples, para um ou para dois.</p>
        <p>Receitas originais para quem cozinha sozinho ou a dois. Errar faz parte, e você está indo bem.</p>
        <p className="footer__credit">Fotos: <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a></p>
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
