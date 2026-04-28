import React from 'react';
import { cn } from "../../lib/utils";
import { motion } from "motion/react";

interface GelatoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  as?: any;
}

export function GelatoButton({ text, className, as: Component = "button", ...props }: GelatoButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95, rotate: -1 }}
      className={cn("relative inline-block group", className)}
    >
      <Component
        className={cn(
          "relative z-10 px-10 py-4 rounded-full font-serif font-bold text-sm tracking-widest uppercase transition-all duration-300",
          "bg-nova-pink text-white border-b-4 border-nova-pink/20 shadow-[0_15px_35px_-10px_rgba(239,68,68,0.4)]",
          "flex items-center justify-center gap-3 overflow-hidden"
        )}
        {...props}
      >
        {/* Soft gloss layer */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/10 rounded-t-full pointer-events-none" />
        
        <span className="relative z-10">{text || props.children}</span>
        
        {/* Decorative scoop circle */}
        <div className="w-2 h-2 rounded-full bg-nova-caramel animate-bounce" />
      </Component>
      
      {/* Outer glow/aura */}
      <div className="absolute inset-0 bg-nova-pink blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full -z-10" />
    </motion.div>
  );
}
