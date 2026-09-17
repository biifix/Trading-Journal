export function Badge({
  variant,
  children,
}: {
  variant: "win" | "loss" | "neutral";
  children: React.ReactNode;
}) {
  const styles = {
    win: "bg-profit-dim text-profit",
    loss: "bg-loss-dim text-loss",
    neutral: "bg-surface-2 text-text-dim",
  }[variant];

  return (
    <span
      className={`inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full ${styles}`}
    >
      {children}
    </span>
  );
}

export function DirectionBadge({ direction }: { direction: "long" | "short" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md ${
        direction === "long" ? "bg-profit-dim text-profit" : "bg-loss-dim text-loss"
      }`}
    >
      {direction === "long" ? "Long" : "Short"}
    </span>
  );
}
