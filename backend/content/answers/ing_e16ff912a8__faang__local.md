---
qid: ing_e16ff912a8__faang__local
question: 'Explain: Availability Where Staleness is Acceptable'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 458
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:23:32-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a design pattern that trades *availability* for *eventual consistency*: data must be read quickly even if the copy is temporarily stale. I’ll assume we’re building a global key‑value store accessed by many clients, with latency sensitivity and tolerance for out‑of‑date reads.

**Approach**  
1. Replicate data across nodes (e.g., multi‑region).  
2. Use *primary–secondary* or *leaderless* replication where writes go to a single node (or all nodes) but reads can hit any replica.  
3. Adopt an *eventual consistency* protocol (Gossip, vector clocks) so updates propagate asynchronously.

**Depth**  
- **Write path:** Client sends write → primary increments version & broadcasts update via background sync.  
- **Read path:** Client queries local replica; if the version is older than a threshold (`stalenessWindow`), we may still return it to preserve availability, or optionally fetch from primary.  
- **Staleness control:** Expose `maxStaleSeconds`; clients can decide whether stale data is acceptable.  
- **Consistency guarantees:** At any time, all replicas will converge; the system provides *Read‑Your‑Writes* only at the primary.  
- **Complexity:** Write O(1) + async replication; read O(1). Trade‑off: higher write latency for strong consistency vs. low read latency.

**Edge Cases**  
- Network partitions: replicas may diverge beyond `maxStaleSeconds`.  
- Clock skew: relying on timestamps can mislead staleness checks.  
- Hot keys: a single replica may become overloaded; need load‑balancing or sharding.

**Optimize & Communicate**  
To improve, we could implement *read repair* (lazy fetching of stale data on read) and *caching with TTL*. I’d explain that the design prioritizes availability for latency‑sensitive workloads while keeping staleness bounded by a configurable window—exactly what “availability where staleness is acceptable” means.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
