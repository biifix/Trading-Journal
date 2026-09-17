export function BarRow({ label, r, pct }: { label: string; r: number; pct: number }) {
  const positive = r >= 0;
  return (
    <div className="mb-3.5 last:mb-0">
      <div className="flex justify-between text-xs text-text-dim mb-1.5">
        <span>{label}</span>
        <span className={`mono ${positive ? "text-profit" : "text-loss"}`}>
          {positive ? "+" : "−"}
          {Math.abs(r).toFixed(1)}R
        </span>
      </div>
      <div className="h-2 rounded-full bg-border-soft">
        <div
          className={`h-full rounded-full ${positive ? "bg-profit" : "bg-loss"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
