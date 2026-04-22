import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-[#fef7ec] text-[#1a2340]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-[#edd6b3] bg-white p-6 shadow-[0_24px_60px_rgba(23,34,62,0.08)] lg:p-8">
          <h1 className="text-center text-4xl font-semibold tracking-[-0.03em] text-[#122144] sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-8 text-[#576383]">
            Need help with release publishing, distribution planning, billing, or editorial support? Send a message and our team will respond quickly.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <form className="rounded-2xl border border-[#efdcbc] bg-[#fffaf1] p-5 sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="h-12 rounded-xl border border-[#e3cda8] bg-white px-4 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]" placeholder="Contact Name *" />
                <input className="h-12 rounded-xl border border-[#e3cda8] bg-white px-4 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]" placeholder="Phone Number" />
              </div>
              <input className="mt-4 h-12 w-full rounded-xl border border-[#e3cda8] bg-white px-4 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]" placeholder="Email *" />
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <select className="h-12 rounded-xl border border-[#e3cda8] bg-white px-4 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]">
                  <option>What type of organization are you?</option>
                  <option>Startup</option>
                  <option>Agency</option>
                  <option>Enterprise</option>
                </select>
                <select className="h-12 rounded-xl border border-[#e3cda8] bg-white px-4 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]">
                  <option>Subject: How may we help?</option>
                  <option>General support</option>
                  <option>Distribution</option>
                  <option>Billing</option>
                </select>
              </div>
              <textarea className="mt-4 min-h-[170px] w-full rounded-2xl border border-[#e3cda8] bg-white px-4 py-3 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]" placeholder="Message / Comment *" />
              <button type="submit" className="mt-5 inline-flex h-12 items-center justify-center rounded-full bg-[#12244d] px-8 text-sm font-semibold text-white transition hover:bg-[#0a1631]">
                Submit Now
              </button>
            </form>

            <div className="space-y-4">
              <div className="rounded-2xl border border-[#edd6b3] bg-[#0d1e44] p-5 text-white sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ffd480]">Support Hours</p>
                <p className="mt-2 text-sm leading-7 text-[#d6dff3]">Monday to Friday</p>
                <p className="text-sm leading-7 text-[#d6dff3]">8:30am to 5:00pm Pacific (PDT)</p>
              </div>

              <div className="rounded-2xl border border-[#edd6b3] bg-white p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8c6530]">Telephone</p>
                <p className="mt-2 text-lg font-semibold text-[#122144]">+1 888-880-9539</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#8c6530]">US Address</p>
                <p className="mt-2 text-sm leading-7 text-[#55617f]">Suite 1400 - 505 Second Avenue, Seattle, WA 98104, USA</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#8c6530]">Canada Address</p>
                <p className="mt-2 text-sm leading-7 text-[#55617f]">Suite 203 - 901 West 3rd St, North Vancouver, BC V7P 3P9</p>
              </div>

              <div className="rounded-2xl border border-[#edd6b3] bg-[linear-gradient(135deg,#FAB12F,#f59e0b)] p-5 text-[#221705] sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em]">Quick Answers</p>
                <h2 className="mt-2 text-xl font-semibold">Check our FAQs for fast solutions</h2>
                <a href="/help" className="mt-4 inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[#1d1405] transition hover:bg-white">
                  View FAQs
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
