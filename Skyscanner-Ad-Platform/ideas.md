# Skyscanner Ad Platform — Design Brainstorm

## Context
Three UI designs for Skyscanner's redesigned advertising platform:
1. Ad Creation page (select ad type: Text, Image+Text, Video)
2. Ad Performance Analytics dashboard
3. User Feedback Survey page

---

<response>
<probability>0.07</probability>
<idea>

**Design Movement**: Scandinavian Functional Modernism
**Core Principles**:
- Radical clarity: every element earns its place through function
- Asymmetric tension: sidebar-anchored layouts with deliberate visual weight
- Restrained color: Skyscanner's signature azure (#0770E3) as the sole accent against off-white and cool grey
- Typographic hierarchy through weight contrast, not size alone

**Color Philosophy**: White (#FFFFFF) as the canvas, cool grey (#F0F4F8) for surface depth, azure blue (#0770E3) for interactive elements only — no decorative color. This mirrors Skyscanner's own brand restraint while signaling trust and precision.

**Layout Paradigm**: Left-rail navigation (240px fixed), content in a 2-column asymmetric grid. Cards float with 8px soft shadows. No full-bleed hero sections.

**Signature Elements**:
- Thin 1px dividers in grey (#E3E8EF) to separate logical groups
- Pill-shaped status badges in muted tones
- Micro-animated progress indicators on form steps

**Interaction Philosophy**: Hover states reveal depth (shadow lift). Active states use a 3px left border in azure. Transitions are 150ms ease-out — fast and purposeful.

**Animation**: Fade-in-up (12px, 200ms) for cards on mount. Chart bars animate in with a 400ms ease-out stagger. No decorative animations.

**Typography System**:
- Display: DM Sans Bold (headings)
- Body: DM Sans Regular (body text, labels)
- Mono: JetBrains Mono (metric values, IDs)
- Scale: 12/14/16/20/28/36px

</idea>
</response>

<response>
<probability>0.06</probability>
<idea>

**Design Movement**: Corporate Glassmorphism with Sky Gradient
**Core Principles**:
- Translucent surfaces over a sky-blue gradient background
- Depth through layering: background → glass panels → interactive elements
- Skyscanner's azure as the primary brand color with teal accents
- Rounded 16px corners throughout

**Color Philosophy**: A soft sky gradient (#E8F4FD → #C8E6F8) as the page background, frosted-glass cards (rgba(255,255,255,0.7) with backdrop-blur), azure (#0770E3) CTAs. Creates an "in the sky" metaphor aligned with Skyscanner's travel brand.

**Layout Paradigm**: Centered content with max-width 1200px, glass card panels, top navigation bar. 3-column grid for analytics.

**Signature Elements**:
- Frosted glass cards with subtle border (rgba(255,255,255,0.5))
- Gradient sky background throughout
- Floating action buttons with azure glow

**Interaction Philosophy**: Cards lift on hover with increased blur. Buttons pulse subtly on hover. Form fields have azure focus rings.

**Animation**: Cards slide up 20px on mount (300ms spring). Charts draw in from left. Background gradient shifts subtly on scroll.

**Typography System**:
- Display: Plus Jakarta Sans SemiBold
- Body: Plus Jakarta Sans Regular
- Scale: 13/15/17/22/32px

</idea>
</response>

<response>
<probability>0.08</probability>
<idea>

**Design Movement**: Precision Data Dashboard — Editorial Grid
**Core Principles**:
- Data-first: metrics and charts dominate, chrome is minimal
- Editorial grid: 12-column CSS grid with deliberate column spanning
- Skyscanner azure as the primary brand color, with amber (#F5A623) as the data accent
- Typography-led hierarchy: large metric numbers, small labels

**Color Philosophy**: Pure white background, azure (#0770E3) for primary actions and chart fills, amber (#F5A623) for secondary metrics and warnings, slate (#334155) for text. Creates a professional analytics environment.

**Layout Paradigm**: Persistent left sidebar (220px) + top breadcrumb bar + main content area. Analytics page uses a 3-column KPI row + 2-column chart grid below.

**Signature Elements**:
- Large bold metric numbers (48px DM Mono) with small unit labels
- Horizontal rule separators with section labels
- Sparkline mini-charts inline with KPI cards

**Interaction Philosophy**: Click-to-filter on chart segments. Hover tooltips on all data points. Tab navigation between design pages.

**Animation**: KPI numbers count up on mount (800ms). Chart bars stagger in (50ms delay each). Sidebar items slide in from left on load.

**Typography System**:
- Display: Space Grotesk Bold
- Body: Space Grotesk Regular
- Mono: Space Mono (all numbers/metrics)
- Scale: 11/13/15/18/24/32/48px

</idea>
</response>

---

## Selected Approach: **Scandinavian Functional Modernism** (Response 1)

Clean, professional, and directly aligned with Skyscanner's actual brand. The azure-on-white palette matches their design system (Backpack), the asymmetric sidebar layout is appropriate for a B2B ad management tool, and the restrained animation philosophy ensures the designs feel production-ready rather than decorative.
