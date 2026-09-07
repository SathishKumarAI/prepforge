---
qid: ing_cd642283cf__faang__local
question: What are Live Comments? — Live Comment System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 557
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:38:05-05:00'
sources: []
---

**Clarify**  
Live comments are the real‑time messages users type while watching a video or live stream, displayed immediately above or beside the content. Key assumptions: (1) high write/read throughput; (2) low latency (< 200 ms); (3) eventual consistency across regions; (4) support for moderation and spam filtering; (5) scalability to millions of concurrent viewers.

**Approach**  
1. **Client → Edge**: WebSocket/RTMP streams comments to a CDN edge node.  
2. **Edge → Message Queue**: Push to Kafka/Kinesis topics partitioned by stream ID, ensuring order per stream.  
3. **Consumer Layer**: Workers consume, run moderation (ML‑based profanity filter), enrich with user metadata, and write to an in‑memory cache (Redis) + a persistent store (Cassandra/Spanner).  
4. **Read API**: Clients poll or open a WebSocket that pulls from Redis; fallback to DB for missed comments.  
5. **Analytics & ML**: Stream comments into a real‑time analytics pipeline (Flink/Spark) for sentiment, trend detection, and recommendation.

**Depth**  
- *Write path*: 1 µs latency to Kafka → 5 ms consumer processing → 2 ms cache write.  
- *Read path*: 0.5 ms from Redis; if cache miss, 10 ms DB fetch.  
- *Consistency*: Eventual consistency with read‑your‑write for same user via sticky sessions.  
- *Scalability*: Kafka partitions per stream allow horizontal scaling; consumers auto‑scale based on load.

**Edge Cases**  
- Burst traffic (e.g., live event spikes): backpressure via Kafka quotas, CDN rate limiting.  
- Moderation delays: fallback to “pending” status and serve after approval.  
- Network partition: clients reconnect to nearest edge node; deduplication by comment ID.

**Optimize & Communicate**  
- Replace Redis with a multi‑region distributed cache (e.g., Cloudflare Argo) for lower latency worldwide.  
- Use Bloom filters on the consumer side to filter out duplicate spam before DB writes, reducing storage costs.  
- Communicate design decisions via a whiteboard: start with a high‑level diagram, then drill into each component, explaining trade‑offs (e.g., eventual vs strong consistency). This structured narrative aligns with FAANG’s SIGNAL framework—clear problem restatement, systematic plan, deep technical detail, edge case handling, and thoughtful optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
