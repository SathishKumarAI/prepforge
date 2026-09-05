---
qid: ing_45a6250fd4__star__local
question: 'Explain: Communications — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 376
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:47:50-05:00'
sources: []
---

**Situation:**  
While leading the backend team for a high‑traffic microblogging platform, we noticed our real‑time feed latency was creeping above 400 ms during peak hours (8–10 pm UTC). The engineering manager asked us to redesign the “timeline” service so it could handle 30 M daily active users while keeping push‑notification delays under 200 ms.

**Task:**  
I needed to architect a scalable, low‑latency communication layer that decoupled user activity from feed delivery, minimized database hotspots, and supported horizontal scaling without breaking consistency guarantees.

**Action:**  
1. I introduced a **publish/subscribe queue** using Kafka for all tweet events, partitioned by user ID so that writes stayed sequential per stream.  
2. For the consumer side, we built a stateless worker pool in Go that read from Kafka and updated a **Redis sorted set** (score = timestamp) for each follower’s timeline cache.  
3. To avoid hot‑keys, we sharded the Redis cluster across 64 nodes and used consistent hashing on user IDs.  
4. Finally, I added an exponential backoff retry policy in the producer to handle transient failures, ensuring at‑least‑once delivery while keeping overall latency low.

**Result:**  
Post‑deployment, average feed fetch time dropped from 380 ms to **145 ms**, and the 99th percentile latency fell below 200 ms during peak traffic. We also cut read amplification by 60% compared with the previous monolithic approach. This exercise taught me that a well‑chosen messaging system combined with smart caching can dramatically improve real‑time communication in large‑scale services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
