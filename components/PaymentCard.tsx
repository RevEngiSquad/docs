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
    <div className="relative w-full rounded-xl border border-border bg-muted/50 p-6 text-foreground transition-colors hover:bg-muted">
      {badge && (
        <span className="absolute top-4 right-4 rounded-md border border-border bg-muted px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
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
