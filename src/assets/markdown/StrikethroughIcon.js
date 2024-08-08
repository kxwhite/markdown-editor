export function StrikethroughIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="24"
      width="24"
      className="main-grid-item-icon"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M5 12h14M16 6.5A4 2 0 0012 5h-1a3.5 3.5 0 000 7h2a3.5 3.5 0 010 7h-1.5a4 2 0 01-4-1.5" />
    </svg>
  );
}
