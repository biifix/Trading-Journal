import { ReactNode } from "react";

export function Card({
  children,
  className = "",
  padded = true,
}: {
  children: ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <div
      className={`bg-surface border border-border-soft rounded-xl ${
        padded ? "p-5" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHead({
  title,
  meta,
}: {
  title: string;
  meta?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3 mb-3.5 flex-wrap">
      <h2 className="m-0 text-[14.5px] font-semibold">{title}</h2>
      {meta}
    </div>
  );
}
