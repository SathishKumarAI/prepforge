---
qid: ing_0bcfc39c24__aws__local
question: 'Explain: Cons — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 430
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:52:28-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the rollout of a real‑time recommendation engine for an e‑commerce platform that served 1 M active users daily. The engineering team was concerned that scaling the ML inference pipeline would become a bottleneck.

**Action – Design & Implementation**  
I architected a **serverless inference layer** on top of *Amazon SageMaker Endpoint* + *AWS Lambda*.  
- **Data flow**: Raw clickstream → S3 → Glue ETL → DynamoDB (feature store).  
- **Inference**: Lambda pulls feature vectors, calls SageMaker endpoint (batch-transform for heavy models), and writes predictions back to DynamoDB.  
- **Scaling strategy**: Lambda concurrency auto‑scales with a *reserved concurrency* policy; the SageMaker endpoint uses **multi‑model endpoints** behind an Application Load Balancer, allowing horizontal scaling without redeploying.  
- **Cost/Availability trade‑offs**: Using Lambda keeps idle compute cost low (pay‑per‑invocation). Multi‑model endpoints reduce per‑model deployment overhead but introduce a slight cold‑start latency (~200 ms) that we mitigated with *warm‑up triggers*.

**Result**  
Post‑deployment, inference latency dropped from 650 ms to **220 ms average**, and the system handled a 4× traffic surge during peak sales without any outages. Cost was cut by 30% compared to our previous container‑based approach.  

**Reflection (Bar‑raiser cues)**  
I took full ownership of the end‑to‑end pipeline, dove deep into Lambda’s concurrency limits, quantified performance gains, and learned that a hybrid serverless + multi‑model strategy can deliver both scalability and cost efficiency for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
