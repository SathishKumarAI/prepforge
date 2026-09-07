---
qid: ing_2b9a7a192c__faang__local
question: 'Explain: How to do distributed locking — Martin Kleppmann’s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 456
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:24:21-05:00'
sources: []
---

**Distributed Locking – A Quick‑Start (Martin Kleppmann)**  

| Step | What to say |
|------|-------------|
| **Clarify** | “We need a lock that guarantees *mutual exclusion* across nodes, is fault‑tolerant and eventually consistent.  Assume we have a cluster of stateless workers, a shared storage (e.g., Redis, Zookeeper), and no single point of failure.” |
| **Approach** | 1️⃣ Pick a consensus store (Redis with `SETNX`, Zookeeper, etc.). 2️⃣ Use *lease‑based* locking: acquire a key with TTL. 3️⃣ Renew before expiry; on failure, release automatically. 4️⃣ Handle failures by retrying or falling back to read‑only mode. |
| **Depth** | - **Acquire**: `SET lock_key owner_id NX PX ttl`. If success → locked. <br>- **Release**: atomic Lua script to delete only if value==owner_id. <br>- **Renewal**: background thread extends TTL while holder is alive. <br>Complexity: O(1) per operation; latency dominated by network round‑trip. Trade‑off: higher TTL → less contention but risk of stale locks. |
| **Edge Cases** | • Network partitions → split‑brain; mitigate with quorum reads (e.g., 2/3 majority). <br>• Clock skew → use monotonic server time or store lease timestamp. <br>• Process crash before release → TTL expires, lock auto‑revoked. Test: simulate node failures, network lag, clock drift. |
| **Optimize & Communicate** | • Use pipelining for batch operations to cut RTTs. <br>• For high throughput, consider *optimistic locking* (compare‑and‑swap) before fallback to lease. <br>Explain the trade‑offs: strict consistency vs. availability; discuss CAP implications. Conclude with real‑world patterns (e.g., leader election, rate limiting). |

**Word count:** ~190 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
