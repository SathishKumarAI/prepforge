---
qid: ing_b0050a9de8__aws__local
question: 'Explain: OpenAI Core Custom Problems — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 464
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:03:22-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to design a “Custom Problem” pipeline for a Faang‑scale product—essentially an end‑to‑end system that could ingest a user’s proprietary data, train a tailored model, and serve predictions with sub‑second latency. The challenge was to do this while staying compliant with data‑privacy rules and keeping costs under \$0.05/prediction.

**Action (Technical Design)**  
1. **Data Ingestion** – Use *Amazon S3* + *Glue* for schema discovery; store raw data in an encrypted bucket.  
2. **Feature Store** – *DynamoDB* with TTL for real‑time features, backed by *AppSync* to expose a GraphQL API.  
3. **Training** – Launch a *SageMaker* notebook cluster per customer (multi‑tenant via IAM roles). For large datasets, spin up an *EMR* cluster with *Spark MLlib*.  
4. **Model Registry & Deployment** – Store checkpoints in *S3*, register in *SageMaker Model Registry*, and deploy to a *Lambda@Edge* endpoint for global low‑latency inference.  
5. **Monitoring** – CloudWatch metrics + SageMaker Ground Truth for drift detection; auto‑scale based on request volume.

**Result (Dive Deep)**  
- Achieved < 200 ms latency for 95th percentile requests.  
- Reduced per‑prediction cost to \$0.038, a 60% cut vs the legacy batch system.  
- Served 1.2M predictions/day with 99.9% uptime.  

**Reflection (Bar‑raiser focus)**  
I owned the entire stack, documented trade‑offs (e.g., Lambda@Edge vs API Gateway + ECS), and iterated on the feature store after observing a 12% accuracy drop due to missing cold‑start features—leading to an automated warm‑up script. This demonstrates *Ownership*, *Dive Deep*, and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
