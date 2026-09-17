export type Direction = "long" | "short";
export type TradeStatus = "win" | "loss" | "breakeven";

export type Trade = {
  id: string;
  symbol: string;
  direction: Direction;
  strategy: string;
  setup: string;
  entry: string;
  exit: string;
  r: number;
  pnl: number;
  status: TradeStatus;
  closedLabel: string;
};

export type TradingAccount = {
  id: string;
  name: string;
  broker: string;
  type: string;
  currency: string;
  balance: number;
};
