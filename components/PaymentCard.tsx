export default function PaymentCard({
  title,
  description,
  children,
  badge,
}: {
  title: string;
  description?: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full border-b border-r border-border bg-background p-6 text-foreground transition-colors hover:bg-background/80">
      {badge && (
        <span className="absolute top-4 right-4 border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {badge}
        </span>
      )}

      <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>

      {description && (
        <p className="mb-4 max-w-md text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      )}

      {children}
    </div>
  );
}
