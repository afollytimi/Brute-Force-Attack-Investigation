# Project Requirements Document: Google Fiber Repeat Call Analysis

**BI Analyst:** Timilehin Afolayan
**Client/Sponsor:** Emma Santiago, Hiring Manager

## Purpose
The purpose of this project is to create an interactive dashboard using fictional call center data to investigate trends in repeat caller volume. The Google Fiber Customer Service team needs this to identify potential actions to reduce the number of repeat calls required to successfully close customer issues. This investment will ultimately reduce operational costs and increase customer satisfaction.

## Key dependencies
The major elements of this project involve the analysis of three anonymized market datasets (market_1, market_2, and market_3). The primary contacts are Emma Santiago and Keith Portone. The expected deliverables include merged datasets forming a target table and an interactive Tableau dashboard providing insights into repeat caller volume. Stakeholders must have access to all datasets to review the approach and outcomes.

## Stakeholder requirements
Based on the Stakeholder Requirements Document, the established requirements are prioritized as follows:
*   A chart or table measuring repeat calls by first contact date. (R - Required)
*   A chart or table exploring repeat calls by market and problem type. (R - Required)
*   Repeat caller trends across the three market cities. (R - Required)
*   Charts allowing trend views by week, month, quarter, and year. (R - Required)
*   Charts showcasing repeat calls by week, month, and quarter. (D - Desired)
*   Insights into the customer issues that generate more repeat calls. (D - Desired)

## Success criteria
Success for this project is defined by delivering BI insights that clearly identify the characteristics of repeat calls, including frequency and volume across problem types and markets. 
*   **Specific:** The dashboard must clearly identify how often customers call repeatedly.
*   **Measurable:** Calls must be evaluated using clear metrics (frequency, volume) across problem types and markets.
*   **Action-oriented:** The insights must quantify repeat callers under different conditions so the team can take action to improve customer satisfaction.
*   **Relevant:** All metrics must directly answer the primary question of how often customers repeatedly contact customer service.
*   **Time-bound:** The analysis must cover at least one year of data to understand changes over time and capture peaks and valleys.

## User journeys
The current user experience lacks a centralized, interactive view of repeat call drivers. The ideal future experience allows stakeholders to use the dashboard to quickly identify recurring support issues, understand market-level variations, and prioritize operational actions that reduce repeat contacts.

## Assumptions
*   Market columns in the data are anonymized as market_1, market_2, and market_3.
*   Problem type mappings are: Type_1 (account management), Type_2 (technician troubleshooting), Type_3 (scheduling), Type_4 (construction), and Type_5 (internet and Wi-Fi).
*   Repeat calls are recorded over seven-day periods using `contacts_n` and follow-up fields such as `contacts_n_6` to indicate days since first contact.

## Compliance and privacy
The datasets used are fictionalized, anonymized versions of operational data, approved for analysis. However, stakeholders should still be granted controlled access only to the data necessary to validate the workflow.

## Accessibility
Key considerations for creating accessible reports include offering text alternatives, such as large print and text-to-speech capabilities, for the dashboards.

## Roll-out plan
The expected timeline for this project is six weeks:
*   **Week 1:** Confirm requirements and align stakeholder expectations.
*   **Weeks 2-3:** Prepare and merge market datasets, validate repeat-call fields.
*   **Weeks 4-5:** Build and test dashboard views and filtering behavior.
*   **Week 6:** Final review, executive summary, and stakeholder handoff.
