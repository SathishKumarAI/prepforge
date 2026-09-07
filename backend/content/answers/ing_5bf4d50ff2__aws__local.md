---
qid: ing_5bf4d50ff2__aws__local
question: 'Explain: Mapping a Key — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 457
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:53:12-05:00'
sources: []
---

**Situation / Task**  
I was asked to design the sharding layer for a high‑traffic recommendation engine that needed to scale from 5 M requests/day to 200 M without downtime. The requirement: *map user IDs (keys) to storage nodes so that adding or removing nodes causes minimal data movement*.

**Action – Technical Design**  
I chose **consistent hashing** with virtual buckets and a ring of 1024 points. Each physical node owns multiple virtual buckets to balance load. For lookup, the key’s hash is mapped to the next clockwise bucket; all data for that bucket lives on the owning node.  
*AWS services:*  
- **Amazon DynamoDB** as the underlying KV store (fully managed, 99.999% availability).  
- **Elastic Load Balancer + Lambda** to route requests based on the consistent‑hash function.  
- **Amazon CloudWatch & Parameter Store** for dynamic reconfiguration of bucket assignments.  

*Scalability:* Adding a node only moves ~1/1024 of the keys, keeping data transfer < 5 %.  
*Availability:* DynamoDB’s multi‑AZ replication guarantees continuity if a node fails; the ring automatically redirects traffic to surviving nodes.  
*Cost:* Virtual buckets reduce rebalancing traffic and avoid over‑provisioning; we keep only 1× write throughput per bucket.

**Result**  
After deployment, the system handled **250 M requests/day**, with an average lookup latency of **12 ms** (≤ 95th percentile < 30 ms). Adding a third node required < 2 GB of data transfer and no service interruption.  

**Reflection**  
I practiced *Ownership* by automating the re‑hash logic and *Dive Deep* when troubleshooting a spike in latency; I traced it to an uneven bucket distribution, fixed it by adding more virtual buckets, and reduced variance by 30%. This experience reinforced that consistent hashing is not just a theory but a practical tool for resilient, cost‑effective scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
