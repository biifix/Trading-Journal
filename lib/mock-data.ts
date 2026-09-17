import type { Trade, TradingAccount } from "./types";

export const trades: Trade[] = [
  {
    id: "1",
    symbol: "EURUSD",
    direction: "long",
    strategy: "London Breakout",
    setup: "Liquidity Sweep",
    entry: "1.17420",
    exit: "1.17640",
    r: 2.0,
    pnl: 200,
    status: "win",
    closedLabel: "Today, 09:14",
  },
  {
    id: "2",
    symbol: "XAUUSD",
    direction: "short",
    strategy: "Breakout",
    setup: "Momentum Fade",
    entry: "2,385.40",
    exit: "2,391.80",
    r: -1.0,
    pnl: -100,
    status: "loss",
    closedLabel: "Today, 14:02",
  },
  {
    id: "3",
    symbol: "NAS100",
    direction: "long",
    strategy: "London Sweep",
    setup: "FVG Continuation",
    entry: "19,820.5",
    exit: "19,948.0",
    r: 3.2,
    pnl: 320,
    status: "win",
    closedLabel: "Yesterday, 10:47",
  },
  {
    id: "4",
    symbol: "GBPUSD",
    direction: "short",
    strategy: "London Sweep",
    setup: "Liquidity Sweep",
    entry: "1.26810",
    exit: "1.26590",
    r: 1.8,
    pnl: 180,
    status: "win",
    closedLabel: "Yesterday, 09:31",
  },
  {
    id: "5",
    symbol: "BTCUSD",
    direction: "long",
    strategy: "FVG Continuation",
    setup: "Trend Continuation",
    entry: "61,240",
    exit: "60,860",
    r: -1.0,
    pnl: -100,
    status: "loss",
    closedLabel: "2 days ago, 16:20",
  },
  {
    id: "6",
    symbol: "EURUSD",
    direction: "long",
    strategy: "ICT Intraday",
    setup: "Breaker Entry",
    entry: "1.17050",
    exit: "1.17050",
    r: 0,
    pnl: 0,
    status: "breakeven",
    closedLabel: "3 days ago, 08:05",
  },
  {
    id: "7",
    symbol: "AUDUSD",
    direction: "short",
    strategy: "New York Sweep",
    setup: "FVG Continuation",
    entry: "0.65920",
    exit: "0.66080",
    r: -1.2,
    pnl: -168,
    status: "loss",
    closedLabel: "4 days ago, 11:52",
  },
];

export const accounts: TradingAccount[] = [
  { id: "ftmo", name: "FTMO Challenge", broker: "Prop Firm", type: "prop", currency: "USD", balance: 50240 },
  { id: "personal", name: "Personal Forex Account", broker: "IC Markets", type: "forex", currency: "USD", balance: 8420 },
  { id: "binance", name: "Binance Futures", broker: "Crypto Exchange", type: "crypto", currency: "USDT", balance: 2150 },
  { id: "demo", name: "Demo Account", broker: "Practice", type: "demo", currency: "USD", balance: 50000 },
];

export const kpis = {
  netPnl: 8240,
  netPnlFoot: "24 trades this month",
  winRate: 57,
  winRateFoot: "14 wins · 10 losses",
  avgR: 0.72,
  profitFactor: 1.82,
};

export const equityCurve = [
  0, 62.4, 55.7, 74.8, 66.3, 79.6, 71.9, 92.6, 85.0, 106.9, 99.2, 118.3, 129.1,
  120.5, 139.8, 158.6, 152.9, 174.8, 190.0, 183.1, 216.5, 244.5, 262.9, 290.0,
].map((v) => Math.round((v / 290) * 8240));

export const calendarDays: {
  day: number;
  r: number | null;
  isToday?: boolean;
}[][] = [
  [
    { day: 31, r: 2 },
    { day: 1, r: -1 },
    { day: 2, r: 3 },
    { day: 3, r: 1 },
    { day: 4, r: -2 },
  ],
  [
    { day: 7, r: 1 },
    { day: 8, r: 4 },
    { day: 9, r: 0 },
    { day: 10, r: -1 },
    { day: 11, r: 2 },
  ],
  [
    { day: 14, r: -1 },
    { day: 15, r: 2 },
    { day: 16, r: 1 },
    { day: 17, r: 3, isToday: true },
    { day: 18, r: null },
  ],
  [
    { day: 21, r: null },
    { day: 22, r: null },
    { day: 23, r: null },
    { day: 24, r: null },
    { day: 25, r: null },
  ],
];

export const setups = {
  best: {
    title: "London Sweep",
    desc: "EURUSD · London session · liquidity sweep + FVG entry",
    trades: 182,
    winRate: 62,
    totalR: 32,
    conditions: [
      { good: true, text: "Asian high/low swept before entry" },
      { good: true, text: "Market structure shift confirmed" },
      { good: true, text: "Minimum 1:2 risk-to-reward" },
    ],
  },
  worst: {
    title: "Breakout",
    desc: "NAS100, XAUUSD · any session · range breakout continuation",
    trades: 46,
    winRate: 33,
    totalR: -8,
    conditions: [
      { good: false, text: "63% entered before structure confirmed" },
      { good: false, text: "Average risk-to-reward only 1:0.9" },
      { good: false, text: 'Tagged "FOMO" on 11 of 46 entries' },
    ],
  },
};

export const weekdayPerformance = [
  { label: "Mon", r: 4.2 },
  { label: "Tue", r: 6.8 },
  { label: "Wed", r: -1.6 },
  { label: "Thu", r: 3.1 },
  { label: "Fri", r: -0.9 },
];

export const analytics = {
  winRate: 45,
  avgWinner: 2.2,
  avgLoser: 1.0,
  expectancy: 0.44,
  byStrategy: [
    { label: "London Breakout", r: 18.4, pct: 92 },
    { label: "ICT Intraday", r: 9.0, pct: 55 },
    { label: "New York Sweep", r: 4.2, pct: 32 },
    { label: "Breakout", r: -8.0, pct: 44 },
  ],
  bySession: [
    { label: "London", r: 22.1, pct: 100 },
    { label: "New York", r: 6.4, pct: 40 },
    { label: "Asian", r: -3.2, pct: 20 },
  ],
  longShort: { long: { trades: 64, winRate: 61 }, short: { trades: 34, winRate: 47 } },
  bySymbol: [
    { symbol: "EURUSD", trades: 38, winRate: 61, r: 14.2 },
    { symbol: "NAS100", trades: 18, winRate: 67, r: 11.8 },
    { symbol: "XAUUSD", trades: 22, winRate: 45, r: 3.1 },
    { symbol: "GBPUSD", trades: 12, winRate: 50, r: 1.4 },
    { symbol: "BTCUSD", trades: 8, winRate: 38, r: -2.6 },
  ],
  mistakes: [
    { label: "FOMO", trades: 9, cost: -1240 },
    { label: "Revenge Trading", trades: 3, cost: -540 },
    { label: "Moved Stop Loss", trades: 4, cost: -620 },
    { label: "Early Exit", trades: 6, cost: -310 },
    { label: "Oversized Position", trades: 2, cost: -180 },
  ],
};

export const weeklyReview = {
  range: "Sep 8–12",
  trades: 23,
  winRate: 56,
  netResult: 8.4,
  bestSetup: "London Sweep",
  worstMistake: "Early Entry",
  mostTraded: "NAS100",
  planCompliance: 82,
};

export const journalDay = {
  date: "September 15, 2026",
  pnl: 260,
  marketBias: "Bullish",
  maxRisk: "$300 · 3 trades",
  tradingPlan:
    "Only London session, wait for liquidity sweep + structure shift before entering. No counter-trend trades.",
  emotionalState: "Calm & Focused",
  lessons:
    "Cut the second trade too early on emotion — hold full size to plan once thesis confirmed.",
  tradesTaken: [
    { symbol: "EURUSD", strategy: "London Breakout", r: 2 },
    { symbol: "XAUUSD", strategy: "Breakout", r: -1 },
  ],
};
