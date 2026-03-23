/*
 * Design 2: Ad Performance Analytics — Scandinavian Functional Modernism
 * KPI cards + line chart + bar chart + ad type breakdown table
 * Recharts for data visualization, JetBrains Mono for metric values
 */

import Layout from "@/components/Layout";
import { useState } from "react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend, PieChart, Pie, Cell
} from "recharts";
import { Eye, MousePointer, TrendingUp, DollarSign, ArrowUpRight, ArrowDownRight, Filter } from "lucide-react";

const weeklyData = [
  { day: "Mon", impressions: 14200, clicks: 284, spend: 142 },
  { day: "Tue", impressions: 16800, clicks: 336, spend: 168 },
  { day: "Wed", impressions: 15400, clicks: 308, spend: 154 },
  { day: "Thu", impressions: 18900, clicks: 378, spend: 189 },
  { day: "Fri", impressions: 22100, clicks: 442, spend: 221 },
  { day: "Sat", impressions: 19600, clicks: 392, spend: 196 },
  { day: "Sun", impressions: 17300, clicks: 346, spend: 173 },
];

const adTypeData = [
  { name: "Text Ad", impressions: 48200, clicks: 964, ctr: 2.0, spend: 482, color: "#0770E3" },
  { name: "Image & Text", impressions: 62400, clicks: 1497, ctr: 2.4, spend: 748, color: "#00A698" },
  { name: "Video Ad", impressions: 31800, clicks: 858, ctr: 2.7, spend: 636, color: "#F5A623" },
];

const pieData = adTypeData.map(d => ({ name: d.name, value: d.impressions, color: d.color }));

const kpis = [
  { label: "Total Impressions", value: "142,400", change: "+12.3%", positive: true, icon: Eye, detail: "vs last week" },
  { label: "Total Clicks", value: "3,319", change: "+8.7%", positive: true, icon: MousePointer, detail: "vs last week" },
  { label: "Avg. CTR", value: "2.33%", change: "-0.3%", positive: false, icon: TrendingUp, detail: "vs last week" },
  { label: "Total Spend", value: "$1,866", change: "+5.2%", positive: true, icon: DollarSign, detail: "vs last week" },
];

const dateRanges = ["Last 7 Days", "Last 30 Days", "Last 90 Days", "Custom"];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-[#E3E8EF] rounded-lg p-3 shadow-lg text-[12px]">
        <div className="font-600 text-[#0F172A] mb-2" style={{ fontWeight: 600 }}>{label}</div>
        {payload.map((p: any) => (
          <div key={p.name} className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            <span className="text-[#64748B]">{p.name}:</span>
            <span className="font-500 text-[#0F172A]" style={{ fontWeight: 500 }}>{p.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function Analytics() {
  const [activeRange, setActiveRange] = useState("Last 7 Days");
  const [activeMetric, setActiveMetric] = useState<"impressions" | "clicks" | "spend">("impressions");

  return (
    <Layout>
      {/* Page header */}
      <div className="flex items-start justify-between mb-6 animate-fade-in-up">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="sky-badge bg-[#E6F7F6] text-[#00A698] text-[11px]">Design 2</span>
            <span className="text-[12px] text-[#64748B]">Performance Analytics</span>
          </div>
          <h1 className="text-[24px] font-700 text-[#0F172A]" style={{ fontWeight: 700 }}>
            Ad Performance Analytics
          </h1>
          <p className="text-[13px] text-[#64748B] mt-1">
            Monitor and analyse your campaign performance across all ad formats.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {dateRanges.map(range => (
            <button
              key={range}
              onClick={() => setActiveRange(range)}
              className={`px-3 py-1.5 text-[12px] rounded-md transition-all ${
                activeRange === range
                  ? "bg-[#0770E3] text-white font-500"
                  : "bg-white border border-[#E3E8EF] text-[#64748B] hover:bg-[#F0F4F8]"
              }`}
              style={activeRange === range ? { fontWeight: 500 } : {}}
            >
              {range}
            </button>
          ))}
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] bg-white border border-[#E3E8EF] text-[#64748B] rounded-md hover:bg-[#F0F4F8]">
            <Filter size={13} />
            Filter
          </button>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {kpis.map(({ label, value, change, positive, icon: Icon, detail }, i) => (
          <div key={label} className={`sky-card p-5 animate-fade-in-up animate-fade-in-up-${i + 1}`}>
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-[#F0F4F8] flex items-center justify-center">
                <Icon size={17} className="text-[#64748B]" />
              </div>
              <div className={`flex items-center gap-0.5 text-[11px] font-500 ${positive ? "text-[#00A698]" : "text-[#E73C3E]"}`} style={{ fontWeight: 500 }}>
                {positive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
                {change}
              </div>
            </div>
            <div className="metric-value text-[26px] text-[#0F172A] leading-none mb-1">{value}</div>
            <div className="text-[12px] text-[#64748B]">{label}</div>
            <div className="text-[11px] text-[#CBD5E1] mt-0.5">{detail}</div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-3 gap-5 mb-5">
        {/* Main line chart — spans 2 cols */}
        <div className="col-span-2 sky-card p-5 animate-fade-in-up animate-fade-in-up-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[14px] font-600 text-[#0F172A]" style={{ fontWeight: 600 }}>
              Performance Over Time
            </h3>
            <div className="flex gap-1">
              {(["impressions", "clicks", "spend"] as const).map(m => (
                <button
                  key={m}
                  onClick={() => setActiveMetric(m)}
                  className={`px-2.5 py-1 text-[11px] rounded-md capitalize transition-all ${
                    activeMetric === m
                      ? "bg-[#0770E3] text-white"
                      : "text-[#64748B] hover:bg-[#F0F4F8]"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={weeklyData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0F4F8" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#64748B" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#64748B" }} axisLine={false} tickLine={false} width={50} />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey={activeMetric}
                stroke="#0770E3"
                strokeWidth={2.5}
                dot={{ fill: "#0770E3", r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie chart */}
        <div className="sky-card p-5 animate-fade-in-up animate-fade-in-up-2">
          <h3 className="text-[14px] font-600 text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>
            Impressions by Ad Type
          </h3>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={3} dataKey="value">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => value.toLocaleString()} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {adTypeData.map(({ name, color, impressions }) => (
              <div key={name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
                  <span className="text-[11px] text-[#64748B]">{name}</span>
                </div>
                <span className="metric-value text-[11px] text-[#334155]">{impressions.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bar chart + table */}
      <div className="grid grid-cols-2 gap-5">
        {/* Bar chart */}
        <div className="sky-card p-5 animate-fade-in-up animate-fade-in-up-3">
          <h3 className="text-[14px] font-600 text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>
            Clicks by Day
          </h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={weeklyData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0F4F8" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#64748B" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#64748B" }} axisLine={false} tickLine={false} width={40} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="clicks" fill="#0770E3" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Ad type breakdown table */}
        <div className="sky-card p-5 animate-fade-in-up animate-fade-in-up-4">
          <h3 className="text-[14px] font-600 text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>
            Ad Type Breakdown
          </h3>
          <div>
            {/* Table header */}
            <div className="grid grid-cols-5 gap-2 pb-2 border-b border-[#E3E8EF] mb-2">
              {["Ad Type", "Impressions", "Clicks", "CTR", "Spend"].map(h => (
                <div key={h} className="text-[11px] font-600 text-[#64748B] uppercase tracking-wide" style={{ fontWeight: 600 }}>
                  {h}
                </div>
              ))}
            </div>
            {/* Table rows */}
            {adTypeData.map(({ name, impressions, clicks, ctr, spend, color }) => (
              <div key={name} className="grid grid-cols-5 gap-2 py-3 border-b border-[#F0F4F8] last:border-0 items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                  <span className="text-[12px] text-[#334155]">{name}</span>
                </div>
                <span className="metric-value text-[12px] text-[#0F172A]">{impressions.toLocaleString()}</span>
                <span className="metric-value text-[12px] text-[#0F172A]">{clicks.toLocaleString()}</span>
                <div>
                  <span className="sky-badge text-[10px]" style={{ background: "#E8F2FF", color: "#0770E3" }}>
                    {ctr}%
                  </span>
                </div>
                <span className="metric-value text-[12px] text-[#0F172A]">${spend}</span>
              </div>
            ))}
          </div>
          {/* Total row */}
          <div className="grid grid-cols-5 gap-2 pt-3 mt-1 border-t border-[#E3E8EF]">
            <span className="text-[12px] font-600 text-[#0F172A]" style={{ fontWeight: 600 }}>Total</span>
            <span className="metric-value text-[12px] font-600 text-[#0770E3]" style={{ fontWeight: 600 }}>142,400</span>
            <span className="metric-value text-[12px] font-600 text-[#0770E3]" style={{ fontWeight: 600 }}>3,319</span>
            <span className="metric-value text-[12px] font-600 text-[#0770E3]" style={{ fontWeight: 600 }}>2.33%</span>
            <span className="metric-value text-[12px] font-600 text-[#0770E3]" style={{ fontWeight: 600 }}>$1,866</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
