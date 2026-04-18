# Strategy Document: Google Fiber Repeat Call Analysis

## Sign-off matrix:
| Name | Team / Role | Date |
| :--- | :--- | :--- |
| Timilehin Afolayan | BI Analyst | Current Date |
| Emma Santiago | Hiring Manager | |

**Proposer:** Emma Santiago, Hiring Manager
**Status:** Under review

## Primary dataset:
market_1, market_2, market_3

## Secondary dataset:
(None explicitly specified in the scenario, though mapping tables for problem types might be considered here)

## User Profiles
The intended audience for this dashboard includes Emma Santiago (Hiring Manager), Keith Portone (Project Manager), Minna Rah (Lead BI Analyst), Ian Ortega (BI Analyst), and Sylvie Essa (BI Analyst). They will use the dashboard to explore repeat callers and their problem types across three market cities to identify areas for operational optimization.

## Dashboard Functionality

| Dashboard Feature | Your Request |
| :--- | :--- |
| **Reference dashboard** | Not modeled on an existing dashboard. |
| **Access** | Access should be limited to the listed stakeholders. Read-only access for stakeholders to view the data. |
| **Scope** | The dashboard should include date, market, problem type, first contact date, and repeat-call fields (`contacts_n`, `contacts_n_#`). |
| **Date filters and granularity** | The dashboard should include filters for Week, Month, and Quarter. Charts with detailed metrics should support click-through to detailed information. |

## Metrics and Charts

### Chart 1
| Chart Feature | Your Request |
| :--- | :--- |
| **Chart title** | Repeat Calls by First Date |
| **Chart type** | Table |
| **Dimension(s)** | Day of initial call, subsequent repeat calls |
| **Metric(s)** | Contact |

### Chart 2
| Chart Feature | Your Request |
| :--- | :--- |
| **Chart title** | Market and Problem Type of First Repeat Calls |
| **Chart type** | Bar chart |
| **Dimension(s)** | Call type, market, contact_n_1 |
| **Metric(s)** | Contact |

### Chart 3
| Chart Feature | Your Request |
| :--- | :--- |
| **Chart title** | Calls by Market and Type |
| **Chart type** | Table |
| **Dimension(s)** | Market, Problem Type |
| **Metric(s)** | Contact volume |

## Dashboard mockup
(A mockup sketch would be included here, visually representing the layout of the three charts described above, along with the date and market filters at the top of the dashboard.)
