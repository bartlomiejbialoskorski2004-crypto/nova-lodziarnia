import React from 'react';
import { cn } from "../../lib/utils";

interface PlasticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  as?: any;
}

export function PlasticButton({ text, className, as: Component = "button", ...props }: PlasticButtonProps) {
  // Using nova-pink (Red) for the plastic effect
  const primaryColor = "rgb(239, 68, 68)"; // EF4444
  const secondaryColor = "rgb(220, 38, 38)"; // DC2626
  const glowColor = "rgba(239, 68, 68, 0.35)";

  return (
    <Component
      className={cn(
        "relative inline-block px-8 py-3 rounded-full text-white font-bold text-xs uppercase tracking-widest transition-all duration-200",
        "active:scale-[0.96] flex justify-center items-center shadow-lg group",
        className
      )}
      style={{
        background: `linear-gradient(to bottom, ${primaryColor}, ${secondaryColor})`,
        boxShadow: `0 4px 12px 0 ${glowColor}, 0 1.5px 0 0 rgba(255,255,255,0.25) inset, 0 -2px 8px 0 rgba(0,0,0,0.1) inset`,
      }}
      {...props}
    >
      <span className="relative z-10">{text || props.children}</span>
      
      {/* Top highlight */}
      <span
        className="absolute left-1/2 top-0 z-20 w-[80%] h-2/5 -translate-x-1/2 rounded-t-full pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 80%, transparent 100%)",
          filter: "blur(1.5px)",
        }}
      />

      {/* Inner glow/shadows */}
      <span
        className="absolute inset-0 z-0 rounded-full pointer-events-none"
        style={{
          boxShadow:
            "0 0 0 2px rgba(255,255,255,0.1) inset, 0 1.5px 0 0 rgba(255,255,255,0.15) inset, 0 -2px 10px 0 rgba(0,0,0,0.15) inset",
        }}
      />
      
      {/* Hover state overlay */}
      <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Component>
  );
}
