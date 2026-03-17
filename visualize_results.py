import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Set style
sns.set_theme(style="whitegrid")

# 1. Top Source IPs Bar Chart
ip_df = pd.read_csv("/home/ubuntu/top_ips.csv")
plt.figure(figsize=(10, 6))
sns.barplot(data=ip_df.head(5), x="ip", y="count", hue="ip", palette="viridis", legend=False)
plt.title("Top 5 Source IPs for Failed Login Attempts", fontsize=16)
plt.xlabel("IP Address", fontsize=12)
plt.ylabel("Number of Failed Attempts", fontsize=12)
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("/home/ubuntu/top_ips_chart.png")
plt.close()

# 2. Top Target Accounts Bar Chart
user_df = pd.read_csv("/home/ubuntu/top_users.csv")
plt.figure(figsize=(10, 6))
sns.barplot(data=user_df.head(6), x="user", y="count", hue="user", palette="magma", legend=False)
plt.title("Top 6 Targeted Accounts", fontsize=16)
plt.xlabel("Username", fontsize=12)
plt.ylabel("Number of Failed Attempts", fontsize=12)
plt.tight_layout()
plt.savefig("/home/ubuntu/top_users_chart.png")
plt.close()

# 3. Hourly Distribution Line Chart
hourly_df = pd.read_csv("/home/ubuntu/hourly_dist.csv")
# Ensure all 24 hours are present
all_hours = pd.DataFrame({'hour': range(24)})
hourly_df = pd.merge(all_hours, hourly_df, on='hour', how='left').fillna(0)

plt.figure(figsize=(12, 6))
sns.lineplot(data=hourly_df, x="hour", y="count", marker='o', color='red')
plt.title("Hourly Distribution of Failed Login Attempts", fontsize=16)
plt.xlabel("Hour of Day (24h format)", fontsize=12)
plt.ylabel("Number of Failed Attempts", fontsize=12)
plt.xticks(range(24))
plt.fill_between(hourly_df['hour'], hourly_df['count'], color='red', alpha=0.1)
plt.tight_layout()
plt.savefig("/home/ubuntu/hourly_distribution_chart.png")
plt.close()

print("Visualizations saved to /home/ubuntu/")
