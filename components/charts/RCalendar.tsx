type Week = { day: number; r: number | null; isToday?: boolean }[];

function cellClass(r: number | null, isToday?: boolean) {
  if (r === null) return "text-text-faint bg-transparent border border-dashed border-border-soft";
  if (isToday) return "border border-accent shadow-[inset_0_0_0_1px_var(--color-accent)]";
  if (r > 0) return "border border-border-soft";
  if (r < 0) return "border border-border-soft";
  return "text-text-faint bg-surface-2 border border-border-soft";
}

function cellBg(r: number | null) {
  if (r === null || r === 0) return undefined;
  const alpha = Math.min(0.6, 0.15 + Math.abs(r) * 0.08);
  return r > 0 ? `rgba(52,211,153,${alpha})` : `rgba(249,112,102,${alpha})`;
}

function cellText(r: number | null) {
  if (r === null) return "text-text-faint";
  if (r > 0) return "text-[#B9F2DC]";
  if (r < 0) return "text-[#FBCBC6]";
  return "text-text-faint";
}

export function RCalendar({ weeks }: { weeks: Week[] }) {
  return (
    <div>
      <div className="grid grid-cols-5 gap-1.5 mb-0.5">
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => (
          <div key={d} className="text-[10.5px] text-text-faint text-center pb-0.5">
            {d}
          </div>
        ))}
      </div>
      {weeks.map((week, wi) => (
        <div key={wi} className="grid grid-cols-5 gap-1.5 mb-1.5 last:mb-0">
          {week.map((cell) => (
            <div
              key={cell.day}
              className={`relative aspect-square rounded-md flex flex-col items-center justify-center text-xs font-medium mono ${cellClass(
                cell.r,
                cell.isToday
              )} ${cellText(cell.r)}`}
              style={{ background: cellBg(cell.r) }}
            >
              <span className="absolute top-1.5 left-1.5 text-[9px] font-medium text-text-faint mono">
                {cell.day}
              </span>
              {cell.r !== null && (cell.r > 0 ? `+${cell.r}R` : cell.r < 0 ? `${cell.r}R` : "0R")}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
