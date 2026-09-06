---
qid: ing_44ec9059a9__fp__local
question: What Limits Throughput? — Latency vs Throughput vs Bandwidth | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 443
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:32:20-05:00'
sources: []
---

**What limits throughput in a machine‑learning system?**

At its core, throughput is the number of inference or training samples processed per unit time. It is bounded by *how fast* each sample can be transformed from raw data to output, and *how many samples* can be handled concurrently.

1. **Latency bottlenecks**  
   The end‑to‑end latency of a single sample is the sum of (a) *pre‑processing* time, (b) *model execution* time, and (c) *post‑processing* time. If any stage has a hard real‑time requirement, it forces the system to process samples sequentially or in small batches, capping throughput.

2. **Throughput bottlenecks**  
   When the goal is high batch rates, the limiting factor becomes *resource utilization*. GPU memory bandwidth, CPU–GPU data transfer, and disk I/O become critical. The throughput scales with the number of parallel workers only until a contention point (e.g., PCI‑e lanes) saturates.

3. **Bandwidth constraints**  
   Bandwidth is not just network speed; it includes internal bus speeds and storage read/write rates. Even if computation is instant, moving tensors across the system can stall execution.

**Deep principle:** Throughput ≈ *Compute capacity* × *Effective parallelism* ÷ *Critical‑path latency*. The critical path is the longest stage in a pipeline; any reduction there yields disproportionate gains.

**Non‑obvious insight:**  
Batching improves throughput by amortizing fixed costs (e.g., kernel launch overhead) but increases *average* latency. In many ML workloads, the real limit is not raw compute speed but the *statistical efficiency* of learning: larger batches reduce variance in gradient estimates, leading to fewer overall iterations for convergence. Thus, a system that sacrifices per‑sample latency for higher batch throughput can actually finish training faster overall—a subtle trade‑off often overlooked.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
