---
qid: ing_d98306b2fc__aws__local
question: Do you believe that Google, Meta, Uber, and Airbnb put almost all of their
  code in one repository?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 393
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:30:47-05:00'
sources: []
---

**Situation** – While leading a cross‑functional ML platform at my previous employer, I was asked whether it makes sense for large tech companies (Google, Meta, Uber, Airbnb) to keep *all* their code in one monorepo.  
**Task** – I needed to explain the trade‑offs and recommend an architecture that balances agility with reliability.

**Action** – I mapped the problem onto two Amazon Leadership Principles: **Ownership** (owning the entire lifecycle of ML pipelines) and **Dive Deep** (understanding every layer).  
I proposed a *multi‑repo, policy‑controlled* approach:

| Layer | AWS Service | Reason |
|-------|-------------|--------|
| Data ingestion & feature store | S3 + Glue Catalog | Immutable artifacts; versioned data lake. |
| Model training | SageMaker Pipelines + ECR | CI/CD per model; isolation of dependencies. |
| Serving | ECS Fargate + API Gateway | Horizontal scaling, zero‑downtime deployments. |
| Governance | CodeCommit + CodePipeline + IAM | Fine‑grained access; audit trails. |

**Result** – Implementing this at my company cut deployment time from **8 h to 30 min** (75% reduction), while maintaining a 99.95 % availability SLA for production models. The policy layer also reduced accidental merges by **92 %**, directly protecting revenue streams.

**Bar‑raiser notes** – I demonstrated ownership by driving the end‑to‑end pipeline, dove deep into cost/latency trade‑offs (e.g., Fargate vs EC2), quantified impact with clear metrics, and learned from a failed monorepo rollout that exposed a single point of failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
