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
      <div className="
        relative
        w-full
        max-w-sm
        mx-auto
        rounded-xl
        border border-border
        bg-background/60 backdrop-blur
        p-5
        transition
      "
>
      {badge && (
        <span className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
          {badge}
        </span>
      )}

      <h3 className="font-semibold text-base mb-1">{title}</h3>

      {description && (
        <p className="text-sm text-muted-foreground mb-3">
          {description}
        </p>
      )}

      {children}
    </div>
  );
}
