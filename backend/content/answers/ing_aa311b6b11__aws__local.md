---
qid: ing_aa311b6b11__aws__local
question: 'Explain: How to prepare — Waymo'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 452
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:50:57-05:00'
sources: []
---

**Scenario (STAR)**  
*Situation:* In a previous role I led the data‑pipeline for a self‑driving platform that needed to ingest 200 TB of raw sensor logs per week and produce high‑fidelity semantic maps used by Waymo’s perception stack.  
*Task:* Deliver a scalable, fault‑tolerant ingestion & preprocessing workflow that reduces training latency from 48 h to <12 h while maintaining data integrity.  
*Action:*  
- **Ownership** – I scoped the end‑to‑end pipeline, wrote a technical spec and drove cross‑functional ownership with sensor teams, data scientists, and DevOps.  
- **Dive Deep** – Built an AWS Glue job that normalizes LIDAR/Camera streams, applies deduplication via DynamoDB checksum tables, and stores results in S3 using partitioned Parquet for optimal query performance.  
- Leveraged **Amazon SageMaker Ground Truth** to auto‑label a subset (10 % of data) with an 87 % precision model, then iterated on the labeling workflow until 95 % accuracy.  
- Implemented **Step Functions** orchestrating Glue → Lambda (data validation) → S3 EventBridge → Athena for quick ad‑hoc analytics.  
*Result:* Training cycles dropped from 48 h to <12 h (80 % faster), cost per TB fell by 35 %, and the labeling precision hit 95 %. The pipeline now processes 200 TB/week with 99.999% uptime, directly feeding Waymo’s perception model updates.  

**Key Takeaway for a Bar‑raiser:**  
- Demonstrated *ownership* of the entire data lifecycle.  
- Showed *deep technical dive* into AWS services and trade‑offs (cost vs latency).  
- Quantified impact with concrete metrics.  
- Learned from initial 87 % labeling error, iterating to achieve 95 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
