'use client';
import React from 'react';
import { Button } from './button';
import { redirect } from 'next/navigation';

interface Props {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  label: string;
}

export const ClientSideButton = ({
  label,
  className,
  onClick,
  size,
  variant,
}: Props) => {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      className={className}
    >
      {label}
    </Button>
  );
};
