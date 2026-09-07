---
qid: ing_7fab2ab01f__faang__local
question: 'Explain: Adaptive Timeouts — How Uber Serves Over 40 Million Reads Per
  Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 472
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:41:57-05:00'
sources: []
---

**Adaptive Timeouts – Scaling Uber’s Read Layer**

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Problem:* Uber must deliver >40 M reads/s from a distributed key‑value store (e.g., Cassandra). *Assumptions to confirm:* read latency targets, data freshness tolerance, traffic patterns (hot keys), and failure modes. |
| **Approach** | 1️⃣ Deploy a multi‑tier cache (Memcached → Redis → local in‑process). <br>2️⃣ Use an adaptive timeout controller that monitors per‑node RTTs and tail latencies. <br>3️⃣ Route each request to the “fastest” tier; fall back to DB only if all tiers miss or exceed a dynamic threshold. |
| **Depth** | *Adaptive Timeout Logic:* For every node, maintain a sliding window of recent RTT samples. Compute the 95th‑percentile and set the timeout as `min(Timeout_base, RTT_95 + margin)`. If a read hits the cache, latency is ~<1 ms; if it misses, we wait up to the adaptive timeout before serving from DB. <br>**Complexity:** O(1) per request for routing; O(k) to update stats where k is window size (≈100). **Trade‑offs:** Larger windows smooth jitter but delay detection of sudden spikes; smaller windows react faster but can overreact to noise. |
| **Edge Cases** | *Hot spot*: a key that thrashes cache → evict aggressively, use consistent hashing to spread load. <br>*Node failure*: timeout shrinks to avoid cascading delays; fallback to other replicas. <br>*Burst traffic*: adaptive timeouts widen temporarily, preventing tail latency spikes. |
| **Optimize & Communicate** | *Improvements:* Add ML‑based anomaly detection on RTT trends to preemptively scale cache nodes. <br>When explaining, emphasize how the timeout adapts per node rather than a static value—this keeps tail latency under control while still hitting the DB when necessary, enabling Uber’s 40 M reads/s with sub‑10 ms latency for most traffic. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
