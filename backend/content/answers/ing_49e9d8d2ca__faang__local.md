---
qid: ing_49e9d8d2ca__faang__local
question: 'Explain: System design case studies — Ai Engineer Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 473
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:36:28-05:00'
sources: []
---

**Clarify**  
You’re asking how an AI‑engineer interview might assess a candidate’s ability to design large‑scale AI systems—e.g., recommendation engines, NLP pipelines, or image‑recognition services. I’ll assume the interview covers architecture, data flow, latency, scalability, and monitoring, with a focus on production readiness.

**Approach**  
1. **Define the problem & constraints** (input size, throughput, SLA).  
2. **Sketch high‑level layers**: ingestion → preprocessing → feature extraction → model inference → post‑processing → serving.  
3. **Choose technologies per layer** (Kafka + Spark for streaming, TensorFlow Serving or TorchServe for inference, Redis cache for latency).  
4. **Address scaling & fault tolerance** (partitioning, autoscaling, circuit breakers).  
5. **Plan observability** (metrics, logs, alerting) and A/B testing.

**Depth**  
- *Data pipeline*: Use a distributed log (Kafka) to buffer raw events; Spark/Beam for batch feature engineering; store features in Delta Lake or BigQuery.  
- *Model serving*: Wrap the model in a REST/GRPC microservice behind an API gateway; use GPU autoscaling on Kubernetes.  
- *Latency*: Cache hot predictions in Redis; employ edge‑caching (CDN) if needed.  
- *Versioning & rollback*: Store models in MLflow, tag releases, roll back via Canary deployments.  
Complexity: ingestion O(1) per event, inference latency ~10 ms, throughput scalable to millions of requests by adding replicas.

**Edge Cases**  
- Data drift → continuous monitoring and retraining triggers.  
- Model failure → fallback to a simpler rule‑based engine.  
- Cold start for new users → use demographic defaults.

**Optimize & Communicate**  
Explain trade‑offs: batch vs. real‑time feature computation, GPU cost vs. latency. Describe how you’d iterate—start with a minimal viable system, add caching and autoscaling once metrics show bottlenecks. Conclude by highlighting that the design must be modular to accommodate new models or data sources without downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
