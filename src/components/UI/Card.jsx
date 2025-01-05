/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export function Card({
  children,
  className = '',
  hover = false,
  ...props
}) {
  const baseStyles = 'bg-white rounded-xl shadow-lg';

  const Component = hover ? motion.div : 'div';
  const hoverProps = hover ? {
    whileHover: { y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' },
    transition: { duration: 0.2 }
  } : {};

  return (
    <Component
      className={`${baseStyles} ${className}`}
      {...hoverProps}
      {...props}
    >
      {children}
    </Component>
  );
}