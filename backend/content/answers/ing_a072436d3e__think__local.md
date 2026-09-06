---
qid: ing_a072436d3e__think__local
question: 'Explain: Cons of Vertical Scaling — Vertical vs Horizontal Scaling | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 542
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:41:37-05:00'
sources: []
---

We need 5 numbered thoughts, 150-220 words. Use markdown. Provide internalization.**1️⃣ Clarify the scope & assumptions**  
First ask: *What is “vertical scaling” in this context?* – increasing a single machine’s resources (CPU, RAM, SSD). Assume we’re comparing it to horizontal scaling (adding more nodes) for ML workloads (training or inference).

**2️⃣ Adopt a design‑systems mental model**  
Treat the system as a set of trade‑off axes: *cost*, *performance*, *availability*, *complexity*, and *future growth*. Vertical scaling affects each axis differently than horizontal scaling.

**3️⃣ Step‑by‑step reasoning**  

| Axis | Vertical impact | Why it matters for ML |
|------|-----------------|-----------------------|
| Cost | Single powerful VM can be pricey; licensing may scale linearly with resources. | GPU/TPU instances are expensive per core, but cheaper than many small nodes if you need a few high‑end accelerators. |
| Performance | Bottleneck is the single machine’s I/O and memory bandwidth; can become saturated quickly. | Large models require massive parallelism; one node may hit PCIe or NVLink limits. |
| Availability | Single point of failure; downtime kills training/inference pipelines. | Redundancy requires complex failover, not trivial with large GPU setups. |
| Complexity | Easier to manage – one OS, one set of drivers. | Still needs careful tuning (NUMA, CUDA version). |
| Scalability | Limited by hardware limits; eventually you hit the “wall” of what a single box can hold. | ML models keep growing; you’ll hit memory or GPU count ceilings. |

**4️⃣ Common traps to avoid**  
- Assuming “more RAM = more speed” ignores I/O and inter‑GPU communication overhead.  
- Forgetting that licensing (e.g., CUDA, TensorRT) often scales with the number of GPUs in a node.  
- Overlooking that horizontal scaling can be cheaper per FLOP due to commodity hardware.

**5️⃣ Sanity check & verbalize**  
Ask yourself: *If I were to deploy this ML service today, would a single powerful machine give me better cost‑efficiency and reliability than a cluster of smaller nodes?* If not, highlight that vertical scaling is great for prototyping or very small workloads but quickly becomes a bottleneck as data/model size grows. This framing helps explain the cons clearly and keeps the discussion grounded in real system constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
