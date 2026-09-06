---
qid: ing_065c8b7003__think__local
question: 'Explain: Performance Under Load — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 637
total_tokens: 827
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:08:40-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *What is “performance under load” exactly?* Assume we’re measuring throughput, latency, and resource usage while traffic increases.  
- *Which ML component?* Pick a typical inference service (e.g., a REST API that serves a trained model).  
- *Environment constraints:* cloud‑native, autoscaling possible, bounded cost.

**2️⃣ Adopt a design framework**  
Use the classic **“System Design Checklist”**:  
1. Define functional & non‑functional requirements (latency < 50 ms, >10k RPS).  
2. Identify bottlenecks (model loading, GPU memory, network I/O).  
3. Choose scaling patterns (horizontal vs vertical), caching, load balancing, and fault tolerance.

**3️⃣ Reason step‑by‑step toward a solution**  

1. **Baseline profiling** – run the model locally, record CPU/GPU usage, batch size impact.  
2. **Horizontal scaling** – containerize the inference service; use a Kubernetes deployment with autoscaling based on queue length or CPU percentile.  
3. **Model serving layer** – employ a dedicated inference engine (TensorFlow Serving, TorchServe) that keeps the model in memory and supports batching.  
4. **Load balancing** – place an ingress controller (NGINX/Envoy) to distribute requests evenly; enable session affinity if needed.  
5. **Caching** – for repeated inputs, cache predictions in Redis or Memcached.  
6. **Batching & pipelining** – group incoming requests into larger batches to amortize GPU startup cost while respecting latency SLA.  
7. **Monitoring & autoscaling rules** – set up Prometheus metrics (latency, RPS, GPU memory) and KEDA triggers.  
8. **Graceful degradation** – when load spikes beyond capacity, fall back to a lightweight model or queue requests.

**4️⃣ Avoid common pitfalls**  

- *Assuming linear scaling:* adding nodes doesn’t always halve latency due to network overhead.  
- *Ignoring batch size effects:* too small batches waste GPU; too large increase latency.  
- *Over‑caching wrong keys:* caching every request can hurt memory and miss cache hits.  
- *Neglecting cold start:* spinning up new pods incurs model load time; use pre‑warm or keep warm replicas.

**5️⃣ Sanity‑check & communicate**  

- **Validate with a stress test** (e.g., k6, Locust) to see if latency stays within SLA as RPS grows.  
- **Explain the trade‑offs:** e.g., “We chose horizontal scaling because GPU memory limits vertical expansion; however, we accept a 5 % increase in network cost.”  
- **Show metrics and diagrams** (latency vs. RPS curve, architecture diagram) to prove that the design meets performance goals under load.

This structured reasoning lets you adapt the same approach to any ML inference system facing scalability challenges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
