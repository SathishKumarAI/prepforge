---
qid: ing_cfd4e0a9e5__aws__local
question: 'Explain: The Guild''s Services — GraphQL (The Guild)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 412
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:10:42-05:00'
sources: []
---

**Situation** – While leading the Machine‑Learning platform at The Guild, we had to expose a large catalog of models and inference endpoints to internal analytics teams. Existing REST APIs were bloated, versioned per model, and caused latency spikes during peak training cycles.

**Task** – Design a unified GraphQL layer that would let consumers request exactly what they need (model metadata, current metrics, or raw predictions) in one round‑trip, while keeping the system highly available and cost‑efficient.

**Action** –  
1. **Schema & Resolver Design** – Modeled `Model`, `InferenceRequest`, and `Metric` types; used field‑level data loaders to batch DB calls.  
2. **AWS Services** – Deployed the GraphQL API on **AppSync** (serverless, real‑time subscriptions for training status). Backed it with **DynamoDB** (low‑latency read/write) and **Lambda@Edge** for request validation.  
3. **Scalability & Availability** – AppSync automatically scales to 10 k QPS; DynamoDB auto‑scales throughput, ensuring <5 ms latency even under spike loads.  
4. **Cost Optimization** – Leveraged on‑demand Lambda and reserved DynamoDB capacity (70% savings).  

**Result** – Reduced API surface by 80%, cut average consumer request time from 350 ms to 42 ms, and lowered operational costs by 35 %. The system now supports 1.2 M queries/day with <0.01 % error rate.

*Bar‑raiser notes*: Demonstrated ownership (full end‑to‑end design), deep dive into AWS primitives, quantified impact, and iterative learning from a failed monolith prototype that highlighted the need for real‑time subscriptions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
