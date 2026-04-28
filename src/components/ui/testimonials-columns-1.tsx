import React from "react";
import { motion } from "motion/react";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div 
                className="p-8 rounded-[32px] glass-panel border border-white/20 shadow-xl max-w-xs w-full" 
                key={`${index}-${i}`}
              >
                <div className="text-nova-text/80 font-light italic leading-relaxed">"{text}"</div>
                <div className="flex items-center gap-3 mt-6">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover border-2 border-nova-pink"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col">
                    <div className="font-serif font-bold tracking-tight leading-none text-nova-text">{name}</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-nova-text/50 mt-1">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
