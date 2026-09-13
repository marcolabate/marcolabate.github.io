export function Card({children, className = ''}: {children: React.ReactNode; className?: string; interactive?: boolean}) {
 return <div className={`rounded-lg border border-line bg-card p-6 ${className}`}>{children}</div>;
}
