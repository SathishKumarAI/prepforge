---
qid: ing_b0f6c8b216__fp__local
question: 'Explain: Components of Latency — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 423
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:20:42-05:00'
sources: []
---

**Why the trio matters**

In a distributed ML pipeline every operation is a *resource‑bound* step: compute kernels, memory copies, network hops.  
Latency is the *time to finish one job*, throughput the *jobs per second*, bandwidth the *data rate*.  They are not independent; they emerge from the same bottleneck constraints.

1. **Compute latency** – dictated by arithmetic intensity and instruction‑level parallelism (ILP).  If a kernel needs \(N\) FLOPs and the device delivers \(C\) flops/s, latency ≈ \(N/C\).

2. **Memory bandwidth latency** – determined by memory hierarchy depth \(D\) and transfer rate \(B\).  A read of size \(S\) takes roughly \(\frac{S}{B} + D\) because each hop adds a fixed delay.

3. **Network latency** – a combination of propagation delay \(L_p\) and queueing delay \(L_q\), the latter scaling with traffic load.  Throughput \(T = B_{\text{net}} \times (1 - L_q/L_{\text{total}})\).

**Throughput vs Latency trade‑off**

The *law of diminishing returns* applies: pushing latency down by a factor \(k\) often reduces throughput proportionally because resources must be serialized.  The sweet spot is where the product \(L \times T\) (the “area under the curve”) is minimized.

**Non‑obvious insight**

Bandwidth **is not** simply “how fast data moves”; it is *how many concurrent requests a system can sustain without saturating the pipeline*.  In ML, a single high‑bandwidth link may still choke if the upstream compute stalls (stalled pipelines), so designing for bandwidth alone can mask deeper latency issues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
