---
qid: ing_3714ba6b03__star__local
question: 'Explain: Live Commenting API Design — Live Comment System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 388
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:18:25-05:00'
sources: []
---

**Situation**  
At my previous company we were launching a live streaming platform that attracted over 300 k concurrent viewers during peak events. The existing comment system was a simple REST API backed by a single MySQL table; it could handle only ~50 req/s and would lock up when a popular streamer went live, causing millions of missed comments.

**Task**  
I had to redesign the Live Commenting API so that it could ingest 10× more traffic, deliver comments with <200 ms latency, and support real‑time fan interactions (likes, replies) without sacrificing consistency or data loss.

**Action**  
1. Switched from a monolithic MySQL backend to a partitioned Kafka topic per channel for write‑through; this decoupled ingestion from persistence.  
2. Implemented a Redis Pub/Sub layer to broadcast comments instantly to all subscribed clients.  
3. Added an event‑driven microservice that aggregates comment counts into a time‑windowed ClickHouse table for analytics, using materialized views to keep read latency <50 ms.  
4. Introduced idempotent write operations and a retry policy with exponential backoff to handle transient failures, ensuring at‑least‑once delivery without duplicates.

**Result**  
The new design handled 120 k concurrent viewers with an average comment latency of 140 ms, a 9× throughput increase, and no data loss during peak streams. Post‑launch, we saw a 35% rise in user engagement metrics (comments per minute) and reduced server costs by 18% through more efficient caching. I learned the importance of separating concerns—ingestion, real‑time delivery, and analytics—to build scalable, resilient live systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
