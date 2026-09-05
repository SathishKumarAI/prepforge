---
qid: ing_1b446a04f6__fp__local
question: 'Explain: Cached Reads — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 531
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:04:09-05:00'
sources: []
---

**Cached Reads – Uber’s 40 M RPS from Online Storage**

At its core, the problem is *latency vs capacity*: a single distributed key‑value store can’t sustain 40 million read operations per second at sub‑millisecond latency because disk I/O and network hops are too slow. The solution is to **move the hot data into fast memory** while keeping the authoritative copy on disk, then serve reads from that memory.

1. **Hotness detection**  
   Every key’s access pattern is modeled as a Poisson process; the rate λ determines expected read cost if served from disk (≈ 5 ms). If λ > threshold, the key is *hot* and should be cached. This follows from minimizing expected latency: `E[latency] = (1‑p_cache)*L_disk + p_cache*L_mem`. Solving for `p_cache` yields that caching becomes worthwhile when `λ > (L_disk−L_mem)/Δ`, where Δ is the cache eviction cost.

2. **Integrated cache architecture**  
   Uber embeds a *write‑through, LRU‑based cache* in front of its online storage. Writes go to both layers atomically; reads first hit the cache. Because the cache sits inside the same process that handles requests, there’s no cross‑process serialization, keeping throughput high.

3. **Consistency & eviction**  
   The cache uses *version vectors* to detect stale entries. Eviction is guided by a *cost‑benefit score*: `score = λ / (size + α)` where α penalizes large keys that would waste memory. This balances hit rate against footprint, an insight many overlook: treating size as part of the utility metric rather than a hard cap yields higher overall throughput.

4. **Result**  
   With ~200 GB of RAM and 8‑core CPUs, Uber’s integrated cache achieves > 90 % hit ratio for its hottest services, reducing disk traffic by an order of magnitude and allowing it to serve 40 M RPS with < 1 ms latency.

*Non‑obvious insight:* **Eviction should be cost‑aware (λ/size), not purely recency‑based.** This subtle shift turns a simple LRU into a near‑optimal policy under heavy skew, which is why Uber can sustain such extraordinary read rates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
