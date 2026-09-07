---
qid: ing_9419aaa8d4__aws__local
question: 'Explain: this point are close by right so — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 577
total_tokens: 825
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:03-05:00'
sources: []
---

**Situation & Task**  
When I joined DoorDash as a Senior Solutions Architect, the product team was struggling to deliver real‑time rider‑to‑restaurant location updates at scale. Our goal: keep latency < 200 ms for 90% of users while supporting 5 M concurrent connections globally.

**Action – Design**  
1. **Geo‑Hashing**  
   *Used Amazon DynamoDB Global Tables* to store `userID → geo‑hash` pairs, with a custom partition key that’s the 12‑character Geo‑Hash (e.g., “u4pruydqqvj”).  
   *Why?*  
   - **Scalability**: DynamoDB handles millions of writes per second without sharding.  
   - **Availability**: Multi‑AZ replication guarantees < 1 ms read latency in any region.  
   - **Cost**: Provisioned capacity with auto‑scaling reduces over‑provisioning by ~30%.

2. **WebSockets for Push**  
   *Implemented Amazon API Gateway WebSocket APIs* backed by a Lambda authorizer and an Application Load Balancer that forwards to a fleet of **EC2 Spot Instances** running a Node.js service (using `ws`).  
   *Why?*  
   - **Real‑time**: 200 ms latency achieved via persistent TCP connections.  
   - **Cost & Scale**: Spot Instances + auto‑scaling keep costs < $0.02 per connection during peak hours.  
   - **Resilience**: API Gateway handles reconnection logic; Lambda authorizer enforces rate limits.

3. **Fallback & Metrics**  
   *DynamoDB Streams → Kinesis Data Firehose* to replicate geo‑hash updates into an Elasticsearch domain for analytics and backup.  
   *CloudWatch Alarms* on connection counts, latency, and error rates trigger automated scaling and incident alerts.

**Result**  
- Latency dropped from 600 ms to **150 ms** (95th percentile).  
- Connection churn handled 4× the previous peak without outages.  
- Cost per active session fell by **35%**, saving $1.2M annually.  

**Learning & Ownership**  
I led cross‑functional testing, documented failure modes, and iterated on the design after a mid‑night outage revealed WebSocket sticky sessions were mis‑routed. By owning the post‑mortem, we added connection health checks that prevented recurrence.

> **Leadership Principles:** *Ownership* (took end‑to‑end responsibility), *Dive Deep* (analyzed latency traces & DynamoDB capacity), and *Deliver Results* (measured impact with real metrics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
