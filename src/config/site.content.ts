import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Media Distribution Platform',
  },
  footer: {
    tagline: 'Built for modern press release teams',
  },
  hero: {
    badge: 'Trusted by communication teams',
    title: ['Publish releases with speed, trust, and measurable reach.'],
    description:
      'MediyaHub.com helps brands publish news, distribute stories, and keep journalists updated through a clean, fast newsroom experience.',
    primaryCta: {
      label: 'Browse newswire',
      href: '/updates',
    },
    secondaryCta: {
      label: 'View pricing',
      href: '/pricing',
    },
    searchPlaceholder: 'Search releases by title, brand, or topic',
    focusLabel: 'Newswire',
    featureCardBadge: 'platform note',
    featureCardTitle: 'Every release is structured for fast scanning and sharing.',
    featureCardDescription:
      'Press-focused metadata, clean cards, and readable detail pages help teams publish quickly without sacrificing credibility.',
  },
  home: {
    metadata: {
      title: 'MediyaHub Newswire',
      description:
        'Discover the latest press releases, company announcements, and media updates published on MediyaHub.com.',
      openGraphTitle: 'MediyaHub Newswire',
      openGraphDescription:
        'Browse recent releases, open full stories, and explore the MediyaHub distribution network.',
      keywords: ['press release distribution', 'newswire', 'media hub', 'brand announcements'],
    },
    introBadge: 'About MediyaHub',
    introTitle: 'A newsroom-style platform designed for media announcements.',
    introParagraphs: [
      'MediyaHub.com combines publication-focused UX with a clean SaaS interface so communication teams can publish and distribute confidently.',
      'Visitors can scan news quickly on listing pages, open complete releases on rich detail pages, and navigate by category and recency.',
      'The platform design keeps clarity first: readable typography, structured cards, and low-friction discovery.',
    ],
    sideBadge: 'What teams get',
    sidePoints: [
      'Fast release publishing surfaces.',
      'Structured archive browsing with search and filters.',
      'Readable single-release experiences with social sharing.',
      'A scalable visual system for media-focused products.',
    ],
    primaryLink: {
      label: 'Open newswire',
      href: '/updates',
    },
    secondaryLink: {
      label: 'Explore pricing',
      href: '/pricing',
    },
  },
  cta: {
    badge: 'Start publishing today',
    title: 'Launch your next press release with MediyaHub.com.',
    description:
      'Choose a plan, publish your update, and share a polished release page designed for journalists, partners, and customers.',
    primaryCta: {
      label: 'See plans',
      href: '/pricing',
    },
    secondaryCta: {
      label: 'Browse latest news',
      href: '/updates',
    },
  },
  taskSectionHeading: 'Latest releases',
  taskSectionDescriptionSuffix: 'Read newly published media updates.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles',
    description: 'Read the latest posts and long-form updates.',
  },
  listing: {
    title: 'Listings',
    description: 'Explore listings and directory-style entries.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Browse classifieds and short-form notices.',
  },
  image: {
    title: 'Images',
    description: 'Browse image-led updates and visual posts.',
  },
  profile: {
    title: 'Profiles',
    description: 'View profile pages and public identities.',
  },
  sbm: {
    title: 'Bookmarks',
    description: 'Browse curated resources and saved links.',
  },
  pdf: {
    title: 'Resources',
    description: 'Open PDFs and downloadable files.',
  },
  mediaDistribution: {
    title: 'Press releases',
    description: 'Browse the latest press releases and media announcements.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: { title: 'Listings', paragraphs: ['Directory entries and service pages.'], links: [{ label: 'Home', href: '/' }] },
  article: { title: 'Articles', paragraphs: ['General long-form article feed.'], links: [{ label: 'Home', href: '/' }] },
  classified: { title: 'Classifieds', paragraphs: ['Short-form posts and notices.'], links: [{ label: 'Home', href: '/' }] },
  image: { title: 'Images', paragraphs: ['Image-first posts and galleries.'], links: [{ label: 'Home', href: '/' }] },
  profile: { title: 'Profiles', paragraphs: ['Profile pages and identity surfaces.'], links: [{ label: 'Home', href: '/' }] },
  sbm: { title: 'Bookmarks', paragraphs: ['Curated saved links and references.'], links: [{ label: 'Home', href: '/' }] },
  pdf: { title: 'Resources', paragraphs: ['Downloadable files and documents.'], links: [{ label: 'Home', href: '/' }] },
  social: { title: 'Social', paragraphs: ['Short updates and activity.'], links: [{ label: 'Home', href: '/' }] },
  comment: { title: 'Comments', paragraphs: ['Commentary and response posts.'], links: [{ label: 'Home', href: '/' }] },
  org: { title: 'Organizations', paragraphs: ['Organization pages and entities.'], links: [{ label: 'Home', href: '/' }] },
  mediaDistribution: {
    title: 'Newswire',
    paragraphs: [
      'This section is optimized for press release discovery with clear metadata, structured summaries, and direct access to full stories.',
      'Use filters and search to find relevant updates quickly, then open each release page for complete details and media-ready reading.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}
