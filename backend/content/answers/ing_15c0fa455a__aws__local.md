---
qid: ing_15c0fa455a__aws__local
question: 'Explain: Further system design learning resources'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 454
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:14:25-05:00'
sources: []
---

**Situation / Task**  
I was asked to build a learning platform that recommends AI courses to engineers across the company. The goal was to reduce onboarding time by 30 % and increase course completion from 45 % to >70 %.  

**Action (Technical Design)**  
* **Requirements & Scope** – Personalised, real‑time recommendations; support millions of users with minimal latency; compliance with internal data‑privacy rules.  
* **Architecture** –  
  * **Data Ingestion:** Kinesis Data Streams → Lambda for ETL → S3 landing zone.  
  * **Feature Store:** DynamoDB (high‑throughput, low‑latency) + SageMaker Feature Store for model features.  
  * **Recommendation Engine:** SageMaker Batch Transform for offline training; SageMaker Real‑Time Endpoint (GPU‑based inference) behind an Application Load Balancer with Auto Scaling.  
  * **Observability:** CloudWatch metrics + X-Ray tracing; PagerDuty alerts on latency >200 ms.  
* **Scalability & Cost** – Autoscaling keeps compute < 5 % of peak during off‑hours; spot instances for batch jobs reduce cost by ~35 %. Availability SLA 99.9 % via multi‑AZ deployment.  

**Result (Quantified Impact)**  
Within three months:  
* Onboarding time dropped from **12 days to 8 days** (≈33 %).  
* Course completion rose from **45 % to 72 %** (+27 pp).  
* Cost per recommendation reduced by **$0.02**, saving ~$200k annually.  

**Learning & Ownership**  
I owned the end‑to‑end pipeline, iterated on feature importance after a failed initial model (accuracy only 58 %), and introduced A/B testing to validate each change. This deep dive and bias for action led to a robust, production‑ready AI recommendation system that aligns with Amazon’s *Customer Obsession* and *Ownership* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
