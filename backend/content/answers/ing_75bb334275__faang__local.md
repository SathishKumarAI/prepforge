---
qid: ing_75bb334275__faang__local
question: 'Explain: Replication lag Stay organized with collections Save and categorize
  content based on your preferences.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 493
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:18:08-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to explain *replication lag*—the delay between a write on the primary node and its appearance on replicas. I’ll assume we’re talking about a typical master‑slavish or leader‑follower setup in a distributed database (e.g., Cassandra, MongoDB, PostgreSQL).  

**2️⃣ Approach**  
- Define replication lag conceptually.  
- Identify root causes (network, load, disk).  
- Discuss how it’s measured and mitigated.  
- Tie into practical implications for consistency models.

**3️⃣ Depth**  
Replication lag is the time difference Δt between a transaction being committed on the leader and that commit being visible to followers. It arises because replication is asynchronous: writes are queued, serialized, transmitted over the network, then applied locally.  

Key contributors:  
- **Network latency & bandwidth:** Large payloads or congested links increase transmission time.  
- **Disk I/O contention:** Replicas may be busy persisting other data, delaying application of new logs.  
- **Workload skew:** A hot key can saturate a particular replica’s log buffer, causing back‑pressure.  

Metrics: most DBs expose `replication_lag_seconds` or similar counters; monitoring these alerts when Δt exceeds SLAs.  

Mitigations: batching writes, increasing replication threads, tuning write‑ahead logs, using faster storage (NVMe), and employing read‑repair or anti‑entropy mechanisms to catch up missed updates.

**4️⃣ Edge Cases**  
- *Network partitions*: replicas may become permanently out of sync until reconnection.  
- *Clock skew*: if timestamps are used for conflict resolution, inconsistent clocks can mislead consistency checks.  
- *Heavy write bursts*: transient spikes can push lag beyond acceptable thresholds even if average load is fine.

**5️⃣ Optimize & Communicate**  
Explain that minimizing replication lag improves read freshness but may hurt throughput if replicas must wait too long to apply logs. In a FAANG interview, I’d highlight the trade‑off between *strong consistency* (low lag) and *high availability/performance* (higher lag). Conclude by stressing proactive monitoring and adaptive replication strategies as best practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
