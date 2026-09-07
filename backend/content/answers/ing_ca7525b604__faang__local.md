---
qid: ing_ca7525b604__faang__local
question: 'Explain: Geo-Based Sharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 487
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:30:30-05:00'
sources: []
---

**Geo‑Based Sharding – System Design**

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Goal*: Distribute a globally‑used key/value store so that each shard lives near the users who access it most, reducing latency and egress costs. <br>*Assumptions to confirm*: read/write mix, consistency requirements (strong vs eventual), data locality patterns, cross‑region replication needs, SLA for global availability, and budget for extra replicas. |
| **Approach** | 1️⃣ Partition keys by geographic region (e.g., via user IP or home country). <br>2️⃣ Deploy one primary shard per region; keep a small set of standby replicas in adjacent regions for fail‑over. <br>3️⃣ Use consistent hashing within each region to balance load and support scaling. <br>4️⃣ Route requests by inspecting the request’s origin header/IP, falling back to nearest data center if needed. <br>5️⃣ Handle cross‑region reads/writes via a lightweight global coordinator that forwards or merges results. |
| **Depth** | *Data Placement*: `shard_id = hash(user_country || user_id)`. <br>*Consistency*: Strong read/write within a shard (using Raft), eventual consistency for global queries. <br>*Fail‑over*: On primary loss, promote standby; use quorum reads to detect divergence. <br>*Complexity*: O(1) routing; replication cost ≈ (#regions × replicas). |
| **Edge Cases** | • Users traveling between regions → sticky sessions or multi‑region read replicas.<br>• Sudden traffic spikes in one region → elastic scaling of that shard.<br>• Data sovereignty laws requiring local storage. |
| **Optimize & Communicate** | • Add a global metadata service to track shard locations, enabling dynamic rebalancing without downtime. <br>• Use CDN‑style read caches for hot data. <br>Explain trade‑offs: higher latency for cross‑region writes vs lower egress costs; extra replicas improve availability but add storage cost. This structured plan shows clear problem framing, a concrete sharding strategy, and awareness of real‑world constraints—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
