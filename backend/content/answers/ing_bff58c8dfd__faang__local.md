---
qid: ing_bff58c8dfd__faang__local
question: 'Explain: Meta Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 520
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:08:20-05:00'
sources: []
---

**Clarify**  
You’re asking for an overview of the *“Meta‑Design”* theme that keeps popping up in recent FAANG machine‑learning interviews—questions about how to architect large‑scale ML systems, design trade‑offs, and operational concerns.

**Approach**  
1. List the core sub‑topics (data pipelines, feature stores, model serving, monitoring).  
2. For each, give a canonical design sketch: data flow diagram + key components.  
3. Highlight the decision points that interviewers probe (e.g., batch vs streaming, monolithic vs microservice).

**Depth**  

| Sub‑topic | Typical Design | Key Trade‑offs |
|-----------|----------------|----------------|
| **Data ingestion** | Kafka → Spark/Beam → Lakehouse (DeltaLake) | Latency vs durability; throughput vs consistency |
| **Feature store** | Online (Redis, DynamoDB) + Offline (Parquet on S3) | Feature freshness vs compute cost |
| **Model training** | Distributed PyTorch/TensorFlow on Kubernetes + GPU‑node autoscaling | Training time vs cluster idle cost |
| **Serving** | REST/GRPC microservice + model cache + A/B test gate | Latency vs versioning complexity |
| **Monitoring & observability** | Prometheus + Grafana + custom metrics (latency, drift) | Overhead of instrumentation vs early failure detection |

Complexity: end‑to‑end data pipeline O(n log n); serving latency target 10 ms → sub‑millisecond inference + <1 ms network hop.

**Edge cases**  
- Cold start for new models (use pre‑warm cache).  
- Data skew causing hot spots in feature store.  
- Model drift over time—needs scheduled re‑training or online learning.

**Optimize & Communicate**  
Explain how to iterate: start with a simple batch pipeline, then add streaming and real‑time features as traffic grows. Emphasize that interviewers value clear trade‑off reasoning (e.g., “We choose Kafka because we need at‑least once delivery; if we cared about exactly once we’d add idempotence logic”). End by summarizing the design in a one‑page diagram, reinforcing modularity and observability—key signals for top FAANG teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
