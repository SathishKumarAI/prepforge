---
qid: ing_590caca246__aws__local
question: 'Explain: is really helpful in these kind of — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 421
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:47:07-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a project to add predictive ETA and surge‑pricing models for a ride‑hailing platform similar to Uber/Ola. The goal was to reduce passenger wait times by 15 % while keeping driver utilization above 80 %.  

**Action**  
1. **Data pipeline** – Built an end‑to‑end streaming stack with Kinesis Data Streams, Lambda, and Glue to ingest GPS, traffic, and demand logs in real time.  
2. **Model training & serving** – Trained a Gradient‑Boosted Trees model on SageMaker, deploying it via SageMaker Endpoint (auto‑scaling).  
3. **Feature store** – Used DynamoDB + DAX for low‑latency lookup of driver availability and historical surge patterns.  
4. **Observability** – Integrated CloudWatch Metrics & X-Ray to monitor latency and error rates; set up alerts that auto‑triggered model retraining when drift exceeded 5 %.  

**Result**  
- ETA accuracy improved from 30 % to 85 % (MAE dropped from 12 s to 3.5 s).  
- Passenger wait time fell by **18 %**, exceeding the target, while driver utilization rose to 82 %.  
- Cost per inference stayed under $0.0002 thanks to spot‑instance SageMaker endpoints.

**Leadership Principles**  
- *Customer Obsession* – Delivered a smoother rider experience with measurable latency gains.  
- *Dive Deep & Ownership* – Designed the entire ML pipeline, handled data quality, and iterated on model drift.  

**Bar‑raiser takeaway**  
Showed full ownership from ingestion to serving, quantified impact, and incorporated continuous learning loops to avoid stale models—exactly what Amazon looks for in a high‑impact role.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
