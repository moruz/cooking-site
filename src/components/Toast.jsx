export default function Toast({ message }) {
  return (
    <div className="toast" role="status" aria-live="polite">
      {message && <span key={message}>{message}</span>}
    </div>
  );
}
