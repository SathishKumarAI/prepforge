---
qid: ing_44bf006cf5__faang__local
question: 'Explain: State — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 528
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:24:13-05:00'
sources: []
---

**Clarify**  
You’re asking for a high‑level design of an ML platform that follows a *client–server* paradigm—clients (e.g., mobile apps, web dashboards) send data or inference requests to a backend server that hosts models and orchestrates training/serving. I’ll assume: 1) stateless inference endpoints; 2) batch training pipelines; 3) multi‑tenant usage; 4) need for low latency (<200 ms) inference.

**Approach**  
1. **Client Layer** – SDKs that serialize inputs, add auth tokens, and perform retry/backoff.  
2. **API Gateway** – rate‑limits, routing, authentication, request validation.  
3. **Inference Service** – stateless microservices behind a load balancer; each runs a container with the model (e.g., TensorFlow Serving).  
4. **Feature Store / Cache** – Redis or DynamoDB for quick lookup of precomputed features.  
5. **Training Orchestrator** – Airflow/MLflow jobs that pull raw data from S3, preprocess via Spark, train on GPUs, register the model in a registry.  
6. **Model Registry & Metadata Service** – store versions, metrics, lineage.  
7. **Observability** – Prometheus + Grafana for latency; ELK stack for logs; MLflow tracking.

**Depth**  
- *Inference*: each request hits a stateless container; scaling via Kubernetes HPA; model hot‑reload via shared volume or sidecar.  
- *Training*: nightly jobs that consume streaming data from Kafka, preprocess with PySpark, train on GCP AI Platform, push to registry.  
- *Security*: JWT auth at API layer, TLS everywhere, IAM for resource access.  

**Edge Cases**  
- Model drift → monitor predictions vs ground truth; auto‑retrain triggers.  
- Out‑of‑range inputs → client validation + server fallback.  
- Zero‑downtime deployment → blue/green or canary releases.

**Optimize & Communicate**  
To reduce inference latency, cache frequent predictions in Redis and use model quantization. For cost, spot GPU instances for training and autoscale inference based on queue length. I’d explain trade‑offs: tighter caching reduces load but increases stale data risk; larger batch sizes improve GPU utilization but raise latency. This structure showcases clear reasoning, depth, and awareness of operational nuances—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
