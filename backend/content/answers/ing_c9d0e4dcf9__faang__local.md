---
qid: ing_c9d0e4dcf9__faang__local
question: 'Explain: Microservices — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 640
total_tokens: 871
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:29:01-05:00'
sources: []
---

**Clarify**  
You’re asking for an overview of how micro‑services fit into a system‑design interview that focuses on machine‑learning workloads—e.g., model serving, feature pipelines, or data preprocessing. I’ll assume you want: *why* we use micro‑services in ML, what typical patterns look like, and key trade‑offs.

**Approach**  
1. Define the core components (data ingestion, feature store, training, inference).  
2. Map each to a service boundary.  
3. Highlight communication protocols, data stores, and scaling concerns.  
4. End with common pitfalls and optimization knobs.

**Depth**  

| Component | Service(s) | Tech choices | Communication |
|-----------|------------|--------------|---------------|
| **Data Ingestion** | `source‑collector`, `ingest‑router` | Kafka / Pulsar; HTTP/GRPC for APIs | Asynchronous streams (Kafka topics) + health‑checks via GRPC |
| **Feature Store** | `feature‑cache`, `feature‑registry` | Redis, RocksDB, or a dedicated feature store like Feast | Cache‑lookup via REST/GRPC; batch updates via Kafka |
| **Training Service** | `trainer‑api`, `job‑scheduler` | TensorFlow/PyTorch + Kubernetes Jobs; MLflow for lineage | Synchronous job submit (REST) + asynchronous status polling (WebSocket) |
| **Inference Service** | `model‑server` (TensorRT, TorchServe), `router` | Containerized model pods behind a service mesh (Istio) | Low‑latency GRPC inference calls; can auto‑scale on CPU/GPU |
| **Metadata & Monitoring** | `meta‑store`, `prometheus‑scraper` | PostgreSQL + PromQL | Metrics via sidecar; tracing via OpenTelemetry |

*Complexity*:  
- **Latency**: Inference GRPC < 5 ms, training jobs O(1–10 min).  
- **Scalability**: Each service scales independently; model servers autoscale by GPU quota.  
- **Fault‑tolerance**: Circuit breakers on the router, retries with exponential backoff.

**Edge Cases**  
- *Model drift*: Need a versioning policy in `feature‑registry`.  
- *Cold starts*: Pre-warm inference pods or use serverless functions (e.g., AWS Lambda).  
- *Data consistency*: Feature store must support eventual consistency vs. strict ACID based on use case.

**Optimize & Communicate**  
Explain that micro‑services enable *polyglot persistence* (Redis for caching, Postgres for metadata), *continuous delivery* (CI/CD pipelines per service), and *observability* (centralized tracing). Trade‑offs include increased operational overhead and network latency; mitigate with a lightweight sidecar pattern. Conclude by stressing that in an interview you’d quantify these trade‑offs: “We expect 3× latency increase but gain 5× deployment velocity.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
