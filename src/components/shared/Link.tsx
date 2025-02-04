import type { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

function Link({ href, children, onClick }: LinkProps) {
  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  );
}

export default Link;
