---
qid: ing_bba2a6d0fe__faang__local
question: 'Explain: Google System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 499
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:59:24-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise overview of how Google designs large‑scale ML systems today, focusing on recent FAANG‑style questions. I’ll assume they’re interested in architecture, data pipelines, model training, serving, and monitoring.

**Approach**  
1. Outline the end‑to‑end flow: ingestion → feature store → training → serving → feedback loop.  
2. Highlight key Google products (BigQuery, Dataflow, Vertex AI, Spanner).  
3. Discuss typical interview questions around data sharding, model versioning, latency guarantees, and fault tolerance.

**Depth**  

| Stage | Typical Design Question | Core Answer |
|-------|------------------------|-------------|
| **Data Ingestion** | *How do you handle streaming vs batch?* | Use Dataflow with Beam pipelines; windowing for micro‑batches, Pub/Sub for real‑time. |
| **Feature Store** | *What guarantees consistency across models?* | Centralized Feature Store (Vertex AI Features) with GCS/Spanner backends, schema evolution via versioned tables. |
| **Training** | *How to scale hyperparameter search?* | Distributed training on TPUs via JAX/TF; use Vizier for Bayesian optimization; autoscale clusters in GKE. |
| **Serving** | *Latency < 10 ms, 99.9% availability?* | Model Server (TensorFlow Serving) behind Cloud Load Balancer + Cloud CDN; model shards in regional Spanner, read‑replicas, request routing by key hash. |
| **Monitoring** | *Detect drift and rollback quickly?* | Prometheus metrics + Vertex AI Vizier for online monitoring; Canary deployments with automated rollback on AUC drop. |

**Edge Cases**  
- Data skew → dynamic partitioning.  
- Model size > 10 GB → split into shards, use GCS object streaming.  
- Mixed‑precision training failures → fallback to FP32.

**Optimize & Communicate**  
Explain trade‑offs: e.g., using Cloud Spanner gives strong consistency but higher latency; switching to BigQuery for cold analytics trades real‑time for cost. Conclude by stressing the importance of end‑to‑end observability and automated rollback, which are common FAANG interview themes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
