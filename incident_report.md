# Incident Report: Brute-Force Attack Investigation

**Date:** March 17, 2026
**Author:** Manus AI

## 1. Executive Summary

This report details the investigation into suspected brute-force login attempts targeting a server, as indicated by repeated failed login attempts. Analysis of authentication logs (`auth.log`) revealed a significant volume of failed login attempts originating from multiple external IP addresses, primarily targeting common administrative accounts. The attack exhibited distinct time patterns, suggesting both a concentrated, high-frequency attack and a more distributed, sustained effort.

## 2. Investigation Details

### 2.1. Log Ingestion and Analysis

Authentication logs were ingested and analyzed to identify key indicators of compromise, including source IP addresses, targeted user accounts, and the temporal distribution of failed login attempts. The analysis focused on entries indicating "Failed password" attempts.

### 2.2. Key Findings

#### 2.2.1. Source IPs

The investigation identified several IP addresses responsible for the majority of failed login attempts. The top attacking IP addresses are:

| IP Address      | Failed Attempts |
|-----------------|-----------------|
| 192.168.1.105   | 800             |
| 45.33.22.11     | 363             |
| 185.220.101.42  | 337             |

These IPs are indicative of external malicious activity. The IP `192.168.1.105` shows an unusually high number of attempts, suggesting a dedicated attacker or botnet node.

![Top 5 Source IPs for Failed Login Attempts](/home/ubuntu/top_ips_chart.png)

#### 2.2.2. Target Accounts

The attackers primarily targeted common system accounts, which is typical of brute-force attacks aiming to guess default or weak credentials. The most frequently targeted accounts include:

| Account   | Failed Attempts |
|-----------|-----------------|
| root      | 920             |
| mysql     | 124             |
| oracle    | 124             |
| webmaster | 115             |
| user      | 111             |
| admin     | 106             |

This pattern highlights the attackers' focus on high-privilege accounts.

![Top 6 Targeted Accounts](/home/ubuntu/top_users_chart.png)

#### 2.2.3. Time Patterns

The failed login attempts show distinct temporal patterns. A significant spike in activity was observed around 22:00 (10 PM) and another around 00:00 (midnight) to 01:00 (1 AM) UTC on March 16-17, 2026. This suggests concentrated attack windows rather than a continuous, low-level scan.

![Hourly Distribution of Failed Login Attempts](/home/ubuntu/hourly_distribution_chart.png)

## 3. Evidence (Log Queries)

While a Splunk environment was simulated, the underlying analysis involved parsing `auth.log` entries. Equivalent Splunk queries would typically involve:

*   **Identifying Failed Logins:**
    ```splunk
    index=your_index sourcetype=your_sourcetype "Failed password" | table _time, host, src_ip, user
    ```
*   **Top Source IPs:**
    ```splunk
    index=your_index sourcetype=your_sourcetype "Failed password" | stats count by src_ip | sort -count | head 10
    ```
*   **Top Target Accounts:**
    ```splunk
    index=your_index sourcetype=your_sourcetype "Failed password" | rex "Failed password for (invalid user )?(?<user>\S+) from" | stats count by user | sort -count | head 10
    ```
*   **Hourly Distribution:**
    ```splunk
    index=your_index sourcetype=your_sourcetype "Failed password" | timechart span=1h count
    ```

## 4. Recommendations

Based on the findings, the following recommendations are provided to mitigate future brute-force attacks and enhance security posture:

1.  **Implement Account Lockout Policy:** Configure the server to temporarily lock accounts after a specified number of consecutive failed login attempts (e.g., 3-5 attempts within 5 minutes). This will significantly hinder brute-force efforts.
2.  **Strong Password Policy:** Enforce a strong password policy requiring complex, long passwords that are difficult to guess or crack.
3.  **Multi-Factor Authentication (MFA):** Implement MFA for all user accounts, especially for administrative accounts. MFA adds an additional layer of security, making it much harder for attackers to gain unauthorized access even if they compromise credentials.
4.  **IP Blacklisting/Firewall Rules:** Block the identified malicious IP addresses (`192.168.1.105`, `45.33.22.11`, `185.220.101.42`) at the firewall level. Consider implementing dynamic blacklisting solutions that automatically block IPs exhibiting suspicious activity.
5.  **Rename Default Accounts:** If possible, rename default administrative accounts (e.g., `root`, `admin`) to less predictable names to reduce their attractiveness as targets.
6.  **Intrusion Detection/Prevention System (IDS/IPS):** Deploy and configure an IDS/IPS to detect and automatically respond to brute-force attempts and other malicious network traffic.
7.  **Regular Log Review:** Establish a routine for security personnel to regularly review authentication logs for suspicious patterns and anomalies.
8.  **Geographic IP Filtering:** If access from certain geographic regions is not expected, consider blocking IP ranges from those regions at the firewall.

## 5. Conclusion

The investigation confirms that the server was subjected to a brute-force attack. The identified source IPs, targeted accounts, and time patterns provide actionable intelligence for immediate mitigation and long-term security enhancements. Implementing the recommended measures will significantly improve the server's resilience against similar attacks.
