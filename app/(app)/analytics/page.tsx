import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Chip";
import { BarRow } from "@/components/charts/BarRow";
import { analytics } from "@/lib/mock-data";

export default function AnalyticsPage() {
  return (
    <>
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h1 className="m-0 text-[22px] font-semibold tracking-[-0.2px]">Analytics</h1>
          <span className="text-text-dim text-[13.5px]">All trades · last 90 days</span>
        </div>
        <div className="flex gap-2.5">
          <Pill clickable>Last 90 days</Pill>
          <Pill clickable>Account: All</Pill>
          <Pill clickable>Symbol: All</Pill>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        <Card className="flex flex-col gap-1.5">
          <span className="text-[12.5px] text-text-dim">Win Rate</span>
          <span className="mono text-2xl font-semibold">{analytics.winRate}%</span>
        </Card>
        <Card className="flex flex-col gap-1.5">
          <span className="text-[12.5px] text-text-dim">Avg Winner</span>
          <span className="mono text-2xl font-semibold text-profit">{analytics.avgWinner}R</span>
        </Card>
        <Card className="flex flex-col gap-1.5">
          <span className="text-[12.5px] text-text-dim">Avg Loser</span>
          <span className="mono text-2xl font-semibold text-loss">{analytics.avgLoser.toFixed(1)}R</span>
        </Card>
        <Card className="flex flex-col gap-1.5 border-accent">
          <span className="text-[12.5px] text-accent">Expectancy</span>
          <span className="mono text-2xl font-semibold text-accent">+{analytics.expectancy}R</span>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <Card>
          <h2 className="m-0 mb-4 text-[14.5px] font-semibold">Performance by Strategy</h2>
          {analytics.byStrategy.map((s) => (
            <BarRow key={s.label} label={s.label} r={s.r} pct={s.pct} />
          ))}
        </Card>
        <Card>
          <h2 className="m-0 mb-4 text-[14.5px] font-semibold">Performance by Session</h2>
          {analytics.bySession.map((s) => (
            <BarRow key={s.label} label={s.label} r={s.r} pct={s.pct} />
          ))}
          <div className="mt-5 pt-4 border-t border-border-soft flex justify-between">
            <div>
              <div className="text-[11px] text-text-faint uppercase">Long</div>
              <div className="mono text-[15px] mt-1">
                {analytics.longShort.long.trades} trades · {analytics.longShort.long.winRate}% WR
              </div>
            </div>
            <div className="text-right">
              <div className="text-[11px] text-text-faint uppercase">Short</div>
              <div className="mono text-[15px] mt-1">
                {analytics.longShort.short.trades} trades · {analytics.longShort.short.winRate}% WR
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <Card padded={false}>
          <h2 className="m-0 px-4 pt-4 pb-1 text-[14.5px] font-semibold">Performance by Symbol</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["Symbol", "Trades", "Win Rate", "Net R"].map((h, i) => (
                  <th
                    key={h}
                    className={`text-left px-4 py-2 text-[11px] text-text-faint uppercase border-b border-border-soft ${
                      i === 3 ? "text-right" : ""
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {analytics.bySymbol.map((row) => (
                <tr key={row.symbol}>
                  <td className="px-4 py-2.5 mono font-semibold border-b border-border-soft last:border-0">{row.symbol}</td>
                  <td className="px-4 py-2.5 text-text-dim border-b border-border-soft last:border-0">{row.trades}</td>
                  <td className="px-4 py-2.5 text-text-dim border-b border-border-soft last:border-0">{row.winRate}%</td>
                  <td
                    className={`px-4 py-2.5 mono text-right border-b border-border-soft last:border-0 ${
                      row.r >= 0 ? "text-profit" : "text-loss"
                    }`}
                  >
                    {row.r >= 0 ? "+" : "−"}
                    {Math.abs(row.r).toFixed(1)}R
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card padded={false}>
          <h2 className="m-0 px-4 pt-4 pb-1 text-[14.5px] font-semibold">Mistake Cost Analysis</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["Mistake", "Trades", "Cost"].map((h, i) => (
                  <th
                    key={h}
                    className={`text-left px-4 py-2 text-[11px] text-text-faint uppercase border-b border-border-soft ${
                      i === 2 ? "text-right" : ""
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {analytics.mistakes.map((row) => (
                <tr key={row.label}>
                  <td className="px-4 py-2.5 border-b border-border-soft last:border-0">{row.label}</td>
                  <td className="px-4 py-2.5 text-text-dim border-b border-border-soft last:border-0">{row.trades}</td>
                  <td className="px-4 py-2.5 mono text-right text-loss border-b border-border-soft last:border-0">
                    −${Math.abs(row.cost).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}
