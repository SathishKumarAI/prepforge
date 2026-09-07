---
qid: ing_68cbc79988__aws__local
question: 'Explain: between consistency and availability in this case'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 447
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:21:15-05:00'
sources: []
---

**Situation & Task**  
I was leading the migration of our recommendation engine from a single‑region SageMaker endpoint to a globally distributed inference service that had to stay *available* for 99.9 % of our users while maintaining *consistency* of model predictions across regions.

**Action**  
I applied **CAP** by using *eventual consistency* for model metadata (S3 + DynamoDB Global Tables) and *strong consistency* for inference requests via **AWS Global Accelerator** routing to the nearest endpoint. To keep latency low, I deployed a **Lambda@Edge** cache that served stale predictions for <5 ms if the origin was temporarily unreachable. We also enabled **SageMaker Model Registry** with versioning; any update triggered a blue‑green rollout across regions.

- *AWS services*: SageMaker, S3, DynamoDB Global Tables, CloudFront, Lambda@Edge, Global Accelerator.  
- *Scalability*: Auto Scaling for endpoints + CloudWatch metrics ensured 10× traffic spikes without manual intervention.  
- *Availability*: The dual‑route strategy kept the service up during a regional outage (downtime <2 s).  
- *Cost*: We reduced spend by 18 % YoY by shifting idle capacity to Spot instances.

**Result**  
Post‑migration, we achieved **99.97 % availability** and a **0.8 pp increase in click‑through rate**, directly contributing $4M incremental revenue in Q3.  

**Leadership Principles Reflected**  
- *Customer Obsession* – ensured users never saw latency spikes or inconsistent recommendations.  
- *Ownership & Dive Deep* – I led end‑to‑end design, quantified trade‑offs, and iterated based on real metrics.

Bar‑raisers look for ownership (I owned the whole migration), depth (detailed CAP analysis + AWS stack), quantified impact (availability %, revenue lift), and learning from failure (handled regional outage gracefully).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
