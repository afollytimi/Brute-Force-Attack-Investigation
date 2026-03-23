/*
 * Layout Component — Scandinavian Functional Modernism
 * Fixed 240px left sidebar + top breadcrumb bar + main content area
 * Azure (#0770E3) active state with 3px left border
 */

import { Link, useLocation } from "wouter";
import {
  LayoutDashboard,
  PlusSquare,
  BarChart2,
  ClipboardList,
  Settings,
  Bell,
  HelpCircle,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/" },
  { label: "Create Ad", icon: PlusSquare, href: "/ad-creation" },
  { label: "Analytics", icon: BarChart2, href: "/analytics" },
  { label: "Feedback Survey", icon: ClipboardList, href: "/survey" },
];

const bottomNavItems = [
  { label: "Settings", icon: Settings, href: "#" },
  { label: "Help", icon: HelpCircle, href: "#" },
];

const pageTitles: Record<string, string> = {
  "/": "Overview",
  "/ad-creation": "Create New Ad",
  "/analytics": "Ad Performance Analytics",
  "/survey": "User Feedback Survey",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  const breadcrumb = pageTitles[location] ?? "Page";

  return (
    <div className="flex min-h-screen bg-[#F7F9FC]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-60 bg-white border-r border-[#E3E8EF] flex flex-col z-30">
        {/* Logo */}
        <div className="px-5 py-5 border-b border-[#E3E8EF]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-[#0770E3] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="text-[13px] font-700 text-[#0F172A] leading-tight" style={{ fontWeight: 700 }}>Skyscanner</div>
              <div className="text-[10px] text-[#64748B] leading-tight">Ads Platform</div>
            </div>
          </div>
        </div>

        {/* Partner badge */}
        <div className="px-5 py-3 border-b border-[#E3E8EF]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#E8F2FF] flex items-center justify-center text-[#0770E3] text-[11px] font-600" style={{ fontWeight: 600 }}>
              AC
            </div>
            <div>
              <div className="text-[12px] font-500 text-[#0F172A]" style={{ fontWeight: 500 }}>Acme Corp</div>
              <div className="text-[10px] text-[#64748B]">Partner Account</div>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          <div className="text-[10px] font-600 text-[#64748B] uppercase tracking-widest px-2 mb-2" style={{ fontWeight: 600 }}>
            Main Menu
          </div>
          {navItems.map(({ label, icon: Icon, href }) => {
            const isActive = location === href;
            return (
              <Link key={href} href={href}>
                <div
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] transition-all duration-150 ${
                    isActive
                      ? "bg-[#E8F2FF] text-[#0770E3] font-600 border-l-3 border-[#0770E3]"
                      : "text-[#334155] hover:bg-[#F0F4F8] hover:text-[#0F172A]"
                  }`}
                  style={isActive ? { fontWeight: 600, borderLeft: "3px solid #0770E3", paddingLeft: "9px" } : {}}
                >
                  <Icon size={16} className={isActive ? "text-[#0770E3]" : "text-[#64748B]"} />
                  {label}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Bottom nav */}
        <div className="px-3 py-4 border-t border-[#E3E8EF] space-y-1">
          {bottomNavItems.map(({ label, icon: Icon, href }) => (
            <Link key={label} href={href}>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] text-[#64748B] hover:bg-[#F0F4F8] hover:text-[#0F172A] transition-all duration-150">
                <Icon size={16} />
                {label}
              </div>
            </Link>
          ))}
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 ml-60 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-white border-b border-[#E3E8EF] px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[13px] text-[#64748B]">
            <span>Ads Platform</span>
            <ChevronRight size={14} />
            <span className="text-[#0F172A] font-500" style={{ fontWeight: 500 }}>{breadcrumb}</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 rounded-md flex items-center justify-center text-[#64748B] hover:bg-[#F0F4F8] transition-colors relative">
              <Bell size={16} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#0770E3]" />
            </button>
            <div className="w-8 h-8 rounded-full bg-[#0770E3] flex items-center justify-center text-white text-[11px] font-600" style={{ fontWeight: 600 }}>
              AC
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
