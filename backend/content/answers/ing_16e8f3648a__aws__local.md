---
qid: ing_16e8f3648a__aws__local
question: 'Explain: Mistral AI System Design — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 632
total_tokens: 864
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:17:18-05:00'
sources: []
---

**Situation / Task**

When I joined a startup building an LLM‑based service, the CTO asked me to sketch a “Mistral‑style” inference engine that could run 10 B‑parameter models on spot GPU fleets while keeping latency < 200 ms for 99.9% of requests.

**Action**

1. **Requirements & Trade‑offs**  
   *Model size*: 10 B → 16 GB FP16 weights.  
   *Latency target*: 200 ms, *throughput*: 5 QPS per GPU.  
   *Cost target*: < $0.02/req on spot.

2. **Design**  
   - **Compute layer**: Deploy a *model parallel* shard architecture using **AWS Inferentia** (or EC2 G4/G5) and **TensorRT** for kernel fusion.  
   - **Cache layer**: Use **Redis‑Cluster** to store hot embeddings; eviction policy LRU, TTL 1 h.  
   - **Scheduler**: Kubernetes *Kueue* + *Spot‑Instance‑Operator* to auto‑scale across spot fleets and maintain a *capacity pool* of 20 GPUs (redundancy).  
   - **Observability**: CloudWatch metrics for GPU utilisation, latency, cost; set alarms for > 70% utilisation → trigger scale‑up.

3. **Scalability & Availability**  
   *Horizontal scaling*: new pods spin up in < 30 s via Spot Fleet request.  
   *Fault tolerance*: pod restarts on spot eviction; stateless inference layer ensures zero data loss.  

4. **Cost**  
   Baseline: $0.15/hr per G5 GPU → ~$3.60/day. With 20 GPUs and 50% utilization, cost ≈ $1.80/day for 2.8k requests → $0.00064/req (well under target).

**Result**

After launch, latency averaged **175 ms**, throughput hit **6 QPS/GPU**, and the cost per request dropped to **$0.0005**. A/B testing against a reference implementation showed a 40% reduction in CPU usage and a 25% lift in user satisfaction (CSAT ↑ 12 points).  

**Reflection**

I took ownership by validating assumptions with *dry‑run benchmarks* on a single GPU before scaling. The deep dive into TensorRT kernels revealed that 1× speedup was possible by adjusting batch size to 4, which I later implemented. From the failure of an initial monolithic deployment (high tail latency), I learned to separate compute and cache layers early, improving resilience.  

**Leadership Principles Highlighted**

- **Ownership**: Designed end‑to‑end solution and drove it to production.  
- **Dive Deep**: Benchmarked at kernel level; iterated on shard size.  
- **Deliver Results**: Met latency & cost targets with measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
