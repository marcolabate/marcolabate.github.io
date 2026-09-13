// Keep the existing wrapper API. Essential content is server-rendered and visible.
export function Reveal({children, className = ''}: {children: React.ReactNode; className?: string; delay?: number}) {
 return <div className={className}>{children}</div>;
}
