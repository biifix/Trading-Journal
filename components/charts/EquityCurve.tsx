export function EquityCurve({ data }: { data: number[] }) {
  const width = 800;
  const height = 220;
  const top = 20;
  const bottom = 200;
  const max = Math.max(...data, 1);

  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = bottom - (v / max) * (bottom - top);
    return { x, y };
  });

  const line = points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const area = `M0,${bottom} L${line.replace(/ /g, " L")} L${width},${bottom} Z`;
  const last = points[points.length - 1];

  return (
    <svg
      className="w-full h-auto block overflow-visible"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      role="img"
      aria-label={`Equity curve rising to $${max.toLocaleString()}`}
    >
      <defs>
        <linearGradient id="equityFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1={top} x2={width} y2={top} stroke="#1A2029" strokeWidth="1" />
      <line x1="0" y1={(top + bottom) / 2} x2={width} y2={(top + bottom) / 2} stroke="#1A2029" strokeWidth="1" />
      <line x1="0" y1={bottom} x2={width} y2={bottom} stroke="#1A2029" strokeWidth="1" />
      <text x={width - 16} y={top - 3} fill="#57617A" fontSize="10.5" fontFamily="var(--font-mono)" textAnchor="end">
        ${max.toLocaleString()}
      </text>
      <text x={width - 16} y={(top + bottom) / 2 - 3} fill="#57617A" fontSize="10.5" fontFamily="var(--font-mono)" textAnchor="end">
        ${Math.round(max / 2).toLocaleString()}
      </text>
      <text x={width - 16} y={bottom - 3} fill="#57617A" fontSize="10.5" fontFamily="var(--font-mono)" textAnchor="end">
        $0
      </text>
      <path d={area} fill="url(#equityFill)" />
      <polyline
        points={line}
        fill="none"
        stroke="#34D399"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx={last.x} cy={last.y} r="4" fill="#34D399" stroke="#0B0E14" strokeWidth="2" />
    </svg>
  );
}
