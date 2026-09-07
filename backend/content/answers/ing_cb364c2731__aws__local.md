---
qid: ing_cb364c2731__aws__local
question: 'Explain: Latest — Eugene Yan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 412
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:00:28-05:00'
sources: []
---

**Situation (S)** – In my last role I led the launch of a real‑time fraud detection model that needed to score every transaction in < 50 ms while handling 10 M events/day.

**Task (T)** – Build an end‑to‑end ML pipeline on AWS, deliver production quality at scale, and reduce false positives by > 30 %.

**Action (A)**  
1. **Data ingestion & feature store** – Used Kinesis Data Streams + Glue to collect raw logs, then stored engineered features in Amazon SageMaker Feature Store for low‑latency access.  
2. **Model training** – Trained a Gradient Boosting model on SageMaker Processing jobs; automated hyper‑parameter tuning with SageMaker Hyper‑Parameter Optimization (HPO).  
3. **Deployment & inference** – Deployed as a SageMaker Real‑Time Endpoint behind an Application Load Balancer, autoscaling based on CPU utilization (target 70 %).  
4. **Observability** – Integrated CloudWatch metrics and SageMaker Model Monitor to flag drift; set up Lambda alerts for > 5 % change in false‑positive rate.  

**Result (R)** – The system processed 10 M transactions/day with < 45 ms latency, cut fraud loss by $1.2 M/month (30 % reduction), and lowered false positives from 12 % to 8 %. Cost fell 18 % YoY due to spot‑instance training and efficient endpoint scaling.

**Leadership Principles** – *Ownership* (took full responsibility for the pipeline) & *Dive Deep* (analyzed feature importance, latency breakdowns).  
Bar‑raiser notes: clear ownership, quantified impact, deep technical reasoning, and learning loop from model drift mitigation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
