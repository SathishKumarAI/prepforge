---
qid: ing_64e65634dd__faang__local
question: 'Explain: Step 4 — Scaling Websites for Millions of Users'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 475
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:38:49-05:00'
sources: []
---

**Clarify**  
We’re asked how a production ML‑enabled web service scales to millions of users. I’ll assume: (1) stateless request handling, (2) distributed model inference, (3) real‑time latency < 200 ms, and (4) fault tolerance & cost control.

**Approach**  
1. **Horizontal scaling** of stateless API servers behind a load balancer.  
2. **Model serving** with a model cache/edge gateway to avoid reloading weights per request.  
3. **Asynchronous batch inference** for non‑critical predictions.  
4. **Observability & autoscaling triggers** (latency, error rate).  
5. **Cost control** via spot instances and serverless bursts.

**Depth**  
- *Stateless API*: Docker/K8s pods, health checks, rolling updates; autoscale based on CPU/queue depth.  
- *Model cache*: Use NVIDIA TensorRT or ONNX Runtime with GPU‑attached memory (e.g., 32 GB) to keep the model resident. Serve via gRPC for low overhead.  
- *Batching*: Queue non‑urgent requests, aggregate every 5 ms, and run a single forward pass—reduces GPU utilization by ~30%.  
- *Observability*: Prometheus metrics (latency percentiles), Grafana dashboards; trigger scale‑up when p99 latency > 150 ms.  
- *Cost*: Spot instances for bulk inference, fallback to on‑demand during spikes; use Lambda or Cloud Run for bursty traffic.

**Edge Cases**  
- Sudden flash crowds → queue backpressure, graceful degradation (return cached predictions).  
- Model drift → A/B rollout of new weights, monitor accuracy metrics.  
- Data center outages → multi‑region replication, read replicas for logs.

**Optimize & Communicate**  
Explain trade‑offs: higher GPU memory reduces reload cost but increases idle spend; batching improves throughput but adds latency—balance based on SLA. Use clear diagrams in a live interview to show request flow and autoscaling logic, emphasizing that the goal is *predictable* latency at scale with minimal operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
