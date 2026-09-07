---
qid: ing_b991a296cf__aws__local
question: 'Explain: When Not to Shard — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 428
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:23:30-05:00'
sources: []
---

**Answer (Amazon style)**  

> **When not to shard?**  
> *“If sharding adds more complexity than value, don’t.”*  

### Scenario  
I was tasked with scaling a recommendation engine that served 10 M users/day and stored ~3 TB of user‑behavior data. The team considered horizontal sharding on the user ID.

### Situation  
- **Read/write patterns**: 90 % reads, 10 % writes, mostly *read‑heavy* for cold users (rare writes).  
- **Data locality**: Most queries joined user data with product catalog; joins across shards would hit the catalog DB repeatedly.  

### Decision (Task)  
I performed a cost–benefit analysis:

| Metric | Sharded | Non‑sharded |
|--------|---------|-------------|
| Latency (avg read) | 150 ms (cross‑node join overhead) | 70 ms |
| Operational ops | 4 EC2 + 4 RDS nodes | 1 EC2 + 1 RDS node |
| Cost per month | $18k | $7k |

The *cost* and *latency* increase outweighed the expected throughput gains.  

### Action  
I proposed **partitioning by time** (e.g., weekly partitions) instead of sharding by key, using Amazon S3 + Athena for cold data and DynamoDB for hot user profiles. This kept a single RDS instance while still scaling read capacity via Aurora Serverless.

### Result  
- Throughput increased 1.5× without additional servers.  
- Latency dropped to < 80 ms.  
- Cost savings of ~60 % monthly.  

**Leadership Principles:** *Ownership* (I drove the decision and owned its outcome), *Dive Deep* (thorough metrics & trade‑offs).  

**Bar‑raiser check:** I quantified impact, avoided unnecessary complexity, and learned that sharding is not a silver bullet—sometimes simpler partitioning yields better ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
