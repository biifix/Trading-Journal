type IconProps = { className?: string };

const base = "w-[19px] h-[19px]";

export function DashboardIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="5" rx="1.5" />
      <rect x="13" y="10" width="8" height="11" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
    </svg>
  );
}

export function TradesIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 19V9M10 19V5M16 19v-7M22 19V11" />
    </svg>
  );
}

export function JournalIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 4h11a2 2 0 012 2v13l-3-2-3 2-3-2-3 2V6a2 2 0 012-2z" />
    </svg>
  );
}

export function CalendarIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

export function AnalyticsIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20V10M11 20V4M18 20v-6" />
    </svg>
  );
}

export function PlaybookIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r=".6" fill="currentColor" />
    </svg>
  );
}

export function StrategiesIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 4h9l7 7-9 9-7-7z" />
      <circle cx="9" cy="9" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SettingsIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 13.5a7.6 7.6 0 000-3l1.9-1.5-2-3.4-2.3.6a7.6 7.6 0 00-2.6-1.5L14 2h-4l-.4 2.7a7.6 7.6 0 00-2.6 1.5l-2.3-.6-2 3.4L4.6 10.5a7.6 7.6 0 000 3L2.7 15l2 3.4 2.3-.6c.8.7 1.6 1.2 2.6 1.5L10 22h4l.4-2.7a7.6 7.6 0 002.6-1.5l2.3.6 2-3.4z" />
    </svg>
  );
}

export function SearchIcon({ className = "w-[15px] h-[15px]" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

export function BellIcon({ className = "w-[15px] h-[15px]" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 8a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6z" />
      <path d="M9.5 20a2.5 2.5 0 005 0" />
    </svg>
  );
}

export function PlusIcon({ className = "w-3.5 h-3.5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function ChevronIcon({ className = "w-[9px] h-[9px] opacity-60" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M1 1l4 4 4-4" />
    </svg>
  );
}
