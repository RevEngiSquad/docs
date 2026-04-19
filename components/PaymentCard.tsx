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
    <div className="relative w-full rounded-xl border border-white/10 bg-white/[0.03] p-6 text-white transition-colors hover:bg-white/[0.05]">
      {badge && (
        <span className="absolute top-4 right-4 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
          {badge}
        </span>
      )}

      <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>

      {description && (
        <p className="mb-4 max-w-md text-sm leading-6 text-white/55">
          {description}
        </p>
      )}

      {children}
    </div>
  );
}
