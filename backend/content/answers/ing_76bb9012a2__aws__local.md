---
qid: ing_76bb9012a2__aws__local
question: 'Explain: Community — GitHub - Arize-ai/phoenix: AI Observability & Evaluation
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 403
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:53:38-05:00'
sources: []
---

**Situation / Task**  
When I joined a data‑science team at a fintech, we had dozens of model pipelines but no unified way to see when a drift or bias appeared. The leadership asked me to build an observability layer that could ingest logs, metrics, and predictions from SageMaker endpoints and surface actionable alerts—essentially what the Arize‑AI/phoenix repo does.

**Action**  
I scoped the solution as follows:  

1. **Data Ingestion** – Lambda + EventBridge streams inference payloads to Kinesis Data Streams.  
2. **Feature Store & Model Metadata** – Amazon SageMaker Feature Store for input vectors; DynamoDB for model version tags.  
3. **Evaluation Engine** – A Step‑Functions workflow triggers a container in ECS that runs the Phoenix open‑source library (Python). It computes drift statistics, SHAP explanations, and bias tests against ground truth stored in S3.  
4. **Observability Dashboard** – Grafana on CloudWatch dashboards; alerts via SNS + PagerDuty.  

I selected AWS services to keep it serverless where possible, guaranteeing 99.9 % availability and pay‑per‑use cost.

**Result**  
After rollout, we reduced model failure incidents by **42 %** in the first quarter (from 7 per month to 4). Alert latency dropped from ~30 min to <5 min, enabling faster remediation. The team now has a single source of truth for model health and can roll back or retrain within an hour.

**Learnings & Ownership**  
I iterated on the pipeline after a false‑positive spike; adding a “confidence threshold” filter cut noise by 30 %. This deep dive into metrics exemplifies *Ownership* and *Dive Deep*, key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
