# Skyscanner Advertising Platform — JIRA Stories

**Project:** Skyscanner  
**Reporter:** [Your Name]  
**Sprint:** Platform Redesign — Task 4  
**Date:** March 2026

---

## Overview

This document contains three JIRA user stories corresponding to the three UI/UX designs created for the redesigned Skyscanner Advertising Platform. Each story is written for the front-end development team and includes a descriptive title, project context, acceptance criteria, and a link to the associated design.

The redesign addresses four key risks identified in the task brief: **value risk** (making the product more attractive to partners), **usability risk** (enabling new users to navigate with minimal training), **feasibility risk** (improving existing functionality rather than rebuilding from scratch), and **investment risk** (ensuring the venture makes business sense).

---

## Story 1 — Ad Creation Flow

| Field | Value |
|---|---|
| **Title** | Implement a step-by-step Ad Creation wizard with three selectable ad formats |
| **Project** | Skyscanner |
| **Reporter** | [Your Name] |
| **Story Type** | Feature |
| **Priority** | High |
| **Estimated Effort** | 5 Story Points |

### Description

As a developer, I would like to build a multi-step Ad Creation wizard that allows external partner users to create advertisements on the Skyscanner platform without requiring prior training or internal support.

The wizard must present three ad format options on the first step: **Text Ad**, **Image & Text Ad**, and **Video Ad**. Each format should be represented by a clearly labelled card component with a descriptive icon, a short description of the format's use case, and a status badge (e.g., "Most Popular", "Recommended", "High Engagement"). The selected card should display a visual confirmation state — specifically, a ring highlight in Skyscanner's azure blue (`#0770E3`) and a checkmark indicator.

The wizard should progress through four clearly labelled steps displayed in a horizontal step-progress bar at the top of the page: **Select Ad Type → Configure Ad → Set Budget & Schedule → Review & Launch**. Completed steps should be indicated with a filled checkmark icon; the active step should display a ring highlight. Navigation between steps must be possible via "Back" and "Continue" buttons at the bottom of the page.

The **Configure Ad** step must render a dynamic form based on the selected ad type, including fields for Headline (max 60 characters with live character counter), Description (max 150 characters with live character counter), Call to Action dropdown, and — for Image & Text and Video formats — a drag-and-drop file upload zone. A live **Ad Preview** panel must be rendered alongside the form, updating in real time as the user types.

The **Budget & Schedule** step must include fields for Daily Budget (USD), Bidding Strategy (CPC/CPM/CPA), Start Date, End Date, Destination targeting, User Intent checkboxes, and Language selector.

The **Review & Launch** step must display a summary of all entered values alongside an **Estimated Performance** panel showing projected daily impressions, clicks, and CTR ranges.

**Design Reference:** [View Design 1 — Ad Creation](https://skyscanner-ad-platform.manus.space/ad-creation)

### Acceptance Criteria

The step-progress bar correctly reflects the current step and marks completed steps. Clicking "Continue" on Step 1 without selecting an ad type displays an error toast. The live preview updates within 100ms of user input. The file upload zone accepts JPG/PNG (Image & Text) and MP4/MOV (Video) and rejects other formats with a clear error message. Submitting on the final step displays a success confirmation toast.

---

## Story 2 — Ad Performance Analytics Dashboard

| Field | Value |
|---|---|
| **Title** | Build an Ad Performance Analytics dashboard with KPI cards, charts, and ad-type breakdown table |
| **Project** | Skyscanner |
| **Reporter** | [Your Name] |
| **Story Type** | Feature |
| **Priority** | High |
| **Estimated Effort** | 8 Story Points |

### Description

As a developer, I would like to build an Ad Performance Analytics dashboard that enables partner users to monitor the performance of their active advertising campaigns in real time, without needing to contact the Skyscanner internal team for reports.

The dashboard must display four **KPI metric cards** at the top of the page: Total Impressions, Total Clicks, Average CTR, and Total Spend. Each card must show the current value in a monospace font (JetBrains Mono or equivalent), a percentage change indicator compared to the previous period (displayed in green for positive change, red for negative), and a small icon representing the metric.

Below the KPI row, the dashboard must display a **Performance Over Time** line chart spanning the selected date range. The chart must support toggling between three metrics — Impressions, Clicks, and Spend — via a tab selector above the chart. The chart must use Recharts (or equivalent) with a clean grid, custom tooltip, and smooth line rendering.

A **Pie chart** (donut style) must be displayed alongside the line chart, showing the distribution of impressions across the three ad types (Text Ad, Image & Text, Video Ad), each represented by a distinct brand-aligned colour.

A **Clicks by Day** bar chart must be displayed below, using the same date range as the line chart.

An **Ad Type Breakdown table** must list each ad type with its Impressions, Clicks, CTR, and Spend values, with a totals row at the bottom. CTR values must be displayed as pill badges in Skyscanner azure.

A **date range selector** (Last 7 Days, Last 30 Days, Last 90 Days, Custom) must be displayed in the top-right of the page header. Selecting a range must update all charts and KPI cards simultaneously.

**Design Reference:** [View Design 2 — Analytics Dashboard](https://skyscanner-ad-platform.manus.space/analytics)

### Acceptance Criteria

All four KPI cards render with correct values and change indicators. The line chart correctly toggles between Impressions, Clicks, and Spend without page reload. The pie chart legend correctly labels all three ad types. The date range selector updates all charts on click. The ad type breakdown table displays a correct totals row. All charts are responsive and render correctly at 1280px, 1440px, and 1920px viewport widths.

---

## Story 3 — User Feedback Survey

| Field | Value |
|---|---|
| **Title** | Create a User Feedback Survey page with five structured questions and Skyscanner brand styling |
| **Project** | Skyscanner |
| **Reporter** | [Your Name] |
| **Story Type** | Feature |
| **Priority** | Medium |
| **Estimated Effort** | 3 Story Points |

### Description

As a developer, I would like to build a User Feedback Survey page that collects structured feedback from platform users to identify usability pain points and opportunities for further improvement. This page directly addresses the **usability risk** and **value risk** identified in the platform redesign brief.

The survey must contain exactly **five questions**, rendered as individual card components with a numbered indicator, the question text, a hint/instruction line, and an interactive answer component. Questions marked as required must display a red asterisk next to the question text.

The five questions and their answer types are as follows:

**Question 1** — "How easy was it to create your first advertisement on the platform?" — answered via a **5-star rating component**. Stars must fill with amber (`#F5A623`) on hover and selection. A text label (e.g., "Very Easy") must appear next to the stars upon selection.

**Question 2** — "Which feature did you find most useful on the Skyscanner Advertising Platform?" — answered via **radio button cards**. Each option must be displayed as a bordered card that highlights in Skyscanner azure (`#E8F2FF` background, `#0770E3` border) when selected.

**Question 3** — "On a scale of 0–10, how likely are you to recommend the Skyscanner Advertising Platform to a colleague or partner?" — answered via an **NPS scale** (11 numbered buttons, 0–10). Buttons 0–6 must highlight in red when selected, 7–8 in amber, and 9–10 in green. A "Detractor / Passive / Promoter" badge must appear below the scale upon selection.

**Question 4** — "How would you rate the overall design and usability of the platform?" — answered via **radio button cards** (same component as Question 2).

**Question 5** — "What improvements or new features would you most like to see added to the Skyscanner Advertising Platform?" — answered via a **textarea** with a 500-character limit and live character counter. This question is optional.

A horizontal **progress bar** must be displayed below the page header, indicating survey completion status.

Upon clicking "Submit Feedback", the page must validate that all required questions (1–4) have been answered. If any required question is unanswered, an error toast must be displayed. Upon successful submission, the page must transition to a **confirmation screen** showing a success icon, a thank-you message, and a "Submit Another Response" button.

**Design Reference:** [View Design 3 — User Feedback Survey](https://skyscanner-ad-platform.manus.space/survey)

### Acceptance Criteria

All five questions render with correct answer components. The star rating component correctly fills and unfills on hover. The NPS scale correctly applies colour coding per score range. Submitting without answering required questions displays an error toast. Successful submission renders the confirmation screen. The "Submit Another Response" button resets all form state and returns to the survey.

---

## Summary Table

| Story | Title | Priority | Points | Design Link |
|---|---|---|---|---|
| SKY-AD-001 | Ad Creation Wizard | High | 5 | [/ad-creation](https://skyscanner-ad-platform.manus.space/ad-creation) |
| SKY-AD-002 | Analytics Dashboard | High | 8 | [/analytics](https://skyscanner-ad-platform.manus.space/analytics) |
| SKY-AD-003 | Feedback Survey | Medium | 3 | [/survey](https://skyscanner-ad-platform.manus.space/survey) |

**Total Story Points:** 16

---

*Prepared for Skyscanner Software Engineering Virtual Experience — Task 4. All designs use Skyscanner's Backpack design system colours and typography conventions.*
