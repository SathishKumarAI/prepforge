---
qid: ing_9a05b3d519__fp__local
question: 'Explain: But the idea is this number(10 KMs) — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 500
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:33:34-05:00'
sources: []
---

**The “10 KMs” problem** is a classic Google‑style system‑design interview prompt: *“Design a system that can answer, for any user query, how many people are within 10 kilometres of a given location.”*  

At its core the question asks you to trade **accuracy vs. latency** while keeping storage and cost in check. The “10 km” radius is not arbitrary—it forces you to think about:

1. **Geometric data structures**  
   * A naïve scan over every user’s latitude/longitude would be \(O(N)\) per query—impossible at scale. Instead, we must partition the Earth into tiles (e.g., a geohash grid or an R‑tree). The tile size is chosen so that a 10 km circle intersects only a handful of tiles, yielding constant‑time lookups.

2. **Spatial indexing and pre‑aggregation**  
   * By maintaining per‑tile counters (or even hierarchical aggregates), the system can answer “count” queries in \(O(1)\) time after an initial \(O(N)\) offline build. Updating these counts when users move is a streaming problem that can be solved with incremental updates or delta queues.

3. **Probabilistic approximation**  
   * If exactness is not required, techniques like Count‑Min Sketch per tile let us compress millions of counters into sub‑GB of memory while guaranteeing an error bound—an elegant use of probability theory to cut costs.

4. **Consistency and freshness**  
   * The design must decide how stale the counts can be. A “write‑through” approach keeps data fresh but increases latency; a “lazy‑refresh” strategy batches updates, trading consistency for throughput.

**Non‑obvious insight:**  
The 10 km radius is small enough that most Earth‑covering tilings (e.g., 0.1° latitude × 0.1° longitude) will intersect *fewer than five* tiles on average. This means the query can be answered by summing a handful of pre‑computed counters, making real‑time response feasible even with billions of users—something many candidates overlook when they focus only on raw indexing without considering tile intersection counts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
