---
qid: ing_3d0dd0ac28__aws__local
question: 'Q: How would you optimize costs for a high-volume RAG application?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 392
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:43:46-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of a high‑volume Retrieval‑Augmented Generation (RAG) pipeline that served 4 M queries/day for an enterprise search product. The team’s cost was $3.2 M/month, and we needed to cut it by ≥30 % without hurting latency (<200 ms).  

**Action**  
* **Ownership & Dive Deep** – I built a real‑time cost telemetry dashboard (AWS Cost Explorer + CloudWatch) that correlated query volume with Lambda invocations, SageMaker endpoint usage, and DynamoDB read/write capacity.  
* **Design** – Switched from on‑demand SageMaker endpoints to *Multi‑Model Endpoints* and added an inference caching layer using Amazon ElastiCache for Redis (TTL 10 min). Queries were batched into 256‑item shards, reducing Lambda concurrency by 70 %.  
* **AWS services used** – AWS Lambda (with provisioned concurrency), SageMaker Multi‑Model Endpoints, ElastiCache, DynamoDB, CloudWatch.  
* **Cost trade‑offs** – Provisioned concurrency eliminated cold‑start spikes but increased baseline spend; caching lowered endpoint calls by 60 %, offsetting that cost.  

**Result**  
The migration cut monthly spend to $2.1 M (−34 %) while maintaining <190 ms latency. We also reduced carbon footprint by ~25 %. The project was recognized as a “Best Practice” in the AWS Cost Optimization Playbook.  

*Key take‑away*: By owning the cost loop, diving deep into metrics, and iterating on architecture, we achieved measurable savings without compromising user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
