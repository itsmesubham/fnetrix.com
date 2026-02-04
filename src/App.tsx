import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Cpu,
  Globe,
  Layers,
  Lock,
  Mail,
  Menu,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

// ------------------------------------------------------------
// Fnetrix.com – Single-file marketing site (React + Tailwind)
// - Clean enterprise feel (SAP/Oracle/Salesforce-inspired)
// - Happy theme (bright gradients + friendly microcopy)
// - Production-ready sections + simple interactions
// ------------------------------------------------------------

const brand = {
  name: "Fnetrix",
  tagline: "Build. Integrate. Scale.",
  subtag: "Modern ERP, web apps, and mobile apps—delivered with enterprise discipline and startup speed.",
  primaryCta: "Book a demo",
  secondaryCta: "See capabilities",
  email: "hello@fnetrix.com",
  phone: "+91-00000-00000",
};

const nav = [
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Why Fnetrix", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const solutions = [
  {
    title: "ERP Implementations",
    desc: "Finance, inventory, procurement, HR—configured to your workflows with clean data, controls, and reporting.",
    icon: Layers,
    bullets: ["Process mapping", "Role-based access", "Audit-ready reporting"],
  },
  {
    title: "Web Applications",
    desc: "Customer portals, internal tooling, dashboards—fast, secure, and built to scale.",
    icon: Globe,
    bullets: ["APIs & integrations", "Modern UI/UX", "Performance at scale"],
  },
  {
    title: "Mobile Applications",
    desc: "Consumer and enterprise apps with delightful UX, strong offline support, and reliable releases.",
    icon: Rocket,
    bullets: ["iOS & Android", "Push + analytics", "CI/CD releases"],
  },
];

const services = [
  {
    title: "Implementation & Rollout",
    icon: Cloud,
    desc: "From discovery to go-live—roadmaps, training, and change management that sticks.",
  },
  {
    title: "Custom Development",
    icon: Cpu,
    desc: "Build exactly what your business needs—clean architecture, testable code, predictable delivery.",
  },
  {
    title: "Integrations",
    icon: Sparkles,
    desc: "Connect ERP, CRM, payments, logistics, and analytics—without brittle spaghetti.",
  },
  {
    title: "Security & Compliance",
    icon: ShieldCheck,
    desc: "Secure-by-default systems with best practices for identity, encryption, and observability.",
  },
];

const industries = [
  { title: "Retail & Distribution", desc: "Inventory accuracy, supplier coordination, and near real-time insights." },
  { title: "Manufacturing", desc: "BOM, production planning, and shop-floor visibility." },
  { title: "Services", desc: "Billing workflows, project profitability, and customer experience." },
  { title: "Logistics", desc: "Operational dashboards, tracking, and exception handling." },
];

const whyPoints = [
  { title: "Enterprise-grade delivery", desc: "Strong processes, documentation, and governance—no surprises." },
  { title: "Speed with quality", desc: "Rapid iterations backed by testing, reviews, and observability." },
  { title: "Practical architecture", desc: "Right-sized systems that scale without overengineering." },
  { title: "Long-term partnership", desc: "We don’t vanish after launch—support, enhancements, and roadmap planning." },
];

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState<string>(ids?.[0] || "");
  useEffect(() => {
    const handler = () => {
      const offset = 120;
      let current = active;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(",")]);
  return active;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, desc, align = "left" }: {
  eyebrow?: string,
  title: string,
  desc?: string,
  align?: "left" | "center"
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "")}>
      {eyebrow ? (
        <div className="mb-3">
          <span className="inline-flex items-center rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {desc ? <p className="mt-3 text-base text-slate-600 sm:text-lg">{desc}</p> : null}
    </div>
  );
}

function GradientBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-gradient-to-br from-sky-400/35 via-cyan-300/20 to-emerald-300/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6rem] top-10 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-400/25 via-violet-300/20 to-sky-300/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-7rem] left-1/3 h-96 w-96 rounded-full bg-gradient-to-br from-amber-300/25 via-orange-300/20 to-rose-300/20 blur-3xl" />
    </div>
  );
}

function LogoMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 via-indigo-500 to-fuchsia-500 shadow-sm ring-1 ring-black/5">
        <span className="text-sm font-black text-white">F</span>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-extrabold tracking-tight text-slate-900">{brand.name}</div>
        <div className="text-[10px] font-medium text-slate-500">ERP • Web • Mobile</div>
      </div>
    </div>
  );
}

function CTAButton({ children, variant = "primary", href = "#contact" }: {
  children: React.ReactNode,
  variant?: "primary" | "secondary",
  href?: string
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : "bg-white/70 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white";
  return (
    <a href={href} className={cn(base, styles)}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function Stat({ kpi, label }: { kpi: string, label: string }) {
  return (
    <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-slate-900/10 backdrop-blur">
      <div className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">{kpi}</div>
      <div className="mt-1 text-xs font-medium text-slate-600">{label}</div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, bullets }: {
  icon: React.ElementType,
  title: string,
  desc: string,
  bullets?: string[]
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/10"
    >
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-sky-500/15 via-indigo-500/10 to-fuchsia-500/15 ring-1 ring-slate-900/10">
          <Icon className="h-5 w-5 text-slate-900" />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{desc}</p>
        </div>
      </div>
      {bullets?.length ? (
        <ul className="mt-4 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-slate-900/70" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-5 text-sm font-semibold text-slate-900/80 opacity-0 transition group-hover:opacity-100">
        Learn how we deliver →
      </div>
    </motion.div>
  );
}

function ServiceCard({ icon: Icon, title, desc }: {
  icon: React.ElementType,
  title: string,
  desc: string
}) {
  return (
    <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-900/10">
      <div className="flex items-start gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-base font-bold text-slate-900">{title}</div>
          <div className="mt-1 text-sm text-slate-600">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-7 text-white shadow-sm">
      <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
        <Lock className="h-4 w-4" />
        <span>Built with security and governance in mind</span>
      </div>
      <p className="mt-4 text-lg font-semibold leading-relaxed">
        "Fnetrix helped us modernize operations without disrupting the business. Clean rollout, strong documentation, and a team
        that actually answers the phone."
      </p>
      <div className="mt-5 flex items-center justify-between">
        <div>
          <div className="text-sm font-bold">Operations Head</div>
          <div className="text-xs text-white/70">Mid-market retailer</div>
        </div>
        <div className="flex items-center gap-1 text-xs text-white/70">
          <Sparkles className="h-4 w-4" />
          <span>Happy go-live vibes</span>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string, a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-900/10">
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm font-bold text-slate-900">{q}</span>
        <span className="grid h-8 w-8 place-items-center rounded-xl bg-slate-900/5 ring-1 ring-slate-900/10">
          {open ? <X className="h-4 w-4" /> : <PlusIcon />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm text-slate-600">{a}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 1V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M1 7H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function FnetrixWebsite() {
  const sectionIds = useMemo(() => ["top", "solutions", "services", "industries", "why", "contact"], []);
  const active = useScrollSpy(sectionIds);

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-white text-slate-900" id="top">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-slate-900/5 bg-white/75 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <LogoMark />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => {
              const id = n.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={n.href}
                  href={n.href}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm font-semibold transition",
                    isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-900/5"
                  )}
                >
                  {n.label}
                </a>
              );
            })}
            <div className="ml-2 flex items-center gap-2">
              <CTAButton variant="secondary" href="#solutions">
                {brand.secondaryCta}
              </CTAButton>
              <CTAButton variant="primary" href="#contact">
                {brand.primaryCta}
              </CTAButton>
            </div>
          </nav>

          <button
            onClick={() => setMobileOpen(true)}
            className="inline-flex items-center justify-center rounded-2xl p-2 ring-1 ring-slate-900/10 hover:bg-slate-900/5 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden"
            >
              <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
                <div className="rounded-3xl bg-white p-3 shadow-sm ring-1 ring-slate-900/10">
                  <div className="flex items-center justify-between px-2 py-2">
                    <div className="text-sm font-bold text-slate-900">Menu</div>
                    <button
                      onClick={() => setMobileOpen(false)}
                      className="grid h-9 w-9 place-items-center rounded-2xl bg-slate-900/5 ring-1 ring-slate-900/10"
                      aria-label="Close menu"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid gap-1 p-2">
                    {nav.map((n) => (
                      <a
                        key={n.href}
                        href={n.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-2xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-900/5"
                      >
                        {n.label}
                      </a>
                    ))}
                    <div className="mt-2 grid gap-2 p-2">
                      <CTAButton variant="secondary" href="#solutions">
                        {brand.secondaryCta}
                      </CTAButton>
                      <CTAButton variant="primary" href="#contact">
                        {brand.primaryCta}
                      </CTAButton>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <GradientBackdrop />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Pill>Enterprise delivery</Pill>
                <Pill>Modern tech stack</Pill>
                <Pill>Happy go-lives 🎉</Pill>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
              >
                {brand.tagline}
                <span className="block bg-gradient-to-r from-sky-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
                  {" "}
                  Software that feels easy.
                </span>
              </motion.h1>

              <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">{brand.subtag}</p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <CTAButton variant="primary" href="#contact">
                  {brand.primaryCta}
                </CTAButton>
                <CTAButton variant="secondary" href="#solutions">
                  {brand.secondaryCta}
                </CTAButton>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Secure, scalable, supportable</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-md">
                <Stat kpi="2–6 wks" label="Typical MVP timeline" />
                <Stat kpi="99.9%" label="Target uptime architectures" />
              </div>

              <div className="mt-6 text-xs text-slate-500">
                *Your exact timeline depends on scope. We'll help you find the fastest path to value.
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-[2rem] bg-white/70 p-6 shadow-sm ring-1 ring-slate-900/10 backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold text-slate-900">Delivery Dashboard</div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Lock className="h-4 w-4" />
                    <span>Role-based access</span>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <MiniCard
                    title="ERP Health"
                    value="All green"
                    note="Finance • Inventory • HR"
                    icon={Layers}
                  />
                  <MiniCard
                    title="App Performance"
                    value="Fast"
                    note="Web • iOS • Android"
                    icon={Rocket}
                  />
                  <MiniCard
                    title="Integrations"
                    value="12 connected"
                    note="Payments • CRM • BI"
                    icon={Sparkles}
                  />
                  <MiniCard
                    title="Security"
                    value="Hardened"
                    note="IAM • Logs • Alerts"
                    icon={ShieldCheck}
                  />
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-white/70">Next milestone</div>
                      <div className="mt-1 text-base font-bold">Go-live readiness</div>
                    </div>
                    <div className="rounded-2xl bg-white/10 px-3 py-1 text-xs font-semibold">Week 4</div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <ProgressRow label="Data migration" pct={78} />
                    <ProgressRow label="UAT" pct={62} />
                    <ProgressRow label="Training" pct={45} />
                  </div>
                </div>
              </motion.div>

              <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-3xl bg-gradient-to-br from-emerald-400/35 to-sky-400/25 blur-2xl" />
              <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-3xl bg-gradient-to-br from-fuchsia-400/30 to-indigo-400/25 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="border-t border-slate-900/5 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading
            eyebrow="Solutions"
            title="Everything you need to run and grow"
            desc="Pick a starting point. We'll handle the discovery, build, rollout, and continuous improvements."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {solutions.map((s) => (
              <FeatureCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} bullets={s.bullets} />
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 ring-1 ring-slate-900/10">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Sparkles className="h-4 w-4" />
                <span>Popular outcomes</span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  { t: "Faster order-to-cash", d: "Reduce delays with automation and approvals." },
                  { t: "Clean master data", d: "Better accuracy across vendors, SKUs, customers." },
                  { t: "Unified reporting", d: "One source of truth for leadership dashboards." },
                  { t: "Mobile-first workflows", d: "Field teams work faster, even offline." },
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl bg-slate-900/5 p-4 ring-1 ring-slate-900/10">
                    <div className="text-sm font-bold text-slate-900">{x.t}</div>
                    <div className="mt-1 text-sm text-slate-600">{x.d}</div>
                  </div>
                ))}
              </div>
            </div>

            <Testimonial />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading
            eyebrow="Services"
            title="A full-stack team that speaks business"
            desc="We blend product thinking with engineering discipline—so you get outcomes, not just features."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} />
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-900/5">
            <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
              <div className="lg:col-span-2">
                <div className="text-sm font-semibold text-slate-700">How we deliver</div>
                <div className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">A simple, reliable 4-step playbook</div>
                <div className="mt-2 text-sm text-slate-600">
                  We keep it boring in the best way: clear scope, weekly demos, tight feedback loops, and confident releases.
                </div>
              </div>
              <div className="flex gap-2 lg:justify-end">
                <CTAButton variant="primary" href="#contact">
                  Get a proposal
                </CTAButton>
              </div>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "01", title: "Discover", desc: "Goals, constraints, quick wins." },
                { step: "02", title: "Design", desc: "Flows, UI, data, architecture." },
                { step: "03", title: "Build", desc: "Iterate fast with weekly demos." },
                { step: "04", title: "Rollout", desc: "Training, support, improvements." },
              ].map((x) => (
                <div key={x.step} className="rounded-3xl bg-white p-5 ring-1 ring-slate-900/10">
                  <div className="text-xs font-black text-slate-400">{x.step}</div>
                  <div className="mt-1 text-base font-bold text-slate-900">{x.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{x.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading
            eyebrow="Industries"
            title="Built for teams that run real operations"
            desc="Whether you're shipping products, managing people, or serving customers—our work meets you where you are."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((i) => (
              <div key={i.title} className="rounded-3xl bg-white p-6 ring-1 ring-slate-900/10">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-rose-400/20 ring-1 ring-slate-900/10">
                    <CheckCircle2 className="h-5 w-5 text-slate-900" />
                  </div>
                  <div className="text-base font-bold text-slate-900">{i.title}</div>
                </div>
                <div className="mt-2 text-sm text-slate-600">{i.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading
            eyebrow="Why Fnetrix"
            title="The sweet spot: enterprise trust + startup speed"
            desc="You get crisp communication, measurable progress, and software your team enjoys using."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="grid gap-4">
              {whyPoints.map((p) => (
                <div key={p.title} className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-900/5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-white ring-1 ring-slate-900/10">
                      <ShieldCheck className="h-5 w-5 text-slate-900" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-slate-900">{p.title}</div>
                      <div className="mt-1 text-sm text-slate-600">{p.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-sky-600 via-indigo-600 to-fuchsia-600 p-7 text-white shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
                <Sparkles className="h-4 w-4" />
                <span>What you'll get in week 1</span>
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  "A tailored plan (scope, milestones, risks)",
                  "A clickable flow / wireframe for critical screens",
                  "A system architecture draft (simple, scalable)",
                  "A delivery cadence (weekly demos + release plan)",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" />
                    <span className="text-sm font-semibold">{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-sm text-white/85">
                If you want a vendor who actually ships… welcome home. (We also do paperwork. Sadly.)
              </div>
              <div className="mt-6">
                <CTAButton variant="secondary" href="#contact">
                  Talk to us
                </CTAButton>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-900/10">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white">
                  <Lock className="h-5 w-5" />
                </div>
                <div className="text-base font-bold text-slate-900">Security-first</div>
              </div>
              <div className="mt-2 text-sm text-slate-600">
                Identity, encryption, least privilege, logs—baked in from day one.
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-900/10">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white">
                  <Cloud className="h-5 w-5" />
                </div>
                <div className="text-base font-bold text-slate-900">Cloud-ready</div>
              </div>
              <div className="mt-2 text-sm text-slate-600">
                Deployments that are observable, resilient, and cost-aware.
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-900/10">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="text-base font-bold text-slate-900">Great UX</div>
              </div>
              <div className="mt-2 text-sm text-slate-600">Because adoption beats a "perfect" spec every time.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden border-t border-slate-900/5 bg-slate-50">
        <GradientBackdrop />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let's build something your team loves using"
                desc="Share a few details. We'll reply with a plan, timeline, and next steps."
              />

              <div className="mt-8 grid gap-4">
                <ContactChip icon={Mail} label={brand.email} href={`mailto:${brand.email}`} />
                <ContactChip icon={Phone} label={brand.phone} href={`tel:${brand.phone.replace(/\s/g, "")}`} />
                <ContactChip icon={Globe} label="fnetrix.com" href="#top" />
              </div>

              <div className="mt-8 rounded-3xl bg-white p-6 ring-1 ring-slate-900/10">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <Rocket className="h-4 w-4" />
                  <span>Quick-start options</span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <QuickStart title="ERP discovery" desc="Process + data audit, roadmap." />
                  <QuickStart title="Web app sprint" desc="Clickable UI + working MVP." />
                  <QuickStart title="Mobile app sprint" desc="Core flows + release pipeline." />
                  <QuickStart title="Integration pack" desc="APIs, sync jobs, observability." />
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-900/10">
              <div className="flex items-center justify-between">
                <div className="text-sm font-bold text-slate-900">Request a demo</div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <ShieldCheck className="h-4 w-4" />
                  <span>We'll keep it crisp</span>
                </div>
              </div>

              <form
                className="mt-6 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Replace with your backend endpoint.
                  alert("Thanks! Connect this form to your backend (or a service like Formspree). 🚀");
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" placeholder="Your name" required />
                  <Field label="Work email" placeholder="you@company.com" type="email" required />
                </div>
                <Field label="Company" placeholder="Company / org" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <SelectField
                    label="Need help with"
                    required
                    options={["ERP", "Web app", "Mobile app", "Integrations", "Security", "Not sure"]}
                  />
                  <SelectField
                    label="Timeline"
                    required
                    options={["ASAP", "This month", "This quarter", "Just exploring"]}
                  />
                </div>
                <TextArea label="Project note" placeholder="What are you trying to achieve? (A few lines is perfect.)" />

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                  >
                    Send request
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <div className="text-xs text-slate-500">No spam. Just plans.</div>
                </div>
              </form>

              <div className="mt-7 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-900/5">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Sparkles className="h-4 w-4" />
                  <span>FAQs</span>
                </div>
                <div className="mt-4 grid gap-3">
                  <FAQItem
                    q="Do you work with existing ERP systems?"
                    a="Yes—new implementations, upgrades, integrations, custom modules, reporting, and workflow automation."
                  />
                  <FAQItem
                    q="What tech stacks do you support?"
                    a="Modern web + mobile stacks, cloud deployments, APIs, and data pipelines. We'll recommend what fits your constraints."
                  />
                  <FAQItem
                    q="Can you help with security and compliance?"
                    a="Absolutely—IAM, encryption, logging/monitoring, threat modeling, and secure delivery practices."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center justify-between gap-4 sm:justify-start">
              <LogoMark />
              <div className="hidden text-sm text-slate-500 sm:block">© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-900/5">
                  {n.label}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 text-sm text-slate-500 sm:hidden">© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

function MiniCard({ title, value, note, icon: Icon }: {
  title: string,
  value: string,
  note: string,
  icon: React.ElementType
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-900/5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-semibold text-slate-600">{title}</div>
          <div className="mt-1 text-lg font-extrabold tracking-tight text-slate-900">{value}</div>
          <div className="mt-1 text-xs text-slate-500">{note}</div>
        </div>
        <div className="grid h-9 w-9 place-items-center rounded-2xl bg-white ring-1 ring-slate-900/10">
          <Icon className="h-4 w-4 text-slate-900" />
        </div>
      </div>
    </div>
  );
}

function ProgressRow({ label, pct }: { label: string, pct: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-white/80">
        <span>{label}</span>
        <span className="font-semibold">{pct}%</span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/15">
        <div className="h-full rounded-full bg-white/70" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function ContactChip({ icon: Icon, label, href }: {
  icon: React.ElementType,
  label: string,
  href: string
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 rounded-3xl bg-white px-5 py-4 ring-1 ring-slate-900/10 hover:bg-slate-50"
    >
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold text-slate-500">Reach us</div>
        <div className="text-sm font-bold text-slate-900">{label}</div>
      </div>
      <div className="ml-auto grid h-10 w-10 place-items-center rounded-2xl bg-slate-900/5 ring-1 ring-slate-900/10">
        <ArrowRight className="h-4 w-4 text-slate-900" />
      </div>
    </a>
  );
}

function QuickStart({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-900/10">
      <div className="text-sm font-bold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function Field({ label, type = "text", placeholder, required }: {
  label: string,
  type?: string,
  placeholder: string,
  required?: boolean
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-slate-700">{label}{required ? " *" : ""}</span>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
      />
    </label>
  );
}

function SelectField({ label, options, required }: {
  label: string,
  options: string[],
  required?: boolean
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-slate-700">{label}{required ? " *" : ""}</span>
      <select
        required={required}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
        defaultValue={""}
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextArea({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-slate-700">{label}</span>
      <textarea
        placeholder={placeholder}
        rows={4}
        className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
      />
    </label>
  );
}
