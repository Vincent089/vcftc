import React, { type ReactNode, type ComponentPropsWithoutRef } from 'react';
import styles from './Button.module.css';

type CommonButtonProps = {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'accent' | 'accentLarge'; // Add more variants as needed
    className?: string;
    disabled?: boolean;
};

// Props for when the button is a link
type LinkButtonProps = CommonButtonProps &
    Omit<ComponentPropsWithoutRef<'a'>, keyof CommonButtonProps | 'href'> & {
    href: string; // href is required for link buttons
    as?: 'a';
};

// Props for when the button is a standard button
type StandardButtonProps = CommonButtonProps &
    Omit<ComponentPropsWithoutRef<'button'>, keyof CommonButtonProps> & {
    href?: never; // href is not allowed for standard buttons
    as?: 'button';
    type?: 'button' | 'submit' | 'reset';
};

type ButtonProps = LinkButtonProps | StandardButtonProps;

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           variant = 'primary', // Default variant
                                           className = '',
                                           as = 'button', // Default to rendering a <button>
                                           disabled,
                                           ...props
                                       }) => {
    const variantStyle = styles[variant] || styles.primary;
    const combinedClassName = `${styles.buttonBase} ${variantStyle} ${className}`.trim();

    if (as === 'a' || props.href) {
        const { href, ...restLinkProps } = props as LinkButtonProps; // Type assertion
        return (
            <a
                href={href}
                className={combinedClassName}
                aria-disabled={disabled}
                {...(disabled && { onClick: (e) => e.preventDefault() })} // Prevent navigation if disabled
                {...restLinkProps}
            >
                {children}
            </a>
        );
    }

    const { type = 'button', ...restButtonProps } = props as StandardButtonProps; // Type assertion
    return (
        <button
            type={type}
            className={combinedClassName}
            disabled={disabled}
            {...restButtonProps}
        >
            {children}
        </button>
    );
};

export default Button;