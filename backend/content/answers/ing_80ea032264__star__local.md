---
qid: ing_80ea032264__star__local
question: 'Explain: Memory — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 430
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:51:13-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a video‑streaming platform that was growing to 5 M daily active users. The existing comment service was built on a monolithic MySQL backend and couldn’t handle the real‑time influx during peak live streams; latency spiked to 1.8 s and the page load time exceeded our SLA.

**Task:**  
I was tasked with redesigning the memory layer so that comments could be retrieved and displayed in under 300 ms for any stream, while keeping consistency across multiple replicas and ensuring cost‑efficiency for peak traffic spikes.

**Action:**  
I proposed a hybrid cache architecture:  
1. **Redis Cluster (sharded LRU)** for hot comment threads, keyed by `stream_id:comment_id`. I set a 30‑minute TTL and used Redis Streams to publish new comments to all connected clients via WebSocket.  
2. For long‑tail data, I introduced an **Apache Kafka** log that persisted every comment event; consumers would write into a time‑series NoSQL store (Cassandra) for offline analytics.  
3. To avoid cache misses during sudden traffic surges, I added a *fallback* layer that queried Cassandra directly only when Redis hit rate dropped below 90 %.  
4. Implemented a lightweight Go microservice to orchestrate cache invalidation and back‑fill on demand.

**Result:**  
Post‑deployment, average comment latency dropped from 1.8 s to 180 ms during peak streams, achieving 99.9 % SLA compliance. The Redis cluster handled a burst of 250k comments per second with <5 % cache miss rate. We reduced operational cost by 30 % compared to the monolith and gained real‑time analytics via Kafka without compromising user experience. I learned that a layered, event‑driven memory strategy is essential for scaling live interactions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
