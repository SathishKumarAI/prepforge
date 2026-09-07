---
qid: ing_e4068d8512__aws__local
question: 'Explain: You know, people in a company throwing — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 417
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:54:30-05:00'
sources: []
---

**Situation & Task**  
At a mid‑size fintech I led a project to replace our legacy data‑pipeline that processed 1 M daily transactions. The goal was to reduce latency from **3 s** to **200 ms** while preserving accuracy for fraud detection (Customer Obsession, Ownership).  

**Action – Technical Design**  
I scoped the problem as an online inference pipeline:  
- *Data ingestion*: Kinesis Data Streams → Lambda (Python) for schema validation.  
- *Feature engineering*: Glue ETL to enrich with user‑behavior vectors in S3.  
- *Model serving*: SageMaker Endpoint (real‑time, multi‑model) behind Application Load Balancer, auto‑scaling on CloudWatch metrics.  
- *Feedback loop*: Predictions stored in DynamoDB; Lambda triggers a batch retrain nightly using SageMaker Training Jobs (GPU instances).  

I chose **SageMaker** for its managed ML lifecycle and **Kinesis** for low‑latency ingestion. Cost was capped at **$3 k/month** vs the $10 k baseline, while SLA improved from 99.5% to 99.95%.  

**Result & Learnings**  
- **Latency dropped by 93 %** (200 ms → 3 s).  
- Fraud detection accuracy increased from **92 %** to **96 %**, cutting false positives by **40 %** and saving ~$2 M/year.  
- The system now auto‑scales with traffic spikes, ensuring high availability without manual intervention.  

**Bar‑raiser takeaways**: I demonstrated ownership (full ML lifecycle), deep dive into AWS services, quantified impact, and iterated quickly after a failed initial Lambda design that caused timeouts—learning led to the Kinesis + Lambda split.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
