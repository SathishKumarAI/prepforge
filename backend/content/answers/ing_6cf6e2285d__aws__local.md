---
qid: ing_6cf6e2285d__aws__local
question: 'Explain: Storage Estimation — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 404
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:23-05:00'
sources: []
---

**Situation / Task**  
During a design interview for an AI‑driven recommendation engine at Airbnb, the interviewer asked me to estimate storage requirements for user interaction logs and model artifacts. The goal was to build a scalable, cost‑effective data lake that could feed nightly training jobs.

**Action**  
I started by **dive deep** into historical metrics: 4 M active users, ~30 GB/day of raw event streams, and 200 TB/year of aggregated feature tables. I mapped the pipeline to **Amazon Kinesis Data Streams → Glue ETL → S3 (GLACIER Deep Archive for cold data)**.  
For model artifacts, I proposed **SageMaker Model Registry** on top of **EFS** for shared access during training and **S3** for versioned checkpoints. To guarantee **high availability**, I enabled cross‑region replication with **S3 Transfer Acceleration** for ingest latency < 200 ms.  
Cost trade‑offs were quantified: S3 Standard + Intelligent‑Tiering would cost ~$0.023/GB/month, while moving 50% of the data to Glacier reduces it to <$0.004/GB/month, saving ~30 % annually.

**Result**  
The design projected a total storage footprint of **≈ 350 TB**, with an estimated yearly cost of **$1.2M**—a 25 % reduction compared to a naive S3‑only approach. I also outlined monitoring via **CloudWatch metrics** and automated alerts for anomalous spikes, ensuring the system stays within SLA.  

**Reflection (Bar‑raiser)**  
I demonstrated ownership by quantifying impact, deep technical reasoning on scalability/availability/cost, and learning from past failures where over‑provisioning led to $0.5M wasted spend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
