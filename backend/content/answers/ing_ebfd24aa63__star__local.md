---
qid: ing_ebfd24aa63__star__local
question: 'Explain: 5.7 Comment on a Post — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 354
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:21:00-05:00'
sources: []
---

**Situation**  
At my previous company we were building a photo‑sharing app similar to Instagram. The “comment” feature was growing fast—by Q3 we had over 1 M daily active users and each post could receive up to 10,000 comments per hour.

**Task**  
I was tasked with designing the comment subsystem so it could handle high write traffic, provide low‑latency reads for feeds, support real‑time notifications, and remain cost‑effective at scale.

**Action**  
I chose a sharded relational DB (PostgreSQL) for consistency on writes, partitioned by post ID using range hashing to keep comment tables small. For read amplification I added a Redis cache keyed by post ID with an LRU eviction policy, refreshing every 30 s from the DB. To push real‑time updates I implemented Kafka topics per user segment; consumers write to a dedicated “notifications” service that pushes WebSocket messages. I also introduced a TTL on comment records and used DynamoDB for soft‑delete archival to keep storage lean. Load testing with Locust revealed a 99th‑percentile latency of <120 ms under 10k RPS.

**Result**  
The new design handled 15,000 comments per second during peak traffic, reduced read latency from 350 ms to 80 ms, and cut infrastructure costs by 22% through smarter caching. I learned that balancing consistency with real‑time responsiveness often means layering systems—relational for durability, cache for speed, stream processing for immediacy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
