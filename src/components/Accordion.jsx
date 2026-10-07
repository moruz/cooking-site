import { useState } from 'react';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="accordion">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className="accordion__item" key={it.q}>
            <h4>
              <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                <span>{it.q}</span>
                <span aria-hidden="true" className="accordion__sign">{isOpen ? '−' : '+'}</span>
              </button>
            </h4>
            {isOpen && <p>{it.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
