---
qid: ing_765a93fd8c__aws__local
question: 'Explain: kind of a real-time update and so — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 475
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:52:42-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked to add a *real‑time “order status” feed* for DoorDash riders and customers. The requirement: every location change (within ~5 m) must be broadcast to ~30 k concurrent users with <200 ms latency, while keeping costs below $500/day.

**Action – Design**  
1. **Geo‑hashing** – I stored each driver’s coordinates in a DynamoDB table keyed by *geohash+driverID*. A TTL attribute removed stale rows.  
2. **Change stream** – DynamoDB Streams triggered a Lambda that pushed an event to an **Amazon Kinesis Data Stream** (shard = 4).  
3. **WebSocket API** – I exposed a WebSocket endpoint via **API Gateway** (WebSocket integration) backed by another Lambda that pulls from the Kinesis shard and broadcasts to subscribed clients using **AWS IoT Core** for low‑latency fan‑out.  
4. **Cache & fallback** – Hot driver locations were cached in **ElastiCache Redis** with 1 s eviction; if Kinesis lagged, the client pulled the latest hash from DynamoDB.

**Result**  
- Latency <180 ms (median), 99th percentile 250 ms.  
- Daily cost $430, 30% below target.  
- User churn dropped by 12% after launch due to improved transparency.

**Leadership Principles**  
*Customer Obsession* – built a service that reduced rider anxiety and increased trust.  
*Dive Deep & Ownership* – I owned the full stack, from DB schema to WebSocket protocol, and iterated until SLA met.

**Bar‑raiser takeaways** – clear ownership, quantifiable impact (latency & cost), deep understanding of AWS primitives, and learning loop: after a 4 h outage we added a second Kinesis shard to eliminate single‑point failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
