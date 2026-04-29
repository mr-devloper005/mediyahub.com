import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'
import { ContentImage } from '@/components/shared/content-image'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Open this release for complete details.'
  return value.length > 140 ? `${value.slice(0, 137).trimEnd()}...` : value
}

function getImage(post: any, fallback: string) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post?.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const contentImage = Array.isArray(content.images) ? content.images.find((value) => typeof value === 'string') : null
  const logo = typeof content.logo === 'string' ? content.logo : null
  return (mediaUrl || contentImage || logo || fallback) as string
}

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()
  const related = (await fetchTaskPosts('mediaDistribution', 8)).filter((item) => item.slug !== slug).slice(0, 3)
  const content = (post.content || {}) as Record<string, unknown>
  const html = formatRichHtml((content.body as string) || post.summary || '', 'Post body will appear here.')
  const subtitle = post.summary || (typeof content.description === 'string' ? content.description : '')
  const postUrl = `https://mediyahub.com/updates/${post.slug}`
  const encodedUrl = encodeURIComponent(postUrl)
  const encodedTitle = encodeURIComponent(post.title)

  return (
    <div className="min-h-screen bg-[#fef7ec] text-[#1a2340]">
      <NavbarShell />
      <section className="border-b border-[#e9d2ab] bg-[linear-gradient(160deg,#081732_0%,#122b60_100%)] py-12 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#d7e4ff]">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/updates" className="hover:text-white">Newswire</Link>
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">{post.title}</h1>
          {subtitle ? <p className="mt-4 max-w-4xl text-base leading-8 text-[#dbe6ff]">{subtitle}</p> : null}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#c9d7f3]">
            <span className="rounded-full bg-white/10 px-3 py-1">{new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>By {post.authorName || 'MediyaHub Editorial Team'}</span>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="overflow-hidden rounded-[2rem] border border-[#ecd5af] bg-white p-6 shadow-[0_24px_60px_rgba(23,34,62,0.08)] lg:p-8">
            <div className="relative mb-7 h-72 overflow-hidden rounded-2xl sm:h-[460px]">
              <ContentImage
                src={getImage(post, 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80')}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="prose prose-lg max-w-none text-[#33405e] prose-p:leading-8 prose-headings:text-[#132348] prose-strong:text-[#132348]">
              <RichContent html={html} />
            </div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-[#e6cfaa] bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8c6530]">Share this release</p>
              <div className="mt-4 grid gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#e9d2ab] px-3 py-2 text-sm font-medium text-[#1a2340] transition hover:bg-[#fff7e8]"
                >
                  <Twitter className="h-4 w-4" />
                  Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#e9d2ab] px-3 py-2 text-sm font-medium text-[#1a2340] transition hover:bg-[#fff7e8]"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#e9d2ab] px-3 py-2 text-sm font-medium text-[#1a2340] transition hover:bg-[#fff7e8]"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e6cfaa] bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8c6530]">Release details</p>
              <p className="mt-3 text-sm text-[#5a6582]">Published {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              <p className="mt-2 text-sm text-[#5a6582]">Author: {post.authorName || 'MediyaHub Editorial Team'}</p>
              <Link href="/updates" className="mt-4 inline-flex rounded-full bg-[#12244d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0b1734]">
                Back to newswire
              </Link>
            </div>
          </aside>
        </div>

        <section className="mt-10 rounded-[2rem] border border-[#ecd5af] bg-white p-6 shadow-[0_20px_50px_rgba(23,34,62,0.08)] lg:p-8">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-[#132348]">Related Articles</h2>
            <Link href="/updates" className="text-sm font-semibold text-[#22356a]">View all</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((item, index) => (
              <Link key={item.id} href={`/updates/${item.slug}`} className="group overflow-hidden rounded-2xl border border-[#e9d2ab] bg-[#fffaf2] transition hover:-translate-y-0.5 hover:bg-white">
                <div className="relative h-36 overflow-hidden">
                  <ContentImage
                    src={getImage(item, index === 0 ? 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80' : 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80')}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#8c6530]">{String((item.content as any)?.category || 'Release')}</p>
                  <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-[#132348]">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-[#5a6582]">{excerpt(item.summary)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
