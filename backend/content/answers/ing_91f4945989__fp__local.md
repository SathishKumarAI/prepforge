---
qid: ing_91f4945989__fp__local
question: 'Explain: Bandwidth — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 407
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:15:45-05:00'
sources: []
---

**Bandwidth – A Back‑of‑the‑Envelope Tool for ML System Design**

When you build a production ML pipeline you’re essentially moving *information* from source to sink: raw sensor data → pre‑processing → inference → post‑processing.  
The *bandwidth* of that pipeline is the rate at which bits traverse it, and it must satisfy two hard constraints:

1. **Throughput** – The system’s maximum processing capacity (samples / s).  
2. **Latency budget** – Each sample must finish within a deadline \(T_{\max}\).

Given a model with *M* parameters of 32‑bit precision, the inference cost is roughly  
\(C = M \times F\) FLOPs per forward pass. If each FLOP requires a memory access, the raw data rate needed to keep the GPU busy is  

\[
B_{\text{req}} \approx \frac{C}{T_{\max}}\;\text{bytes/s}.
\]

In practice you add a safety factor \(k \ge 1.5\) for caching and bus contention:

\[
B_{\text{budget}} = k \times B_{\text{req}}.
\]

**Non‑obvious insight:**  
Often designers focus on *model size* (memory footprint), but the dominant bandwidth bottleneck is **per‑sample memory traffic** during inference. Even a tiny model can choke if it reads many high‑dimensional tensors per forward pass. Thus, when pruning or quantizing you should first profile the *access pattern*, not just the parameter count.

This simple equation lets you trade off batch size, precision, and hardware (e.g., NVLink vs PCIe) before writing code, ensuring your ML system meets real‑time constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
