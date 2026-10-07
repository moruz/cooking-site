export default function Encouragement({ children, emoji = '🫶' }) {
  return (
    <aside className="encourage">
      <span aria-hidden="true" className="encourage__emoji">{emoji}</span>
      <p>{children}</p>
    </aside>
  );
}
