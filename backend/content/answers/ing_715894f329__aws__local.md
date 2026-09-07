---
qid: ing_715894f329__aws__local
question: 'Explain: Things like these are very hard to — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 548
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:41:48-05:00'
sources: []
---

**Situation (S)**  
I was tasked with designing a real‑time traffic prediction engine that feeds into Google Maps’ navigation UI. The goal: deliver sub‑second latency predictions for millions of users while scaling to peak traffic periods.

**Task (T)**  
Build an end‑to‑end ML pipeline—data ingestion → feature store → model training → inference—ensuring high availability, low cost, and rapid iteration.

**Action (A)**  

| Step | AWS Service | Rationale |
|------|-------------|-----------|
| Data ingestion | **Kinesis Data Streams** + **Glue** | Handles >10 M events/s with auto‑scaling; Glue catalogs raw data for downstream use. |
| Feature store | **Amazon SageMaker Feature Store** | Centralized, low‑latency lookup (≤1 ms) for 3 B feature records; versioning supports A/B tests. |
| Model training | **SageMaker Pipelines + EC2 Spot** | Auto‑ML pipelines run nightly on spot instances, cutting compute cost by 60 %. |
| Inference | **SageMaker Endpoint (Multi‑Model) + Lambda@Edge** | Edge endpoints reduce latency to <50 ms; multi‑model runtime saves up to 30 % of memory. |
| Monitoring | **CloudWatch + Evidently** | Continuous drift detection; alerts trigger retraining when MAE > 0.12 mph. |

*Scalability*: Kinesis shards auto‑scale; SageMaker endpoints use Auto Scaling policies tied to CloudWatch metrics.  
*Availability*: Multi‑AZ deployment, active‑standby failover for endpoints.  
*Cost*: Spot usage + reserved instances → ~45 % overall savings vs on‑demand.

**Result (R)**  
- Latency dropped from 200 ms to 40 ms per request.  
- Prediction accuracy improved by 18 % (MAE reduction).  
- Operational cost decreased 48 %.  

**Leadership Principles Highlighted**  
*Customer Obsession*: Faster, more accurate routing directly improves user experience.  
*Ownership & Dive Deep*: I led cross‑functional ops to validate feature importance and tuned hyperparameters until performance plateaued.

**Bar‑raiser takeaways**  
- Clear ownership of each pipeline component.  
- Quantified impact (latency, MAE, cost).  
- Demonstrated learning loop: continuous monitoring → retraining → deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
