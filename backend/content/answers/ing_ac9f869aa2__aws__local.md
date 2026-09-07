---
qid: ing_ac9f869aa2__aws__local
question: 'Explain: Interpretability — Research \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 381
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:56:05-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team at Amazon’s ML Research Lab to build an *interpretable* recommendation engine for Prime Video. The goal was to reduce “black‑box” bias while keeping click‑through rate (CTR) above 18 %.  

**Action**  
- Adopted **Model‑agnostic LIME** and built a custom **SHAP‑based dashboard** in SageMaker Studio, integrating with Amazon QuickSight for real‑time insights.  
- Created a **feature‑importance hierarchy** stored in DynamoDB, enabling downstream teams to audit model decisions within 30 s.  
- Deployed the pipeline on **SageMaker Pipelines** and **AWS Lambda** (for inference) behind an Application Load Balancer, ensuring <200 ms latency at 10k RPS.  
- Implemented a nightly **model‑drift monitor** using Amazon CloudWatch Alarms; when drift >5 %, the system auto‑restarts training on fresh data from S3.

**Result**  
- CTR rose to 20.4 % (+13 %) while audit compliance scores improved by 42 %.  
- Runtime cost dropped 18 % thanks to spot‑instance scheduling and Lambda’s pay‑per‑invocation model.  

**Learning & Ownership**  
I iterated on the interpretability layer after a false‑positive alert that mis‑attributed user churn to content quality. By adding confidence thresholds, we cut false alerts by 67 %. This experience reinforced **Customer Obsession** (understanding viewer trust) and **Dive Deep** (quantifying impact of every tweak).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
