---
qid: ing_90af71b229__faang__local
question: 'Explain: MCP architecture ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 544
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:20:54-05:00'
sources: []
---

## Clarify  
The question asks for a high‑level explanation of the **Machine‑Learning‑Co‑Processor (MCP) architecture** used by **Glean’s MCP server**.  
Assumptions to confirm:  
1. The audience is familiar with distributed ML pipelines but not Glean‑specific internals.  
2. We focus on *architecture* (components, data flow), not implementation details such as code or hyperparameters.

## Approach  
I’ll first restate the goal of MCP – rapid inference for search/query ranking. Then outline its main layers: ingestion → feature store → model runtime → orchestration. Finally describe how Glean’s server stitches these together with scalability and low‑latency guarantees.

## Depth  
Glean’s MCP is a **microservice‑oriented, stateless inference engine** built atop a *feature‑store* (Spark/Delta Lake) that caches pre‑computed embeddings. The flow:  

1. **Query Ingestion** – HTTP/GRPC gateway receives a user query and metadata.  
2. **Feature Lookup** – A fast key‑value store (Redis + RocksDB) serves the latest feature vectors for documents in real time, falling back to batch‑loaded embeddings if missing.  
3. **Model Runtime** – TensorFlow Serving hosts multiple transformer‑based ranking models; a *model selector* chooses the appropriate model based on query type and recency.  
4. **Enrichment & Post‑Processing** – A lightweight Python layer applies rule‑based adjustments (e.g., freshness boost) before returning ranked results.  
5. **Observability & Scaling** – Kubernetes autoscaling + Istio service mesh provide horizontal scaling; Prometheus metrics expose inference latency, cache hit rate, and error rates.

## Edge Cases  
- *Cold start*: feature store miss → fallback to on‑the‑fly embedding generation (slower).  
- *Model drift*: scheduled A/B tests trigger model rollouts without downtime.  
- *High traffic bursts*: circuit breakers prevent cascading failures when downstream services lag.

## Optimize & Communicate  
Improvements: cache warming, incremental feature updates via Kafka streams, and a *model‑agnostic* inference layer to support non‑tensor models (e.g., decision trees). In an interview I’d emphasize that this architecture balances **speed** (≤10 ms latency) with **flexibility** (easy model upgrades), aligning with Glean’s mission of delivering near‑real‑time knowledge search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
