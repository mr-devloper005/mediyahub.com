import Link from 'next/link'
import { ArrowRight, BarChart3, CheckCircle2, Megaphone, Newspaper, RadioTower, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { ContentImage } from '@/components/shared/content-image'

export const HOME_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the complete press release for details.'
  return value.length > 170 ? value.slice(0, 167).trimEnd() + '...' : value
}

function getImage(post: any, fallback: string) {
  const media = Array.isArray(post?.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post?.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const contentImage = Array.isArray(content.images) ? content.images.find((value) => typeof value === 'string') : null
  const logo = typeof content.logo === 'string' ? content.logo : null
  return (mediaUrl || contentImage || logo || fallback) as string
}

const FREEPIK_IMAGES = {
  hero: 'https://img.freepik.com/free-photo/businessman-presenting-project-colleagues_23-2147626533.jpg',
  storyA: 'https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-13391.jpg',
  storyB: 'https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg',
  storyC: 'https://img.freepik.com/free-photo/startup-team-meeting-modern-office_23-2148009305.jpg',
  gridA: 'https://img.freepik.com/free-photo/marketing-branding-strategy-business-vision-concept_53876-124694.jpg',
  gridB: 'https://img.freepik.com/free-photo/close-up-business-people-working-with-tablet_23-2149300647.jpg',
  testimonialA: 'https://img.freepik.com/free-photo/portrait-smiling-businesswoman_23-2148447744.jpg',
  testimonialB: 'https://img.freepik.com/free-photo/portrait-young-businessman_23-2148479543.jpg',
  testimonialC: 'https://img.freepik.com/free-photo/confident-young-businesswoman_23-2148779795.jpg',
}

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 18)
  const featured = posts[0]
  const spotlight = posts.slice(1, 4)
  const feed = posts.slice(4, 12)

  return (
    <div className="min-h-screen bg-[#fef7ec] text-[#1d2540]">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden border-b border-[#efdcbb] bg-[linear-gradient(160deg,#081732_0%,#0e2450_60%,#1f3a73_100%)]">
          <div className="absolute -left-14 top-16 h-52 w-52 rounded-full bg-[#FAB12F]/20 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-[#fef3e2]/15 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffe1a6]">
                <Megaphone className="h-4 w-4" />
                MediyaHub Newsroom
              </span>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                Publish company news and reach media faster.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#d3ddf5]">
                A cleaner distribution experience for press teams - structured release pages, clear archives, and scan-friendly design inspired by leading newswire platforms.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/updates" className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#FAB12F,#f59e0b)] px-6 py-3 text-sm font-semibold text-[#1d1405] transition hover:brightness-105">
                  Browse Releases
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/pricing" className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                  View Pricing
                </Link>
              </div>
              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Distribution lanes', value: '120+' },
                  { label: 'Media contacts', value: '25k+' },
                  { label: 'Avg publish time', value: '< 10 min' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <p className="text-xl font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#d3ddf5]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 backdrop-blur">
              {featured ? (
                <>
                  <div className="relative h-60 overflow-hidden rounded-2xl sm:h-72">
                    <ContentImage
                      src={getImage(featured, FREEPIK_IMAGES.hero)}
                      alt={featured.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    <p className="absolute bottom-4 left-4 inline-flex rounded-full bg-[#FAB12F] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#171008]">
                      Featured Release
                    </p>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold leading-tight text-white">{featured.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#dbe6ff]">{excerpt(featured.summary)}</p>
                  <Link href={`/updates/${featured.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#ffe1a6]">
                    Read full release
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </>
              ) : (
                <p className="text-sm text-[#dbe6ff]">No featured release available yet.</p>
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-[#efd9b5] bg-white p-6 shadow-[0_20px_50px_rgba(27,35,61,0.08)]">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6530]">
                <RadioTower className="h-4 w-4" />
                Distribution Reach
              </p>
              <p className="mt-3 text-sm leading-7 text-[#55617f]">
                Send your release to premium channels and publish on a polished page built for journalists.
              </p>
            </div>
            <div className="rounded-3xl border border-[#efd9b5] bg-white p-6 shadow-[0_20px_50px_rgba(27,35,61,0.08)]">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6530]">
                <BarChart3 className="h-4 w-4" />
                Performance Signals
              </p>
              <p className="mt-3 text-sm leading-7 text-[#55617f]">
                Monitor release visibility using analytics-friendly layouts and clear publication metadata.
              </p>
            </div>
            <div className="rounded-3xl border border-[#efd9b5] bg-white p-6 shadow-[0_20px_50px_rgba(27,35,61,0.08)]">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6530]">
                <Newspaper className="h-4 w-4" />
                Newsroom UX
              </p>
              <p className="mt-3 text-sm leading-7 text-[#55617f]">
                Designed for readability across desktop and mobile so every update feels publication-ready.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6530]">Top stories</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#192441]">Latest releases on MediyaHub</h2>
            </div>
            <Link href="/updates" className="inline-flex items-center gap-2 text-sm font-semibold text-[#22356a] transition hover:text-[#101a34]">
              View full newswire
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {spotlight.map((post, index) => (
              <Link
                key={post.id}
                href={`/updates/${post.slug}`}
                className="group overflow-hidden rounded-[1.7rem] border border-[#eed7b0] bg-white shadow-[0_20px_45px_rgba(27,35,61,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_55px_rgba(27,35,61,0.14)]"
              >
                <div className="relative h-44 overflow-hidden">
                  <ContentImage
                    src={getImage(post, index === 0 ? FREEPIK_IMAGES.storyA : index === 1 ? FREEPIK_IMAGES.storyB : FREEPIK_IMAGES.storyC)}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6530]">
                    {String((post.content as any)?.category || 'Press release')}
                  </p>
                  <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-[#162240]">{post.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#5a6582]">{excerpt(post.summary)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 rounded-[2rem] border border-[#efdcbb] bg-white p-6 shadow-[0_24px_60px_rgba(27,35,61,0.08)] lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-[#fef3e2] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6530]">
                <Sparkles className="h-3.5 w-3.5" />
                Pricing preview
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#17233f]">Flexible plans for startups, agencies, and enterprise teams.</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  'Basic - launch and publish quickly',
                  'Pro - add analytics and broader distribution',
                  'Premium - full reach with newsroom support',
                ].map((item) => (
                  <p key={item} className="inline-flex items-center gap-2 text-sm text-[#4f5a78]">
                    <CheckCircle2 className="h-4 w-4 text-[#d68a1b]" />
                    {item}
                  </p>
                ))}
              </div>
              <Link href="/pricing" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#11254f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0a1835]">
                Compare plans
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-4 rounded-2xl border border-[#efdcbb] bg-[#fffaf2] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8c6530]">Primary Focus</p>
              <h3 className="text-xl font-semibold text-[#17233f]">Media Press Release</h3>
              <p className="text-sm leading-7 text-[#5a6582]">
                This site prioritizes press release publishing and discovery. Other task routes remain available through direct URLs and system surfaces.
              </p>
              <div className="grid gap-2 text-sm text-[#4f5a78]">
                <p>Secondary surfaced pages: Pricing, Contact</p>
                <p>All task routes remain active in the shared base system.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6530]">Media visuals</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#162240]">Press-ready visuals from our media desk</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div className="relative h-72 overflow-hidden rounded-[1.7rem] border border-[#eed7b0] bg-white shadow-[0_20px_45px_rgba(27,35,61,0.08)] sm:h-96">
              <ContentImage src={FREEPIK_IMAGES.gridA} alt="MediyaHub newsroom visual" fill className="object-cover" />
            </div>
            <div className="relative h-72 overflow-hidden rounded-[1.7rem] border border-[#eed7b0] bg-white shadow-[0_20px_45px_rgba(27,35,61,0.08)] sm:h-96">
              <ContentImage src={FREEPIK_IMAGES.gridB} alt="MediyaHub analytics visual" fill className="object-cover" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6530]">Testimonials</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#162240]">What communication teams say</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                quote: 'MediyaHub helped us publish and distribute our campaign updates in minutes, not days.',
                name: 'Samantha Lee',
                role: 'PR Manager, Technova',
                image: FREEPIK_IMAGES.testimonialA,
              },
              {
                quote: 'The release pages are clean, professional, and easy for journalists to scan quickly.',
                name: 'Rohan Mehta',
                role: 'Communications Lead, BrightEdge',
                image: FREEPIK_IMAGES.testimonialB,
              },
              {
                quote: 'We finally have one platform for pricing, publishing, analytics, and media visibility.',
                name: 'Diana Cruz',
                role: 'Head of Content, Skylink',
                image: FREEPIK_IMAGES.testimonialC,
              },
            ].map((item) => (
              <article key={item.name} className="rounded-[1.7rem] border border-[#eed7b0] bg-white p-5 shadow-[0_20px_45px_rgba(27,35,61,0.08)]">
                <div className="relative h-48 overflow-hidden rounded-xl">
                  <ContentImage src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <p className="mt-4 text-sm leading-7 text-[#4f5a78]">"{item.quote}"</p>
                <p className="mt-4 text-base font-semibold text-[#162240]">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-[#8c6530]">{item.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#efdcbb] bg-[#fffaf1]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6530]">Newswire feed</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#162240]">More releases</h2>
                </div>
              <Link href="/updates" className="text-sm font-semibold text-[#22356a] hover:text-[#101a34]">
                Open archive
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {feed.map((post) => (
                <article key={post.id} className="rounded-2xl border border-[#efdcbb] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_18px_32px_rgba(23,34,62,0.08)]">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#8c6530]">
                    {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                  <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-[#162240]">{post.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#5a6582]">{excerpt(post.summary)}</p>
                  <Link href={`/updates/${post.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#22356a]">
                    Open release
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[#e7cc9f] bg-[linear-gradient(145deg,#12244d_0%,#1d3b77_100%)] p-7 text-white shadow-[0_24px_60px_rgba(16,29,60,0.35)] sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffd480]">Call to action</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Ready to publish your next press release?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-[#d6e1f8]">
              Start with MediyaHub to reach journalists, publish polished release pages, and track visibility from one dashboard.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/register" className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#FAB12F,#f59e0b)] px-6 py-3 text-sm font-semibold text-[#1d1405] transition hover:brightness-105">
                Create Free Account
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
