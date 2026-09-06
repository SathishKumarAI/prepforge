---
qid: ing_590f3e1919__fp__local
question: 'Explain: Redundancy & Replication — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 451
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:13:42-05:00'
sources: []
---

### Redundancy & Replication in a Large‑Scale Social Network

**Fundamental problem:**  
A user’s feed must be available *everywhere*, *every time*, and *without interruption* even when servers, disks, or network links fail. The system therefore needs to **replicate data** so that no single point of failure can bring down the service.

**Why replication must be *geographically distributed*:**  
If all replicas lived in one data center, a power outage would wipe out every copy. By placing replicas across multiple regions we exploit the statistical independence of failures (regional outages are rare and rarely simultaneous). This is a direct application of **probability theory**: the probability that *all* replicas fail is the product of their individual failure probabilities.

**Why we must choose a replication strategy that balances consistency, availability, and partition tolerance (CAP):**  
- *Strong consistency* guarantees every read sees the latest write but forces global coordination, hurting latency.  
- *Eventual consistency* allows reads from any replica, giving low latency, yet requires conflict resolution logic.  
Instagram opts for *write‑once, read‑many* objects (photos, comments). Thus an **append‑only log** with **read‑replicas** suffices: writes go to a primary, then asynchronously propagated; reads hit local replicas, satisfying high availability while keeping consistency guarantees acceptable.

**Non‑obvious insight:**  
Replication alone is not enough—**content placement must be *data‑aware***. Hot posts (e.g., trending videos) are cached in edge caches near the user, while cold, archival content stays on cheaper, slower storage. This dynamic “hot‑spot” replication reduces read latency dramatically without bloating all replicas with rarely accessed data.

In short, redundancy & replication solve the *availability* and *durability* requirements by spreading copies across independent failure domains and by selecting a consistency model that matches the workload’s read/write patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
