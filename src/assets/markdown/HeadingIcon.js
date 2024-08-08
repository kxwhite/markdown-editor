// icon:heading-16 | Octicons https://primer.style/octicons/ | Github Primer
import * as React from "react";

export function HeadingIcon(props) {
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
      <path d="M6 12h12M6 20V4M18 20V4" />
    </svg>
  );
}
