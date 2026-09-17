import Link from "next/link";
import { Card, CardHead } from "@/components/ui/Card";
import { DirectionBadge } from "@/components/ui/Badge";
import { EquityCurve } from "@/components/charts/EquityCurve";
import { RCalendar } from "@/components/charts/RCalendar";
import { calendarDays, equityCurve, kpis, setups, trades } from "@/lib/mock-data";

export default function DashboardPage() {
  const recent = trades.slice(0, 5);

  return (
    <>
      <div className="flex items-baseline gap-3 flex-wrap">
        <h1 className="m-0 text-[22px] font-semibold tracking-[-0.2px]">Dashboard</h1>
        <span className="text-text-dim text-[13.5px]">FTMO Challenge · September 1–17, 2026</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        <Card className="flex flex-col gap-1.5">
          <span className="text-[12.5px] text-text-dim">Net P&amp;L</span>
          <span className="mono text-[26px] font-semibold tracking-[-0.3px] text-profit">
            +${kpis.netPnl.toLocaleString()}
          </span>
          <span className="text-xs text-text-faint">{kpis.netPnlFoot}</span>
        </Card>
        <Card className="flex flex-col gap-1.5">
          <span className="text-[12.5px] text-text-dim">Win rate</span>
          <span className="mono text-[26px] font-semibold tracking-[-0.3px]">{kpis.winRate}%</span>
          <span className="text-xs text-text-faint">{kpis.winRateFoot}</span>
        </Card>
        <Card className="flex flex-col gap-1.5">
          <span className="text-[12.5px] text-text-dim">Average R</span>
          <span className="mono text-[26px] font-semibold tracking-[-0.3px] text-profit">+{kpis.avgR}R</span>
          <span className="text-xs text-text-faint">expectancy per trade</span>
        </Card>
        <Card className="flex flex-col gap-1.5">
          <span className="text-[12.5px] text-text-dim">Profit factor</span>
          <span className="mono text-[26px] font-semibold tracking-[-0.3px]">{kpis.profitFactor}</span>
          <span className="text-xs text-text-faint">gross win ÷ gross loss</span>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-3.5 items-stretch">
        <Card>
          <CardHead
            title="Equity curve"
            meta={<span className="mono text-xs text-text-faint">$0 → +${kpis.netPnl.toLocaleString()}</span>}
          />
          <EquityCurve data={equityCurve} />
        </Card>
        <Card>
          <CardHead title="Daily R" meta={<span className="text-xs text-text-faint">September</span>} />
          <RCalendar weeks={calendarDays} />
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {(["best", "worst"] as const).map((kind) => {
          const s = setups[kind];
          return (
            <Card key={kind}>
              <span
                className={`inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.3px] px-2.5 py-0.5 rounded-full ${
                  kind === "best" ? "bg-profit-dim text-profit" : "bg-loss-dim text-loss"
                }`}
              >
                {kind === "best" ? "Best setup" : "Needs review"}
              </span>
              <div className="text-base font-semibold mt-2.5 mb-0.5">{s.title}</div>
              <div className="text-[12.5px] text-text-dim mb-3.5">{s.desc}</div>
              <div className="grid grid-cols-3 gap-2.5">
                <div>
                  <div className="text-[17px] font-semibold mono">{s.trades}</div>
                  <div className="text-[11px] text-text-faint mt-0.5">Trades</div>
                </div>
                <div>
                  <div className="text-[17px] font-semibold mono">{s.winRate}%</div>
                  <div className="text-[11px] text-text-faint mt-0.5">Win rate</div>
                </div>
                <div>
                  <div className={`text-[17px] font-semibold mono ${s.totalR > 0 ? "text-profit" : "text-loss"}`}>
                    {s.totalR > 0 ? "+" : ""}
                    {s.totalR}R
                  </div>
                  <div className="text-[11px] text-text-faint mt-0.5">Total R</div>
                </div>
              </div>
              <ul className="list-none m-0 mt-3.5 pt-3 border-t border-border-soft flex flex-col gap-1.5">
                {s.conditions.map((c) => (
                  <li key={c.text} className="text-[12.5px] text-text-dim flex gap-2 items-start">
                    <svg
                      className={`w-[13px] h-[13px] mt-0.5 shrink-0 ${c.good ? "text-profit" : "text-loss"}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      {c.good ? <path d="M4 12l5 5L20 6" /> : <path d="M6 6l12 12M18 6L6 18" />}
                    </svg>
                    {c.text}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>

      <Card padded={false}>
        <div className="flex items-center justify-between gap-2.5 flex-wrap px-5 pt-4 pb-3">
          <h2 className="m-0 text-[14.5px] font-semibold">Recent trades</h2>
          <Link href="/trades" className="text-xs no-underline text-accent hover:text-accent-hover">
            View all →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[640px]">
            <thead>
              <tr>
                {["Symbol", "Direction", "Strategy", "Entry", "Exit", "R", "P&L", "Closed"].map((h) => (
                  <th
                    key={h}
                    className="text-left text-[11px] font-semibold text-text-faint tracking-[0.3px] px-2.5 pb-2.5 border-b border-border-soft first:pl-5 last:pr-5"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recent.map((t) => (
                <tr key={t.id} className="hover:bg-surface-2">
                  <td className="py-2.5 px-2.5 pl-5 text-sm font-semibold border-b border-border-soft last:border-0">
                    <Link href={`/trades/${t.id}`} className="no-underline text-text">
                      {t.symbol}
                    </Link>
                  </td>
                  <td className="py-2.5 px-2.5 text-sm border-b border-border-soft">
                    <DirectionBadge direction={t.direction} />
                  </td>
                  <td className="py-2.5 px-2.5 text-sm text-text-dim border-b border-border-soft">{t.strategy}</td>
                  <td className="py-2.5 px-2.5 text-sm mono border-b border-border-soft">{t.entry}</td>
                  <td className="py-2.5 px-2.5 text-sm mono border-b border-border-soft">{t.exit}</td>
                  <td className={`py-2.5 px-2.5 text-sm mono border-b border-border-soft ${t.r >= 0 ? "text-profit" : "text-loss"}`}>
                    {t.r >= 0 ? "+" : ""}
                    {t.r.toFixed(1)}R
                  </td>
                  <td className={`py-2.5 px-2.5 text-sm mono border-b border-border-soft ${t.pnl >= 0 ? "text-profit" : "text-loss"}`}>
                    {t.pnl >= 0 ? "+" : "−"}${Math.abs(t.pnl)}
                  </td>
                  <td className="py-2.5 px-2.5 pr-5 text-[12.5px] text-text-faint border-b border-border-soft">{t.closedLabel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}
