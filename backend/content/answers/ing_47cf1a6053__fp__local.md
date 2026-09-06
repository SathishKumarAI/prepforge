---
qid: ing_47cf1a6053__fp__local
question: 'Explain: Caching — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 515
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:38:11-05:00'
sources: []
---

**Why cache?**  
In a distributed web service the *latency budget* is dominated by remote reads: a database hit costs ~10 ms on‑prem, >100 ms over WAN, and can spike to seconds under load. A cache turns those expensive I/O operations into cheap in‑memory lookups (≈0.1 µs). By moving the *critical path* from disk/ network to RAM we free CPU cycles for new requests and reduce the probability of a *thundering herd* that would otherwise hit the database concurrently.

**How it must work**  
A cache is a **time‑bounded, key–value store** with an eviction policy. The fundamental trade‑off is between *recall* (hit rate) and *freshness*. An optimal policy must satisfy:

1. **Least‑Recently‑Used (LRU)** or similar: keep the most frequently accessed items in memory.
2. **Write‑through / write‑back** consistency: ensure that a cached update propagates to the backing store with bounded staleness.
3. **Expiration** (`TTL`): avoid serving stale data indefinitely.

Formally, let \(C\) be cache size, \(N\) total distinct keys, and \(p_i\) request probability for key \(i\). The *optimal* hit rate maximises \(\sum_{i=1}^{C} p_i\), which is achieved by caching the top‑\(C\) most popular items. Hence LRU approximates this optimality under locality of reference.

**Non‑obvious insight**  
Most people treat cache size as a “bigger is better” knob, but **the *distribution* of access patterns matters more**. If the request pattern follows a Zipf law with exponent > 1, a tiny fraction of keys dominates traffic; allocating a modest cache to those keys yields >95 % hit rate. Conversely, if requests are uniform, even a large cache offers little benefit. Therefore, profiling *access skew* and adjusting TTL or eviction policy accordingly is the real lever for performance, not simply scaling memory.

In summary, caching solves the latency bottleneck by converting expensive I/O into cheap lookups; its correctness hinges on optimality of key selection under access statistics, consistency guarantees, and staleness control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
