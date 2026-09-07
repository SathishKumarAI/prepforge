---
qid: ing_96b1003240__aws__local
question: 'So, what’s your phone number? — My favorite algorithm (and data structure):
  HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 425
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:06:49-05:00'
sources: []
---

**Situation & Task**  
I was tasked with delivering real‑time user‑engagement metrics for a mobile game that served > 5 M daily active users (DAU). The requirement: estimate distinct players per day with < 1 % error, while keeping memory usage under 50 MB on each edge server.  

**Action & Technical Design**  
I chose **HyperLogLog (HLL)** because it trades a negligible bias for sub‑millibyte cardinality estimates.  
* **AWS services used** –  
- *Amazon Kinesis Data Streams* to ingest event logs at 10 k events/s.  
- *Lambda* (with the AWS Serverless Application Repository HLL library) for stateless aggregation.  
- *DynamoDB* to persist the compressed HLL registers, enabling horizontal scaling and high availability.  

I engineered a **two‑tier pipeline**: local edge Lambda aggregates events into an 8‑byte register set; every minute it merges into DynamoDB via BatchWriteItem, ensuring eventual consistency while keeping latency < 200 ms. The design scales linearly because each shard processes its own register slice; the merge cost is O(1) per record.  

**Result**  
Post‑deployment we achieved:  
- **0.8 %** estimation error (below target).  
- Memory footprint **38 MB** per server, 40 % below the 50 MB ceiling.  
- Cost savings of **$12k/month** vs a naïve Bloom filter implementation due to reduced EC2 usage.  

**Reflection & Learning**  
I owned the end‑to‑end solution and iterated on the register size after observing skewed user distribution, learning that adaptive bucket sizing can further reduce error for heavy‑tailed datasets. This project exemplifies *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
