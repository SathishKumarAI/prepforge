---
qid: ing_9cf6ded93d__aws__local
question: 'Explain: ML System Design & Modeling — Data Science & AI Interview Prep
  | StrataScratch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 419
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:19:46-05:00'
sources: []
---

**ML System Design & Modeling – Interview Prep (StrataScratch)**  
*Leadership Principles: Ownership + Dive Deep*

**Situation:** A hiring manager asked how to design an end‑to‑end ML pipeline for a recommendation engine with millions of users and 10 M product items.

**Task:** Build a scalable, low‑latency system that trains nightly and serves predictions in <50 ms per request.

**Action:**  
1. **Data Layer** – Ingest logs via Kinesis Data Firehose → S3 (raw) + Athena for ad‑hoc queries. Use Glue to catalog & clean data into DynamoDB Streams for real‑time updates.  
2. **Feature Store** – Deploy SageMaker Feature Store; store 200+ features with TTL=24 h, ensuring consistent feature versioning across training and inference.  
3. **Model Training** – Use SageMaker Processing jobs on Spot instances (cost ↓30%) to train a LightGBM model nightly; evaluate AUC‑ROC >0.82 before promotion.  
4. **Inference** – Deploy the model as a SageMaker Endpoint behind an Application Load Balancer with target group health checks; autoscale based on 95th percentile latency <50 ms.  
5. **Monitoring & Feedback Loop** – CloudWatch metrics + SageMaker Model Monitor detect drift (precision drop >2%); trigger automatic retraining.

**Result:** Reduced prediction latency from 120 ms to 45 ms, increased click‑through rate by 15%, and cut inference cost by 25% vs. a legacy batch system.  

*Bar‑raiser cues:* Clear ownership of every component, deep dive into trade‑offs (Spot vs On‑Demand), quantifiable impact, and lessons learned from an earlier failure where latency spikes were traced to stale feature cache.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
