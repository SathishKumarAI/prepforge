---
qid: ing_7f47cbb92e__faang__local
question: 'Explain: What you''re actually expected to know — Backend Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 483
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:40:56-05:00'
sources: []
---

**Clarify**  
> *“What are the core skills a backend engineer should master when working on AI systems?”*  
Assumptions: you’ll build production‑grade ML pipelines, serve models at scale, and collaborate with data scientists.

---

**Approach**  

1. **Foundational CS** – algorithms, data structures, concurrency, distributed systems.  
2. **ML‑specific stack** – Python, PyTorch/TensorFlow, ONNX, inference engines (TensorRT, Triton).  
3. **Data handling** – efficient ingestion (Kafka, Pulsar), storage (Parquet on S3/HDFS), feature stores.  
4. **Model serving & observability** – REST/GRPC APIs, caching, latency budgets, A/B testing, drift monitoring.  
5. **DevOps & reliability** – CI/CD, containerization (Docker/K8s), autoscaling, blue‑green deployments, chaos engineering.

---

**Depth**

- **Compute & Memory Optimization:** Use mixed precision (`fp16`), quantization, and GPU/TPU scheduling to meet SLA latency (<10 ms for recommendation).  
- **Scalability:** Partition data by sharding key; employ stateless services with external state stores (Redis, DynamoDB) to enable horizontal scaling.  
- **Observability:** Log model inputs/outputs, capture confidence scores, use Prometheus + Grafana dashboards; set alerts on drift or performance degradation.  
- **Security & Compliance:** Encrypt data at rest/in‑transit, enforce RBAC, audit model changes via versioned containers.

---

**Edge Cases**

- Model size > available GPU memory → fallback to CPU inference or split across nodes.  
- Non‑deterministic models (dropout) → seed control for reproducibility.  
- Feature drift → automated retraining pipelines triggered by monitoring metrics.

---

**Optimize & Communicate**

Iteratively profile latency hotspots, refactor hot paths into C++ extensions if needed. When presenting to stakeholders, frame trade‑offs: *“We’ll accept 2× inference time to reduce cost by 30% via model pruning.”* This demonstrates balanced judgment and clear articulation—key for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
