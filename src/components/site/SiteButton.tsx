import type { AnchorHTMLAttributes, ReactNode } from "react";

type SiteButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "outline-light" | "wine";
};

export default function SiteButton({ children, variant = "primary", className = "", ...props }: SiteButtonProps) {
  return (
    <a className={`button button-${variant} ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}
