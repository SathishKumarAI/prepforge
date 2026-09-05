---
qid: ing_414e9370f1__star__local
question: 'Explain: Rest API — System Design was HARD until I Learned these 30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 387
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:39:13-05:00'
sources: []
---

**Situation**  
I was tasked with building a RESTful inference service for our recommendation engine, which had to serve 10 k requests per second while keeping latency under 120 ms. The initial prototype kept stalling; profiling showed that the model loading and request batching were the bottlenecks.

**Task**  
Design an API architecture that could handle high throughput, low latency, and easy scaling for future models, all within a two‑week sprint.

**Action**  
1. **Microservice decomposition** – split inference, data enrichment, and logging into separate containers to isolate CPU‑bound workloads.  
2. **Asynchronous request queue** – used RabbitMQ with a worker pool that preloads the model once per container; this removed redundant loading overhead.  
3. **Batching & GPU sharing** – implemented dynamic batching (max 32 samples) in PyTorch, and leveraged NVIDIA’s TensorRT for fused kernels.  
4. **Cache layer** – added Redis to store hot feature vectors, cutting down DB hits by 70 %.  
5. **Health checks & circuit breaker** – integrated Hystrix‑style patterns to gracefully degrade when GPU memory was exhausted.  
6. **Observability** – exposed Prometheus metrics (queue depth, batch size, latency percentiles) and set up Grafana alerts for SLA violations.

**Result**  
Latency dropped from 350 ms to 95 ms on average, and throughput increased to 12 k req/s with a 99th‑percentile <120 ms. The service now scales horizontally by adding more inference workers without code changes. I learned that micro‑optimizations (GPU batching) are only effective when paired with solid system design: decoupling, caching, and observability turn a “hard” problem into a manageable, scalable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
