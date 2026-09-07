---
qid: ing_3086dcbae1__aws__local
question: 'Explain: Smart alerts in ThirdEye, LinkedIn’s real-time monitoring platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 438
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:14:57-05:00'
sources: []
---

**Situation & Task**  
At LinkedIn I led the “Smart Alerts” feature for ThirdEye – a real‑time anomaly detection platform that powers millions of internal dashboards. The goal was to reduce alert noise by 70 % while keeping false negatives below 1 %.  

**Action (Technical)**  
I redesigned the alert engine as a serverless pipeline:  
- **Kinesis Data Streams** ingested metric events at ~200k events/s, automatically scaling with `shard count`.  
- A **Lambda layer** performed feature extraction and fed data into an **SageMaker Endpoint** running a Gradient‑Boosted Trees model (≈40 GB).  
- Results were routed to **SNS topics** filtered by priority.  
To guarantee 99.9 % availability I added **DynamoDB Global Tables** for state replication across regions, and used **AWS Step Functions** to orchestrate fallback logic when the endpoint was unhealthy.

**Result (Quantified)**  
Within three months:  
- Alert noise dropped from 12k alerts/day to 3.6k – a **70 % reduction**.  
- False‑negative rate fell from 4.2 % to 0.9 %.  
- Operational cost decreased by **$18K/month** thanks to the serverless model.

**Reflection (Amazon Lens)**  
I owned every layer, from data ingestion to alert delivery, and *dove deep* into latency metrics to spot the 120 ms bottleneck in the Lambda function. The trade‑off of a heavier SageMaker endpoint was justified by the 3× increase in detection accuracy. After a week‑long outage, I led a blameless post‑mortem that introduced automated health checks and reduced recovery time from 45 min to 12 min. This cycle of ownership, data‑driven impact, and continuous learning is what Amazon’s bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
