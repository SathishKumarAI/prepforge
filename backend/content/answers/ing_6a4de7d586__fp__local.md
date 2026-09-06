---
qid: ing_6a4de7d586__fp__local
question: 'Explain: Read more — Latencynumbers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 469
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:50:54-05:00'
sources: []
---

**Latency in Machine‑Learning Pipelines**

At its core, latency is the *time-to‑output* of a computational pipeline: the duration from receiving an input tensor to producing the first usable result.  
Why must it be measured this way? Because downstream systems (autonomous vehicles, real‑time translation) are constrained by end‑to‑end deadlines; any delay that exceeds those bounds violates safety or quality guarantees.

Latency is not a single number but a function of three intertwined resources:

| Resource | Role in Latency | Typical Bottleneck |
|----------|-----------------|--------------------|
| **Compute** (FLOPs, GPU cores) | Executes the mathematical operations defined by the model. | For dense linear layers or transformers with millions of parameters, compute can dominate if memory traffic is saturated. |
| **Memory bandwidth / cache hierarchy** | Transfers data between DRAM, L1/L2 caches and compute units. | Many modern CNNs exhibit *memory‑bound* behavior; a 32‑bit parameter matrix may be fetched multiple times per inference. |
| **Latency‑critical path** (control flow, I/O) | Includes pre‑processing, model loading, and network stack overhead. | In edge devices, the operating system scheduler can introduce jitter that masks the true computational latency. |

From an optimization perspective, minimizing latency is equivalent to *minimizing the expected execution time* of a stochastic process whose state transitions are dictated by data movement and instruction scheduling. This connects directly to **queueing theory**: each memory access is a service request; if the average service rate falls below the arrival rate, queues grow and latency spikes.

A non‑obvious insight often missed is that *model size alone does not predict latency*. A compact transformer can still run slower than a larger CNN if its attention matrix requires many random accesses across GPU memory. Thus, profiling must consider **access patterns** (stride, locality) in addition to FLOPs when comparing architectures for real‑time deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
