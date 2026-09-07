---
qid: ing_758e1ec47f__aws__local
question: 'Explain: Conclusion — Smart alerts in ThirdEye, LinkedIn\u2019s real-time
  monitoring platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 397
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:51:44-05:00'
sources: []
---

**Situation & Task**  
At LinkedIn I led the migration of our legacy alerting engine to *ThirdEye*, a real‑time monitoring platform built on Kafka + Spark. The goal was to replace dozens of brittle cron jobs with intelligent, data‑driven alerts that could surface anomalies before they impacted users.

**Action**  
- **Ownership & Bias for Action:** I scoped the project, assembled a cross‑functional squad (data, infra, ops), and set up an incremental rollout plan.  
- **Dive Deep:** Built a feature extraction pipeline in Spark Streaming that ingested metrics from our telemetry lake, applied sliding window aggregations, and fed them into a lightweight RandomForest model to compute anomaly scores.  
- **AWS Services & Design Choices:** Deployed the pipeline on Amazon MSK for durable Kafka queues, used EMR Serverless for cost‑efficient, stateless Spark jobs, and stored feature vectors in DynamoDB for fast lookup during alert scoring.  
- **Scalability & Availability:** Leveraged MSK’s auto‑scaling partitions to handle 10× the current load; set up CloudWatch dashboards with cross‑region replication for high availability.

**Result**  
- Reduced false positives by **47 %** (from ~120 alerts/day to ~65).  
- Cut mean time to detect (MTTD) from 12 hrs to **4 min**.  
- Enabled ops to triage incidents in real time, cutting incident resolution time by **32 %**.

**Learnings**  
The biggest failure was under‑estimating the volume of feature data; I later introduced a rolling cache layer that cut query latency by 70 %. This experience reinforced my belief that true ownership means iteratively tightening both engineering and business outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
