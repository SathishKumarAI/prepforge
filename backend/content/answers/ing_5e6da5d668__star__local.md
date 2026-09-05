---
qid: ing_5e6da5d668__star__local
question: 'Explain: 7.1 Scalability — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 380
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:36:56-05:00'
sources: []
---

**Situation:**  
When I joined a startup that was pivoting to a photo‑sharing app, we had to build an Instagram‑style platform from scratch while supporting millions of daily active users and real‑time feeds.

**Task:**  
Design a highly scalable backend that could ingest 200k photos per minute, deliver personalized timelines with sub‑200 ms latency, and allow horizontal growth without breaking the user experience.

**Action:**  
I started by sharding media storage across an S3 bucket cluster, using consistent hashing on the photo hash to distribute uploads. For the feed, I implemented a pull‑based system: each user’s timeline was pre‑computed into a Redis stream (partitioned by user ID) and updated via Kafka streams that ingested new posts from followers in real time. A CDN (CloudFront) cached thumbnails and served them globally. Load balancers (NGINX + AWS ELB) routed traffic to stateless API servers behind an autoscaling group, while a circuit breaker pattern throttled requests during spikes. To keep write latency low, I used eventual consistency with a two‑phase commit for likes/comments, storing counters in Redis and persisting to DynamoDB asynchronously.

**Result:**  
Within six months we handled 12 M DAUs with 95% of timeline loads under 150 ms; the system scaled linearly as we added more shards. I learned that pre‑computing feeds and separating read/write concerns are key trade‑offs for large‑scale social apps, and that monitoring metrics like cache hit ratio and request latency guides incremental optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
