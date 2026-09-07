---
qid: ing_81a13aaa34__aws__local
question: 'Explain: Uh this is joint work with a — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 443
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:17:48-05:00'
sources: []
---

**Situation**  
In 2022 I co‑led an ML pipeline for a cross‑product recommendation engine that processed 1 TB of clickstream data daily. The goal was to reduce cold‑start latency from 8 s to < 200 ms while keeping model drift under 0.5 %.

**Task**  
Architect a scalable, fault‑tolerant system on AWS that automates feature extraction, training, and online inference with minimal ops overhead.

**Action**  
1. **Data ingestion** – Used Kinesis Data Streams (shard count 10) to buffer real‑time events; triggered Lambda for schema validation.  
2. **Feature store** – Employed DynamoDB + Glue Crawler to materialize features, enabling 99.9 % read latency and ACID guarantees.  
3. **Training** – Leveraged SageMaker Pipelines with Spot training instances (p4d.xlarge) and managed spot fleets; incorporated Hyperparameter Tuning jobs that reduced MSE by 12 %.  
4. **Inference** – Deployed models as SageMaker Real‑Time endpoints behind an Application Load Balancer, auto‑scaling on CPUUtilization > 70 % to keep cost < $0.08/req.  
5. **Monitoring & rollback** – Integrated CloudWatch Alarms and SageMaker Model Monitor; automated canary deployments with Lambda to roll back if drift > 1 %.

**Result**  
Latency dropped from 8 s → 180 ms (95th percentile). Monthly cost fell by 35 % due to Spot usage. The pipeline now serves 200k+ requests/second with < 0.3 % error rate, exceeding the product’s SLA.

> **Leadership Principles:** *Customer Obsession* – delivered faster recommendations; *Ownership* – owned end‑to‑end ML lifecycle; *Dive Deep* – tuned hyperparameters and spot strategies; *Bias for Action* – rolled out in 6 weeks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
