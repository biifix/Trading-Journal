import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { RCalendar } from "@/components/charts/RCalendar";
import { fieldClass } from "@/lib/styles";
import { calendarDays, journalDay, weeklyReview } from "@/lib/mock-data";

export default function JournalPage() {
  return (
    <>
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h1 className="m-0 text-[22px] font-semibold tracking-[-0.2px]">Journal</h1>
        <div className="flex items-center gap-3.5 text-text-faint">
          <span>‹</span>
          <span className="text-[13.5px] text-text font-medium w-[140px] text-center">September 2026</span>
          <span>›</span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[680px_1fr] gap-6 items-start">
        <Card className="p-5">
          <RCalendar weeks={calendarDays} />
        </Card>

        <Card className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="m-0 text-[14.5px] font-semibold">{journalDay.date}</h2>
            <span className="mono text-base font-semibold text-profit">+${journalDay.pnl}</span>
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            <div>
              <label className="text-[11px] text-text-faint uppercase tracking-[0.05em] mb-1.5 block">Market Bias</label>
              <div className={`${fieldClass} flex items-center text-profit`}>{journalDay.marketBias}</div>
            </div>
            <div>
              <label className="text-[11px] text-text-faint uppercase tracking-[0.05em] mb-1.5 block">Max Risk</label>
              <div className={`${fieldClass} flex items-center`}>{journalDay.maxRisk}</div>
            </div>
          </div>
          <div>
            <label className="text-[11px] text-text-faint uppercase tracking-[0.05em] mb-1.5 block">Trading Plan</label>
            <textarea className={`${fieldClass} h-auto py-2.5 resize-none`} rows={2} defaultValue={journalDay.tradingPlan} />
          </div>
          <div>
            <label className="text-[11px] text-text-faint uppercase tracking-[0.05em] mb-1.5 block">Emotional State</label>
            <div className={`${fieldClass} flex items-center`}>{journalDay.emotionalState}</div>
          </div>
          <div>
            <label className="text-[11px] text-text-faint uppercase tracking-[0.05em] mb-2 block">Trades Taken</label>
            <div className="flex flex-col gap-2">
              {journalDay.tradesTaken.map((t) => (
                <Link
                  key={t.symbol + t.strategy}
                  href="/trades/1"
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-bg border border-border-soft no-underline"
                >
                  <span className="mono text-xs text-text">
                    {t.symbol} · {t.strategy}
                  </span>
                  <span className={`mono text-xs font-semibold ${t.r >= 0 ? "text-profit" : "text-loss"}`}>
                    {t.r >= 0 ? "+" : ""}
                    {t.r}R
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <label className="text-[11px] text-text-faint uppercase tracking-[0.05em] mb-1.5 block">
              Lessons &amp; Tomorrow&rsquo;s Improvement
            </label>
            <textarea className={`${fieldClass} h-auto py-2.5 resize-none`} rows={2} defaultValue={journalDay.lessons} />
          </div>
        </Card>
      </div>

      <Card>
        <h2 className="m-0 mb-4 text-[14.5px] font-semibold">Weekly Review · {weeklyReview.range}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-4">
          <div>
            <div className="text-[11px] text-text-faint uppercase">Trades</div>
            <div className="mono text-lg mt-1">{weeklyReview.trades}</div>
          </div>
          <div>
            <div className="text-[11px] text-text-faint uppercase">Win Rate</div>
            <div className="mono text-lg mt-1">{weeklyReview.winRate}%</div>
          </div>
          <div>
            <div className="text-[11px] text-text-faint uppercase">Net Result</div>
            <div className="mono text-lg mt-1 text-profit">+{weeklyReview.netResult}R</div>
          </div>
          <div>
            <div className="text-[11px] text-text-faint uppercase">Best Setup</div>
            <div className="text-sm mt-1">{weeklyReview.bestSetup}</div>
          </div>
          <div>
            <div className="text-[11px] text-text-faint uppercase">Worst Mistake</div>
            <div className="text-sm mt-1">{weeklyReview.worstMistake}</div>
          </div>
          <div>
            <div className="text-[11px] text-text-faint uppercase">Most Traded</div>
            <div className="text-sm mt-1">{weeklyReview.mostTraded}</div>
          </div>
          <div>
            <div className="text-[11px] text-text-faint uppercase">Plan Compliance</div>
            <div className="mono text-lg mt-1">{weeklyReview.planCompliance}%</div>
          </div>
        </div>
        <label className="text-[11px] text-text-faint uppercase tracking-[0.05em] mb-2 block">One adjustment for next week</label>
        <textarea
          className={`${fieldClass} h-auto py-2.5 resize-none`}
          rows={2}
          defaultValue="Tighten entries after 2pm — late-session trades are pulling win rate down disproportionately."
        />
      </Card>
    </>
  );
}
