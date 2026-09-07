---
qid: ing_95b137ad7a__aws__local
question: 'Explain: The Cost of Hitting the Database — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 399
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:04:13-05:00'
sources: []
---

**Situation (S)**  
I was leading a team that built an e‑commerce recommendation engine for a fast‑growing marketplace. Our API hit the relational database for every user request, causing latency spikes during flash sales and driving up RDS read replicas.

**Task (T)**  
Reduce database load by 70 % while keeping response time under 200 ms for 99.9 % of traffic.

**Action (A)**  
1. **Dive Deep & Ownership** – profiled queries with *Amazon RDS Performance Insights* and identified a handful of hot tables.  
2. Designed a distributed cache layer using **Amazon ElastiCache Redis**:  
   * Partitioned keys by user‑segment to avoid stampeding.  
   * Implemented write‑through logic in the recommendation service (Python + boto3).  
   * Added TTLs and LRU eviction to keep memory usage predictable.  
3. Deployed cache invalidation via **SNS** notifications triggered by DynamoDB Streams on product updates.  
4. Configured auto‑scaling for ElastiCache nodes, monitored with CloudWatch alarms.

**Result (R)** – After rollout:  
- Database read traffic dropped from 1.2 M QPS to 360 K QPS (+70 %).  
- API latency fell from 350 ms average to 120 ms; 99.9 % of requests now under 200 ms.  
- Cost savings of ~30 % on RDS and increased throughput without additional DB instances.

**Leadership Principles Highlighted**  
*Customer Obsession* – faster responses improve user experience during high‑traffic events.  
*Ownership & Bias for Action* – I owned the full loop from profiling to deployment, acting quickly with measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
