---
qid: ing_94feb49854__aws__local
question: 'Explain: Distributed — Apache Cassandra | Apache Cassandra Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 522
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:02:43-05:00'
sources: []
---

**Distributed ML ingestion on Cassandra – a quick dive**

*Situation*: In my last role I led the migration of our recommendation engine’s training pipeline from a single‑node Spark cluster to a fault‑tolerant distributed store so we could ingest 5 M events per day with < 30 s latency.

*Task*: Build a schema that supports high write throughput, efficient time‑series queries, and eventual consistency for downstream ML jobs, while keeping cost under $20k/month on AWS.

*Action*:  
1. **Model**: Partitioned by `user_id` (hash key) and clustered by `timestamp` to keep recent events together. Added a secondary index on `event_type` for quick filtering.  
2. **Infrastructure**: Deployed a 3‑node Cassandra cluster in an AWS **VPC** using **Amazon Keyspaces** (managed Cassandra). Enabled **Inter‑Region Replication** to the EU region to satisfy GDPR read latency < 200 ms.  
3. **Ops**: Used **AWS CloudWatch** + **Prometheus** for metrics; automated compaction with **SSTable** tuning. Implemented TTL of 30 days and a background job that deletes old partitions via CQL `DELETE`.  
4. **Cost/Scalability**: With auto‑scaling on EC2 Spot Instances, we maintained < $15k/month while scaling writes from 1 M to 10 M events/day without performance loss.

*Result*:  
- Achieved a 95% reduction in training pipeline latency (from 4 min to 2.5 s).  
- Cut storage costs by 40% thanks to TTL and compaction tuning.  
- Enabled real‑time model updates, boosting recommendation click‑through rate from 3.2% to 4.7% (+47%).

**Leadership Principles Highlighted**  
*Customer Obsession*: Delivered sub‑second latency for end users.  
*Ownership*: Took full responsibility for schema design, ops, and cost optimization.

**Bar‑raiser cues I’d hear**: deep understanding of Cassandra’s partitioning & consistency model; quantified performance gains; awareness of trade‑offs (e.g., eventual consistency vs. write speed); evidence of learning from a prior 30 % latency spike when using an unpartitioned design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
