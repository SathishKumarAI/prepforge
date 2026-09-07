---
qid: vq_efe0aa3730__aws__local
question: Q34- What do you think of our current data process?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 375
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:21:38-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** At my last role I was asked to review the ML pipeline that ingested daily telemetry from over 50k IoT devices, stored it in S3, and fed it into a SageMaker model for anomaly detection.  
> **Task:** My goal was to audit data quality, latency, and cost‑efficiency while ensuring compliance with GDPR.  
> **Action:** I performed a “data‑deep dive” by sampling 1 M rows, checking schema drift, missing values, and timestamp skew. I mapped the workflow in CloudWatch Logs, identified that the Lambda ingestion step was throttling at 400 req/s (50% of the limit), and that the data lake grew 3× faster than projected, inflating S3 storage costs by $12k/month.  
> **Result:** Re‑architected the pipeline: replaced the single Lambda with an EventBridge rule + Kinesis Data Streams for burst handling, added a Glue crawler to auto‑detect schema changes, and enabled S3 Intelligent-Tiering plus lifecycle policies. This cut ingestion latency from 15 min to 2 min, reduced storage costs by **38%**, and increased model accuracy (precision) by 4% due to cleaner data.  
> **Leadership Principles:** *Customer Obsession* – ensuring reliable alerts for downstream ops teams; *Dive Deep* – uncovering hidden bottlenecks; *Ownership* – owning the end‑to‑end redesign; *Bias for Action* – implemented changes within two sprints.

Bar‑raiser notes: I demonstrated ownership by leading the whole audit, dove deep into metrics, quantified impact with real numbers, and learned from the failure of a single Lambda bottleneck to scale horizontally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
