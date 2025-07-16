import * as React from "react";

/**
 * Crisp SVG for the Dimitra logo (leaf in D, bold green text, modern look)
 */
export function DimitraLogo({ className = "", ...props }: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      width="220"
      height="70"
      viewBox="0 0 220 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* D with leaf */}
      <g>
        <path d="M10 55V15h22c12 0 22 10 22 22s-10 22-22 22H10Z" fill="#195B1B"/>
        <path d="M17 23c0 14 10 21 21 21 0-14-10-21-21-21z" fill="#4DB749"/>
        <path d="M17 23c7 1 13 6 15 13" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
      </g>
      {/* IMITRA text */}
      <text x="50" y="50" fill="#195B1B" fontFamily="'Montserrat', Arial, sans-serif" fontWeight="bold" fontSize="40">IMITRA</text>
    </svg>
  );
}
export default DimitraLogo;
