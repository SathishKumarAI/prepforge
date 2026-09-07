---
qid: ing_dec7efa69a__faang__local
question: 'Explain: API Design — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 447
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:17:16-05:00'
sources: []
---

**Clarify**  
We’re asked to design an *API* that exposes machine‑learning (ML) resources (models, datasets, jobs). Clarify scope: is it internal (in‑house service) or public? What workloads—batch inference vs real‑time? Assume stateless REST/GRPC endpoints with authentication and versioning.  

**Approach**  
1. **Resource model** – `Model`, `Dataset`, `TrainingJob`, `InferenceEndpoint`.  
2. **Endpoints** – CRUD for each resource, plus actions (`train`, `deploy`, `predict`).  
3. **Authentication/Authorization** – OAuth2 + RBAC per project.  
4. **Versioning & backward compatibility** – URL path or header; immutable resources (e.g., model artifacts).  
5. **Observability** – OpenTelemetry traces, Prometheus metrics (`latency`, `throughput`).  

**Depth**  
- Use *GRPC* for low‑latency inference (`Predict`) and *REST* for management ops.  
- Store artifacts in a content‑addressable store (S3/Blob) referenced by a UUID; metadata in PostgreSQL.  
- Queue training jobs via Kafka → worker pool; expose job status via long‑poll or webhook.  
- Rate limit per user/project, circuit breakers for downstream ML services.  
- Complexity: CRUD O(1), training job enqueue O(log n).  

**Edge Cases**  
- Model drift: provide `/evaluate` endpoint.  
- Deprecation of model format → serve fallback wrapper.  
- Concurrent deployment updates → optimistic locking on version field.  

**Optimize & Communicate**  
Iterate with A/B‑testing latency metrics; cache hot models in Redis to shave inference time. Explain trade‑offs (GRPC vs REST, synchronous vs asynchronous training) and how the design scales: horizontal scaling of workers, sharding by project ID, auto‑scaling for inference endpoints. This shows structured reasoning, technical depth, and clear communication expected from FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
