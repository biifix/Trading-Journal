import Link from "next/link";
import { accounts } from "@/lib/mock-data";
import { btnPrimary, iconBtn } from "@/lib/styles";
import { BellIcon, ChevronIcon, PlusIcon, SearchIcon } from "@/components/ui/icons";

export function Topbar({ showNewTrade = true }: { showNewTrade?: boolean }) {
  const account = accounts[0];

  return (
    <header className="flex items-center gap-5 py-3.5 px-8 border-b border-border-soft bg-surface flex-wrap">
      <Link href="/" className="flex items-center gap-2.5 font-semibold text-base mr-2">
        <span className="w-[26px] h-[26px] rounded-[7px] bg-gradient-to-br from-accent to-[#3E6FE0] flex items-center justify-center shrink-0">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0B0E14" strokeWidth="2.4" strokeLinecap="round">
            <path d="M4 17 L10 10 L14 14 L20 6" />
          </svg>
        </span>
        Ledger
      </Link>

      <div className="hidden md:flex items-center gap-2 h-[38px] px-3 rounded-lg border border-border bg-surface-2 text-sm text-text-dim">
        <span>Account</span>
        <strong className="text-text font-medium">{account.name}</strong>
        <span className="mono text-text-faint">
          ${account.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </span>
        <ChevronIcon />
      </div>

      <div className="flex-1" />

      <div className="flex items-center gap-2.5">
        {showNewTrade && (
          <Link href="/trades/new" className={btnPrimary}>
            <PlusIcon />
            New Trade
          </Link>
        )}
        <div className={iconBtn} role="button" aria-label="Search trades" title="Search">
          <SearchIcon />
        </div>
        <div className={iconBtn} role="button" aria-label="Notifications" title="Notifications">
          <BellIcon />
        </div>
        <div className="w-[34px] h-[34px] rounded-lg bg-surface-3 border border-border flex items-center justify-center text-xs font-semibold text-text" title="Gene Chen">
          GC
        </div>
      </div>
    </header>
  );
}
