import useInView from '../hooks/useInView.js';

/** Fades/slides its children in when they scroll into view. */
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, direction = 'up', children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${direction} ${inView ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
