---
qid: ing_8dfbc905e1__fp__local
question: 'Explain: CDN Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 425
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:07:02-05:00'
sources: []
---

**Why cache?**  
At its core, a CDN (Content Delivery Network) solves the *latency–bandwidth* trade‑off: users request data that lives far from them; fetching it over the wide‑area network costs time and cost. The first principle is *caching*: keep a copy of the requested data locally so future requests can be served instantly.

**How it must work**  
1. **Cacheable items** are those with low update frequency relative to read frequency (e.g., static images, ML model artifacts).  
2. A **placement policy**—often *least‑recently‑used* or *time‑to‑live*—decides which entries survive when capacity is exceeded.  
3. An **invalidation strategy** ensures consistency: either *stale‑while‑revalidate* (serve old data while fetching fresh) or explicit invalidation on update.

These steps are guided by the *law of diminishing returns*: every additional cache slot yields a smaller marginal reduction in latency, so we allocate slots to items with the highest hit probability. This is an instance of the classic **knapsack problem**—maximize expected benefit under capacity constraints.

**Non‑obvious insight**  
Many think caching only reduces network hops. In ML pipelines, *caching model checkpoints or feature tables* turns a linear time complexity operation (recomputing features) into constant‑time lookup, drastically cutting training turnaround. Moreover, because caches are geographically distributed, they implicitly perform *spatial partitioning* of the data space—each edge node becomes a local “mini‑cluster” that can run inference without central coordination.

In short, CDN caching is a principled application of *resource allocation under uncertainty*: we store what will most often be reused, decide when to evict or refresh based on observed access patterns, and thereby turn network cost into predictable latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
