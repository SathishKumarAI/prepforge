---
qid: ing_828f26b655__star__local
question: 'Explain: Endpoint: GET /users/{user_id}/presence — Design WhatsApp | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 371
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:54:33-05:00'
sources: []
---

**Situation**  
At my previous company we were building a real‑time messaging platform similar to WhatsApp. The product team needed an API that could return whether a user was online, last seen, or currently typing so the UI could update instantly without polling too often.

**Task**  
I had to design the endpoint `GET /users/{user_id}/presence` that would deliver this information with sub‑second latency for millions of users while keeping database reads minimal and handling high traffic bursts during peak hours.

**Action**  
First, I scoped the data model: a small presence table in Redis with TTLs for “online” (last heartbeat), “typing”, and “last_seen”. I added a Kafka topic that streams status changes from clients so every update only touches Redis. The endpoint reads from Redis, falls back to a MySQL replica if missing, and caches the response in Cloudflare Workers at the edge for 200 ms. To avoid cache stampedes I implemented a lock‑less “cache aside” pattern with a 1‑second guard interval. For security I used JWT bearer tokens and rate limiting (10 req/s per IP). Finally, I added metrics to Prometheus: hit/miss ratio, latency percentiles, and a daily presence heatmap.

**Result**  
The endpoint served over 2 M requests/day with 99th‑percentile latency < 120 ms. Cache hit rate rose from 45% to 88%, reducing MySQL load by 70%. I learned that combining in‑memory stores with event streams and edge caching is key for real‑time presence at scale, and that careful TTL tuning prevents stale data while keeping memory usage low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
