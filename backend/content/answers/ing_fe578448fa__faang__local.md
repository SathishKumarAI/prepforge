---
qid: ing_fe578448fa__faang__local
question: 'Explain: Thunder Herd Problem — How Can Cache Systems Go Wrong?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 423
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:31:29-05:00'
sources: []
---

**Thunder Herd Problem – Cache System Pitfall**

| Step | What to Do |
|------|------------|
| **Clarify** | *Problem:* Many requests hit an empty cache (“cache miss”) at the same time, forcing all clients to recompute or fetch from a slow backend.  <br>*Assumptions to confirm:* Is the workload read‑heavy? How long does a miss take? Are there rate limits on the origin? |
| **Approach** | 1️⃣ Identify “hot” keys that expire simultaneously.<br>2️⃣ Add **cache stampede protection** (mutex, token bucket).<br>3️⃣ Use **lazy loading with request coalescing** or **fallback timers**. |
| **Depth** | *Cache stampede* occurs when a key’s TTL expires and all waiting requests trigger a recompute. Solutions: <br>- **Mutual exclusion lock** (e.g., Redis SETNX) to let one worker refresh while others wait or use stale data.<br>- **Time‑to‑live + back‑off**: extend TTL slightly after each miss, add jitter. <br>Complexity: O(1) for lock acquisition; memory overhead is minimal but requires a fast coordination store. |
| **Edge Cases** | *Backend failure* → all clients block or return stale data.<br>*Lock contention* → one worker stalls, others wait too long.<br>*High cardinality keys* → locking per key can be expensive. |
| **Optimize & Communicate** | 1️⃣ Combine with **read‑through cache** and **pre‑warming** during low traffic. <br>2️⃣ Monitor hit/miss ratios; auto‑tune TTLs. <br>Explain to interviewers: “By preventing simultaneous recomputations we reduce load spikes, keep latency predictable, and avoid cascading failures.” |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
