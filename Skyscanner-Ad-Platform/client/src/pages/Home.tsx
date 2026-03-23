/*
 * Home/Overview Page — Scandinavian Functional Modernism
 * Quick summary cards + navigation to the three design pages
 */

import Layout from "@/components/Layout";
import { Link } from "wouter";
import { PlusSquare, BarChart2, ClipboardList, ArrowRight, TrendingUp, Eye, MousePointer, DollarSign } from "lucide-react";

const designPages = [
  {
    number: "01",
    title: "Ad Creation",
    description: "Design 1 — Create new advertisements by selecting your ad type (Text, Image & Text, or Video) and configuring your campaign settings.",
    href: "/ad-creation",
    icon: PlusSquare,
    color: "#0770E3",
    bg: "#E8F2FF",
  },
  {
    number: "02",
    title: "Performance Analytics",
    description: "Design 2 — Monitor your ad performance with real-time charts and KPI metrics. Track impressions, clicks, CTR, and spend across all active campaigns.",
    href: "/analytics",
    icon: BarChart2,
    color: "#00A698",
    bg: "#E6F7F6",
  },
  {
    number: "03",
    title: "User Feedback Survey",
    description: "Design 3 — Gather structured feedback from platform users to identify pain points and opportunities for further improvement.",
    href: "/survey",
    icon: ClipboardList,
    color: "#F5A623",
    bg: "#FEF3E2",
  },
];

const kpis = [
  { label: "Total Impressions", value: "2.4M", change: "+12.3%", positive: true, icon: Eye },
  { label: "Total Clicks", value: "48,210", change: "+8.7%", positive: true, icon: MousePointer },
  { label: "Avg. CTR", value: "2.01%", change: "-0.3%", positive: false, icon: TrendingUp },
  { label: "Total Spend", value: "$18,440", change: "+5.2%", positive: true, icon: DollarSign },
];

export default function Home() {
  return (
    <Layout>
      {/* Header */}
      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-[28px] font-700 text-[#0F172A] leading-tight" style={{ fontWeight: 700 }}>
          Welcome back, Acme Corp
        </h1>
        <p className="text-[14px] text-[#64748B] mt-1">
          Skyscanner Advertising Platform — Task 4 UI Design Showcase
        </p>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {kpis.map(({ label, value, change, positive, icon: Icon }, i) => (
          <div key={label} className={`sky-card p-5 animate-fade-in-up animate-fade-in-up-${i + 1}`}>
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-[#F0F4F8] flex items-center justify-center">
                <Icon size={18} className="text-[#64748B]" />
              </div>
              <span className={`sky-badge text-[11px] ${positive ? "bg-[#E6F7F6] text-[#00A698]" : "bg-[#FEF2F2] text-[#E73C3E]"}`}>
                {change}
              </span>
            </div>
            <div className="metric-value text-[26px] text-[#0F172A]">{value}</div>
            <div className="text-[12px] text-[#64748B] mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-[#E3E8EF]" />
        <span className="text-[11px] font-600 text-[#64748B] uppercase tracking-widest" style={{ fontWeight: 600 }}>
          Design Pages
        </span>
        <div className="h-px flex-1 bg-[#E3E8EF]" />
      </div>

      {/* Design page cards */}
      <div className="grid grid-cols-3 gap-5">
        {designPages.map(({ number, title, description, href, icon: Icon, color, bg }, i) => (
          <Link key={href} href={href}>
            <div className={`sky-card p-6 cursor-pointer group animate-fade-in-up animate-fade-in-up-${i + 1}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: bg }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <span className="text-[11px] font-700 text-[#CBD5E1]" style={{ fontWeight: 700 }}>
                  {number}
                </span>
              </div>
              <h3 className="text-[16px] font-600 text-[#0F172A] mb-2" style={{ fontWeight: 600 }}>
                {title}
              </h3>
              <p className="text-[13px] text-[#64748B] leading-relaxed mb-4">
                {description}
              </p>
              <div
                className="flex items-center gap-1.5 text-[13px] font-500 transition-all duration-150 group-hover:gap-2.5"
                style={{ color, fontWeight: 500 }}
              >
                View Design
                <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-10 p-4 bg-[#F0F4F8] rounded-lg border border-[#E3E8EF]">
        <p className="text-[12px] text-[#64748B]">
          <span className="font-600 text-[#334155]" style={{ fontWeight: 600 }}>Task 4 — Skyscanner Software Engineering Virtual Experience.</span>{" "}
          This platform showcases three UI/UX designs: Ad Creation (Design 1), Performance Analytics (Design 2), and User Feedback Survey (Design 3). Each design addresses the value, usability, and feasibility risks outlined in the task brief.
        </p>
      </div>
    </Layout>
  );
}
