import React, { forwardRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  as?: any;
}

export const GlowButton = forwardRef<HTMLButtonElement, ComponentProps>(
  ({ label = "Generate", onClick, className, as: Component = "button", ...props }, ref) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
      if (onClick) onClick(e as any);
    };

    return (
      <Component
        ref={ref}
        type={Component === "button" ? "button" : undefined}
        aria-label={label}
        className={cn("glow-btn group", className)}
        onClick={handleClick}
        data-state={isClicked ? "clicked" : undefined}
        {...props}
      >
        <span className="flex items-center justify-center gap-2 relative z-10 transition-transform group-active:scale-95">
          {label || props.children}
          <Sparkles size={16} className="ml-0.5 text-nova-caramel animate-pulse" />
        </span>
        <div className="glow-btn-overlay absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Component>
    );
  }
);

GlowButton.displayName = "GlowButton";
