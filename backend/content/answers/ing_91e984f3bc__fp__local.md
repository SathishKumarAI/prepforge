---
qid: ing_91e984f3bc__fp__local
question: 'Explain: Web crawler — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 493
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:15:30-05:00'
sources: []
---

**Why a web‑crawler must be built the way it is**

At its core a crawler solves a *coverage* optimisation problem: **collect all reachable URLs while keeping network traffic and storage bounded**.  
The search space is an enormous directed graph \(G=(V,E)\) whose vertices are pages and edges are hyperlinks.  The crawler’s job is to explore \(G\) under constraints—bandwidth, politeness (robots.txt), duplicate avoidance, and freshness.

1. **Frontier + URL‑queue** – The frontier is a priority queue over URLs.  Priorities come from *expected value*: a page’s rank, link density, or domain importance.  This turns the naïve breadth‑first search into an *admissible* exploration that favours high‑utility nodes first.

2. **Politeness & rate limiting** – To respect servers we model each host as a *resource* with a capacity constraint \(c_h\).  The scheduler must satisfy \(\sum_{h} \frac{1}{c_h} \leq 1\), which is a classic load‑balancing problem.

3. **Deduplication** – Two pages may have identical content but different URLs.  A hash‑based fingerprint (e.g., SHA‑256 of canonicalised text) gives an *equivalence class* that reduces storage and avoids redundant crawling, turning the graph into its *quotient*.

4. **Distributed architecture** – Partition \(V\) by host hash to avoid cross‑node contention on a single URL’s lock.  This is essentially a consistent hashing scheme ensuring even load distribution while keeping locality for politeness enforcement.

5. **Freshness & re‑crawl policy** – Use a *TTL* or exponential decay function on each node’s priority, turning the crawler into an online optimisation problem where the objective is to maximise freshness per byte transferred.

**Non‑obvious insight:**  
Treating the crawl as a *resource‑constrained bandit* problem lets us use Thompson sampling for URL prioritisation.  This balances exploration (new domains) and exploitation (high‑value pages), yielding higher recall with fewer requests—something most designs miss by sticking to static heuristics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
