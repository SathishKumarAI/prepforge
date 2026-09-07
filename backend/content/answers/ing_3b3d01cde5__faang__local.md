---
qid: ing_3b3d01cde5__faang__local
question: 'Explain: Reducing Latency — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 432
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:02:06-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how latency, throughput, and bandwidth trade off in a ML inference system (e.g., serving a model). Assume: real‑time request/response, fixed compute budget, and network constraints.

**2️⃣ Approach**  
- Define each metric.  
- Map them to architectural levers (caching, batching, parallelism, compression).  
- Quantify trade‑offs with simple equations or diagrams.  

**3️⃣ Depth**  
| Metric | Definition | Levers |
|--------|------------|--------|
| **Latency** | Time from request arrival to response sent | Model size, inference engine speed, I/O wait, batching factor (≤1 reduces latency) |
| **Throughput** | Requests processed per second | Batch size >1, pipelining, multiple GPUs/TPUs, load‑balancing |
| **Bandwidth** | Data moved per unit time | Payload compression, quantization, feature pruning |

Trade‑off:  
- Increasing batch size boosts throughput but adds latency (latency ≈ *t_batch* = *c + b·n*, where *c* is compute per request, *b* overhead).  
- Compressing features cuts bandwidth but may add CPU cycles.  
- Parallel pipelines can overlap I/O and compute, reducing effective latency without hurting throughput.

**4️⃣ Edge Cases**  
- **Burst traffic**: batching delays unacceptable → fallback to single‑request mode.  
- **Model updates**: cache invalidation may temporarily raise latency.  
- **Hardware failures**: degraded throughput; need graceful degradation.

**5️⃣ Optimize & Communicate**  
Present a decision matrix: *If SLA requires <50 ms, keep batch size 1 and use model pruning.*  
Explain that for high‑volume analytics where latency tolerance is >200 ms, larger batches (e.g., 64) maximize GPU utilization.  
Conclude by noting continuous profiling to adjust the levers as traffic patterns evolve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
