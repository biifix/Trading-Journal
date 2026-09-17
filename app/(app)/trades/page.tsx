import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge, DirectionBadge } from "@/components/ui/Badge";
import { Pill } from "@/components/ui/Chip";
import { SearchIcon, ChevronIcon } from "@/components/ui/icons";
import { trades } from "@/lib/mock-data";

const statusLabel = { win: "Winner", loss: "Loser", breakeven: "Breakeven" } as const;
const statusVariant = { win: "win", loss: "loss", breakeven: "neutral" } as const;

export default function TradesPage() {
  return (
    <>
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h1 className="m-0 text-[22px] font-semibold tracking-[-0.2px]">Trades</h1>
          <span className="text-text-dim text-[13.5px]">{trades.length} trades · FTMO Challenge</span>
        </div>
      </div>

      <div className="flex items-center gap-2.5 flex-wrap">
        <div className="flex items-center gap-2 h-[38px] px-3 rounded-lg border border-border bg-surface-2 w-[230px]">
          <SearchIcon className="w-[14px] h-[14px] text-text-faint" />
          <input
            placeholder="Search symbol, strategy..."
            className="bg-transparent text-sm text-text placeholder:text-text-faint outline-none w-full"
          />
        </div>
        {["Last 30 days", "Strategy: All", "Direction: All", "Session: All"].map((label) => (
          <Pill key={label} clickable>
            {label}
            <ChevronIcon />
          </Pill>
        ))}
      </div>

      <Card padded={false}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[760px]">
            <thead>
              <tr>
                {["Symbol", "Direction", "Strategy", "Setup", "Entry / Exit", "R", "P&L", "Closed", "Status"].map((h) => (
                  <th
                    key={h}
                    className="text-left text-[11px] font-semibold text-text-faint tracking-[0.3px] px-2.5 pb-2.5 pt-4 first:pl-5 last:pr-5"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {trades.map((t) => (
                <tr key={t.id} className="hover:bg-surface-2">
                  <td className="py-2.5 px-2.5 pl-5 text-sm font-semibold border-t border-border-soft">
                    <Link href={`/trades/${t.id}`} className="no-underline text-text">
                      {t.symbol}
                    </Link>
                  </td>
                  <td className="py-2.5 px-2.5 text-sm border-t border-border-soft">
                    <DirectionBadge direction={t.direction} />
                  </td>
                  <td className="py-2.5 px-2.5 text-sm text-text-dim border-t border-border-soft">{t.strategy}</td>
                  <td className="py-2.5 px-2.5 text-sm text-text-dim border-t border-border-soft">{t.setup}</td>
                  <td className="py-2.5 px-2.5 text-sm mono border-t border-border-soft whitespace-nowrap">
                    {t.entry} → {t.exit}
                  </td>
                  <td className={`py-2.5 px-2.5 text-sm mono border-t border-border-soft ${t.r > 0 ? "text-profit" : t.r < 0 ? "text-loss" : "text-text-dim"}`}>
                    {t.r > 0 ? "+" : ""}
                    {t.r.toFixed(1)}R
                  </td>
                  <td className={`py-2.5 px-2.5 text-sm mono border-t border-border-soft ${t.pnl > 0 ? "text-profit" : t.pnl < 0 ? "text-loss" : "text-text-dim"}`}>
                    {t.pnl > 0 ? "+" : t.pnl < 0 ? "−" : ""}${Math.abs(t.pnl)}
                  </td>
                  <td className="py-2.5 px-2.5 text-[12.5px] text-text-faint border-t border-border-soft">{t.closedLabel}</td>
                  <td className="py-2.5 px-2.5 pr-5 border-t border-border-soft">
                    <Badge variant={statusVariant[t.status]}>{statusLabel[t.status]}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-border-soft">
          <div className="text-xs text-text-faint">Showing 1–{trades.length} of 98 trades</div>
          <div className="flex gap-1.5">
            {["‹", "1", "2", "3", "›"].map((p, i) => (
              <div
                key={i}
                className={`w-[30px] h-[30px] rounded-md flex items-center justify-center text-sm ${
                  p === "1" ? "bg-accent text-bg font-semibold" : "border border-border text-text-dim"
                }`}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
}
