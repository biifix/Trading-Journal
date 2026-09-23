import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { btnPrimary, btnSecondary, fieldClass } from "@/lib/styles";
import { symbolGroups } from "@/lib/mock-data";

function Field({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <div>
      <label className="text-xs text-text-dim mb-1.5 block">{label}</label>
      <input className={fieldClass} defaultValue={defaultValue} />
    </div>
  );
}

export default function NewTradePage() {
  return (
    <>
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3.5">
          <Link
            href="/trades"
            className="w-[34px] h-[34px] rounded-lg border border-border flex items-center justify-center text-text-dim"
          >
            ←
          </Link>
          <h1 className="m-0 text-[22px] font-semibold tracking-[-0.2px]">New Trade</h1>
        </div>
        <div className="flex gap-3">
          <Link href="/trades" className={btnSecondary}>
            Cancel
          </Link>
          <Link href="/trades/1" className={btnPrimary}>
            Save Trade
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[700px_1fr] gap-6 items-start">
        <div className="flex flex-col gap-5">
          <Card>
            <h2 className="m-0 mb-4 text-[14.5px] font-semibold">Trade Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-text-dim mb-1.5 block">Trading Account</label>
                <select className={fieldClass}>
                  <option>FTMO Challenge</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-text-dim mb-1.5 block">Market Type</label>
                <select className={fieldClass}>
                  <option>Futures</option>
                </select>
              </div>
              <div>
                <label htmlFor="symbol" className="text-xs text-text-dim mb-1.5 block">
                  Symbol
                </label>
                <select id="symbol" name="symbol" defaultValue="ES" className={fieldClass}>
                  {symbolGroups.map((group) => (
                    <optgroup key={group.market} label={group.market}>
                      {group.symbols.map((symbol) => (
                        <option key={symbol} value={symbol}>
                          {symbol}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-text-dim mb-1.5 block">Direction</label>
                <div className="flex h-10 rounded-lg border border-border overflow-hidden">
                  <div className="flex-1 flex items-center justify-center text-sm font-semibold bg-profit-dim text-profit">
                    Long
                  </div>
                  <div className="flex-1 flex items-center justify-center text-sm text-text-faint">Short</div>
                </div>
              </div>
              <Field label="Entry Price" defaultValue="1.17420" />
              <Field label="Exit Price" defaultValue="1.17640" />
              <Field label="Quantity / Size" defaultValue="1.00 lot" />
              <Field label="Stop Loss" defaultValue="1.17310" />
              <Field label="Take Profit" defaultValue="1.17750" />
              <Field label="Commission & Fees" defaultValue="$0.00" />
              <Field label="Entry Time" defaultValue="Sep 15, 2026 · 08:42" />
              <Field label="Exit Time" defaultValue="Sep 15, 2026 · 09:15" />
            </div>
          </Card>

          <Card>
            <h2 className="m-0 mb-4 text-[14.5px] font-semibold">Categorisation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs text-text-dim mb-1.5 block">Strategy</label>
                <select className={fieldClass}>
                  <option>London Breakout</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-text-dim mb-1.5 block">Setup</label>
                <select className={fieldClass}>
                  <option>Liquidity Sweep</option>
                </select>
              </div>
            </div>
            <label className="text-xs text-text-dim mb-2 block">Tags</label>
            <div className="flex gap-2 flex-wrap">
              <Chip on>A+ Setup</Chip>
              <Chip on>Perfect Execution</Chip>
              <Chip>News Trade</Chip>
              <Chip>Revenge Trade</Chip>
              <Chip>Overtrading</Chip>
              <Chip>FOMO</Chip>
              <Chip dashed>+ Add tag</Chip>
            </div>
          </Card>

          <Card>
            <h2 className="m-0 mb-4 text-[14.5px] font-semibold">Journal</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-xs text-text-dim mb-1.5 block">Pre-Trade Notes</label>
                <textarea
                  className={`${fieldClass} h-auto py-2.5 resize-none`}
                  rows={2}
                  defaultValue="London high liquidity swept, expecting reversal into NY high volume window."
                />
              </div>
              <div>
                <label className="text-xs text-text-dim mb-1.5 block">Trade Thesis</label>
                <textarea
                  className={`${fieldClass} h-auto py-2.5 resize-none`}
                  rows={2}
                  defaultValue="Asian range swept, structure shift on M5, entered on FVG retest with 1:2 minimum RR."
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Entry Reason" defaultValue="FVG retest + structure shift" />
                <Field label="Exit Reason" defaultValue="Take profit hit" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                <div>
                  <label className="text-xs text-text-dim mb-1.5 block">Emotional State</label>
                  <select className={fieldClass}>
                    <option>Calm &amp; Focused</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-text-dim mb-1.5 block">Confidence</label>
                  <div className="flex gap-1.5 h-10 items-center">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-4 h-4 rounded-full bg-accent" />
                    ))}
                    <div className="w-4 h-4 rounded-full border border-border" />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-xs text-text-dim mb-2 block">Mistakes</label>
                <div className="flex gap-2 flex-wrap">
                  {["FOMO", "Moved Stop Loss", "Oversized Position", "Early Exit", "Late Entry", "Revenge Trading", "Trading Outside Plan"].map(
                    (m) => (
                      <Chip key={m}>{m}</Chip>
                    )
                  )}
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="m-0 mb-4 text-[14.5px] font-semibold">Screenshots</h2>
            <div className="h-[110px] rounded-xl border-[1.5px] border-dashed border-border flex flex-col items-center justify-center gap-2 text-text-faint text-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 16V4M12 4L7 9M12 4L17 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 16V18.5C4 19.33 4.67 20 5.5 20H18.5C19.33 20 20 19.33 20 18.5V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Drop entry / exit chart screenshots, or click to upload
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-5 xl:sticky xl:top-5">
          <Card>
            <h2 className="m-0 mb-1 text-[14.5px] font-semibold">Trade Summary</h2>
            <div className="text-xs text-text-faint mb-4">Calculated automatically from entry, exit, stop loss and size.</div>
            <div className="flex flex-col gap-3.5">
              <div className="flex justify-between">
                <span className="text-sm text-text-dim">Risk Amount</span>
                <span className="mono text-[15px]">$100.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-text-dim">Reward Amount</span>
                <span className="mono text-[15px]">$200.00</span>
              </div>
              <div className="h-px bg-border-soft" />
              <div className="flex justify-between">
                <span className="text-sm text-text-dim">R Multiple</span>
                <span className="mono text-xl font-semibold text-profit">+2.0R</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-text-dim">Net P&amp;L</span>
                <span className="mono text-xl font-semibold text-profit">+$200.00</span>
              </div>
            </div>
          </Card>
          <Card>
            <h2 className="m-0 mb-4 text-[14.5px] font-semibold">Playbook Match</h2>
            <div className="flex items-center justify-between p-3.5 rounded-lg bg-bg border border-border-soft">
              <div>
                <div className="text-sm font-medium">London Liquidity Sweep</div>
                <div className="text-[11px] text-text-faint mt-0.5">62% win rate historically</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L10 18L19 6" stroke="var(--color-profit)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
