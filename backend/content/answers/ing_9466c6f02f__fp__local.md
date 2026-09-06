---
qid: ing_9466c6f02f__fp__local
question: 'Explain: GPU Requirements by Model Size — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 496
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:20:48-05:00'
sources: []
---

**GPU Requirements by Model Size – Pricing & Cost Dynamics**

When a transformer grows from 10 M to 1 B parameters, its *computational* demand scales roughly **quadratically** with the number of tokens times the hidden size:  
\(C \approx 2\,\text{(layers)} \times H^2 \times T\).  
Thus, doubling \(H\) (the width) quadruples FLOPs per token. GPUs pay for *flops* and *memory bandwidth*, not just raw cores.

1. **Memory Footprint** – Each parameter needs 4 bytes (FP32) or 2 bytes (FP16). A 500‑M model occupies ~1.5 GB; a 3‑B model swells to ~12 GB, exceeding many consumer GPUs. The *memory ceiling* forces use of larger‑capacity devices (A100 80 GB, H100 80 GB) or sharding across multiple GPUs.

2. **Parallelism & Throughput** – Larger models benefit from more CUDA cores and tensor‑core throughput. A 3‑B model on a single V100 runs ~4× slower than a 10‑M model on the same card, so training cost per epoch rises linearly with GPU count until *communication* (PCIe/InfiniBand) dominates.

3. **Pricing Curve** – Cloud providers price GPUs by hour; higher‑cap devices are 2–3 × more expensive. However, because FLOPs grow quadratically, the *cost per FLOP* actually **decreases** for very large models: you get more compute for each dollar as GPU memory scales.

4. **Non‑Obvious Insight** – The bottleneck shifts from *compute* to *memory bandwidth* at ~1 B parameters. Optimizing kernel launch overhead and using mixed precision (FP16/INT8) can reduce both FLOPs and memory traffic, yielding >30 % cost savings without hurting accuracy.

In short: as model size explodes, you need GPUs with higher memory, but the marginal cost per operation falls because large models saturate GPU capacity. Efficient training thus hinges on balancing memory usage against compute throughput, not merely buying more GPUs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
