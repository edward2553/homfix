import Link from 'next/link';
import React from 'react';

interface Props {
  href: string;
  text: string;
  className: string;
}

export const LinkComponent = ({ href, className, text }: Props) => {
  return (
    <Link href={href}>
      <span className={className}>{text}</span>
    </Link>
  );
};
