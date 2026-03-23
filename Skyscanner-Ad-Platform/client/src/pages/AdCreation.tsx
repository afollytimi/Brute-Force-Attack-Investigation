/*
 * Design 1: Ad Creation Page — Scandinavian Functional Modernism
 * Select ad type (Text, Image+Text, Video) → configure → preview
 * Azure (#0770E3) selection state, pill badges, step progress
 */

import Layout from "@/components/Layout";
import { useState } from "react";
import { Type, Image, Video, Check, ChevronRight, Info, Upload, Calendar, Target, DollarSign, Globe } from "lucide-react";
import { toast } from "sonner";

const adTypes = [
  {
    id: "text",
    label: "Text Ad",
    icon: Type,
    description: "Simple, high-impact text-based advertisement. Ideal for search results and contextual placements.",
    badge: "Most Popular",
    badgeColor: "#0770E3",
    badgeBg: "#E8F2FF",
    fields: ["Headline", "Description", "Display URL", "Call to Action"],
  },
  {
    id: "image-text",
    label: "Image & Text Ad",
    icon: Image,
    description: "Combine a compelling visual with persuasive copy. Best for brand awareness and retargeting campaigns.",
    badge: "Recommended",
    badgeColor: "#00A698",
    badgeBg: "#E6F7F6",
    fields: ["Headline", "Description", "Image Upload", "Display URL"],
  },
  {
    id: "video",
    label: "Video Ad",
    icon: Video,
    description: "Engage users with rich video content. Highest engagement rates for travel-related campaigns.",
    badge: "High Engagement",
    badgeColor: "#F5A623",
    badgeBg: "#FEF3E2",
    fields: ["Video Upload", "Headline", "Description", "Thumbnail"],
  },
];

const steps = ["Select Ad Type", "Configure Ad", "Set Budget & Schedule", "Review & Launch"];

export default function AdCreation() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [cta, setCta] = useState("Book Now");
  const [budget, setBudget] = useState("500");
  const [targeting, setTargeting] = useState("All Destinations");

  const handleNext = () => {
    if (currentStep === 0 && !selectedType) {
      toast.error("Please select an ad type to continue.");
      return;
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(c => c + 1);
    } else {
      toast.success("Ad submitted for review! You'll receive a confirmation email shortly.");
    }
  };

  const selectedAdType = adTypes.find(t => t.id === selectedType);

  return (
    <Layout>
      {/* Page header */}
      <div className="mb-6 animate-fade-in-up">
        <div className="flex items-center gap-2 mb-1">
          <span className="sky-badge bg-[#E8F2FF] text-[#0770E3] text-[11px]">Design 1</span>
          <span className="text-[12px] text-[#64748B]">Ad Creation Flow</span>
        </div>
        <h1 className="text-[24px] font-700 text-[#0F172A]" style={{ fontWeight: 700 }}>
          Create New Advertisement
        </h1>
        <p className="text-[13px] text-[#64748B] mt-1">
          Follow the steps below to create and launch your ad on Skyscanner.
        </p>
      </div>

      {/* Step progress */}
      <div className="sky-card p-5 mb-6 animate-fade-in-up animate-fade-in-up-1">
        <div className="flex items-center gap-0">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center flex-1">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-600 transition-all duration-200 ${
                    i < currentStep
                      ? "bg-[#0770E3] text-white"
                      : i === currentStep
                      ? "bg-[#0770E3] text-white ring-4 ring-[#E8F2FF]"
                      : "bg-[#F0F4F8] text-[#64748B]"
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {i < currentStep ? <Check size={13} /> : i + 1}
                </div>
                <span
                  className={`text-[12px] whitespace-nowrap ${
                    i === currentStep ? "font-600 text-[#0F172A]" : i < currentStep ? "text-[#0770E3]" : "text-[#64748B]"
                  }`}
                  style={i === currentStep ? { fontWeight: 600 } : {}}
                >
                  {step}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-px mx-3 ${i < currentStep ? "bg-[#0770E3]" : "bg-[#E3E8EF]"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step content */}
      {currentStep === 0 && (
        <div className="animate-fade-in-up">
          <h2 className="text-[16px] font-600 text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>
            Choose your ad format
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {adTypes.map(({ id, label, icon: Icon, description, badge, badgeColor, badgeBg }) => {
              const isSelected = selectedType === id;
              return (
                <button
                  key={id}
                  onClick={() => setSelectedType(id)}
                  className={`sky-card p-5 text-left transition-all duration-150 relative ${
                    isSelected ? "ring-2 ring-[#0770E3] ring-offset-1" : ""
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#0770E3] flex items-center justify-center">
                      <Check size={11} className="text-white" />
                    </div>
                  )}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${isSelected ? "bg-[#0770E3]" : "bg-[#F0F4F8]"}`}>
                    <Icon size={22} className={isSelected ? "text-white" : "text-[#64748B]"} />
                  </div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[15px] font-600 text-[#0F172A]" style={{ fontWeight: 600 }}>{label}</span>
                    <span className="sky-badge text-[10px]" style={{ background: badgeBg, color: badgeColor }}>
                      {badge}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#64748B] leading-relaxed">{description}</p>
                </button>
              );
            })}
          </div>

          {/* Info callout */}
          <div className="flex items-start gap-3 p-4 bg-[#F0F4F8] rounded-lg border border-[#E3E8EF]">
            <Info size={15} className="text-[#64748B] mt-0.5 shrink-0" />
            <p className="text-[12px] text-[#64748B]">
              All ad formats are reviewed by Skyscanner's editorial team before going live. Review typically takes 1–2 business days.
            </p>
          </div>
        </div>
      )}

      {currentStep === 1 && selectedAdType && (
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-[16px] font-600 text-[#0F172A]" style={{ fontWeight: 600 }}>
              Configure your {selectedAdType.label}
            </h2>
            <span className="sky-badge text-[11px]" style={{ background: selectedAdType.badgeBg, color: selectedAdType.badgeColor }}>
              {selectedAdType.badge}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Form */}
            <div className="space-y-4">
              <div className="sky-card p-5">
                <h3 className="text-[13px] font-600 text-[#334155] mb-4" style={{ fontWeight: 600 }}>Ad Content</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[12px] font-500 text-[#334155] mb-1.5" style={{ fontWeight: 500 }}>
                      Headline <span className="text-[#E73C3E]">*</span>
                    </label>
                    <input
                      type="text"
                      value={headline}
                      onChange={e => setHeadline(e.target.value)}
                      placeholder="e.g. Fly to Paris from £89"
                      maxLength={60}
                      className="w-full px-3 py-2.5 text-[13px] border border-[#E3E8EF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0770E3] focus:border-transparent transition-all"
                    />
                    <div className="flex justify-between mt-1">
                      <span className="text-[11px] text-[#64748B]">Max 60 characters</span>
                      <span className="text-[11px] text-[#64748B]">{headline.length}/60</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-500 text-[#334155] mb-1.5" style={{ fontWeight: 500 }}>
                      Description <span className="text-[#E73C3E]">*</span>
                    </label>
                    <textarea
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      placeholder="Describe your offer in a compelling way..."
                      maxLength={150}
                      rows={3}
                      className="w-full px-3 py-2.5 text-[13px] border border-[#E3E8EF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0770E3] focus:border-transparent transition-all resize-none"
                    />
                    <div className="flex justify-between mt-1">
                      <span className="text-[11px] text-[#64748B]">Max 150 characters</span>
                      <span className="text-[11px] text-[#64748B]">{description.length}/150</span>
                    </div>
                  </div>

                  {selectedAdType.id !== "video" && (
                    <div>
                      <label className="block text-[12px] font-500 text-[#334155] mb-1.5" style={{ fontWeight: 500 }}>
                        Call to Action
                      </label>
                      <select
                        value={cta}
                        onChange={e => setCta(e.target.value)}
                        className="w-full px-3 py-2.5 text-[13px] border border-[#E3E8EF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0770E3] focus:border-transparent transition-all bg-white"
                      >
                        <option>Book Now</option>
                        <option>Learn More</option>
                        <option>Search Flights</option>
                        <option>Get a Quote</option>
                        <option>Explore Deals</option>
                      </select>
                    </div>
                  )}

                  {(selectedAdType.id === "image-text" || selectedAdType.id === "video") && (
                    <div>
                      <label className="block text-[12px] font-500 text-[#334155] mb-1.5" style={{ fontWeight: 500 }}>
                        {selectedAdType.id === "video" ? "Upload Video" : "Upload Image"}
                      </label>
                      <div className="border-2 border-dashed border-[#CBD5E1] rounded-lg p-6 text-center hover:border-[#0770E3] transition-colors cursor-pointer">
                        <Upload size={20} className="text-[#64748B] mx-auto mb-2" />
                        <p className="text-[12px] text-[#64748B]">
                          Drag & drop or <span className="text-[#0770E3] font-500" style={{ fontWeight: 500 }}>browse files</span>
                        </p>
                        <p className="text-[11px] text-[#CBD5E1] mt-1">
                          {selectedAdType.id === "video" ? "MP4, MOV — max 50MB" : "JPG, PNG — min 1200×628px"}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Preview */}
            <div>
              <div className="sky-card p-5">
                <h3 className="text-[13px] font-600 text-[#334155] mb-4" style={{ fontWeight: 600 }}>Ad Preview</h3>
                <div className="bg-[#F7F9FC] rounded-lg p-4 border border-[#E3E8EF]">
                  <div className="text-[10px] text-[#64748B] mb-2 uppercase tracking-wider">Sponsored</div>
                  {selectedAdType.id === "image-text" && (
                    <div className="w-full h-28 bg-[#E3E8EF] rounded-md mb-3 flex items-center justify-center">
                      <Image size={24} className="text-[#CBD5E1]" />
                    </div>
                  )}
                  {selectedAdType.id === "video" && (
                    <div className="w-full h-28 bg-[#0F172A] rounded-md mb-3 flex items-center justify-center relative">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <Video size={18} className="text-white ml-0.5" />
                      </div>
                    </div>
                  )}
                  <div className="text-[15px] font-600 text-[#0770E3] mb-1" style={{ fontWeight: 600 }}>
                    {headline || "Your headline will appear here"}
                  </div>
                  <div className="text-[12px] text-[#334155] leading-relaxed mb-3">
                    {description || "Your description will appear here. Make it compelling and relevant to your audience."}
                  </div>
                  <button className="px-4 py-1.5 bg-[#0770E3] text-white text-[12px] font-500 rounded-md" style={{ fontWeight: 500 }}>
                    {cta}
                  </button>
                </div>
                <p className="text-[11px] text-[#64748B] mt-3">
                  Preview is approximate. Final appearance may vary by placement.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="animate-fade-in-up">
          <h2 className="text-[16px] font-600 text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>
            Budget, Targeting & Schedule
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="sky-card p-5">
                <h3 className="text-[13px] font-600 text-[#334155] mb-4 flex items-center gap-2" style={{ fontWeight: 600 }}>
                  <DollarSign size={15} className="text-[#0770E3]" /> Budget
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[12px] font-500 text-[#334155] mb-1.5" style={{ fontWeight: 500 }}>Daily Budget (USD)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[13px] text-[#64748B]">$</span>
                      <input
                        type="number"
                        value={budget}
                        onChange={e => setBudget(e.target.value)}
                        className="w-full pl-7 pr-3 py-2.5 text-[13px] border border-[#E3E8EF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0770E3] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-500 text-[#334155] mb-1.5" style={{ fontWeight: 500 }}>Bidding Strategy</label>
                    <select className="w-full px-3 py-2.5 text-[13px] border border-[#E3E8EF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0770E3] bg-white">
                      <option>Cost Per Click (CPC)</option>
                      <option>Cost Per Mille (CPM)</option>
                      <option>Cost Per Acquisition (CPA)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="sky-card p-5">
                <h3 className="text-[13px] font-600 text-[#334155] mb-4 flex items-center gap-2" style={{ fontWeight: 600 }}>
                  <Calendar size={15} className="text-[#0770E3]" /> Schedule
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12px] font-500 text-[#334155] mb-1.5" style={{ fontWeight: 500 }}>Start Date</label>
                    <input type="date" className="w-full px-3 py-2.5 text-[13px] border border-[#E3E8EF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0770E3]" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-500 text-[#334155] mb-1.5" style={{ fontWeight: 500 }}>End Date</label>
                    <input type="date" className="w-full px-3 py-2.5 text-[13px] border border-[#E3E8EF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0770E3]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="sky-card p-5">
                <h3 className="text-[13px] font-600 text-[#334155] mb-4 flex items-center gap-2" style={{ fontWeight: 600 }}>
                  <Target size={15} className="text-[#0770E3]" /> Audience Targeting
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[12px] font-500 text-[#334155] mb-1.5" style={{ fontWeight: 500 }}>Destination</label>
                    <select
                      value={targeting}
                      onChange={e => setTargeting(e.target.value)}
                      className="w-full px-3 py-2.5 text-[13px] border border-[#E3E8EF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0770E3] bg-white"
                    >
                      <option>All Destinations</option>
                      <option>Europe</option>
                      <option>North America</option>
                      <option>Asia Pacific</option>
                      <option>Middle East & Africa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-500 text-[#334155] mb-1.5" style={{ fontWeight: 500 }}>User Intent</label>
                    <div className="space-y-2">
                      {["Searching for flights", "Comparing hotels", "Planning trips", "Booking now"].map(intent => (
                        <label key={intent} className="flex items-center gap-2.5 cursor-pointer">
                          <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-[#CBD5E1] text-[#0770E3] focus:ring-[#0770E3]" />
                          <span className="text-[12px] text-[#334155]">{intent}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-500 text-[#334155] mb-1.5" style={{ fontWeight: 500 }}>
                      <Globe size={13} className="inline mr-1" />
                      Language
                    </label>
                    <select className="w-full px-3 py-2.5 text-[13px] border border-[#E3E8EF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0770E3] bg-white">
                      <option>All Languages</option>
                      <option>English</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Spanish</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="animate-fade-in-up">
          <h2 className="text-[16px] font-600 text-[#0F172A] mb-4" style={{ fontWeight: 600 }}>
            Review & Launch
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="sky-card p-5">
                <h3 className="text-[13px] font-600 text-[#334155] mb-3" style={{ fontWeight: 600 }}>Ad Summary</h3>
                <div className="space-y-2.5">
                  {[
                    { label: "Ad Type", value: selectedAdType?.label ?? "—" },
                    { label: "Headline", value: headline || "Not set" },
                    { label: "Call to Action", value: cta },
                    { label: "Daily Budget", value: `$${budget}` },
                    { label: "Targeting", value: targeting },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between py-2 border-b border-[#F0F4F8] last:border-0">
                      <span className="text-[12px] text-[#64748B]">{label}</span>
                      <span className="text-[12px] font-500 text-[#0F172A]" style={{ fontWeight: 500 }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#E8F2FF] rounded-lg border border-[#C7DEFF]">
                <div className="flex items-start gap-2">
                  <Info size={14} className="text-[#0770E3] mt-0.5 shrink-0" />
                  <p className="text-[12px] text-[#334155]">
                    By launching this ad, you agree to Skyscanner's{" "}
                    <span className="text-[#0770E3] underline cursor-pointer">Advertising Policies</span> and{" "}
                    <span className="text-[#0770E3] underline cursor-pointer">Terms of Service</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="sky-card p-5">
              <h3 className="text-[13px] font-600 text-[#334155] mb-4" style={{ fontWeight: 600 }}>Estimated Performance</h3>
              <div className="space-y-4">
                {[
                  { label: "Est. Daily Impressions", value: "12,000 – 18,000", color: "#0770E3" },
                  { label: "Est. Daily Clicks", value: "240 – 360", color: "#00A698" },
                  { label: "Est. CTR", value: "2.0% – 2.5%", color: "#F5A623" },
                ].map(({ label, value, color }) => (
                  <div key={label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[12px] text-[#64748B]">{label}</span>
                      <span className="metric-value text-[13px]" style={{ color }}>{value}</span>
                    </div>
                    <div className="h-1.5 bg-[#F0F4F8] rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: "65%", background: color, opacity: 0.6 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E3E8EF]">
        <button
          onClick={() => setCurrentStep(c => Math.max(0, c - 1))}
          disabled={currentStep === 0}
          className="px-5 py-2.5 text-[13px] font-500 text-[#334155] border border-[#E3E8EF] rounded-md hover:bg-[#F0F4F8] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          style={{ fontWeight: 500 }}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-2.5 text-[13px] font-500 bg-[#0770E3] text-white rounded-md hover:bg-[#0557B0] transition-all"
          style={{ fontWeight: 500 }}
        >
          {currentStep === steps.length - 1 ? "Launch Ad" : "Continue"}
          <ChevronRight size={15} />
        </button>
      </div>
    </Layout>
  );
}
