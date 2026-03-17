import random
import datetime
import os

# Configuration
NUM_NORMAL_LOGS = 200
NUM_ATTACK_LOGS = 1500
ATTACK_IPS = ["192.168.1.105", "45.33.22.11", "185.220.101.42"]
TARGET_ACCOUNTS = ["root", "admin", "user", "webmaster", "oracle", "mysql"]
NORMAL_IPS = ["10.0.0.5", "10.0.0.12", "10.0.0.45"]
NORMAL_USERS = ["jdoe", "asmith", "rkhan"]

log_entries = []

# Generate Normal Traffic
start_time = datetime.datetime(2026, 3, 16, 8, 0, 0)
for i in range(NUM_NORMAL_LOGS):
    ts = start_time + datetime.timedelta(minutes=random.randint(1, 720))
    ip = random.choice(NORMAL_IPS)
    user = random.choice(NORMAL_USERS)
    if random.random() > 0.1:
        msg = f"{ts.strftime('%b %d %H:%M:%S')} server1 sshd[{random.randint(1000, 9999)}]: Accepted password for {user} from {ip} port {random.randint(30000, 60000)} ssh2"
    else:
        msg = f"{ts.strftime('%b %d %H:%M:%S')} server1 sshd[{random.randint(1000, 9999)}]: Failed password for {user} from {ip} port {random.randint(30000, 60000)} ssh2"
    log_entries.append((ts, msg))

# Generate Brute Force Attack
# Attack 1: High frequency from one IP targeting root
attack1_start = datetime.datetime(2026, 3, 16, 22, 0, 0)
attack_ip = ATTACK_IPS[0]
for i in range(800):
    ts = attack1_start + datetime.timedelta(seconds=i * 0.5 + random.random())
    user = "root"
    msg = f"{ts.strftime('%b %d %H:%M:%S')} server1 sshd[{random.randint(1000, 9999)}]: Failed password for {user} from {attack_ip} port {random.randint(30000, 60000)} ssh2"
    log_entries.append((ts, msg))

# Attack 2: Distributed/Slower from multiple IPs targeting various accounts
attack2_start = datetime.datetime(2026, 3, 17, 0, 30, 0)
for i in range(700):
    ts = attack2_start + datetime.timedelta(seconds=i * 2 + random.random())
    ip = random.choice(ATTACK_IPS[1:])
    user = random.choice(TARGET_ACCOUNTS)
    msg = f"{ts.strftime('%b %d %H:%M:%S')} server1 sshd[{random.randint(1000, 9999)}]: Failed password for {user} from {ip} port {random.randint(30000, 60000)} ssh2"
    log_entries.append((ts, msg))

# Sort by timestamp
log_entries.sort(key=lambda x: x[0])

# Write to file
with open("/home/ubuntu/auth.log", "w") as f:
    for _, msg in log_entries:
        f.write(msg + "\n")

print(f"Generated {len(log_entries)} log entries in /home/ubuntu/auth.log")
