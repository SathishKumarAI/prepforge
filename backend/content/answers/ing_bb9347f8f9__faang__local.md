---
qid: ing_bb9347f8f9__faang__local
question: 'Explain: Infinite TTL — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 498
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:59:16-05:00'
sources: []
---

**Infinite TTL – What Is Caching?**

| Step | What I’ll Do |
|------|--------------|
| **Clarify** | *Problem:* Explain the concept of caching when the “time‑to‑live” (TTL) is effectively infinite, as seen in systems like DNS or CDN edge caches. Confirm that we’re focusing on read‑heavy workloads where data rarely changes and consistency can be relaxed. |
| **Approach** | 1️⃣ Identify a real‑world use case (e.g., static website assets). 2️⃣ Describe the cache layer (in‑memory vs. SSD). 3️⃣ Explain how infinite TTL affects invalidation, consistency, and cost. 4️⃣ Discuss trade‑offs with eventual consistency and stale data. |
| **Depth** | - **Definition:** Caching stores a copy of frequently accessed data to reduce latency and backend load. <br> - **Infinite TTL:** The cache never expires automatically; eviction relies on size limits or manual refresh. <br> - **Benefits:** 100 % hit rate for static content, zero read latency from origin, reduced bandwidth costs. <br> - **Drawbacks:** Stale data if the source changes; no automatic consistency guarantees. <br> - **Mechanisms to mitigate staleness:** version tags, signed URLs with short expirations, or background refresh (pull‑through). |
| **Edge Cases** | • Source updates that must be reflected immediately (e.g., user profile pics) → use cache busting via key changes.<br>• Extremely large objects exceeding memory → spill to SSD or tiered caching. <br>• Attack vectors like cache poisoning if keys are predictable. |
| **Optimize & Communicate** | • Use a **hierarchical cache**: local edge + global CDN to balance freshness and latency.<br> • Instrument metrics (hit/miss ratios, eviction counts) to decide when to invalidate manually.<br> • Communicate that infinite TTL is acceptable only for *immutable* data; otherwise, fall back to short‑TTL or versioned caches. |

**TL;DR:** Infinite‑TTL caching is ideal for immutable assets where latency and cost outweigh the risk of staleness; it requires careful key design, monitoring, and optional manual refresh strategies to keep consistency under control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
