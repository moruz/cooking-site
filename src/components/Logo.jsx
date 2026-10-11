// Marca do Prato Fácil: um prato visto de cima, com garfo e colher.
export default function Logo({ size = 40 }) {
  return (
    <svg className="logo" width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="22" fill="var(--terracotta)" />
      <circle cx="24" cy="24" r="17" fill="var(--butter-soft)" />
      <circle cx="24" cy="24" r="17" fill="none" stroke="var(--terracotta-dark)" strokeOpacity="0.25" strokeWidth="1" />
      {/* garfo */}
      <g stroke="var(--terracotta-dark)" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M17 12v7M20.5 12v7M24 12v7" />
        <path d="M17 19c0 3 1.5 4 3.5 4s3.5-1 3.5-4" />
        <path d="M20.5 23v13" strokeWidth="2.4" />
      </g>
      {/* colher */}
      <ellipse cx="30" cy="18" rx="3.2" ry="5.2" fill="var(--sage)" />
      <path d="M30 23v13" stroke="var(--sage)" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
