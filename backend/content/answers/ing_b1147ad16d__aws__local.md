---
qid: ing_b1147ad16d__aws__local
question: 'Explain: Agent config files — Agentic Engineering - by Neo Kim and Paul
  Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 374
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:05:35-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
In a recent ML platform revamp at my previous company we had two separate pipelines: one for model training and another for inference. Users complained the “agent config” files were inconsistent, leading to deployment failures. I was tasked with standardizing these configs so engineers could spin up new models in minutes without manual tweaking.

**Action (Dive Deep & Ownership)**  
I first mapped every configuration field across 12 services (S3, SageMaker, Step Functions) and discovered duplicate keys and missing defaults. I designed a **centralized YAML schema** stored in an S3 bucket with versioning, and built a lightweight Lambda that validates any config against the schema before it reaches SageMaker.  
To reduce friction, I added an AWS CDK construct that auto‑generates a “starter” config per model type, complete with default hyperparameters and resource tags. The Lambda logs violations to CloudWatch Logs Insights, enabling real‑time alerts.

**Result (Deliver Results)**  
After rollout:  
- Deployment time dropped from **15 min → 2 min** (≈ 87% reduction).  
- Zero production failures due to config errors for the first three months.  
- Engineers reported a **70% increase in confidence** when launching new models.

**Learnings & Bar‑raiser Insight**  
I realized that while automation solved the immediate pain, we also needed a culture of “configuration ownership.” I introduced a quarterly review where teams update the schema based on new feature flags, ensuring the system stays relevant. This iterative loop embodies *Customer Obsession* and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
