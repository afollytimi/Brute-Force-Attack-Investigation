# Brute-Force Attack Investigation - SOC Analyst Portfolio Project

## Overview

This project demonstrates a comprehensive Security Operations Center (SOC) analyst investigation into a brute-force attack targeting a server. The investigation includes log analysis, data visualization, and actionable security recommendations.

## Project Structure

```
brute-force-attack-investigation/
├── README.md                          # This file
├── incident_report.md                 # Final incident report with findings and recommendations
├── generate_logs.py                   # Script to generate realistic SSH auth.log dataset
├── analyze_logs.py                    # Script to analyze logs and extract attack indicators
├── visualize_results.py               # Script to create visualizations
├── top_ips_chart.png                  # Visualization: Top source IPs
├── top_users_chart.png                # Visualization: Top targeted accounts
└── hourly_distribution_chart.png      # Visualization: Hourly attack pattern
```

## Key Findings

### Attack Indicators

- **Primary Attacker IP:** 192.168.1.105 (800 failed attempts)
- **Secondary Attackers:** 45.33.22.11 (363 attempts), 185.220.101.42 (337 attempts)
- **Most Targeted Account:** root (920 failed attempts)
- **Attack Windows:** Concentrated around 22:00-01:00 UTC

### Evidence

The investigation identified:
1. **Source IPs** - Three primary malicious IP addresses responsible for the majority of attacks
2. **Time Patterns** - Distinct attack windows suggesting coordinated activity
3. **Target Accounts** - Focus on high-privilege accounts (root, admin, mysql, oracle)

## How to Use

### Prerequisites

- Python 3.7+
- pandas
- matplotlib
- seaborn

### Installation

```bash
pip install pandas matplotlib seaborn
```

### Running the Analysis

1. **Generate Log Dataset:**
   ```bash
   python generate_logs.py
   ```
   This creates a realistic `auth.log` file with normal traffic and brute-force attack patterns.

2. **Analyze the Logs:**
   ```bash
   python analyze_logs.py
   ```
   This extracts attack indicators and generates CSV files:
   - `top_ips.csv` - Source IPs ranked by failed attempts
   - `top_users.csv` - Target accounts ranked by failed attempts
   - `hourly_dist.csv` - Hourly distribution of attacks
   - `all_failed_attempts.csv` - Complete dataset of failed logins

3. **Generate Visualizations:**
   ```bash
   python visualize_results.py
   ```
   This creates PNG charts for the incident report.

## Incident Report

The `incident_report.md` file contains:
- **Executive Summary** - High-level overview of the attack
- **Investigation Details** - Detailed findings with evidence
- **Log Queries** - Example Splunk queries for similar investigations
- **Recommendations** - 8 actionable security measures to prevent future attacks

### Key Recommendations

1. Implement account lockout policies
2. Enforce strong password requirements
3. Deploy multi-factor authentication (MFA)
4. Block malicious IPs at the firewall
5. Rename default administrative accounts
6. Deploy intrusion detection/prevention systems (IDS/IPS)
7. Establish routine log review procedures
8. Implement geographic IP filtering

## Technical Details

### Log Format

The generated logs follow the standard Linux SSH authentication log format:
```
Mar 16 22:00:00 server1 sshd[1234]: Failed password for root from 192.168.1.105 port 54321 ssh2
```

### Analysis Methodology

1. **Log Parsing** - Regex-based extraction of failed login attempts
2. **Data Aggregation** - Grouping by source IP, target account, and time
3. **Statistical Analysis** - Counting and ranking attack sources
4. **Visualization** - Creating charts for incident report

## Portfolio Value

This project demonstrates:
- **Log Analysis Skills** - Ability to parse and interpret security logs
- **Data Analysis** - Using Python (pandas) for security data analysis
- **Visualization** - Creating professional charts for incident reporting
- **Security Knowledge** - Understanding brute-force attack patterns and mitigation
- **Report Writing** - Professional incident documentation
- **SOC Analyst Competency** - Complete investigation workflow from data to recommendations

## Tools Used

- **Python** - Data processing and analysis
- **pandas** - Data manipulation and analysis
- **matplotlib/seaborn** - Data visualization
- **Regular Expressions** - Log parsing

## Future Enhancements

- Integration with Splunk or ELK Stack for real-time monitoring
- Machine learning models for anomaly detection
- Automated alerting system for brute-force patterns
- Integration with threat intelligence feeds for IP reputation
- Dashboard for continuous monitoring

## Author

**Manus AI** - SOC Analyst Portfolio Project

## License

This project is provided for educational and portfolio purposes.

---

For questions or improvements, please refer to the incident report for detailed investigation methodology.
