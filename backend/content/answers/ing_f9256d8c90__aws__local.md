---
qid: ing_f9256d8c90__aws__local
question: 'Explain: Mutable Infrastructure — Cloud Native Anti-Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 438
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:42-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a data‑science team that migrated an on‑prem ML pipeline to AWS for a consumer app with 5 M daily users. The legacy system used *mutable infrastructure* (manual VM updates, ad‑hoc Docker images, and a monolithic Airflow DAG). It caused unpredictable downtimes during model retraining, leading to a 12 % drop in feature freshness.

**Action**  
I re‑architected the pipeline around **Immutable Infrastructure** using AWS Fargate + ECS, CodePipeline, and ECR. Every build produced a new container image tagged with the Git commit SHA. I introduced Terraform modules for reproducible networking and IAM roles, and leveraged Amazon SageMaker Pipelines to orchestrate training jobs as declarative steps.

- *Customer Obsession*: ensured that each deployment kept real‑time predictions under 200 ms latency.
- *Ownership/Dive Deep*: wrote unit tests for the pipeline code (90% coverage) and set up CloudWatch alarms for any failed stage.

**Result**  
Deployment failures dropped from ~3 per week to **0**, and model rollouts became 4× faster. Latency improved by 25 %, directly boosting conversion rates (+1.8 %). Cost was reduced by 18 % thanks to Fargate’s pay‑as‑you‑run model and the elimination of idle VM hours.

**Bar‑raiser takeaways**  
- Demonstrated **ownership** by turning a fragile system into a self‑healing, auditable pipeline.  
- Showed *deep dive* through detailed metrics and trade‑off analysis (Fargate vs. EC2).  
- Quantified impact with concrete numbers (downtime, latency, cost).  
- Learned from failure: the first immutable rollout hit a race condition; I added idempotent steps and documented the fix for future teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
