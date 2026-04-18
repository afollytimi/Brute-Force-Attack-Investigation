# Project Requirements Document: Cyclistic BI Project

**BI Analyst:** Timilehin Afolayan  
**Client/Sponsor:** Jamal Harris, Director, Customer Data

## Purpose
Cyclistic's Customer Growth Team is creating a business plan for next year and needs to understand how customers are using their bikes, with a top priority on identifying customer demand at different station locations. Since the dataset includes millions of rides, the team requires a dashboard that summarizes key insights. Investing resources in this project is crucial because business plans driven by customer insights are more successful than those based solely on internal staff observations. An executive view with summarized and aggregated data points will provide the leadership team with a clear vision of customer usage patterns.

## Key Dependencies
This project relies heavily on a dataset of customer data, requiring approval from the Director of Customer Data. Additionally, approval is needed from the teams that own specific product data, such as bike trip duration and bike identification numbers, to validate that the data is being interpreted correctly. The primary contacts for these dependencies are Adhira Patel, Megan Pirato, Rick Andersson, and Tessa Blackwell.

## Stakeholder Requirements
The established stakeholder requirements are prioritized as follows to help Cyclistic decision-makers understand customer usage and demand:

| Requirement | Priority |
| :--- | :--- |
| A table or map visualization exploring starting and ending station locations, aggregated by location. | Required (R) |
| A visualization showing which destination (ending) locations are popular based on total trip minutes. | Required (R) |
| A visualization showing the percent growth in the number of trips year over year. | Required (R) |
| Gather insights about the number of trips across all starting and ending locations. | Required (R) |
| Gather insights about peak usage by time of day, season, and the impact of weather. | Required (R) |
| A visualization that focuses on trends from the summer of 2015. | Desired (D) |
| Gather insights about congestion at stations. | Nice to have (N) |

## Success Criteria
Success for this project is defined using SMART criteria. The BI insights must specifically identify the characteristics of a successful product, demonstrating how customers currently use bikes and what impacts demand at station locations. Progress is measurable by evaluating each trip using starting and ending locations, duration, and variables such as time of day, season, and weather. The outcomes must be action-oriented, proving or disproving the theory that location, time, season, and weather impact user demand, which the team will use to refine future product development. All metrics are relevant as they support the primary question of how to build a better Cyclistic experience. Finally, the analysis is time-bound, exploring data that spans at least one year to capture how seasonality affects usage, including peaks and valleys.

## User Journeys
The primary goal of Cyclistic is to provide customers with a superior bike-share experience. A deeper dive into trip trends will help decision-makers explore the current user experience with Cyclistic bikes and identify areas for improvement. The ideal future experience involves using these insights to strategically place new stations and optimize bike availability, ultimately enhancing customer satisfaction and alleviating demand in high-traffic areas.

## Assumptions
Several assumptions are made for this project. First, the dataset includes latitude and longitude of stations but lacks more specific geographic aggregation details like zip codes, neighborhood names, or boroughs; it is assumed the team will provide a separate database with this information. Second, the weather data does not specify the time precipitation occurred, so it is assumed that any amount of precipitation on the day of the trip could impact usage. Lastly, it is assumed that starting bike trips at a location is impossible if no bikes are available, meaning other factors for demand might need consideration.

## Compliance and Privacy
To ensure compliance and privacy, the data must not include any personal data such as names, email addresses, phone numbers, or physical addresses. While users provide this information during device activation, it is not necessary for this project. Anonymizing users is paramount to avoiding any bias and protecting customer privacy.

## Accessibility
The dashboards should be accessible to all users. Key considerations include offering text alternatives, such as large print options and text-to-speech functionality, to ensure that the reports are usable by individuals with varying accessibility needs.

## Roll-out Plan
The rollout plan involves developing the dashboard and validating the data with the primary contacts. The initial scope focuses on the required visualizations and insights, prioritizing the understanding of customer demand and usage patterns over a one-year period. Measurements will be taken after the initial launch to determine if the dashboard accurately reflects the data and meets stakeholder needs. If the dashboard fails to meet its intended goals, a rollback plan will involve reverting to previous reporting methods while the issues are addressed and resolved.
