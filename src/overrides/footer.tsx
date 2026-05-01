import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

export function FooterOverride() {
  return (
    <footer className="border-t border-[#1b2d57] bg-[linear-gradient(180deg,#081732_0%,#061126_100%)] text-[#e8efff]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ffd480]">MediyaHub</p>
            <h3 className="mt-3 text-2xl font-semibold">{SITE_CONFIG.name}</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#aab8d3]">
              Publish, distribute, and track press releases with a platform designed for media visibility.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9fb0cc]">Platform</p>
            <div className="mt-4 grid gap-2 text-sm">
              <Link href="/updates" className="text-[#d6e2fa] transition hover:text-white">Newswire</Link>
              <Link href="/pricing" className="text-[#d6e2fa] transition hover:text-white">Pricing</Link>
              <Link href="/search" className="text-[#d6e2fa] transition hover:text-white">Search</Link>
              <Link href="/contact" className="text-[#d6e2fa] transition hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9fb0cc]">Company</p>
            <div className="mt-4 grid gap-2 text-sm">
              <Link href="/about" className="text-[#d6e2fa] transition hover:text-white">About</Link>
              <Link href="/press" className="text-[#d6e2fa] transition hover:text-white">Press</Link>
              <Link href="/careers" className="text-[#d6e2fa] transition hover:text-white">Careers</Link>
              <Link href="/help" className="text-[#d6e2fa] transition hover:text-white">Help Center</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9fb0cc]">Legal</p>
            <div className="mt-4 grid gap-2 text-sm">
              <Link href="/privacy" className="text-[#d6e2fa] transition hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-[#d6e2fa] transition hover:text-white">Terms of Service</Link>
              <Link href="/cookies" className="text-[#d6e2fa] transition hover:text-white">Cookies</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-[#97a8c8] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p>Only primary flows are highlighted in navigation. All task routes remain supported.</p>
        </div>
      </div>
    </footer>
  )
}
