import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="relative w-full lg:w-[800px] shrink-0 p-8 sm:p-14 flex flex-col justify-between bg-surface border-b lg:border-b-0 lg:border-r border-border-soft overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 900"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="loginFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,760 L60,742 L120,700 L180,714 L240,652 L300,660 L360,592 L420,608 L480,540 L540,502 L600,520 L660,432 L720,402 L800,340 L800,900 L0,900 Z"
            fill="url(#loginFill)"
          />
          <path
            d="M0,760 L60,742 L120,700 L180,714 L240,652 L300,660 L360,592 L420,608 L480,540 L540,502 L600,520 L660,432 L720,402 L800,340"
            fill="none"
            stroke="#34D399"
            strokeWidth="2"
            strokeOpacity="0.6"
          />
        </svg>

        <Link href="/" className="relative z-10 flex items-center gap-2.5 font-semibold text-[17px]">
          <span className="w-7 h-7 rounded-[7px] bg-gradient-to-br from-accent to-[#3E6FE0] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B0E14" strokeWidth="2.4" strokeLinecap="round">
              <path d="M4 17 L10 10 L14 14 L20 6" />
            </svg>
          </span>
          Ledger
        </Link>

        <div className="relative z-10 max-w-[540px] my-10 lg:my-0">
          <h1 className="text-[32px] sm:text-[36px] font-semibold leading-[1.28] tracking-[-0.3px] mb-4.5">
            Turn every trade into data, and every piece of data into an edge.
          </h1>
          <p className="text-[15.5px] leading-relaxed text-text-dim">
            Record, categorise and review every trade — then let the numbers show which setups, sessions and habits
            actually make you money.
          </p>
        </div>

        <div className="relative z-10 flex gap-10">
          <div>
            <div className="mono text-[22px] font-semibold">+0.72R</div>
            <div className="text-xs text-text-faint mt-1">avg. expectancy</div>
          </div>
          <div>
            <div className="mono text-[22px] font-semibold">182</div>
            <div className="text-xs text-text-faint mt-1">trades reviewed</div>
          </div>
          <div>
            <div className="mono text-[22px] font-semibold text-profit">62%</div>
            <div className="text-xs text-text-faint mt-1">playbook win rate</div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8 sm:p-14">
        <div className="w-full max-w-[380px] flex flex-col gap-6">
          <div>
            <div className="text-2xl font-semibold mb-2">Welcome back</div>
            <div className="text-[13.5px] text-text-dim">Sign in to review your trading performance.</div>
          </div>

          <div className="flex flex-col gap-2.5">
            <button
              type="button"
              className="flex items-center justify-center gap-2.5 h-[42px] rounded-lg border border-border bg-surface-2 text-[13.5px] font-medium"
            >
              <svg width="15" height="15" viewBox="0 0 16 16">
                <path
                  d="M15.5 8.18c0-.57-.05-1.11-.15-1.64H8v3.1h4.2a3.6 3.6 0 0 1-1.56 2.37v1.96h2.52c1.48-1.36 2.34-3.37 2.34-5.79Z"
                  fill="#4285F4"
                />
                <path
                  d="M8 16c2.1 0 3.87-.7 5.16-1.9l-2.52-1.96c-.7.47-1.6.75-2.64.75-2.03 0-3.75-1.37-4.36-3.21H.99v2.02A8 8 0 0 0 8 16Z"
                  fill="#34A853"
                />
                <path
                  d="M3.64 9.68A4.8 4.8 0 0 1 3.38 8c0-.58.1-1.15.26-1.68V4.3H.99A8 8 0 0 0 0 8c0 1.29.31 2.51.99 3.7l2.65-2.02Z"
                  fill="#FBBC05"
                />
                <path
                  d="M8 3.18c1.14 0 2.17.4 2.98 1.16l2.23-2.23C11.86.83 10.1 0 8 0A8 8 0 0 0 .99 4.3l2.65 2.02C4.25 4.5 5.97 3.18 8 3.18Z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2.5 h-[42px] rounded-lg border border-border bg-surface-2 text-[13.5px] font-medium"
            >
              <svg width="14" height="17" viewBox="0 0 15 18" fill="currentColor">
                <path d="M12.3 9.5c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.7-3.1.7-.6 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2-1.5 2.5-.4 6.2 1 8.2.7 1 1.5 2.1 2.6 2 1-.1 1.4-.7 2.7-.7s1.6.7 2.7.6c1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.1-2.3-.1 0-2.2-.8-2.2-3.2ZM10.2 3c.6-.7 1-1.7.9-2.7-.8 0-1.9.6-2.5 1.2-.5.6-1 1.6-.9 2.6.9.1 1.9-.5 2.5-1.1Z" />
              </svg>
              Continue with Apple
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-border" />
            <div className="text-[11.5px] text-text-faint">or continue with email</div>
            <div className="flex-1 h-px bg-border" />
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[12.5px] text-text-dim">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-[42px] rounded-lg border border-border bg-bg px-3.5 text-[13.5px] focus:outline-none focus:border-accent"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-[12.5px] text-text-dim">
                  Password
                </label>
                <a href="#" className="text-[12.5px] text-accent">
                  Forgot?
                </a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-[42px] rounded-lg border border-border bg-bg px-3.5 text-[13.5px] focus:outline-none focus:border-accent"
              />
            </div>
            <Link
              href="/"
              className="h-11 rounded-lg bg-accent text-bg flex items-center justify-center text-[13.5px] font-semibold mt-1"
            >
              Sign in
            </Link>
          </form>

          <div className="text-center text-[13.5px] text-text-dim">
            Don&rsquo;t have an account? <a href="#" className="text-accent">Create one</a>
          </div>
        </div>
      </div>
    </div>
  );
}
