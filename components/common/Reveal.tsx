'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  children: ReactNode;
};

export default function Reveal({ as = 'div', className, delay = 0, children }: RevealProps) {
  const Component: any = as;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classes = ['reveal', visible ? 'reveal-visible' : '', className].filter(Boolean).join(' ');

  return (
    <Component
      ref={ref}
      className={classes}
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
