export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'x4fp4f7hhk',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Mediya Hub',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Independent media updates',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A simple newsroom-style publication for announcements, coverage, and media updates on Mediya Hub.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'mediyahub.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mediyahub.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
