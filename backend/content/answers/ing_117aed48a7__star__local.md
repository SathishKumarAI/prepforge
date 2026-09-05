---
qid: ing_117aed48a7__star__local
question: 'Explain: End-to-End Example — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 414
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:03:33-05:00'
sources: []
---

**Situation:**  
At my last company we launched a public API for developers to embed links in their apps. The traffic spike from the launch pushed our link‑generation endpoint into a bottleneck; latency rose from <50 ms to ~300 ms, and error rates spiked as the database cache began to miss.

**Task:**  
I was tasked with redesigning the URL shortener service to handle 10× traffic while keeping average response time under 70 ms and ensuring 99.9% availability during a planned product rollout.

**Action:**  
1. **Sharded key‑value store** – Switched from a single MySQL table to a horizontally sharded Redis cluster (partitioned by hash of the short code). This gave us sub‑millisecond read/write latency.  
2. **Deterministic ID generation** – Implemented a base62 encoder on a Snowflake‑style 64‑bit ID that embeds timestamp and shard, guaranteeing uniqueness without a central counter.  
3. **Cache‑first routing** – Added a per‑region in‑memory LRU cache for the most popular 1 M links, reducing hits to Redis by ~85%.  
4. **Graceful degradation** – Built a fallback path that returns a “link not found” page if both caches miss, preventing full stack failures.  
5. **Observability** – Instrumented Prometheus metrics (hit/miss ratios, latency histograms) and set up alerts for cache saturation.

**Result:**  
Post‑deployment, average round‑trip time dropped to 45 ms, cache hit rate reached 92%, and the service sustained 1.2 M requests per minute with <0.1% error rate. I learned that combining deterministic IDs with sharded in‑memory stores is a robust pattern for high‑throughput URL shorteners.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
