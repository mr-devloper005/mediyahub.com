import Link from 'next/link'
import { CalendarDays, Funnel, Search } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { ContentImage } from '@/components/shared/content-image'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Open this release to view complete details.'
  return value.length > 150 ? value.slice(0, 147).trimEnd() + '...' : value
}

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, '-')
}

function getPostImage(post: any, fallback: string) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post?.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const contentImage = Array.isArray(content.images) ? content.images.find((value) => typeof value === 'string') : null
  const logo = typeof content.logo === 'string' ? content.logo : null
  return (mediaUrl || contentImage || logo || fallback) as string
}

export async function TaskListPageOverride({ category, q, date }: { task: TaskKey; category?: string; q?: string; date?: string }) {
  const posts = await fetchTaskPosts('mediaDistribution', 48)
  const searchQuery = (q || '').trim().toLowerCase()
  const selectedCategory = category || 'all'
  const selectedDate = date || 'all'
  const now = Date.now()

  const categoryOptions = Array.from(
    new Set(
      posts
        .map((post) => String((post.content as any)?.category || '').trim())
        .filter((value) => Boolean(value))
    )
  )

  const filtered = posts.filter((post) => {
    const title = (post.title || '').toLowerCase()
    const summary = (post.summary || '').toLowerCase()
    const postCategory = normalize(String((post.content as any)?.category || ''))
    const categoryPass = selectedCategory === 'all' ? true : postCategory === selectedCategory
    const searchPass = searchQuery ? title.includes(searchQuery) || summary.includes(searchQuery) : true

    const publishedAt = post.publishedAt ? new Date(post.publishedAt).getTime() : now
    const ageDays = Math.floor((now - publishedAt) / 86400000)
    const datePass =
      selectedDate === 'all'
        ? true
        : selectedDate === '7d'
          ? ageDays <= 7
          : selectedDate === '30d'
            ? ageDays <= 30
            : selectedDate === 'year'
              ? new Date(publishedAt).getFullYear() === new Date(now).getFullYear()
              : true

    return categoryPass && searchPass && datePass
  })

  return (
    <div className="min-h-screen bg-[#fef7ec] text-[#1a2340]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-[#ecd6b0] bg-white p-6 shadow-[0_24px_60px_rgba(23,34,62,0.08)] lg:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6530]">MediyaHub Newswire</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-[-0.03em] text-[#122144] sm:text-5xl">Browse News Releases</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5a6582]">
                Explore company announcements, product updates, partnerships, and market news from the MediyaHub network.
              </p>
            </div>
            <Link href="/pricing" className="inline-flex rounded-full border border-[#dfc08e] bg-[#fff7e8] px-4 py-2 text-sm font-semibold text-[#3f2f13]">
              Explore plans
            </Link>
          </div>

          <form className="mt-6 grid gap-3 rounded-2xl border border-[#efdcbc] bg-[#fffaf2] p-4 md:grid-cols-[1fr_0.9fr_0.7fr_auto]">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8c6530]" />
              <input
                name="q"
                defaultValue={q}
                placeholder="Search releases..."
                className="h-11 w-full rounded-xl border border-[#e4ceaa] bg-white pl-10 pr-3 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]"
              />
            </label>
            <label className="relative block">
              <Funnel className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8c6530]" />
              <select
                name="category"
                defaultValue={selectedCategory}
                className="h-11 w-full rounded-xl border border-[#e4ceaa] bg-white pl-10 pr-3 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]"
              >
                <option value="all">All categories</option>
                {categoryOptions.map((item) => (
                  <option key={item} value={normalize(item)}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="relative block">
              <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8c6530]" />
              <select
                name="date"
                defaultValue={selectedDate}
                className="h-11 w-full rounded-xl border border-[#e4ceaa] bg-white pl-10 pr-3 text-sm text-[#1a2340] outline-none transition focus:border-[#f0b349]"
              >
                <option value="all">Any date</option>
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="year">This year</option>
              </select>
            </label>
            <button type="submit" className="h-11 rounded-xl bg-[#12244d] px-5 text-sm font-semibold text-white transition hover:bg-[#0b1734]">
              Apply
            </button>
          </form>
        </section>

        <section className="mt-8">
          {filtered.length ? (
            <>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-[#5a6582]">Showing {filtered.length} release{filtered.length === 1 ? '' : 's'}</p>
                <Link href="/search" className="text-sm font-semibold text-[#22356a]">Advanced search</Link>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((post, index) => (
                  <Link
                    key={post.id}
                    href={`/updates/${post.slug}`}
                    className="group overflow-hidden rounded-[1.6rem] border border-[#ecd6b0] bg-white shadow-[0_18px_42px_rgba(23,34,62,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_rgba(23,34,62,0.14)]"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <ContentImage
                        src={getPostImage(post, index % 2 === 0 ? 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80' : 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80')}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8c6530]">
                        {String((post.content as any)?.category || 'Release')}
                      </p>
                      <h2 className="mt-2 line-clamp-2 text-xl font-semibold leading-snug text-[#122144]">{post.title}</h2>
                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#5a6582]">{excerpt(post.summary)}</p>
                      <div className="mt-4 flex items-center justify-between text-xs text-[#6f7896]">
                        <span>{new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        <span>{post.authorName || 'MediyaHub Desk'}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#d9c39d] bg-[#fffaf2] p-10 text-center">
              <h3 className="text-2xl font-semibold text-[#1a2340]">No releases match these filters</h3>
              <p className="mt-3 text-sm text-[#5a6582]">Try a different category, date range, or search term.</p>
              <Link href="/updates" className="mt-5 inline-flex rounded-full bg-[#12244d] px-5 py-2 text-sm font-semibold text-white">
                Reset filters
              </Link>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}
