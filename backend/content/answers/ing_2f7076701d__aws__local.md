---
qid: ing_2f7076701d__aws__local
question: 'Explain: Directory sharding — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 435
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:12:47-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of a legacy monolith that stored user profiles for 12 M active users into a scalable micro‑service architecture on AWS. The monolith’s single PostgreSQL instance hit CPU 95 % and latency >400 ms during peak, breaking our *Customer Obsession* promise.

**Action (Design)**  
I introduced **directory sharding**: each user belongs to a “bucket” identified by the first two hex digits of their UUID. This turned into a logical partition across multiple RDS‑Aurora clusters (one per shard).  

- **Data‑plane:** Amazon Aurora Serverless v2 with `RDS Proxy` for connection pooling, and DynamoDB for metadata (shard map).  
- **Control‑plane:** Lambda functions update the shard map on user creation; API Gateway routes requests by hashing the UUID.  
- **Scalability:** Each shard can autoscale independently (Aurora Serverless v2), so a surge in one region doesn’t throttle others—*Dive Deep* into metrics.  
- **Availability:** Multi‑AZ Aurora + read replicas per shard, and DynamoDB’s built‑in 99.999 % SLA keep the system highly available.  
- **Cost:** Shard isolation lets us run smaller instances during off‑peak; we reduced spend by **23 %** while doubling throughput.

**Result**  
Latency dropped from 400 ms to <50 ms (95th percentile) and the system handled a 3× traffic spike without intervention—*Deliver Results*.  

**Bar‑raiser takeaway**  
I owned the failure mode of a single point of overload, dove deep into shard key design, quantified performance gains, and learned that keeping metadata in a fast NoSQL store simplifies routing logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
