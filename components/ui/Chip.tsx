export function Chip({
  children,
  on = false,
  dashed = false,
}: {
  children: React.ReactNode;
  on?: boolean;
  dashed?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center h-7 px-3 rounded-full text-xs border ${
        dashed ? "border-dashed" : ""
      } ${
        on
          ? "bg-accent/10 border-accent text-accent"
          : "border-border text-text-dim"
      }`}
    >
      {children}
    </span>
  );
}

export function Pill({
  children,
  clickable = false,
}: {
  children: React.ReactNode;
  clickable?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 h-[38px] px-3.5 rounded-lg border border-border bg-surface-2 text-sm text-text-dim whitespace-nowrap ${
        clickable ? "cursor-pointer hover:border-text-faint hover:text-text" : ""
      }`}
    >
      {children}
    </div>
  );
}
