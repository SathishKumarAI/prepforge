---
qid: ing_da17115209__faang__local
question: 'Explain: System Design Interview Angle — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 533
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:06:05-05:00'
sources: []
---

**Clarify**  
The interview asks how you’d explain *architecture patterns* when designing an AI‑powered system (e.g., recommendation, NLP inference). I’ll assume we’re building a scalable, low‑latency service that ingests data, trains models offline, and serves predictions online. Key assumptions:  

- Multiple model versions may coexist.  
- Latency < 50 ms for inference.  
- Training jobs run nightly on a GPU cluster.  

**Approach**  
1. Map the high‑level flow: ingestion → preprocessing → training → model registry → serving.  
2. Pick patterns that address each step’s constraints (e.g., *Microservice* for modularity, *CQRS* for separating read/write).  
3. Discuss trade‑offs in consistency vs. availability for model updates.

**Depth**  

| Pattern | Use case | Trade‑offs |
|---------|----------|------------|
| **Microservices + API Gateway** | Isolate training, inference, and data pipelines. | More operational overhead; network latency. |
| **CQRS + Event Sourcing** | Separate write (data ingestion) from read (feature store). | Complexity in event replay; eventual consistency. |
| **Model Registry + Feature Store** | Central repository for artifacts & features. | Requires strong versioning; storage cost. |
| **Canary Deployment / A/B Testing** | Roll out new models safely. | Need monitoring, rollback logic. |
| **Circuit Breaker / Bulkhead Isolation** | Prevent a failing model from cascading. | Adds latency if circuit opens. |

Explain that we’d use a *pipeline orchestrator* (e.g., Airflow) for training, store artifacts in S3/GCS, and serve via a *model server* (TensorFlow Serving or TorchServe) behind an API gateway with rate‑limiting.

**Edge Cases**  
- Sudden traffic spike → auto‑scale inference nodes.  
- Model drift → trigger retraining automatically.  
- Feature schema changes → backward compatibility in the feature store.

**Optimize & Communicate**  
I’d suggest a *blue‑green* deployment for models, use *model compression* (quantization) to reduce latency, and cache frequent predictions with Redis. I’d narrate: “We first isolate concerns with microservices, then ensure data consistency via CQRS, finally protect the system’s resilience with circuit breakers.” This demonstrates structured thinking, clear communication, and depth—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
