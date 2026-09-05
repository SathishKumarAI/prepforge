---
qid: ing_c941038ac0__star__local
question: 'Explain: Engagement Service — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 401
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:11:49-05:00'
sources: []
---

**Situation:**  
At my last company we were tasked with building an Engagement Service for a photo‑sharing app similar to Instagram. The goal was to power likes, comments, and “view” counters in real time while keeping latency under 50 ms for 10 million concurrent users.

**Task:**  
I had to design a horizontally scalable, fault‑tolerant architecture that could ingest millions of events per second, update counters atomically, and serve fresh counts to the UI with minimal cache staleness.

**Action:**  
I chose a write‑through pattern: all events went first to a Kafka stream for durability. A stateless microservice consumed the stream and updated an in‑memory Redis sorted set (sharded by user ID) to keep hot counters, while also writing snapshots to Cassandra every 5 seconds for persistence. For read path, I implemented a two‑tier cache: a local LRU per request and a global Redis cluster with TTL=10 s, so UI requests hit the cache most of the time. To handle burst traffic, I added an auto‑scaling rule on the consumer pods based on Kafka lag. Finally, I introduced a simple “engagement score” algorithm that weighted likes, comments, and views to surface trending posts.

**Result:**  
The service handled 15 M events/s with <30 ms average latency; cache hit rate was 92 %. User engagement metrics (time on app) rose by 18 % after launch. I learned the importance of coupling event streaming with layered caching for real‑time counters, and how small TTL adjustments can dramatically reduce staleness without hurting performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
