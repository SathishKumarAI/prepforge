---
qid: ing_06ed06e087__fp__local
question: 'Explain: Read vs Writes - URL Shortening is a read-heavy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 321
total_tokens: 494
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:20:24-05:00'
sources: []
---

### Why URL‑shortening services are **read‑heavy**

A URL shortener’s core problem is *lookup*: given a tiny key (the “slug”), return the long canonical URL.  
The cost of this lookup dominates the system because:

1. **One‑to‑one mapping** – each slug maps to exactly one destination, so the operation reduces to a single hash‑table read.
2. **User behaviour** – most users click shortened links *after* sharing; the click volume far exceeds the number of new slugs created (the latter occurs only when someone creates a link).
3. **Statelessness of reads** – reading does not alter global state, so it can be served by any replica without coordination.

From an optimisation point of view, this is a classic *read‑dominant workload*:

- **Cache locality**: the hot set (popular slugs) fits in memory, yielding O(1) access.
- **Write amplification**: each write must persist to durable storage and update indexes, but occurs only once per slug.

A non‑obvious insight is that *write traffic scales with the number of unique users* creating links, not with link clicks. Therefore, even a highly popular service (billions of redirects) can maintain low write load by separating write‑once operations from millions of reads, allowing horizontal scaling through read replicas and efficient caching strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
