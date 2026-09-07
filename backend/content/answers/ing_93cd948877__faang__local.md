---
qid: ing_93cd948877__faang__local
question: 'Explain: Scale Estimation — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 475
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:27:50-05:00'
sources: []
---

**Clarify**  
We need a *notification service* that scales to millions of users and billions of events per day (e.g., push emails, SMS, in‑app). The system must support real‑time delivery, high availability, and low latency while handling bursty traffic.

Assumptions:  
- Users can subscribe to multiple topics.  
- Notifications are eventually consistent but need at‑least‑once delivery.  
- We have a bounded budget for compute/storage.

**Approach**  
1. **Event ingestion** – API gateway → message broker (Kafka/Redis Streams).  
2. **Topic routing** – Partition by topic/user hash; store subscriptions in a sharded key‑value store (Cassandra/DynamoDB).  
3. **Delivery workers** – Worker pool consumes from partitions, queries subscriptions, and pushes to channel adapters (email/SMS/app).  
4. **Back‑pressure & retries** – Use dead‑letter queues and exponential backoff; maintain per‑user delivery counters to avoid spam loops.  
5. **Monitoring** – Metrics on queue depth, worker lag, success rates.

**Depth**  
- **Throughput**: Kafka can handle >10k msgs/sec per broker; sharding keeps partitions balanced.  
- **Latency**: Ingestion <50 ms; delivery workers process in <200 ms; total ~250 ms for most channels.  
- **Fault tolerance**: Replicated brokers, multi‑AZ deployment; stateless workers enable rapid scaling.  
- **Complexity**: O(1) lookup for subscriptions; O(log N) for partition routing.

**Edge Cases**  
- Sudden traffic spikes → auto‑scale workers and add broker nodes.  
- Duplicate events → idempotent processing using deduplication keys in Redis.  
- Subscription churn → TTL on cache entries to keep memory bounded.

**Optimize & Communicate**  
We can reduce cost by employing serverless functions for low‑volume channels (e.g., SNS for push). To improve latency, pre‑cache user preferences in a local in‑memory store per worker. I’d present this architecture diagrammatically and walk through a failure scenario to demonstrate resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
