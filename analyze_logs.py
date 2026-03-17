import re
import pandas as pd
from collections import Counter

log_file = "/home/ubuntu/auth.log"
failed_pattern = r"Failed password for (invalid user )?(\S+) from (\S+) port"

failed_attempts = []

with open(log_file, "r") as f:
    for line in f:
        match = re.search(failed_pattern, line)
        if match:
            # Group 2 is user, Group 3 is IP
            user = match.group(2)
            ip = match.group(3)
            # Extract timestamp (first 15 chars: "Mar 16 22:00:00")
            ts_str = line[:15]
            failed_attempts.append({"timestamp": ts_str, "user": user, "ip": ip})

df = pd.DataFrame(failed_attempts)

# 1. Source IPs with highest failed attempts
ip_counts = df['ip'].value_counts()
print("Top Source IPs for Failed Logins:")
print(ip_counts)
print("\n")

# 2. Target Accounts with highest failed attempts
user_counts = df['user'].value_counts()
print("Top Target Accounts for Failed Logins:")
print(user_counts)
print("\n")

# 3. Time Distribution (Hourly)
# Convert to datetime (assume 2026 for consistency)
df['datetime'] = pd.to_datetime(df['timestamp'] + " 2026", format="%b %d %H:%M:%S %Y")
df['hour'] = df['datetime'].dt.hour
hourly_counts = df['hour'].value_counts().sort_index()
print("Hourly Distribution of Failed Logins:")
print(hourly_counts)

# Save results for report
ip_counts.to_csv("/home/ubuntu/top_ips.csv")
user_counts.to_csv("/home/ubuntu/top_users.csv")
hourly_counts.to_csv("/home/ubuntu/hourly_dist.csv")
df.to_csv("/home/ubuntu/all_failed_attempts.csv", index=False)
