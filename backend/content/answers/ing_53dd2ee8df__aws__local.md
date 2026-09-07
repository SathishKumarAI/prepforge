---
qid: ing_53dd2ee8df__aws__local
question: 'Explain: Streaming Data Access — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 713
total_tokens: 943
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:34:29-05:00'
sources: []
---

**Situation (S)**  
I was hired by a fintech startup to redesign their real‑time fraud detection pipeline. Their data lake lived on a legacy Hadoop cluster; latency was 3 min and the ingestion rate dropped during peak hours, costing us $12k/month in overprovisioned HDFS nodes.

**Task (T)**  
My goal: cut query latency to < 30 s for streaming analytics while reducing operational cost by 40 %. I had to shift from batch‑only HDFS to a true streaming data access layer that could serve both real‑time and downstream batch jobs.

**Action (A)**  

| Step | Design Decision | AWS Services |
|------|-----------------|--------------|
| 1 | Replace on‑prem HDFS with **Amazon S3** as the durable object store – immutable, pay‑per‑use, 99.999 % availability. | S3, S3 Transfer Acceleration |
| 2 | Ingest streams via **Kinesis Data Streams** (10 M events/day) and buffer to **S3** using Kinesis Firehose with a *1‑minute* buffering interval. | Kinesis Data Streams, Firehose |
| 3 | Persist streaming data in **Amazon Timestream** for low‑latency analytics; set retention policy (hot: 30 days, cold: 365 days). | Timestream |
| 4 | Provide a unified view through **AWS Glue** cataloging S3 + Timestream tables; enable Athena queries and Redshift Spectrum. | Glue, Athena, Redshift Spectrum |
| 5 | Automate scaling with **Auto Scaling Groups** for Kinesis shards; use *Reserved Capacity* to lock in 30 % cost savings. | Auto Scaling, Reserved Capacity |

I also implemented **AWS Step Functions** to orchestrate the pipeline and added CloudWatch metrics/Alarms (latency > 45 s triggers auto‑scale).

**Result (R)**  
- Query latency dropped from 3 min → **< 30 s** (95th percentile).  
- Operational cost fell by **42 %** ($12k → $7.2k/month).  
- Data freshness improved to < 1 min, enabling real‑time fraud alerts with a 20 % reduction in false positives.

---

### Leadership Principles Highlighted
| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility for the end‑to‑end pipeline redesign and drove it to production. |
| **Dive Deep** | Analyzed HDFS bottlenecks, benchmarked Kinesis vs. Firehose, tuned Timestream retention policies. |
| **Customer Obsession** | Delivered faster fraud alerts that directly protected users’ assets. |
| **Bias for Action** | Deployed the new architecture in 3 weeks instead of waiting for a full migration plan. |

*Bar‑raiser cues:*  
- Clear ownership narrative.  
- Quantified impact (latency, cost).  
- Deep dive into trade‑offs (S3 vs HDFS, Firehose buffering).  
- Learning loop: after the first deployment I discovered Firehose batch size was too small, so I increased it to 5 MB and reduced Lambda invocation costs by 15 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
