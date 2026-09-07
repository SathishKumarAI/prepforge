---
qid: ing_5587325039__aws__local
question: 'Explain: Presence Platform With Pub-Sub Server — Real Time Presence Platform
  System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 612
total_tokens: 852
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:39:32-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I led a 5‑person team to build a real‑time presence platform for a video‑chat product that served 12 M daily users. The goal was to deliver “online/offline” status with < 200 ms latency while keeping cost under $500/day.

**Action (Dive Deep + Ownership)**  
1. **Requirements & Constraints** –  
   * Scale: 10 k concurrent presence updates per second.  
   * Durability: 99.999% availability, data persisted for 24 h to support “last seen” queries.  
   * Cost: ≤ $500/day on AWS.

2. **Design**  
   * **Event Ingestion:** Users publish `presence_update` events via Amazon API Gateway → Lambda (stateless).  
   * **Pub‑Sub Backbone:** Events are sent to an Amazon Kinesis Data Streams shard (1 shard = 5 k records/sec).  
   * **Processing & Storage:** A fleet of EC2 Spot instances running a custom Go consumer reads from Kinesis, updates an in‑memory cache (Redis Cluster) and writes to DynamoDB (`PresenceTable`) for durability.  
   * **Notification Push:** Consumers publish to Amazon SNS topics per user; mobile clients subscribe via WebSocket endpoints backed by API Gateway + Lambda.  
   * **Metrics & Alerts:** CloudWatch dashboards track latency, dropped events, and cost.

3. **Scalability / Availability** –  
   * Kinesis shards auto‑scale with Lambda concurrency; Redis Cluster spans 3 AZs for HA.  
   * Spot instances reduce compute cost by ~70 % while maintaining SLA via automatic replacement on spot termination.

4. **Cost Optimization** –  
   * Spot instances + reserved DynamoDB capacity → $380/day.  
   * Kinesis data retention minimal (24 h) → $30/day.  
   * SNS & API Gateway within free tier for 1 M requests/month.

5. **Trade‑offs** –  
   * Chose Kinesis over SQS due to guaranteed ordering and lower latency; trade‑off is slightly higher cost.  
   * Redis cache sacrifices durability for speed; fallback to DynamoDB ensures consistency.

**Result (Deliver Results)**  
- Latency dropped from 600 ms to < 200 ms (95th percentile).  
- Cost reduced by 35 % compared to baseline architecture.  
- Achieved 99.999% uptime during a peak event with 3 k concurrent updates.  

**Reflection & Learning** –  
I realized early that the cache eviction policy could cause stale “online” flags; we switched to Redis `SETEX` with TTL = 30 s, which eliminated false positives. This iteration taught me the value of continuous monitoring and rapid rollback in a real‑time system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
