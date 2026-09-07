---
qid: ing_5c4dec5827__faang__local
question: 'Explain: Summary — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 484
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:17:51-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how a machine‑learning (ML) system can scale in production—i.e., from training to serving at millions of requests per second. I’ll assume we’re dealing with supervised models, a typical data pipeline, and a need for low latency inference.

**Approach**  
1. **Data ingestion & preprocessing** – distributed stream/ batch pipelines (Kafka + Spark).  
2. **Model training** – use parameter‑server or Horovod on GPU clusters; model sharding or layer‑wise parallelism.  
3. **Model serving** – containerized microservices, load‑balanced behind a global CDN.  
4. **Caching & batching** – cache frequent predictions, batch similar requests to amortize GPU overhead.  
5. **Monitoring & rollback** – metrics (latency, accuracy drift) and canary releases.

**Depth**  
- *Training*: data sharding across workers; model checkpointing in S3/Glacier for fault tolerance. Complexity ≈ O(N/K) where N = samples, K = workers.  
- *Serving*: each request hits an inference container with a lightweight runtime (e.g., TensorRT). Throughput scales linearly until GPU saturation; batching reduces per‑sample latency by ~2×.  
- *Caching*: LRU or frequency‑based cache; TTL ensures stale predictions don’t linger.  
- *Observability*: Prometheus metrics, distributed tracing (Jaeger) to pinpoint bottlenecks.

**Edge Cases**  
- Skewed data leading to under‑utilized workers → dynamic resharding.  
- Model drift causing accuracy drop → trigger retraining pipeline automatically.  
- Network partitions: fallback to a stale model version.

**Optimize & Communicate**  
To push latency below 10 ms, I’d offload inference to edge GPUs (NVIDIA Jetson) for latency‑critical use cases and employ quantization or pruning to reduce model size. I would present this as a layered architecture diagram, then walk through each layer’s scaling lever, emphasizing the trade‑off between throughput and freshness of predictions. This narrative showcases structured thinking, depth in system design, and awareness of real‑world constraints—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
