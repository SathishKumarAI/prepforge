---
qid: ing_d61c77d7be__faang__local
question: 'Explain: Scaling from TSP to LPU — The Architecture of Groq''s LPU - by
  Abhinav Upadhyay'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 489
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:57:10-05:00'
sources: []
---

**Clarify**  
You’re asking how Groq’s “LPU” (Large‑Scale Processing Unit) evolved from a TSP‑style design and what its architecture looks like. I’ll assume you want an overview of the key architectural changes that enable large‑scale parallelism, not a deep dive into silicon layout.

**Approach**  
1. Summarize the TSP baseline: tightly‑coupled matrix‑multiply cores with shared memory.  
2. Highlight the scaling drivers: higher throughput, lower latency, and energy efficiency for ML workloads.  
3. Outline the LPU’s core blocks (compute tiles, on‑chip buffer hierarchy, interconnect).  
4. Touch on software stack implications.

**Depth**  
- **TSP Core** – 16×16 MAC arrays, a single shared SRAM, 2 GHz clock, ~1 TFLOP/s per chip.  
- **Scaling to LPU** –  
  - *Tile‑based modularity*: 256 identical compute tiles (each with its own small SRAM).  
  - *Hierarchical memory*: L0 tile SRAM → L1 inter‑tile buffer → L2 global buffer, reducing off‑chip traffic.  
  - *Mesh‑plus‑ring network*: Direct‑connect mesh for local communication + a high‑bandwidth ring for global broadcasts.  
  - *Clock gating & voltage scaling* per tile to keep power below 200 W at >10 TFLOP/s.  
- **Software** – Groq’s “Turing” compiler maps tensor ops onto the mesh, auto‑tuning tiling and pipelining; no explicit CUDA-like programming needed.

**Edge Cases**  
- Workloads with irregular sparsity may underutilize tiles.  
- Extremely small models can suffer from tile overhead.  
- Memory capacity limits for very large embeddings need off‑chip support.

**Optimize & Communicate**  
Explain that the LPU trades a single massive memory bank for many local banks, drastically cutting data movement—critical for ML. Mention that the mesh interconnect scales linearly with tiles, keeping latency low while enabling >10× throughput versus TSP. Conclude by noting how this architecture aligns with modern transformer workloads, offering predictable performance and energy efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
