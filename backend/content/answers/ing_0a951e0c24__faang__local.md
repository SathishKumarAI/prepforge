---
qid: ing_0a951e0c24__faang__local
question: 'Explain: Performance Metrics — Inference Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 593
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:08:44-05:00'
sources: []
---

**Performance Metrics – Inference Fundamentals**

| Metric | What it measures | Why it matters |
|--------|-----------------|---------------|
| **Latency** | Time from input arrival to output delivery (ms) | User experience & real‑time constraints |
| **Throughput** | Number of inferences per second | Capacity for high‑volume workloads |
| **Accuracy / Error Rate** | % correct predictions vs ground truth | Business value & model quality |
| **Model Size / Parameters** | Memory footprint | Deployment on edge or memory‑constrained devices |
| **Energy Consumption** | Power used per inference (J) | Cost, sustainability, battery life |
| **CPU/GPU Utilization** | % of compute resources busy | Scaling and cost efficiency |

---

### 1. Clarify  
*Goal:* Optimize inference for a production AI service.  
Assumptions to confirm: real‑time SLA (e.g., <50 ms), batch size limits, deployment platform (cloud GPU vs edge TPU), acceptable accuracy drop.

### 2. Approach  
1. Profile baseline model on target hardware → gather latency, throughput, memory, power.  
2. Identify bottlenecks (compute, I/O, memory).  
3. Apply targeted optimizations: quantization, pruning, batch scheduling, engine‑specific kernels.  
4. Re‑profile and iterate until SLA met.

### 3. Depth  
*Latency:* measured per inference; dominated by kernel launch + data transfer. *Throughput:* inversely related to latency but also affected by parallelism.  
Quantization (int8) often halves model size & speeds up inference on SIMD/NNP hardware with <1% accuracy loss. Pruning removes redundant weights, reducing FLOPs. Batch scheduling trades off per‑inference latency for higher throughput; optimal batch size depends on GPU occupancy.

Complexity: profiling O(1), optimization loops O(n) over candidate techniques. Trade‑offs: aggressive quantization may increase error; larger batches hurt latency.

### 4. Edge Cases  
- **Cold start**: first inference incurs cache/memory misses → measure separately.  
- **Variable input shapes**: dynamic batching may fail; use static padding or adaptive kernels.  
- **Model drift**: accuracy degrades over time—monitor error rates continuously.

### 5. Optimize & Communicate  
Explain each optimization’s impact on the metric table, show before/after graphs, and justify trade‑offs (e.g., “10 ms latency reduction at cost of 0.3% accuracy”). Conclude with a deployment checklist: hardware profiling → quantization → batch tuning → monitoring dashboard. This structured narrative demonstrates clear problem framing, systematic approach, technical depth, and practical communication—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
