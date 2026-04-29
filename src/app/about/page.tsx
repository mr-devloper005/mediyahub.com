import Link from "next/link";
import { BarChart3, Globe2, Megaphone, RadioTower, ShieldCheck, Sparkles } from "lucide-react";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { Footer } from "@/components/shared/footer";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";

const stats = [
  { value: "60+", label: "Media channels covered" },
  { value: "13K+", label: "Organizations using us" },
  { value: "160+", label: "Partnered platforms" },
  { value: "92K+", label: "Press releases published" },
];

const headlineCards = [
  {
    title: "Reach the right readers",
    description: "Distribute stories across channels where journalists, customers, and stakeholders actively monitor updates.",
    icon: RadioTower,
  },
  {
    title: "Show and tell your news",
    description: "Publish press-ready pages with a clean layout, supporting visuals, and shareable metadata.",
    icon: Megaphone,
  },
  {
    title: "Accurate investor relations",
    description: "Keep corporate communications clear with structured announcements and confidence-building delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Optimize with analytics",
    description: "Track publication engagement and distribution impact to improve future campaign performance.",
    icon: BarChart3,
  },
];

const testimonials = [
  {
    quote:
      "MediyaHub has changed how we publish updates. We move from draft to distribution in one smooth workflow.",
    author: "Avery Patel",
    role: "Comms Director, NovaGrid",
  },
  {
    quote:
      "The platform gives us confidence that each release looks professional and reaches the right audience quickly.",
    author: "Sophie Tran",
    role: "PR Lead, Valence Bio",
  },
  {
    quote:
      "Strong structure, modern page design, and clear reporting - our internal teams adopted it immediately.",
    author: "Mason Reed",
    role: "Marketing VP, Lumora Tech",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#edf4ff] text-[#132348]">
      <NavbarShell />
      <main>
        <section className="w-full border-b border-[#c7d9f8] bg-[linear-gradient(155deg,#0b2354_0%,#103374_60%,#0f2a5f_100%)]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#ffd98f]">
              <Sparkles className="h-3.5 w-3.5" />
              About MediyaHub
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Press release distribution and regulatory disclosure experts
            </h1>
            <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <p className="max-w-2xl text-sm leading-8 text-[#d8e4ff]">
                {SITE_CONFIG.name} helps communication teams turn announcements into high-clarity release pages with broad distribution, measurable visibility, and consistent presentation across channels.
              </p>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-[#ffe9b8]">What we focus on</p>
                <ul className="mt-3 space-y-2 text-sm text-[#e1ebff]">
                  <li className="inline-flex items-start gap-2"><Globe2 className="mt-0.5 h-4 w-4 text-[#ffd98f]" />Reliable global-ready distribution</li>
                  <li className="inline-flex items-start gap-2"><Globe2 className="mt-0.5 h-4 w-4 text-[#ffd98f]" />Purpose-built publishing layout</li>
                  <li className="inline-flex items-start gap-2"><Globe2 className="mt-0.5 h-4 w-4 text-[#ffd98f]" />Reporting you can present internally</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <section className="-mt-20 rounded-2xl border border-[#cbdcf7] bg-white p-5 shadow-[0_20px_45px_rgba(18,32,64,0.1)] sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-4xl font-semibold tracking-[-0.03em] text-[#12306e]">{item.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#64708a]">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-7 grid gap-6 rounded-[2rem] border border-[#ccdcf7] bg-white p-6 shadow-[0_20px_50px_rgba(20,35,68,0.08)] lg:grid-cols-[1fr_1fr] lg:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1d4f9d]">Capabilities</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#15264b]">Turn your news into headlines</h2>
              <p className="mt-4 text-sm leading-8 text-[#5f6d8a]">
                Our platform combines release publishing, distribution workflows, and visibility measurement in one communication stack.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {headlineCards.map((card) => (
                <article key={card.title} className="rounded-xl border border-[#d5e1f8] bg-[#f7fbff] p-4 transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(21,38,75,0.08)]">
                  <card.icon className="h-6 w-6 text-[#153873]" />
                  <h3 className="mt-3 text-base font-semibold text-[#15264b]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5f6d8a]">{card.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-7 rounded-[2rem] border border-[#ccdcf7] bg-white p-6 shadow-[0_20px_50px_rgba(20,35,68,0.08)] lg:p-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1d4f9d]">Customer voices</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#15264b]">Deliver your news with confidence</h2>
              </div>
              <Button asChild variant="outline">
                <Link href="/updates">Read releases</Link>
              </Button>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.author} className="rounded-xl border border-[#d5e1f8] bg-[#f7fbff] p-5">
                  <p className="text-sm leading-8 text-[#4f5d79]">"{item.quote}"</p>
                  <p className="mt-4 text-sm font-semibold text-[#15264b]">{item.author}</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#6b7690]">{item.role}</p>
                </article>
              ))}
            </div>
          </section>
        </section>

        <section className="w-full border-y border-[#1d4f9d]/20 bg-[linear-gradient(145deg,#1452a1_0%,#123f80_100%)] px-6 py-12 text-center text-white shadow-[0_24px_55px_rgba(16,46,92,0.35)] sm:px-8">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Join more teams choosing {SITE_CONFIG.name} for press release distribution
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#d7e7ff]">
            Publish with confidence, scale your communication reach, and give your audience a cleaner reading experience.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="bg-[linear-gradient(135deg,#FAB12F,#f59e0b)] text-[#1c1407] hover:brightness-105">
              <Link href="/register">Create Free Account</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/35 bg-white/10 text-white hover:bg-white/15">
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
