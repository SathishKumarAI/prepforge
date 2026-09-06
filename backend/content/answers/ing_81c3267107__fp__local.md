---
qid: ing_81c3267107__fp__local
question: 'Explain: Summary — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 511
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:41:01-05:00'
sources: []
---

### From first principles

When a model is deployed, **time‑to‑answer** (latency) and **volume of data processed per unit time** (throughput) are both consequences of the same resource constraints: CPU/GPU cycles, memory bandwidth, I/O latency, and network hops.  

1. **Latency** is the *expected* end‑to‑end delay for a single inference request.  
   \[
   L = T_{\text{prep}} + T_{\text{compute}} + T_{\text{comm}}
   \]
   Each term scales with the number of parallel workers, but adding more workers reduces \(T_{\text{prep}}\) only if the queue is saturated; otherwise it increases contention.

2. **Throughput** (samples / second) is the *steady‑state* rate at which the system can accept and produce results:
   \[
   \Theta = \frac{N}{L}
   \]
   where \(N\) is batch size. Increasing \(N\) reduces per‑sample overhead but increases memory traffic, so \(\Theta\) rises only up to a point.

3. **Bandwidth** is the *physical* data rate (bytes / second) of the interconnect or storage device that feeds the accelerator. It bounds both latency and throughput:
   \[
   L_{\text{comm}} \ge \frac{\text{payload size}}{\text{bandwidth}}
   \]
   When bandwidth is the bottleneck, adding more parallel workers yields diminishing returns.

#### Deeper insight

All three metrics are manifestations of *resource contention* expressed in different units. Optimizing one without considering the others leads to sub‑optimal designs: e.g., a system tuned for minimal latency (small batches) may underutilize GPU bandwidth, hurting throughput; conversely, a batch‑size‑maximised design can incur unacceptable per‑request delays.

**Non‑obvious takeaway:** *Latency is not merely a function of compute speed; it is fundamentally limited by the communication protocol’s “queueing” behavior.* In practice, a 10 µs network jitter can dominate latency even when compute is negligible. Thus, designing for low latency often requires rethinking data placement and pre‑fetch strategies rather than simply adding more hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
