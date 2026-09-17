import { Card } from "@/components/ui/Card";
import { btnPrimary } from "@/lib/styles";
import { PlusIcon } from "@/components/ui/icons";
import { accounts } from "@/lib/mock-data";

const subnav = ["Profile", "Trading Accounts", "Strategies", "Notifications", "Billing", "Security"];

const accountIcon: Record<string, { bg: string; color: string }> = {
  prop: { bg: "rgba(91,147,255,.14)", color: "#5B93FF" },
  forex: { bg: "rgba(52,211,153,.14)", color: "#34D399" },
  crypto: { bg: "rgba(240,182,70,.14)", color: "#F0B646" },
  demo: { bg: "#1D2431", color: "#8892A4" },
};

export default function SettingsPage() {
  return (
    <>
      <h1 className="m-0 text-[22px] font-semibold tracking-[-0.2px]">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 items-start">
        <div className="flex flex-col gap-0.5">
          {subnav.map((item) => (
            <div
              key={item}
              className={`h-[38px] px-3 rounded-lg flex items-center text-[13.5px] ${
                item === "Trading Accounts"
                  ? "bg-surface-3 text-text font-semibold"
                  : "text-text-dim hover:bg-surface-2 hover:text-text"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <Card>
            <div className="flex items-center justify-between gap-3 mb-4.5 flex-wrap">
              <div>
                <h2 className="m-0 text-[15px] font-semibold">Trading Accounts</h2>
                <div className="text-[13px] text-text-dim mt-1">Trades are recorded against one of these accounts.</div>
              </div>
              <button className={btnPrimary}>
                <PlusIcon />
                Add Account
              </button>
            </div>

            <div className="flex flex-col gap-2.5">
              {accounts.map((a) => {
                const icon = accountIcon[a.type];
                return (
                  <div
                    key={a.id}
                    className={`flex items-center justify-between p-3.5 rounded-xl bg-bg border border-border-soft ${
                      a.type === "demo" ? "opacity-70" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
                        style={{ background: icon.bg }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="8" stroke={icon.color} strokeWidth="1.6" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium">{a.name}</div>
                        <div className="text-xs text-text-faint mt-0.5">
                          {a.broker} · {a.currency}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="mono text-[15px]">
                        ${a.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </div>
                      <button className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-dim text-xs">
                        Edit
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card>
            <h2 className="m-0 mb-4 text-[15px] font-semibold">Preferences</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-text-dim mb-1.5">Timezone</div>
                <div className="h-10 rounded-lg border border-border bg-bg flex items-center px-3 text-sm">
                  GMT+1 · London
                </div>
              </div>
              <div>
                <div className="text-xs text-text-dim mb-1.5">Base Currency</div>
                <div className="h-10 rounded-lg border border-border bg-bg flex items-center px-3 text-sm">USD ($)</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
