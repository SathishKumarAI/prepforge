---
qid: ing_4bbbeac52d__aws__local
question: 'Explain: Index lifecycle management — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 507
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:16:19-05:00'
sources: []
---

**Situation / Task**  
At Uber I led the redesign of our *LedgerStore* (the global event log that feeds fraud‑detection and ETA models). The system had to keep **trillions of indexes**—one per user, vehicle, promo code, etc.—while staying cost‑effective and highly available.

**Action**  
I introduced a *Hierarchical Index Lifecycle Management* pipeline:

1. **Cold‑to‑hot tiering** – Ingested events land in an S3‑based data lake (Amazon S3 Glacier Deep Archive).  
2. **Metadata cataloguing** – AWS Glue crawlers generate Athena tables; each index is represented as a partition key.  
3. **Automated compaction** – Lambda triggers every 24 h to merge small Parquet files into larger ones, reducing S3 read‑costs by ~70%.  
4. **Index pruning policy** – Using CloudWatch metrics we delete partitions older than 90 days for low‑velocity keys; high‑velocity keys stay in DynamoDB with TTL, ensuring *single‑second* query latency.

I also built a monitoring stack (Prometheus + Grafana) to surface “index churn” and auto‑scale the compaction workers via ECS Spot fleets.

**Result**  
The new lifecycle cut storage costs from **$12 M/month** to **$4.5 M/month** while maintaining 99.999% availability for real‑time ML features. Index query latency dropped from 350 ms to 75 ms, boosting model throughput by 45%. The design also reduced operational toil—engineering hours fell from 180/day to 35/day.

**Learnings & Bar‑raiser cues**  
*Ownership*: I owned the end‑to‑end pipeline and drove cross‑team adoption.  
*Dive Deep*: We profiled S3 request patterns, discovered a 30% read‑cost spike in small objects, and fixed it via compaction.  
*Quantified Impact*: Delivered $7.5 M annual savings and a 45% performance lift.  
*Learning from Failure*: Early attempts to keep all indexes in DynamoDB caused hot‑partition throttling; we pivoted to the tiered approach after a production outage, proving iterative experimentation pays off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
