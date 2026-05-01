'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

const primaryLinks = [
  { label: 'Home', href: '/' },
  { label: 'Newswire', href: '/updates' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
] as const

export function NavbarOverride() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#112043] bg-[#081732]/95 text-[#fff7e8] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#FAB12F,#f59e0b)] text-base font-black text-[#1a1305] shadow-[0_8px_24px_rgba(250,177,47,0.35)]">
            MH
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[0.12em] text-[#ffd480]">MEDIYAHUB</p>
            <p className="text-[11px] text-[#b6c4df]">Press Release Network</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {primaryLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#d5def0] transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/search"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#d5def0] transition hover:bg-white/10 hover:text-white"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </Link>
          <Link href="/login" className="rounded-full px-4 py-2 text-sm font-medium text-[#d5def0] transition hover:bg-white/10 hover:text-white">
            Sign In
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-[linear-gradient(135deg,#FAB12F,#f59e0b)] px-4 py-2 text-sm font-semibold text-[#171008] transition hover:brightness-105"
          >
            Publish Now
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 md:hidden"
          onClick={() => setIsMobileOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileOpen ? (
        <div className="border-t border-white/10 bg-[#0a1a38] px-4 py-4 md:hidden">
          <div className="grid gap-2">
            {primaryLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[#d5def0] transition hover:bg-white/10 hover:text-white"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link href="/login" className="rounded-xl border border-white/15 px-4 py-3 text-center text-sm font-medium text-[#d5def0]">
                Sign In
              </Link>
              <Link href="/register" className="rounded-xl bg-[linear-gradient(135deg,#FAB12F,#f59e0b)] px-4 py-3 text-center text-sm font-semibold text-[#171008]">
                Join
              </Link>
            </div>
            <Link href="/search" className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-medium text-[#d5def0]">
              <Search className="h-4 w-4" />
              Search
            </Link>
            <p className="mt-2 text-center text-xs text-[#9fb0cc]">{SITE_CONFIG.name}</p>
          </div>
        </div>
      ) : null}
    </header>
  )
}
