---
qid: ing_fe1a725077__faang__local
question: 'Explain: Measuring Scalability — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 488
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:30:52-05:00'
sources: []
---

**Clarify**  
You’re asking how a system that uses machine‑learning models can grow—handling more data, users, or requests without performance loss. I’ll assume we need to measure *throughput*, *latency*, and *resource utilization* across compute, storage, and network layers while keeping model accuracy stable.

**Approach**  
1. **Define metrics**: queries/sec, inference latency (p99), CPU/GPU usage, memory, disk I/O, network bandwidth.  
2. **Instrumentation**: add Prometheus counters/latency histograms; log model version & feature vector size.  
3. **Load testing**: simulate traffic with Locust or k6, ramping users to stress limits.  
4. **Profiling**: use NVIDIA Nsight for GPU kernels, Intel VTune for CPU hot spots.  
5. **Capacity planning**: extrapolate linear scaling (e.g., 10 k req/s → 100 k req/s) and identify bottlenecks.

**Depth**  
- *Compute*: Inference is often CPU‑bound; batch inference can amortize overhead. Use ONNX Runtime or TensorRT for GPU acceleration, measuring kernel launch latency vs throughput.  
- *Storage*: Feature store read latency dominates if features are large; use SSDs and cache hot keys in Redis.  
- *Network*: Model weight distribution via CDN reduces round‑trip time.  
- Complexity: O(n) inference per request; batch size B yields ~O(1) amortized cost. Trade‑off between batch size (latency ↑) and throughput ↑.

**Edge Cases**  
- Skewed feature distributions causing cache misses.  
- Model drift leading to re‑training spikes.  
- Cold starts of containers or serverless functions affecting latency.

**Optimize & Communicate**  
Propose horizontal scaling with autoscaling policies tied to latency thresholds, multi‑region deployment for geo‑redundancy, and A/B testing new model versions in a shadow mode to measure impact before full rollout. Present findings as dashboards, highlight the key bottleneck, and suggest incremental improvements—e.g., move feature store to SSD, switch inference engine, or increase batch size—to reach target SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
