import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { fetchTaskPosts } from '@/lib/task-data'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const FOOTER_OVERRIDE_ENABLED = true


const getCategoryLabel = (value: string) => {
  const normalized = normalizeCategory(value)
  return CATEGORY_OPTIONS.find((item) => item.slug === normalized)?.name || value
}


export async function FooterOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 200, { allowMockFallback: false })
  const categories = Array.from(
    new Map(
      posts
        .map((post) => {
          const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
          const raw = typeof content.category === 'string' ? content.category.trim() : ''
          if (!raw) return null
          const slug = normalizeCategory(raw)
          return { slug, name: getCategoryLabel(raw) }
        })
        .filter((item): item is { slug: string; name: string } => Boolean(item))
        .map((item) => [item.slug, item])
    ).values()
  ).slice(0, 8)

  return (
    <footer className="border-t border-[#1b2d57] bg-[linear-gradient(180deg,#081732_0%,#061126_100%)] text-[#e8efff]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ffd480]">MediyaHub</p>
            <h3 className="mt-3 text-2xl font-semibold">{SITE_CONFIG.name}</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#aab8d3]">
              Publish, distribute, and track newswire with a platform designed for media visibility.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9fb0cc]">Platform</p>
            <div className="mt-4 grid gap-2 text-sm">
              <Link href="/updates" className="text-[#d6e2fa] transition hover:text-white">Newswire</Link>
              <Link href="/search" className="text-[#d6e2fa] transition hover:text-white">Search</Link>
              <Link href="/contact" className="text-[#d6e2fa] transition hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9fb0cc]">Company</p>
            <div className="mt-4 grid gap-2 text-sm">
              <Link href="/about" className="text-[#d6e2fa] transition hover:text-white">About</Link>
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


        {categories.length ? (
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Categories</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/updates?category=${category.slug}`}
                  className="opacity-80 underline-offset-4 transition hover:opacity-100 hover:underline"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-[#97a8c8] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p>Only primary flows are highlighted in navigation. All task routes remain supported.</p>
        </div>
      </div>
    </footer>
  )
}
