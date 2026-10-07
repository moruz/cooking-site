// Grupo de filtros em chips, com rolagem horizontal no celular.
export default function Chips({ label, options, value, onChange }) {
  return (
    <fieldset className="chips">
      <legend>{label}</legend>
      <div className="chips__row">
        {options.map((o) => {
          const on = value === o.value;
          return (
            <button key={String(o.value)} type="button" className={`chip ${on ? 'is-on' : ''}`} aria-pressed={on} onClick={() => onChange(o.value)}>
              {o.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
