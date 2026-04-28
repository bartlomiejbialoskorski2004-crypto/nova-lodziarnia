import React from 'react';
import { cn } from "../../lib/utils";

interface LogoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  as?: any;
}

export function LogoButton({ text, className, as: Component = "button", ...props }: LogoButtonProps) {
  return (
    <Component
      className={cn(
        "group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full transition-all duration-300",
        "bg-white border border-nova-text/5 shadow-sm hover:shadow-md hover:-translate-y-0.5",
        "active:scale-95 active:translate-y-0",
        className
      )}
      {...props}
    >
      {/* The three logo scoops as dots */}
      <div className="flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-nova-caramel transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-0.5" />
        <div className="w-1.5 h-1.5 rounded-full bg-nova-pistachio transition-transform duration-500 group-hover:scale-125 group-hover:delay-75" />
        <div className="w-1.5 h-1.5 rounded-full bg-nova-pink transition-transform duration-500 group-hover:scale-125 group-hover:delay-150 group-hover:translate-y-0.5" />
      </div>

      <span className="text-sm font-bold tracking-tight text-nova-text lowercase">
        {text || props.children}
      </span>
      
      {/* Subtle glass overlay on hover */}
      <div className="absolute inset-0 rounded-full bg-nova-text/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </Component>
  );
}
