import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* The scoops */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-nova-caramel shadow-sm z-20" />
        <div className="absolute top-3 left-1 w-4 h-4 rounded-full bg-nova-pistachio shadow-sm z-10" />
        <div className="absolute top-3 right-1 w-4 h-4 rounded-full bg-nova-pink shadow-sm z-10" />
        
        {/* The cone / 'V' shape hint */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[18px] border-t-nova-text/10" />
      </div>
      <span className="text-2xl font-bold tracking-tighter text-nova-text">
        nova
      </span>
    </div>
  );
};
