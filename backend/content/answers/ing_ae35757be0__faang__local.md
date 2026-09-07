---
qid: ing_ae35757be0__faang__local
question: 'Explain: Improving Throughput — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 482
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:28:34-05:00'
sources: []
---

**Clarify**  
We’re asked how a system can *increase throughput* when the limiting factors are **latency**, **throughput itself**, and **bandwidth**. I’ll assume we’re designing an ML inference pipeline (e.g., serving models to users) where latency is critical for user experience, bandwidth is the network capacity between model hosts and clients, and throughput is the number of requests processed per second.

**Approach**  
1. Identify bottlenecks: measure request latencies, network utilisation, CPU/GPU usage.  
2. Prioritise optimisations that trade off latency vs throughput while staying within bandwidth limits.  
3. Apply architectural changes (batching, model parallelism), algorithmic tweaks (quantisation, pruning), and infra upgrades (caching, edge nodes).

**Depth**  
- **Batching inference**: processing 32 requests together amortises GPU startup time, raising throughput from ~10 req/s to ~200 req/s but increases per‑request latency by ~5 ms.  
- **Model quantisation/pruning** reduces model size → lower bandwidth (from 50 MB to 12 MB) and inference time (latency drops 30 %), while keeping accuracy loss <1%.  
- **Edge caching**: keep hot embeddings locally, cutting round‑trip latency from 200 ms to 20 ms; throughput improves because less traffic hits the central server.  
- **Load‑balancing across shards**: horizontal scaling turns a single bottleneck into parallel workers, raising throughput linearly until bandwidth saturates.

**Edge cases**  
- Sudden traffic spikes can overwhelm bandwidth even if CPU is idle → need burst buffers or CDN.  
- Over‑batching may violate real‑time SLAs; must enforce max latency thresholds.  
- Quantisation might degrade accuracy on edge cases; monitor A/B tests.

**Optimize & Communicate**  
Start with a baseline measurement, then iterate: batch size → quantisation → edge cache. Present results as “latency ↓ → throughput ↑” charts, and note that bandwidth is the hard cap—once saturated, no amount of batching will help. Conclude by recommending automated scaling policies that monitor all three metrics in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
