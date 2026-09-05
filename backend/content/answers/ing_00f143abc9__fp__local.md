---
qid: ing_00f143abc9__fp__local
question: 'Explain: Negative Caching — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 522
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:07:26-05:00'
sources: []
---

**Negative caching** is the practice of storing *miss* information—i.e., that a particular key does **not** exist in the backing store—in the same cache tier as hits.  
In Uber’s real‑time routing service, the online database contains millions of vehicle–location records. Each read request first probes an in‑memory distributed cache (Redis or similar). If the record is present, the hit rate is very high; if it is absent, the cache returns a *negative* entry that expires after a short TTL.

### Why it must work this way

1. **Latency vs. consistency** – A miss forces a round‑trip to disk or a remote database, adding ~10–20 ms latency per request. For 40 M reads/s this would be untenable; the system would saturate on I/O bandwidth long before CPU or network limits.

2. **Workload skew** – Many vehicle IDs are transient (e.g., drivers who just finished a shift). Without negative caching, each of those “gone” keys would trigger a DB hit on every subsequent request, creating a hot‑spot of repeated misses.

3. **Cache coherence** – By propagating the *absence* state back into the cache, Uber guarantees that all workers see the same view of non‑existent data until it is legitimately inserted or refreshed, preserving eventual consistency without complex invalidation protocols.

### Deeper principle

Negative caching embodies a *probabilistic optimization*: the cost of storing an extra key (the miss flag) is negligible compared to the expected cost of a DB hit. The expected latency \(E[L]\) satisfies  
\[ E[L] = P_{\text{hit}}\,L_{\text{cache}} + P_{\text{miss}}\,(L_{\text{db}} + L_{\text{neg}}), \]
and adding negative entries reduces \(P_{\text{miss}}\) dramatically for the “gone” keys, yielding a lower bound on \(E[L]\).

### Non‑obvious insight

Most designers think of caches only as *positive* stores. The key insight is that **absence itself is valuable information**: by treating a miss as data, you turn a costly operation into a cheap lookup. This turns the cache from a passive buffer into an active participant in the system’s state machine, enabling Uber to sustain >40 M reads/s with sub‑5 ms latency while keeping disk I/O well below saturation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
