import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { NavbarShell } from '@/components/shared/navbar-shell'

export const REGISTER_PAGE_OVERRIDE_ENABLED = true

export function RegisterPageOverride() {
  return (
    <div className="min-h-screen bg-[#fef7ec] text-[#1a2340]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#e7d0aa] bg-white p-7 shadow-[0_20px_55px_rgba(23,34,62,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6530]">Create a new account</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#122144]">Join MediyaHub</h1>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-xl border border-[#e3cda8] bg-[#fffaf2] px-4 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]" placeholder="Company" />
              <input className="h-12 rounded-xl border border-[#e3cda8] bg-[#fffaf2] px-4 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]" placeholder="Email" />
              <input className="h-12 rounded-xl border border-[#e3cda8] bg-[#fffaf2] px-4 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]" placeholder="Phone" />
              <input className="h-12 rounded-xl border border-[#e3cda8] bg-[#fffaf2] px-4 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]" placeholder="Website" />
              <input className="h-12 rounded-xl border border-[#e3cda8] bg-[#fffaf2] px-4 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]" placeholder="Choose Username" />
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="password" className="h-12 rounded-xl border border-[#e3cda8] bg-[#fffaf2] px-4 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]" placeholder="Password" />
                <input type="password" className="h-12 rounded-xl border border-[#e3cda8] bg-[#fffaf2] px-4 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]" placeholder="Confirm" />
              </div>
              <button type="submit" className="h-12 rounded-xl bg-[#12244d] text-sm font-semibold text-white transition hover:bg-[#0b1734]">
                Sign Up
              </button>
            </form>
            <div className="mt-4 text-sm text-[#5a6582]">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-[#22356a] hover:text-[#12244d]">Sign in</Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e7d0aa] bg-[linear-gradient(165deg,#0d1f46_0%,#183467_100%)] p-7 text-white">
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">Promote your business</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[#d5dff5]">
              <li>- Be found by prospects, journalists, and influencers.</li>
              <li>- Increase search visibility for brand announcements.</li>
              <li>- Generate social engagement with distribution-ready content.</li>
              <li>- Manage your online reputation through trusted releases.</li>
            </ul>
            <Link href="/pricing" className="mt-6 inline-flex rounded-full bg-[linear-gradient(135deg,#FAB12F,#f59e0b)] px-5 py-2.5 text-sm font-semibold text-[#1b1205]">
              View plans
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
