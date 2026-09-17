# Ledger — Trading Journal

A web-based trading journal and analytics platform. Record trades, categorise them by strategy/setup/mistake, and review performance through dashboards, calendars, and expectancy-driven analytics.

This repo currently implements the **frontend UI** for the core loop described in the project's design document — manual trade entry → journal → dashboard → analytics — with mock data standing in for a backend. Authentication, a real database, and API routes are the next phase (see `DESIGN.md`-equivalent plan in project docs).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first `@theme` tokens, no `tailwind.config`)
- IBM Plex Sans / IBM Plex Mono
- No backend yet — all data lives in `lib/mock-data.ts`

## Pages

| Route | Page |
| --- | --- |
| `/login` | Sign in |
| `/` | Dashboard — KPIs, equity curve, daily R calendar, best/worst setup, recent trades |
| `/trades` | Trade list with filters |
| `/trades/new` | Manual trade entry form |
| `/trades/[id]` | Trade detail — executions, journal notes, scores |
| `/journal` | Monthly calendar + daily journal + weekly review |
| `/analytics` | Expectancy, performance by strategy/session/symbol, mistake cost analysis |
| `/settings` | Trading accounts, preferences |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Project structure

```
app/
├── layout.tsx            root layout, fonts, global styles
├── login/page.tsx         standalone login screen
└── (app)/                 shared app shell (topbar + sidebar)
    ├── layout.tsx
    ├── page.tsx            dashboard ("/")
    ├── trades/
    │   ├── page.tsx        trade list
    │   ├── new/page.tsx    add trade
    │   └── [id]/page.tsx   trade detail
    ├── journal/page.tsx
    ├── analytics/page.tsx
    └── settings/page.tsx

components/
├── layout/    Sidebar, Topbar
├── ui/        Card, Badge, Chip/Pill, icons
└── charts/    EquityCurve, RCalendar, BarRow

lib/
├── types.ts         Trade / TradingAccount types
├── mock-data.ts      sample trades, KPIs, analytics used across pages
└── styles.ts         shared Tailwind class strings (buttons, fields)
```

## Design tokens

Colors, fonts, and spacing are defined once in `app/globals.css` under `@theme`, which Tailwind v4 turns directly into utility classes (`bg-surface`, `text-profit`, `border-border-soft`, etc.) — no separate config file to keep in sync.
