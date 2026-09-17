"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnalyticsIcon,
  CalendarIcon,
  DashboardIcon,
  JournalIcon,
  PlaybookIcon,
  SettingsIcon,
  StrategiesIcon,
  TradesIcon,
} from "@/components/ui/icons";

function railItemClass(active: boolean) {
  return `w-10 h-10 rounded-[9px] flex items-center justify-center relative transition-colors ${
    active
      ? "text-accent bg-accent/10 before:content-[''] before:absolute before:-left-4 before:top-2 before:bottom-2 before:w-[3px] before:bg-accent before:rounded-r-[3px]"
      : "text-text-faint hover:text-text-dim hover:bg-surface-2"
  }`;
}

export function Sidebar() {
  const pathname = usePathname();

  const isDashboard = pathname === "/";
  const isTrades = pathname.startsWith("/trades");
  const isJournal = pathname === "/journal";
  const isAnalytics = pathname.startsWith("/analytics");
  const isSettings = pathname.startsWith("/settings");

  return (
    <nav
      aria-label="Primary"
      className="w-16 shrink-0 bg-surface border-r border-border-soft flex flex-col items-center py-4 gap-1"
    >
      <Link href="/" aria-label="Dashboard" title="Dashboard" className={railItemClass(isDashboard)}>
        <DashboardIcon />
      </Link>
      <Link href="/trades" aria-label="Trades" title="Trades" className={railItemClass(isTrades)}>
        <TradesIcon />
      </Link>
      <Link href="/journal" aria-label="Journal" title="Journal" className={railItemClass(isJournal)}>
        <JournalIcon />
      </Link>
      <Link href="/journal" aria-label="Calendar" title="Calendar" className={railItemClass(false)}>
        <CalendarIcon />
      </Link>
      <Link href="/analytics" aria-label="Analytics" title="Analytics" className={railItemClass(isAnalytics)}>
        <AnalyticsIcon />
      </Link>
      <div aria-label="Playbook" title="Playbook" className={railItemClass(false)}>
        <PlaybookIcon />
      </div>
      <div aria-label="Strategies" title="Strategies" className={railItemClass(false)}>
        <StrategiesIcon />
      </div>
      <div className="flex-1" />
      <Link href="/settings" aria-label="Settings" title="Settings" className={railItemClass(isSettings)}>
        <SettingsIcon />
      </Link>
    </nav>
  );
}
