import Link from 'next/link'
import { CheckCircle2, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const plans = [
  {
    name: 'Basic',
    price: '$49',
    subtitle: 'For startups launching first releases',
    distribution: 'Regional channels',
    analytics: 'Core metrics dashboard',
    reach: 'Up to 15k audience reach',
    popular: false,
    features: ['1 release per month', 'Standard media formatting', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$129',
    subtitle: 'For growing teams needing stronger visibility',
    distribution: 'National distribution',
    analytics: 'Advanced engagement analytics',
    reach: 'Up to 80k audience reach',
    popular: true,
    features: ['4 releases per month', 'Priority editorial review', 'Release performance report'],
  },
  {
    name: 'Premium',
    price: '$299',
    subtitle: 'For enterprise-level media operations',
    distribution: 'Premium + niche vertical channels',
    analytics: 'Custom dashboard and exports',
    reach: '250k+ media and audience reach',
    popular: false,
    features: ['Unlimited monthly releases', 'Dedicated success manager', 'Top-tier distribution windows'],
  },
]

const addOns = [
  { name: 'Media Monitoring', price: '$39/mo', description: 'Track mentions and pickup after publication.' },
  { name: 'Editorial Rewrite', price: '$79/release', description: 'Professional rewrite to sharpen release quality.' },
  { name: 'Homepage Spotlight', price: '$99/week', description: 'Promote your release on highlighted slots.' },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#fef7ec] text-[#192441]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-[#ecd5ae] bg-[linear-gradient(160deg,#081732_0%,#122b60_100%)] p-7 text-white shadow-[0_28px_60px_rgba(12,24,54,0.4)] sm:p-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffe1a6]">
            <Sparkles className="h-4 w-4" />
            Pricing
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Simple pricing for every release stage</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-[#d8e4ff]">
            Pick the plan that matches your publishing volume and distribution goals. Upgrade anytime as your media strategy grows.
          </p>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[1.8rem] border p-6 shadow-[0_22px_52px_rgba(23,34,62,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(23,34,62,0.14)] ${
                plan.popular
                  ? 'border-[#f0b349] bg-[linear-gradient(180deg,#fffaf1_0%,#fff6e5_100%)]'
                  : 'border-[#ecd5ae] bg-white'
              }`}
            >
              {plan.popular ? (
                <p className="inline-flex rounded-full bg-[#12244d] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                  Most Popular
                </p>
              ) : null}
              <h2 className="mt-3 text-2xl font-semibold text-[#132348]">{plan.name}</h2>
              <p className="mt-1 text-sm text-[#5a6582]">{plan.subtitle}</p>
              <p className="mt-4 text-4xl font-semibold text-[#12244d]">{plan.price}<span className="text-base font-medium text-[#5a6582]">/mo</span></p>

              <ul className="mt-5 space-y-2 text-sm text-[#4e5978]">
                {plan.features.map((feature) => (
                  <li key={feature} className="inline-flex w-full items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#d68a1b]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 h-11 w-full rounded-full bg-[#12244d] text-sm font-semibold text-white transition hover:bg-[#0b1734]">
                Get {plan.name}
              </button>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-[2rem] border border-[#ecd5ae] bg-white p-6 shadow-[0_22px_52px_rgba(23,34,62,0.08)] lg:p-8">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#132348]">Feature comparison</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#ecd5ae] text-left text-[#8c6530]">
                  <th className="py-3 pr-4 font-semibold">Capability</th>
                  <th className="py-3 pr-4 font-semibold">Basic</th>
                  <th className="py-3 pr-4 font-semibold">Pro</th>
                  <th className="py-3 font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody className="text-[#4e5978]">
                <tr className="border-b border-[#f2e3ca]">
                  <td className="py-3 pr-4 font-medium text-[#1f2c4f]">Distribution Level</td>
                  <td className="py-3 pr-4">Regional</td>
                  <td className="py-3 pr-4">National</td>
                  <td className="py-3">Premium + Vertical</td>
                </tr>
                <tr className="border-b border-[#f2e3ca]">
                  <td className="py-3 pr-4 font-medium text-[#1f2c4f]">Analytics</td>
                  <td className="py-3 pr-4">Core metrics</td>
                  <td className="py-3 pr-4">Engagement analytics</td>
                  <td className="py-3">Custom reporting exports</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-[#1f2c4f]">Media Reach</td>
                  <td className="py-3 pr-4">15k</td>
                  <td className="py-3 pr-4">80k</td>
                  <td className="py-3">250k+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-[#ecd5ae] bg-white p-6 shadow-[0_20px_45px_rgba(23,34,62,0.08)]">
            <h2 className="text-2xl font-semibold text-[#132348]">Add-ons</h2>
            <div className="mt-4 space-y-3">
              {addOns.map((addon) => (
                <div key={addon.name} className="rounded-xl border border-[#edd9b7] bg-[#fffaf2] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-semibold text-[#1f2c4f]">{addon.name}</h3>
                    <p className="text-sm font-semibold text-[#8c6530]">{addon.price}</p>
                  </div>
                  <p className="mt-2 text-sm text-[#5a6582]">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#ecd5ae] bg-white p-6 shadow-[0_20px_45px_rgba(23,34,62,0.08)]">
            <h2 className="text-2xl font-semibold text-[#132348]">FAQs</h2>
            <Accordion type="single" collapsible className="mt-3">
              <AccordionItem value="item-1">
                <AccordionTrigger>Can I upgrade my plan anytime?</AccordionTrigger>
                <AccordionContent>
                  Yes. You can switch from Basic to Pro or Premium at any point without changing your published content.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do plans include release analytics?</AccordionTrigger>
                <AccordionContent>
                  Every plan includes analytics, with deeper reporting and exports available on higher tiers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What happens if I exceed plan limits?</AccordionTrigger>
                <AccordionContent>
                  You can buy one-time add-ons or upgrade to a higher plan for broader distribution and volume.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[#ecd5ae] bg-[#12244d] p-7 text-white">
          <h2 className="text-3xl font-semibold tracking-[-0.02em]">Ready to publish your next release?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#d5e0f6]">
            Start with a plan that fits your current volume and scale as your distribution goals grow.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/register" className="rounded-full bg-[linear-gradient(135deg,#FAB12F,#f59e0b)] px-6 py-3 text-sm font-semibold text-[#1c1305]">
              Create Account
            </Link>
            <Link href="/contact" className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white">
              Contact Sales
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
