"use client";

import { useMotionValue, motion } from "motion/react";
import React, { type MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { cn } from "../../lib/util";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "rgba(151, 254, 252, 0.4)",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  
  return (
    <div
      className={cn(
        "card-spotlight-container",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Effects Layer - Only visible on hover */}
      {isHovering && (
        <div className="card-spotlight-effects">
          {/* Spotlight Effect */}
          <motion.div
            className="card-spotlight-spotlight"
            style={{
              background: `radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, ${color}, transparent 40%)`,
            }}
          />
          
          {/* Canvas Reveal Effect */}
          <div className="card-spotlight-canvas">
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="absolute inset-0 pointer-events-none"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              dotSize={3}
              showGradient={false}
            />
          </div>
        </div>
      )}
      
      {/* Content Layer - Always visible, takes full card */}
      <div className="card-spotlight-content">
        {children}
      </div>
    </div>
  );
};
