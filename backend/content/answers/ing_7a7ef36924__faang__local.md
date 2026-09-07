---
qid: ing_7a7ef36924__faang__local
question: 'Explain: Tech Decisions — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 452
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:29:08-05:00'
sources: []
---

**Clarify**  
We’re asked how Facebook (Meta) and Instagram choose their core technology stack—databases, compute platforms, ML pipelines—to power a global social graph with billions of users. Key assumptions: high‑throughput read/write traffic, low latency, real‑time recommendation, and rapid feature iteration.

**Approach**  
1. **Infrastructure abstraction** – map user‑facing services to microservices + container orchestration.  
2. **Data storage tiers** – relational for transactional data, graph DB for relationships, key‑value stores for caching.  
3. **Compute & ML** – GPU clusters on Kubernetes for training; inference via model serving (TorchServe, Triton).  
4. **Observability & CI/CD** – automated pipelines, feature flags, canary releases.

**Depth**  
- *Graph DB*: Neo4j‑style or custom “Social Graph” service to answer friend/like queries in O(log n).  
- *NoSQL*: Cassandra (wide‑column) for user timelines; Redis for hot caches.  
- *ML Pipelines*: Airflow orchestrates data ingestion → feature store → training → model registry. Models are trained on TPUs/GPU clusters, then exported to ONNX and served via Triton for sub‑ms inference.  
- *Edge delivery*: CDNs (Akamai) cache images/videos; GraphQL reduces overfetching.  

**Edge Cases**  
- Shard failures → automatic failover in Cassandra.  
- Model drift → monitoring metrics, retraining triggers.  
- Data privacy: differential privacy layers in training pipelines.

**Optimize & Communicate**  
Future‑proofing by decoupling services, adopting serverless for bursty workloads, and migrating to a unified data lake (Delta Lake) reduces operational overhead. I’d narrate this as “starting from user intent → microservice request → distributed cache → graph query or SQL read → ML inference → response,” emphasizing latency budgets at each hop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
