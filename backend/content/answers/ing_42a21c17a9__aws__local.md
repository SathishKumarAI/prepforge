---
qid: ing_42a21c17a9__aws__local
question: 'Explain: Airbnb — Faang Coding Interview Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 520
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:56:43-05:00'
sources: []
---

**Situation (S)**  
At a previous firm I led the effort to build an automated “Airbnb‑style” recommendation engine for a large marketplace that had 12 M active listings and 3 M users. The product team asked me to answer the same type of interview questions we see at FAANG—“how would you design a system that scales like Airbnb?”—so I could coach junior engineers.

**Task (T)**  
Create a clear, data‑driven explanation that covers:  
1. What core ML problem it solves (search ranking + dynamic pricing).  
2. The architecture and AWS services needed to meet 99.9 % availability and sub‑second latency at peak traffic (~10k RPS).

**Action (A)**  
- **Model training** – use SageMaker Pipelines on spot instances; store datasets in S3, orchestrate with Step Functions.  
- **Feature store** – DynamoDB for real‑time features, cached in ElastiCache Redis to keep latency < 5 ms.  
- **Inference** – deploy models via SageMaker Endpoints behind an Application Load Balancer, auto‑scaling on CPU utilization (target 70 %).  
- **Monitoring & retraining** – CloudWatch metrics + Evidently for drift; trigger Lambda to retrain nightly if RMSE > 0.15.  
- **Cost control** – use Savings Plans for EC2, enable S3 Intelligent-Tiering for historical logs.

**Result (R)**  
Implemented the pipeline in 6 weeks; after launch, click‑through rate rose 18 % and revenue per booking increased 12 %. Operational cost was kept under $15k/month—30 % below the budget forecast.  

---

### Leadership Principles Highlighted  
- **Customer Obsession** – focused on user latency & accuracy to improve booking experience.  
- **Ownership / Dive Deep** – built end‑to‑end pipeline, tuned every component, and monitored drift.

**Bar‑raiser takeaways**  
- Clear ownership of the data lifecycle (from S3 → SageMaker → DynamoDB).  
- Quantified impact (18 % CTR lift) demonstrates depth.  
- Learned from a failed initial model that overfitted to cold starts; corrected by adding regularization and expanding feature set.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
