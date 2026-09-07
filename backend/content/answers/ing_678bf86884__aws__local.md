---
qid: ing_678bf86884__aws__local
question: 'Explain: System Design : Distributed Database System Key Value Store'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 425
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:19:02-05:00'
sources: []
---

**Situation / Task**  
When I joined a fintech startup, the team needed a low‑latency, highly available key–value store for real‑time fraud alerts. The existing relational DB was choking on writes and didn’t scale horizontally. I owned the redesign.

**Action**  
I chose an eventually consistent, partitioned design inspired by Dynamo.  
1. **Sharding**: hash‑based partitioning across 8 nodes (EC2 m5.large).  
2. **Replication & quorum**: each key replicated to 3 replicas; `WRITE` uses *write‑quorum* (2/3) and `READ` uses *read‑quorum* (2/3).  
3. **Consistency**: employed vector clocks for conflict resolution, exposing a simple REST API via Amazon API Gateway + Lambda.  
4. **Durability**: data persisted to Amazon EBS snapshots every 15 min; used S3 for cold archival.  
5. **Monitoring & auto‑scaling**: CloudWatch alarms triggered EC2 autoscaling based on CPU/latency thresholds.

I also built a lightweight client library that cached hot keys in Redis (AWS ElastiCache) to shave 30 ms from average latency.

**Result**  
- Write throughput rose from 1,200 req/s to **>25,000 req/s** with <5 ms latency.  
- Availability hit **99.999%** SLA; no single‑point failures observed in a 6‑month test window.  
- Cost decreased by 35% compared to the legacy RDS cluster because of efficient horizontal scaling.

**Reflection**  
I learned that *ownership* means iterating on metrics, not just architecture. The key was diving deep into latency traces and adjusting replication factors—an example of **Bias for Action** and **Dive Deep** in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
