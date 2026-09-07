---
qid: ing_8c30176af0__faang__local
question: 'Explain: Scaling from one session to hundreds requires its own infrastructure'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 494
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:10:03-05:00'
sources: []
---

**Clarify**  
You’re asking why a single‑session ML model (e.g., a chatbot or recommendation engine) can’t just be “flushed” to serve hundreds of concurrent users without new infrastructure. Key assumptions: *latency constraints*, *throughput requirements*, *model size* and *data consistency*. We also need to confirm whether the system is stateless, what the traffic pattern looks like, and if there are SLAs for response time.

**Approach**  
1. **Profile a single session** – measure CPU/GPU usage, memory footprint, I/O latency.  
2. **Identify bottlenecks** – determine which resource (compute, memory, networking) saturates under load.  
3. **Design horizontal scaling** – add replicas behind a load balancer, use container orchestration (K8s), and consider model caching or distillation.  
4. **Add observability** – metrics, tracing, and autoscaling policies.

**Depth**  
A single session often runs on one GPU with ~1 GB RAM; scaling to hundreds requires multiple GPUs or TPUs, each with its own memory bus. Even if the model is small enough for CPU inference, the per‑request latency will grow because of contention in shared caches and I/O. Statelessness lets you scale horizontally, but stateful features (session embeddings) need a distributed cache (Redis, Memcached). Autoscaling must react to spikes; otherwise requests queue up. Using a model server (TensorFlow Serving, TorchServe) with gRPC gives low‑latency RPCs. Complexity: O(1) per request for inference, but overall system cost grows linearly with replicas; trade‑off between latency and budget.

**Edge Cases**  
- Sudden traffic spikes → cold start of new containers causes latency jitter.  
- Model updates → rolling deployment risks version drift across replicas.  
- Data consistency – stale session data if distributed cache partitions fail.

**Optimize & Communicate**  
I’d first prototype on a single GPU, instrument metrics, then roll out a cluster with Kubernetes autoscaling based on CPU and queue depth. I’d explain that scaling isn’t just “more servers”; it’s re‑architecting for statelessness, caching, and observability to meet SLA targets while controlling cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
