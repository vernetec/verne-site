import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { cn } from '@/utils';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
    href?: never;
  };

type ButtonAsLink = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    styles.button,
    styles[variant],
    styles[size],
    { [styles.fullWidth]: fullWidth },
    className
  );

  if (props.as === 'a') {
    const { as: _, ...linkProps } = props;
    return <a className={classes} {...linkProps} />;
  }

  const { as: _, ...buttonProps } = props as ButtonAsButton;
  return <button className={classes} {...buttonProps} />;
}
