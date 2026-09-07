---
qid: ing_2ef7a15aa0__faang__local
question: 'Explain: Stage 1: Single Server (0-10K users) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 538
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:32:35-05:00'
sources: []
---

**Clarify**  
We’re designing a ML‑powered service that starts on one server and must handle up to ~10 k concurrent users. The goal is to keep latency low while scaling horizontally as traffic grows. Key assumptions:  
- Each user request triggers a model inference (no heavy training).  
- Model size fits in RAM (~1–5 GB).  
- 99th‑percentile latency target < 200 ms.  

**Approach**  
1. **Model loading & caching** – load the trained model into memory once per process; use shared memory if multiple processes run on the same box.  
2. **Request queueing** – a thread pool or async event loop (e.g., `asyncio`/`uvicorn`) to keep CPU cores saturated without blocking I/O.  
3. **Horizontal scaling** – expose a stateless HTTP API; use a load balancer (NGINX, HAProxy) and autoscale VM instances based on CPU/latency metrics.  
4. **Observability** – instrument with Prometheus + Grafana to track request rates, latency percentiles, and GPU/CPU utilization.

**Depth**  
- *Memory footprint*: Model in RAM (~3 GB) + per‑request tensors (≈10 KB). With 16 GB RAM we can comfortably serve ~500–1k concurrent requests.  
- *Latency*: Using a single inference thread per core gives O(1) latency; batching small requests into micro‑batches (size 8–32) reduces overhead by ~30 %.  
- *Scalability*: Auto‑scaling policy: spawn new instance when average CPU >70% or 99th percentile latency >150 ms. Each instance runs the same stateless API, so the load balancer distributes traffic evenly.

**Edge Cases**  
- Sudden spike (e.g., flash sale): pre‑warm a pool of standby instances to avoid cold starts.  
- Model updates: use blue‑green deployment; new instances load updated weights while old ones finish in‑flight requests.  
- Resource contention: monitor GPU memory; throttle inference if memory >90% to prevent OOM.

**Optimize & Communicate**  
Explain trade‑offs: batching improves throughput but adds latency—balance batch size against SLA. Show a diagram of single server → load balancer → autoscaled stateless nodes. Highlight that the design keeps the ML model isolated, so scaling is linear with user count, and observability ensures we can react before performance degrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
