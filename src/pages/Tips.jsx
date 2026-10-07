import Accordion from '../components/Accordion.jsx';
import Encouragement from '../components/Encouragement.jsx';
import { glossary, tips } from '../data/content.js';

export default function Tips() {
  return (
    <>
      <header className="page-head">
        <h1>Dicas para quem está começando</h1>
        <p className="muted">Pequenos hábitos que deixam a cozinha mais tranquila. Não precisa decorar nada: volte aqui quando quiser.</p>
      </header>

      <div className="tips-grid">
        {tips.map((t) => (
          <section key={t.id} className="card block" aria-labelledby={`tip-${t.id}`}>
            <h2 id={`tip-${t.id}`}><span aria-hidden="true">{t.emoji}</span> {t.title}</h2>
            <Accordion items={t.items} />
          </section>
        ))}
      </div>

      <section aria-labelledby="dicionario" className="block-plain">
        <h2 id="dicionario">Dicionário rápido</h2>
        <p className="muted">O que significam aquelas palavras que aparecem nas receitas.</p>
        <dl className="glossary">
          {glossary.map((g) => (
            <div key={g.term} className="card"><dt>{g.term}</dt><dd>{g.text}</dd></div>
          ))}
        </dl>
      </section>

      <Encouragement emoji="🌱">Ninguém nasce sabendo. Cada receita feita é uma habilidade nova que fica com você.</Encouragement>
    </>
  );
}
