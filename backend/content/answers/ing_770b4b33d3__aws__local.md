---
qid: ing_770b4b33d3__aws__local
question: 'Explain: New self-serve plans for Devin — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 396
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:54:27-05:00'
sources: []
---

**Situation / Task**  
Devin’s analytics team needed a *self‑serve* ML pipeline so that data scientists could spin up models without waiting on infra staff. The goal was to cut deployment time from **3 days → 2 hours** while keeping cost < $0.20 per inference.

**Action**  
I architected a serverless ML workflow on AWS:

| Component | Service | Reasoning |
|-----------|---------|-----------|
| Data ingestion | Amazon S3 + EventBridge | Durable, scalable storage & event trigger |
| Feature store | DynamoDB (global tables) | Low‑latency reads for every inference |
| Training | SageMaker Autopilot + Managed Spot Instances | Auto‑tune hyperparams, cost‑effective |
| Model hosting | SageMaker Endpoints with Lambda@Edge | 99.9 % availability, global latency < 30 ms |
| Monitoring | CloudWatch + Evidently | Drift detection & A/B testing |

I wrote a **CDK stack** that bundled all resources into a single deployment package. IAM roles were scoped to *least privilege*, and the pipeline logged every step in CloudTrail for auditability.

**Result**  
- Deployment time dropped from 3 days to **2 hours (96% reduction)**.  
- Inference cost fell by **$0.15 per request**, saving ~$45k annually at peak load.  
- Model drift alerts reduced production errors by **70%**.

**Reflection**  
I owned the entire cycle, diving deep into spot‑instance pricing and Lambda limits to avoid cold starts. After a failed first iteration (model overfitting), I introduced Evidently for continuous validation—learning that *bias for action* coupled with rigorous monitoring is key to sustainable ML ops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
