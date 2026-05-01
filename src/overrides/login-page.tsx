import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { NavbarShell } from '@/components/shared/navbar-shell'

export const LOGIN_PAGE_OVERRIDE_ENABLED = true

export function LoginPageOverride() {
  return (
    <div className="min-h-screen bg-[#fef7ec] text-[#1a2340]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#e7d0aa] bg-[linear-gradient(165deg,#0d1f46_0%,#183467_100%)] p-7 text-white">
            <h1 className="text-4xl font-semibold tracking-[-0.03em]">Sign In</h1>
            <p className="mt-4 text-sm leading-8 text-[#d5dff5]">
              Access your MediyaHub account to publish new releases, manage distribution, and monitor performance.
            </p>
            <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm leading-7 text-[#deebff]">
              Promotion areas, newsroom tools, and publishing controls are available immediately after sign in.
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e7d0aa] bg-white p-7 shadow-[0_20px_55px_rgba(23,34,62,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6530]">Welcome back</p>
            <form className="mt-5 grid gap-4">
              <input className="h-12 rounded-xl border border-[#e3cda8] bg-[#fffaf2] px-4 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]" placeholder="Username" />
              <input type="password" className="h-12 rounded-xl border border-[#e3cda8] bg-[#fffaf2] px-4 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]" placeholder="Password" />
              <button type="submit" className="h-12 rounded-xl bg-[#12244d] text-sm font-semibold text-white transition hover:bg-[#0b1734]">
                Sign In
              </button>
            </form>
            <div className="mt-4 flex items-center justify-between text-sm text-[#5a6582]">
              <Link href="/forgot-password" className="hover:text-[#162447]">Forgot password?</Link>
              <Link href="/register" className="font-semibold text-[#22356a] hover:text-[#12244d]">Create account</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
