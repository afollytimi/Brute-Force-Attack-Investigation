/*
 * Design 3: User Feedback Survey — Scandinavian Functional Modernism
 * 5 survey questions with Skyscanner brand styling
 * Star ratings, radio buttons, text areas, NPS scale
 */

import Layout from "@/components/Layout";
import { useState } from "react";
import { Star, CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const questions = [
  {
    id: 1,
    type: "rating",
    question: "How easy was it to create your first advertisement on the platform?",
    hint: "1 = Very Difficult, 5 = Very Easy",
  },
  {
    id: 2,
    type: "radio",
    question: "Which feature did you find most useful on the Skyscanner Advertising Platform?",
    hint: "Select one option",
    options: [
      "Ad Creation Wizard",
      "Performance Analytics Dashboard",
      "Audience Targeting Tools",
      "Budget & Scheduling Controls",
      "Ad Preview Feature",
    ],
  },
  {
    id: 3,
    type: "nps",
    question: "On a scale of 0–10, how likely are you to recommend the Skyscanner Advertising Platform to a colleague or partner?",
    hint: "0 = Not at all likely, 10 = Extremely likely",
  },
  {
    id: 4,
    type: "radio",
    question: "How would you rate the overall design and usability of the platform?",
    hint: "Select one option",
    options: [
      "Excellent — intuitive and easy to navigate",
      "Good — mostly clear with minor confusion",
      "Average — needed some trial and error",
      "Poor — frequently confused or lost",
      "Very Poor — could not complete tasks without help",
    ],
  },
  {
    id: 5,
    type: "textarea",
    question: "What improvements or new features would you most like to see added to the Skyscanner Advertising Platform?",
    hint: "Please share your thoughts — all feedback helps us improve.",
  },
];

export default function Survey() {
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [radios, setRadios] = useState<Record<number, string>>({});
  const [nps, setNps] = useState<number | null>(null);
  const [textarea, setTextarea] = useState("");
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!ratings[1] || !radios[2] || nps === null || !radios[4]) {
      toast.error("Please answer all required questions before submitting.");
      return;
    }
    setSubmitted(true);
    toast.success("Thank you! Your feedback has been submitted.");
  };

  const getNpsColor = (score: number) => {
    if (score <= 6) return "#E73C3E";
    if (score <= 8) return "#F5A623";
    return "#00A698";
  };

  const getNpsLabel = (score: number) => {
    if (score <= 6) return "Detractor";
    if (score <= 8) return "Passive";
    return "Promoter";
  };

  if (submitted) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in-up">
          <div className="w-16 h-16 rounded-full bg-[#E6F7F6] flex items-center justify-center mb-4">
            <CheckCircle2 size={32} className="text-[#00A698]" />
          </div>
          <h2 className="text-[22px] font-700 text-[#0F172A] mb-2" style={{ fontWeight: 700 }}>
            Thank you for your feedback!
          </h2>
          <p className="text-[14px] text-[#64748B] text-center max-w-md">
            Your responses help us improve the Skyscanner Advertising Platform. We review all feedback and use it to prioritise new features and fixes.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 px-5 py-2.5 bg-[#0770E3] text-white text-[13px] font-500 rounded-md hover:bg-[#0557B0] transition-all"
            style={{ fontWeight: 500 }}
          >
            Submit Another Response
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Page header */}
      <div className="mb-6 animate-fade-in-up">
        <div className="flex items-center gap-2 mb-1">
          <span className="sky-badge bg-[#FEF3E2] text-[#F5A623] text-[11px]">Design 3</span>
          <span className="text-[12px] text-[#64748B]">User Feedback Survey</span>
        </div>
        <h1 className="text-[24px] font-700 text-[#0F172A]" style={{ fontWeight: 700 }}>
          Help Us Improve the Platform
        </h1>
        <p className="text-[13px] text-[#64748B] mt-1">
          This short survey takes approximately 2–3 minutes. Your feedback directly shapes future improvements.
        </p>
      </div>

      {/* Progress bar */}
      <div className="sky-card p-4 mb-6 animate-fade-in-up animate-fade-in-up-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[12px] font-500 text-[#334155]" style={{ fontWeight: 500 }}>Survey Progress</span>
          <span className="text-[12px] text-[#64748B]">5 questions</span>
        </div>
        <div className="h-1.5 bg-[#F0F4F8] rounded-full overflow-hidden">
          <div className="h-full bg-[#0770E3] rounded-full transition-all duration-500" style={{ width: "100%" }} />
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-5">
        {questions.map((q, idx) => (
          <div key={q.id} className={`sky-card p-6 animate-fade-in-up animate-fade-in-up-${Math.min(idx + 1, 5)}`}>
            {/* Question header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-[#0770E3] flex items-center justify-center text-white text-[11px] font-700 shrink-0 mt-0.5" style={{ fontWeight: 700 }}>
                {q.id}
              </div>
              <div>
                <p className="text-[14px] font-500 text-[#0F172A] leading-snug" style={{ fontWeight: 500 }}>
                  {q.question}
                  {q.id !== 5 && <span className="text-[#E73C3E] ml-1">*</span>}
                </p>
                <p className="text-[11px] text-[#64748B] mt-1">{q.hint}</p>
              </div>
            </div>

            {/* Star rating */}
            {q.type === "rating" && (
              <div className="flex items-center gap-3 ml-9">
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map(star => {
                    const isActive = (hoverRating ?? ratings[q.id] ?? 0) >= star;
                    return (
                      <button
                        key={star}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(null)}
                        onClick={() => setRatings(r => ({ ...r, [q.id]: star }))}
                        className="transition-transform duration-100 hover:scale-110"
                      >
                        <Star
                          size={28}
                          className="transition-colors duration-100"
                          fill={isActive ? "#F5A623" : "none"}
                          stroke={isActive ? "#F5A623" : "#CBD5E1"}
                        />
                      </button>
                    );
                  })}
                </div>
                {ratings[q.id] && (
                  <span className="text-[12px] font-500 text-[#64748B]" style={{ fontWeight: 500 }}>
                    {["", "Very Difficult", "Difficult", "Neutral", "Easy", "Very Easy"][ratings[q.id]]}
                  </span>
                )}
              </div>
            )}

            {/* Radio buttons */}
            {q.type === "radio" && q.options && (
              <div className="space-y-2.5 ml-9">
                {q.options.map(option => {
                  const isSelected = radios[q.id] === option;
                  return (
                    <label
                      key={option}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-150 ${
                        isSelected
                          ? "border-[#0770E3] bg-[#E8F2FF]"
                          : "border-[#E3E8EF] hover:border-[#CBD5E1] hover:bg-[#F7F9FC]"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                        isSelected ? "border-[#0770E3]" : "border-[#CBD5E1]"
                      }`}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-[#0770E3]" />}
                      </div>
                      <input
                        type="radio"
                        name={`q${q.id}`}
                        value={option}
                        checked={isSelected}
                        onChange={() => setRadios(r => ({ ...r, [q.id]: option }))}
                        className="sr-only"
                      />
                      <span className={`text-[13px] ${isSelected ? "text-[#0770E3] font-500" : "text-[#334155]"}`} style={isSelected ? { fontWeight: 500 } : {}}>
                        {option}
                      </span>
                    </label>
                  );
                })}
              </div>
            )}

            {/* NPS scale */}
            {q.type === "nps" && (
              <div className="ml-9">
                <div className="flex gap-1.5 flex-wrap">
                  {Array.from({ length: 11 }, (_, i) => i).map(score => {
                    const isSelected = nps === score;
                    const color = getNpsColor(score);
                    return (
                      <button
                        key={score}
                        onClick={() => setNps(score)}
                        className={`w-10 h-10 rounded-lg text-[13px] font-600 border-2 transition-all duration-150 ${
                          isSelected
                            ? "text-white border-transparent"
                            : "border-[#E3E8EF] text-[#64748B] hover:border-[#CBD5E1]"
                        }`}
                        style={isSelected ? { background: color, borderColor: color, fontWeight: 600 } : { fontWeight: 600 }}
                      >
                        {score}
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[11px] text-[#64748B]">Not at all likely</span>
                  <span className="text-[11px] text-[#64748B]">Extremely likely</span>
                </div>
                {nps !== null && (
                  <div className="mt-2 flex items-center gap-2">
                    <span
                      className="sky-badge text-[11px]"
                      style={{ background: getNpsColor(nps) + "20", color: getNpsColor(nps) }}
                    >
                      {getNpsLabel(nps)}
                    </span>
                    <span className="text-[11px] text-[#64748B]">Score: {nps}/10</span>
                  </div>
                )}
              </div>
            )}

            {/* Textarea */}
            {q.type === "textarea" && (
              <div className="ml-9">
                <div className="relative">
                  <MessageSquare size={14} className="absolute left-3 top-3 text-[#CBD5E1]" />
                  <textarea
                    value={textarea}
                    onChange={e => setTextarea(e.target.value)}
                    placeholder="Share your ideas, suggestions, or pain points..."
                    rows={4}
                    maxLength={500}
                    className="w-full pl-9 pr-3 py-2.5 text-[13px] border border-[#E3E8EF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0770E3] focus:border-transparent transition-all resize-none"
                  />
                </div>
                <div className="flex justify-end mt-1">
                  <span className="text-[11px] text-[#64748B]">{textarea.length}/500</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Submit */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E3E8EF]">
        <p className="text-[12px] text-[#64748B]">
          <span className="text-[#E73C3E]">*</span> Required questions
        </p>
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 px-6 py-2.5 text-[13px] font-500 bg-[#0770E3] text-white rounded-md hover:bg-[#0557B0] transition-all"
          style={{ fontWeight: 500 }}
        >
          Submit Feedback
          <ChevronRight size={15} />
        </button>
      </div>
    </Layout>
  );
}
