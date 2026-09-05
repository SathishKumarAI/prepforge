---
qid: ing_b00eb6371e__star__local
question: 'Explain: 5.8 Get Comments for a Post — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 374
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:24:13-05:00'
sources: []
---

**Situation** – In a recent mock interview I was asked to design the “Get Comments for a Post” endpoint on an Instagram‑style platform that serves millions of users and handles billions of comments daily.

**Task** – My goal was to build a scalable, low‑latency service that returns up to 200 comments per request, supports pagination, sorting by time or popularity, and respects privacy (mutual followers only). The design had to handle hot posts with thousands of comments per second while keeping read costs minimal.

**Action** – I started with a sharded NoSQL store (Cassandra) keyed on post_id+timestamp for efficient range scans. To support “most popular” sorting I maintained a materialized view in Redis sorted sets that updated asynchronously via Kafka consumer pipelines ingesting comment likes. For privacy, the request carried an authenticated user id; the service first fetched the user’s follow graph from a dedicated Graph Service (Neo4j) to build a blacklist of non‑followers before returning comments. Pagination used cursor tokens encoded with post_id and last_seen_timestamp. Caching popular comment lists in Cloudflare Workers reduced read traffic by ~70 %. I also added rate limiting per IP/user and implemented exponential backoff for downstream failures.

**Result** – The prototype handled 5,000 concurrent “get comments” calls with <120 ms latency, served 80 % of requests from cache, and kept write amplification below 1.2×. I learned the importance of separating read/write workloads, using materialized views for secondary sorts, and leveraging graph queries for privacy filtering without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
