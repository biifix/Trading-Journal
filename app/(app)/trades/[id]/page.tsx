import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Badge, DirectionBadge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";
import { btnDanger, btnSecondary } from "@/lib/styles";
import { trades } from "@/lib/mock-data";

const statusLabel = { win: "Winner", loss: "Loser", breakeven: "Breakeven" } as const;
const statusVariant = { win: "win", loss: "loss", breakeven: "neutral" } as const;

export function generateStaticParams() {
  return trades.map((t) => ({ id: t.id }));
}

export default async function TradeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const trade = trades.find((t) => t.id === id) ?? trades[0];
  if (!trade) notFound();

  return (
    <>
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3.5 flex-wrap">
          <Link
            href="/trades"
            className="w-[34px] h-[34px] rounded-lg border border-border flex items-center justify-center text-text-dim"
          >
            ←
          </Link>
          <span className="mono font-semibold text-[22px]">{trade.symbol}</span>
          <DirectionBadge direction={trade.direction} />
          <Badge variant={statusVariant[trade.status]}>{statusLabel[trade.status]}</Badge>
        </div>
        <div className="flex gap-3">
          <Link href="/trades/new" className={btnSecondary}>
            Edit
          </Link>
          <Link href="/trades" className={btnDanger}>
            Delete
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          ["Entry", trade.entry],
          ["Exit", trade.exit],
          ["Risk", "$100.00"],
          ["Reward", "$200.00"],
          ["R Multiple", `${trade.r >= 0 ? "+" : ""}${trade.r.toFixed(1)}R`, trade.r >= 0 ? "text-profit" : "text-loss"],
          ["Net P&L", `${trade.pnl >= 0 ? "+" : "−"}$${Math.abs(trade.pnl)}.00`, trade.pnl >= 0 ? "text-profit" : "text-loss"],
        ].map(([label, value, color]) => (
          <Card key={label} className="p-4">
            <div className="text-[11px] text-text-faint">{label}</div>
            <div className={`mono text-base mt-1 font-semibold ${color ?? ""}`}>{value}</div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[720px_1fr] gap-6 items-start">
        <div className="flex flex-col gap-5">
          <Card className="p-4 h-[320px] relative">
            <svg width="100%" height="288" viewBox="0 0 688 288" className="bg-bg rounded-lg">
              <line x1="0" y1="60" x2="688" y2="60" stroke="#1A2029" />
              <line x1="0" y1="120" x2="688" y2="120" stroke="#1A2029" />
              <line x1="0" y1="180" x2="688" y2="180" stroke="#1A2029" />
              <line x1="0" y1="240" x2="688" y2="240" stroke="#1A2029" />
              <path
                d="M20,210 L80,215 L140,200 L200,150 L260,160 L320,120 L380,90 L440,60 L500,75 L560,50 L620,55 L668,40"
                fill="none"
                stroke="#8892A4"
                strokeWidth="1.6"
              />
              <line x1="200" y1="0" x2="200" y2="288" stroke="#34D399" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="440" y1="0" x2="440" y2="288" stroke="#5B93FF" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="200" cy="150" r="4" fill="#34D399" />
              <text x="204" y="145" fill="#34D399" fontFamily="var(--font-mono)" fontSize="11">
                Entry {trade.entry}
              </text>
              <circle cx="440" cy="60" r="4" fill="#5B93FF" />
              <text x="444" y="55" fill="#5B93FF" fontFamily="var(--font-mono)" fontSize="11">
                Exit {trade.exit}
              </text>
            </svg>
            <div className="absolute top-[42px] left-[42px] text-[11px] text-text-faint tracking-[0.05em] uppercase">
              Entry Screenshot · M5
            </div>
          </Card>

          <Card>
            <h2 className="m-0 mb-3.5 text-[14.5px] font-semibold">Executions</h2>
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-border-soft">
                  <td className="py-2 text-[11px] text-text-faint uppercase">Type</td>
                  <td className="py-2 text-[11px] text-text-faint uppercase">Price</td>
                  <td className="py-2 text-[11px] text-text-faint uppercase">Quantity</td>
                  <td className="py-2 text-[11px] text-text-faint uppercase">Timestamp</td>
                </tr>
                <tr className="border-b border-border-soft">
                  <td className="py-2.5">
                    <Badge variant="win">BUY</Badge>
                  </td>
                  <td className="py-2.5 mono">{trade.entry}</td>
                  <td className="py-2.5 mono">1.00 lot</td>
                  <td className="py-2.5 text-xs text-text-dim">Sep 15, 08:42:03</td>
                </tr>
                <tr>
                  <td className="py-2.5">
                    <Badge variant="loss">SELL</Badge>
                  </td>
                  <td className="py-2.5 mono">{trade.exit}</td>
                  <td className="py-2.5 mono">1.00 lot</td>
                  <td className="py-2.5 text-xs text-text-dim">Sep 15, 09:15:47</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <Card>
            <h2 className="m-0 mb-3.5 text-[14.5px] font-semibold">Journal</h2>
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-[11px] text-text-faint uppercase tracking-[0.05em] mb-1.5">Pre-Trade Notes</div>
                <div className="text-sm text-[#D9DCE1] leading-relaxed">
                  London high liquidity swept, expecting reversal into NY high volume window.
                </div>
              </div>
              <div>
                <div className="text-[11px] text-text-faint uppercase tracking-[0.05em] mb-1.5">Trade Thesis</div>
                <div className="text-sm text-[#D9DCE1] leading-relaxed">
                  Asian range swept, structure shift on M5, entered on FVG retest with 1:2 minimum RR.
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-[11px] text-text-faint uppercase tracking-[0.05em] mb-1.5">Entry Reason</div>
                  <div className="text-sm text-[#D9DCE1]">FVG retest + structure shift</div>
                </div>
                <div>
                  <div className="text-[11px] text-text-faint uppercase tracking-[0.05em] mb-1.5">Exit Reason</div>
                  <div className="text-sm text-[#D9DCE1]">Take profit hit</div>
                </div>
              </div>
              <div>
                <div className="text-[11px] text-text-faint uppercase tracking-[0.05em] mb-1.5">Post-Trade Review</div>
                <div className="text-sm text-[#D9DCE1] leading-relaxed">
                  Textbook execution — waited for confirmation instead of anticipating the sweep. Kept size disciplined
                  despite strong conviction.
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-5">
          <Card>
            <h2 className="m-0 mb-3.5 text-[14.5px] font-semibold">Trade Info</h2>
            <div className="flex flex-col gap-3">
              {[
                ["Strategy", trade.strategy],
                ["Setup", trade.setup],
                ["Session", "London"],
                ["Account", "FTMO Challenge"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm">
                  <span className="text-text-faint">{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="m-0 mb-3.5 text-[14.5px] font-semibold">Tags &amp; Mistakes</h2>
            <div className="text-[11px] text-text-faint uppercase tracking-[0.05em] mb-2">Tags</div>
            <div className="flex gap-2 flex-wrap mb-4">
              <Chip on>A+ Setup</Chip>
              <Chip on>Perfect Execution</Chip>
            </div>
            <div className="text-[11px] text-text-faint uppercase tracking-[0.05em] mb-2">Mistakes</div>
            <div className="text-sm text-text-faint">None logged — clean execution</div>
          </Card>

          <Card>
            <h2 className="m-0 mb-3.5 text-[14.5px] font-semibold">Scores</h2>
            <div className="flex flex-col gap-3.5">
              {[
                ["Confidence", 80, "4 / 5", "bg-accent"],
                ["Execution", 100, "5 / 5", "bg-profit"],
                ["Discipline", 100, "5 / 5", "bg-profit"],
              ].map(([label, pct, value, color]) => (
                <div key={label as string}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm text-text-dim">{label}</span>
                    <span className="text-sm">{value}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-border-soft">
                    <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
