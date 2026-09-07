---
qid: ing_e3439a51da__faang__local
question: 'Explain: Support microservices.io — What are microservices?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 386
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:27:42-05:00'
sources: []
---

## Clarify  
The interviewer wants a concise definition of *micro‑services* and why they’re useful in ML pipelines. I’ll confirm that we’re talking about architecture, not specific frameworks.

## Approach  
1. Define the core concept (independent services).  
2. Explain benefits for ML workloads (scalability, modularity).  
3. Mention typical stack (REST/GRPC + containerization).  

## Depth  
Micro‑services are independently deployable units that expose a well‑defined contract (API). Each service owns its own data and business logic, communicating over lightweight protocols. In an ML context we split the pipeline into:  

- **Data ingestion** → batch or streaming services that normalize raw streams.  
- **Feature store** → micro‑service exposing real‑time feature lookups via GRPC.  
- **Model serving** → containerized inference endpoints behind a load balancer, each model version in its own pod.  
- **Monitoring & retraining** → services that aggregate metrics and trigger retrain jobs.

This separation lets teams scale compute for inference independently of training, roll out new models without downtime, and apply security policies per service (e.g., only the inference service can access the GPU pool).

## Edge Cases  
*Monolith‑to‑micro‑service migration*: data consistency issues if services read/write shared DBs. *Latency*: RPC overhead can hurt real‑time inference unless optimized with in‑process calls or edge caches.

## Optimize & Communicate  
Highlight that container orchestration (K8s) and service meshes reduce operational friction. Conclude by noting that micro‑services enable rapid experimentation—new models can be deployed as new services, while legacy ones stay untouched—aligning with ML lifecycle best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
