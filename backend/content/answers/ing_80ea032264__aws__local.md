---
qid: ing_80ea032264__aws__local
question: 'Explain: Memory — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 453
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:16:34-05:00'
sources: []
---

**Situation** – I led a project at my last company where we had to replace the legacy comment engine on our video platform (10 M daily active users). The new system needed sub‑200 ms latency, 99.9 % availability, and cost‑efficiency for real‑time “live” comments.

**Task** – Design a memory‑centric architecture that stores, retrieves, and streams comments with minimal latency while handling sudden traffic spikes during live events.

**Action**  
- **Data model & cache**: Use *Amazon ElastiCache for Redis* as an in‑memory store (partitioned by channel ID) for the 10 s “live window”. Each comment is a sorted set keyed by timestamp; TTL = 15 min.  
- **Write path**: API Gateway → Lambda → DynamoDB (for persistence and replay). Lambda writes to Redis via async batch, ensuring durability.  
- **Read/stream path**: WebSocket endpoint on API Gateway pushes from Redis using Pub/Sub (`redis-publish`). Clients subscribe per channel; latency < 50 ms.  
- **Scaling & availability**: Multi‑AZ ElastiCache cluster with automatic failover; DynamoDB global tables for cross‑region replication (latency < 10 ms). Autoscaling Lambda based on CloudWatch metrics.  
- **Cost control**: Spot instances for non‑critical compute, Redis “cache‑cluster” pricing optimized by using a 1‑node cache during off‑peak hours.

**Result** – Achieved 99.97 % uptime, reduced average comment latency from 350 ms to 75 ms, and cut infrastructure spend by 35 %. Learned that keeping the hot data in Redis with a well‑defined TTL balances performance and cost; failure handling is only as good as the retry logic.

**Leadership Principles** – *Customer Obsession* (instant feedback for viewers) & *Ownership* (full lifecycle from design to ops).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
