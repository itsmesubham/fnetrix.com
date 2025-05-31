'use client';

import React from "react";
import Link from "next/link";
import { Briefcase, Cpu, Shield, ArrowRight, BedDouble, Utensils, Stethoscope, Store, Building2, Tractor, CheckCircle } from "lucide-react";

function Button({ variant, size = "md", className = "", ...props }) {
  const base = "rounded-md font-semibold transition-colors focus:outline-none";
  const sizeCls =
    size === "lg" ? "px-8 py-4 text-base" : size === "sm" ? "px-3 py-2 text-sm" : "px-4 py-2";
  const style =
    variant === "outline"
      ? "border border-blue-700 text-blue-700 hover:bg-blue-600 hover:text-white"
      : "bg-blue-600 hover:bg-blue-700 text-white";
  return <button {...props} className={`${base} ${sizeCls} ${style} ${className}`} />;
}

const INDUSTRIES = [
  {
    name: "Hotels & Hospitality",
    Icon: BedDouble,
    points: ["Smart Booking Engine", "Housekeeping Automation", "Central Accounting", "HRMS"],
    desc: "End-to-end automation for every chain, from 5-star to boutique.",
  },
  {
    name: "Restaurants & Cafés",
    Icon: Utensils,
    points: ["POS & Billing", "Live Inventory", "CRM", "Supply Automation"],
    desc: "Faster service, happier regulars, stockouts gone forever.",
  },
  {
    name: "Hospitals & Clinics",
    Icon: Stethoscope,
    points: ["Patient Management", "Lab & Pharmacy", "Billing & Insurance", "Compliance"],
    desc: "Modern care with zero paperwork. EMR, OPD/IPD, pharmacy—all on auto.",
  },
  {
    name: "Retail Chains",
    Icon: Store,
    points: ["Multi-Store Inventory", "POS & Loyalty", "Vendor Automation", "Reports"],
    desc: "See all outlets, sales, and vendors—live. One dashboard, infinite scale.",
  },
  {
    name: "Service Businesses",
    Icon: Building2,
    points: ["Appointment Scheduling", "Billing", "HRMS", "Client CRM"],
    desc: "Salons, spas, coaching: automate appointments, billing, and retention.",
  },
  {
    name: "Agri & Farm Chains",
    Icon: Tractor,
    points: ["Stock & Crop Management", "Supply Chain", "Payments", "Compliance"],
    desc: "From seeds to sales—track every field, input, worker, and rupee.",
  },
];

const USECASES = [
  {
    industry: "Hotels",
    pain: "Manual bookings, slow check-ins, revenue leakage",
    solution: "One ERP—automated booking engine, real-time housekeeping, and unified accounting."
  },
  {
    industry: "Retail",
    pain: "Inventory mismatch, dead stock, missed supplier deals",
    solution: "Multi-store stock view, auto-replenish, vendor deals all in one place."
  },
  {
    industry: "Restaurants",
    pain: "POS downtime, menu chaos, unsold inventory",
    solution: "Lightning-fast POS, auto menu sync, live stock and supplier automation."
  },
  {
    industry: "Hospitals",
    pain: "Patient data errors, missed follow-ups, manual billing",
    solution: "Automated EMR, patient reminders, error-free pharmacy & insurance."
  },
  {
    industry: "Service Chains",
    pain: "Lost appointments, payroll headaches, poor retention",
    solution: "Smart scheduling, payroll, and customer engagement built-in."
  },
];

export default function FnetrixLandingPage() {
  const scrollToLead = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-gradient-to-b from-white via-blue-50 to-blue-100">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur-sm bg-white/90 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-blue-700">
            Fnetrix
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#industries" className="hover:text-blue-700">Industries</a>
            <a href="#erpnext-offer" className="hover:text-blue-700">ERPNext Setup</a>
            <a href="#usecases" className="hover:text-blue-700">Use Cases</a>
            <a href="#pricing" className="hover:text-blue-700">Pricing</a>
            <a href="#lead-form" className="hover:text-blue-700">Contact</a>
          </nav>
          <Button size="sm" variant="outline" className="hidden md:inline-flex" onClick={scrollToLead}>
            Get a Demo
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 bg-[url('/business-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-blue-900/40" />
        <div className="relative max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            The ERP for Ambitious Businesses<br className="hidden md:block" />—All Chains. One Platform.
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto">
            From hotels to retail, from hospitals to farms—run every branch, automate every process, scale anywhere.
          </p>
          <Button size="lg" className="group" onClick={scrollToLead}>
            Book My Free Audit
            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* ERPNext Offer Section */}
      <section id="erpnext-offer" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-blue-50 rounded-3xl shadow-lg p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              <Shield className="h-16 w-16 text-blue-600 mb-4 mx-auto" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-3">ERPNext Setup & Custom Implementation</h2>
              <p className="text-blue-900 text-lg mb-5">
                Ready for full-stack digital transformation? <span className="font-semibold text-blue-700">Fnetrix</span> delivers end-to-end ERPNext implementation—no shortcuts, no hidden costs, no confusion. From discovery to go-live, our consultants handle everything, with total transparency and real after-support.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-blue-800"><CheckCircle className="h-5 w-5 mt-1 mr-2 text-blue-500" /> <b>Comprehensive Scoping:</b> We document every process before touching a single setting. No half-done modules.</li>
                <li className="flex items-start text-blue-800"><CheckCircle className="h-5 w-5 mt-1 mr-2 text-blue-500" /> <b>Module-by-Module Deployment:</b> Full rollout of all critical modules—Accounting, Inventory, CRM, HRMS, Projects, Payroll, Manufacturing, POS, Purchase, and more.</li>
                <li className="flex items-start text-blue-800"><CheckCircle className="h-5 w-5 mt-1 mr-2 text-blue-500" /> <b>Business-Ready Customization:</b> Advanced scripts, custom print formats, automations, and field-level controls—tailored for your team and market.</li>
                <li className="flex items-start text-blue-800"><CheckCircle className="h-5 w-5 mt-1 mr-2 text-blue-500" /> <b>Usage Training:</b> Hands-on training for your staff—role-wise, step-by-step. Training videos, cheat-sheets, and after-support, not just a demo.</li>
                <li className="flex items-start text-blue-800"><CheckCircle className="h-5 w-5 mt-1 mr-2 text-blue-500" /> <b>Full AI Automation:</b> Intelligent workflows for reconciliations, reminders, compliance, and reporting—set up by us, not just promised.</li>
                <li className="flex items-start text-blue-800"><CheckCircle className="h-5 w-5 mt-1 mr-2 text-blue-500" /> <b>Complete Transparency:</b> Real project plans, timelines, and cost breakdowns before you pay. Zero surprise invoices, ever.</li>
              </ul>
              <div className="mb-5">
                <span className="inline-block font-bold text-blue-700">Want a callback or a proposal?</span><br />
                <span className="text-blue-600">Write to <a href="mailto:team@fnetrix.com" className="underline">team@fnetrix.com</a> or use the form below!</span>
              </div>
              <Button size="md" onClick={scrollToLead}>Get My ERPNext Roadmap</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-blue-700">Industries We Power</h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map(({ name, Icon, points, desc }) => (
              <div key={name} className="bg-white rounded-3xl p-8 shadow-lg flex flex-col items-start gap-5 border border-blue-100 h-full">
                <span className="inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-700 h-12 w-12 mb-1">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-2">{desc}</p>
                <ul className="text-xs text-blue-700 flex flex-wrap gap-2">
                  {points.map((p) => (
                    <li key={p} className="bg-blue-50 border border-blue-200 px-2 py-1 rounded">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Scenarios */}
      <section id="usecases" className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">Modern Problems, Automated Solutions</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {USECASES.map(({ industry, pain, solution }, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow p-8 flex flex-col gap-4 border border-blue-100">
                <div className="text-blue-600 font-bold flex gap-2 items-center">
                  <span className="uppercase tracking-wide text-xs">{industry}</span>
                  <Cpu className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-semibold text-blue-800">Pain: </span>
                  <span className="text-slate-700">{pain}</span>
                </div>
                <div>
                  <span className="font-semibold text-blue-700">Solution: </span>
                  <span className="text-slate-600">{solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Simple, Transparent Pricing</h2>
          <p className="text-slate-700 mb-12 max-w-2xl mx-auto">
            Start with a refundable ₹10 000 deposit—credited to your implementation once the plan excites you.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-white rounded-3xl shadow-xl p-12 flex flex-col items-center border border-blue-100">
              <p className="text-5xl font-extrabold text-blue-700 mb-4">₹10k</p>
              <p className="uppercase tracking-wide text-xs text-slate-500 mb-8">Refundable Deposit</p>
              <Button size="lg" className="w-full max-w-xs mb-6" onClick={scrollToLead}>Reserve My Slot</Button>
              <p className="text-xs text-slate-500">Full project quote delivered after discovery.</p>
            </div>
            <div className="bg-blue-600 text-white rounded-3xl p-12 flex flex-col justify-center shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">What’s Included</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>✔ Solution architect session</li>
                <li>✔ AI-assisted gap analysis & roadmap</li>
                <li>✔ Proof-of-concept instance within 48 h</li>
                <li>✔ 100 % refund if we’re not a fit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="lead-form" className="py-24 bg-blue-50">
        <div className="max-w-xl mx-auto border border-blue-100 shadow-xl rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-center mb-8 text-blue-700">Let’s Talk Growth</h2>
          <form className="space-y-5" action="https://formspree.io/f/mwpozgol" method="POST">
            <input type="hidden" name="_subject" value="New ERPNext Lead" />
            <input name="name" placeholder="Your name" className="w-full border border-blue-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" required />
            <input type="email" name="email" placeholder="Business email" className="w-full border border-blue-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" required />
            <textarea name="requirements" rows={4} placeholder="What’s the #1 pain in your business right now?" className="w-full border border-blue-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <Button type="submit" className="w-full">Request My Demo</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-8 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} Fnetrix Private Ltd.</p>
          <p className="opacity-80">Built with ♥ in India</p>
        </div>
      </footer>
    </div>
  );
}
