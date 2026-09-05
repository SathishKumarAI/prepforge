---
qid: ing_adf948ce0c__star__local
question: 'Explain: URL table — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 373
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:20:04-05:00'
sources: []
---

**Situation**  
At my last startup we launched a social‑media analytics platform that ingested millions of URLs daily. Our reports were cluttered by long, tracking‑heavy links which slowed rendering and confused users.

**Task**  
I was tasked with designing a lightweight URL shortening service (TinyURL‑style) that could handle 5 M requests per day, provide custom aliases, and integrate seamlessly into our data pipeline without compromising link integrity or SEO.

**Action**  
First I modeled the URL table: `id` (UUID), `original_url`, `short_code` (6‑char hash), `created_at`, `expires_at`, and a `click_count`. To avoid collisions I used a base62 encoder on a salted SHA‑256 digest, trimming to 6 chars and checking uniqueness in the DB. I implemented an async microservice in Go with PostgreSQL + Redis cache for hot reads. For scalability, I sharded by hash prefix and added read replicas; write throughput was throttled via a token bucket to protect the primary. The service exposed a REST API (`/shorten`, `/expand`) and a webhook that logged clicks back into our analytics pipeline.

**Result**  
Within two weeks we reduced URL payload size by 78 %, cut report load times from 1.2 s to 0.3 s, and increased user engagement metrics (click‑through) by 12 %. I learned the importance of balancing collision avoidance with latency, and that a simple, well‑indexed table can scale to millions of requests when paired with smart sharding and caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
