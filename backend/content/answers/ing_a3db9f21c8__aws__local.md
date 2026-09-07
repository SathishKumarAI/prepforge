---
qid: ing_a3db9f21c8__aws__local
question: 'Explain: latest millions of cells just to make — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 527
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:37:57-05:00'
sources: []
---

**Context (S)**  
I was asked to design a real‑time ride‑matching engine for an on‑demand mobility platform (Uber/Ola) that could serve millions of active users, with sub‑second latency, while continuously learning from historical trip data.

**Task (T)**  
Build an architecture that:  
1. Ingests streaming GPS telemetry and static profile data.  
2. Trains a predictive model to rank nearby drivers for each passenger request.  
3. Serves the ranked list in <200 ms at peak load (~5M requests/day).  

**Action (A)**  
- **Data ingestion:** Kinesis Data Streams → Lambda → S3/Glue catalog.  
- **Feature store:** DynamoDB + AWS SageMaker Feature Store for low‑latency lookup.  
- **Model training:** Periodic batch jobs on SageMaker Pipelines; use XGBoost with GPU instances (p2.xlarge) to reach 95 % recall on driver–passenger matches.  
- **Serving layer:** Deploy the model as a SageMaker endpoint behind an Application Load Balancer; autoscale by CloudWatch metrics (CPU & latency).  
- **Scalability/Availability:** Use multi‑AZ deployment, read replicas for DynamoDB, and enable SageMaker’s Multi‑Model Endpoints to host 10+ models per instance.  
- **Cost trade‑offs:** Batch training on spot instances cuts $300k/year; real‑time inference uses a small (ml.m5.large) cluster due to tight latency constraints.

**Result (R)**  
- Latency dropped from 350 ms to 120 ms, improving user satisfaction score by 18 %.  
- Driver‑to‑passenger match accuracy increased from 82 % to 94 %, boosting trip acceptance rate by 12 %.  
- Operational cost decreased 22 % through spot training and efficient inference scaling.

**Leadership Principles Highlighted**  
- **Customer Obsession:** Directly measured impact on user experience.  
- **Ownership & Dive Deep:** Handled end‑to‑end pipeline, from ingestion to model deployment, continually iterating on metrics.  

*Bar‑raiser cues:* I quantified the latency and accuracy gains, demonstrated deep technical knowledge of AWS services, showed ownership by addressing both data and serving layers, and reflected on cost–performance trade‑offs learned during iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
