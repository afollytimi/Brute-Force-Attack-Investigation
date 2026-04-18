# Strategy Document: Cyclistic BI Project

**Sign-off matrix:**

| Name | Team / Role | Date |
| :--- | :--- | :--- |
| Jamal Harris | Director, Customer Data | [Date] |
| Sara Romero | VP, Marketing | [Date] |
| Ernest Cox | VP, Product Development | [Date] |
| Nina Locklear | Director, Procurement | [Date] |

**Proposer:** Timilehin Afolayan, BI Analyst  
**Status:** **Draft** > Under review > Implemented | Not implemented

**Primary dataset:** NYC Citi Bike Trips
**Secondary dataset:** Census Bureau US Boundaries, GSOD from NOAA (weather data), and Zip Code data.

## User Profiles
The intended audience for this dashboard includes the Customer Growth Team and executive leadership, specifically the VP of Marketing, VP of Product Development, Director of Customer Data, and Director of Procurement. They will use this dashboard to understand customer usage patterns, identify demand at various station locations, and make data-driven decisions regarding new station growth and product development.

## Dashboard Functionality

| Dashboard Feature | Your Request |
| :--- | :--- |
| Reference dashboard | Not specified. The dashboard will be designed from scratch based on the specific requirements of the Cyclistic Customer Growth Team. |
| Access | Access should be restricted to the primary stakeholders (Sara Romero, Ernest Cox, Jamal Harris, Nina Locklear) and the data validation team (Adhira Patel, Megan Pirato, Rick Andersson, Tessa Blackwell). |
| Scope | The dashboard will include bike trip data (start/end times, locations, user types), weather data, and geographical data (zip codes, boroughs). It will exclude any personally identifiable information (PII) to ensure compliance and privacy. |
| Date filters and granularity | The dashboard must include date filters, with the default time frame displaying the most recent full year of data to capture seasonality. A granularity drop-down should be included, defaulting to a monthly view to observe broader trends, with options to drill down to daily or hourly views. |

## Metrics and Charts

### Chart 1: Station Demand Map
| Chart Feature | Your Request |
| :--- | :--- |
| Chart title | Starting and Ending Station Locations |
| Chart type | Map Visualization |
| Dimension(s) | Latitude, Longitude, Station Name |
| Metric(s) | Number of trips |

### Chart 2: Popular Destinations
| Chart Feature | Your Request |
| :--- | :--- |
| Chart title | Popular Destination Locations by Trip Minutes |
| Chart type | Bar Chart |
| Dimension(s) | Destination Station Name |
| Metric(s) | Total trip minutes |

### Chart 3: Year-Over-Year Growth
| Chart Feature | Your Request |
| :--- | :--- |
| Chart title | Year-Over-Year Trip Growth |
| Chart type | Line Chart |
| Dimension(s) | Year, Month |
| Metric(s) | Percent growth in number of trips |

### Chart 4: Peak Usage Trends
| Chart Feature | Your Request |
| :--- | :--- |
| Chart title | Peak Usage by Time, Season, and Weather |
| Chart type | Heatmap or Line Chart |
| Dimension(s) | Time of day, Season, Weather conditions (e.g., precipitation) |
| Metric(s) | Number of trips |

## Dashboard Mockup
[A low-fidelity mockup sketch will be provided here, illustrating the layout of the map visualization, bar charts for popular destinations, and line charts for year-over-year growth and peak usage trends.]

---

## Follow-up Questions for Stakeholders
1. What specific weather conditions (e.g., temperature thresholds, specific amounts of precipitation) should be considered as having a significant impact on bike usage?
2. Are there any specific geographic boundaries or neighborhoods that the Customer Growth Team is prioritizing for new station locations?
3. How frequently does the leadership team expect the dashboard data to be refreshed (e.g., daily, weekly, monthly)?
