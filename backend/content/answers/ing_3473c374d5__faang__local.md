---
qid: ing_3473c374d5__faang__local
question: 'Explain: Candidate — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 460
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:46:07-05:00'
sources: []
---

**Distributed Counter System Design**

| Step | What I’d do |
|------|-------------|
| **Clarify** | Restate the goal: “Design a highly‑available, low‑latency counter that can be incremented from many nodes and read consistently.” Ask about limits (max increments/sec, acceptable staleness, failure model, persistence needs). Assume eventual consistency is fine; we need <10 ms reads. |
| **Approach** | 1️⃣ Use a *sharded* in‑memory store (e.g., Redis Cluster) with key‑based partitioning.<br>2️⃣ Each shard holds local counts and exposes `INCR`/`GET`. <br>3️⃣ Clients route to the appropriate shard via consistent hashing. <br>4️⃣ For global reads, aggregate from all shards or maintain a *global* replica updated asynchronously. |
| **Depth** | - **Increment**: `INCR` is atomic in Redis; shards are independent so no cross‑node lock.<br>- **Read**: If strict consistency isn’t required, read local shard only. For global value, perform parallel reads and sum (latency ≈ shard latency + network). <br>- **Fault tolerance**: Each shard has a replica; failover via Redis Sentinel or cluster auto‑recovery.<br>- **Scalability**: Add shards by rebalancing hash ring; no downtime. |
| **Edge Cases** | - Network partitions → some nodes lose updates (eventual consistency). <br>- Over‑replicated counters cause stale reads; test with high churn. <br>- Counter overflow – use 64‑bit ints or wrap logic. |
| **Optimize & Communicate** | • Cache global totals in a CDN cache if read‑heavy.<br>• Use pipelining for bulk increments to reduce round‑trips.<br>Explain trade‑offs: stronger consistency → more coordination; lower latency → eventual consistency. Highlight monitoring (latency, error rates) and capacity planning (shard size vs. max QPS). This structured walk‑through shows clarity, depth, and practical engineering decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
