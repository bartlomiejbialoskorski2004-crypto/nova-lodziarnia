'use client';
import { ArrowRight } from 'lucide-react';
import { cn } from "../../lib/utils";
import React from 'react';

export function FlowButton({ 
  text = "Modern Button", 
  className, 
  as: Component = "button",
  ...props 
}: { 
  text?: string; 
  className?: string;
  as?: any;
  [key: string]: any;
}) {
  return (
    <Component 
      className={cn(
        "group relative flex items-center gap-1 overflow-hidden rounded-full border-[1.5px] border-nova-text/20 bg-transparent px-10 py-3.5 text-xs font-bold uppercase tracking-widest text-nova-text cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-white active:scale-[0.95]",
        className
      )}
      {...props}
    >
      {/* Left arrow (arr-2) */}
      <ArrowRight 
        className="absolute w-4 h-4 left-[-25%] stroke-nova-text fill-none z-[9] group-hover:left-4 group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />

      {/* Text */}
      <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
        {text || props.children}
      </span>

      {/* Circle - Using Nova Pink for the fill */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-nova-pink rounded-full opacity-0 group-hover:w-[300px] group-hover:h-[300px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]" />

      {/* Right arrow (arr-1) */}
      <ArrowRight 
        className="absolute w-4 h-4 right-4 stroke-nova-text fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />
    </Component>
  );
}
