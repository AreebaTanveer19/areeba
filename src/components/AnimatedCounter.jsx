import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

const AnimatedCounter = ({ label, value, decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setDisplay(latest),
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <div className="counter" ref={ref}>
      <span className="counter-value">{display.toFixed(decimals)}</span>
      <span className="counter-label">{label}</span>
    </div>
  );
};

export default AnimatedCounter; 