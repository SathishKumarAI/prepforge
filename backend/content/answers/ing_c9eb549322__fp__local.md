---
qid: ing_c9eb549322__fp__local
question: 'Explain: Throughput — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 374
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:09:54-05:00'
sources: []
---

**Throughput – latency, throughput, bandwidth: the trinity of system design**

At its core a machine‑learning (ML) pipeline is an *information channel* that transforms input data \(x\) into predictions \(y=f(x;\theta)\).  
The **bandwidth** of that channel is simply how much raw information can be moved per unit time, measured in bits/second. It is a physical limit imposed by the network or disk interface.

**Latency** is the *time to first output*. In ML terms it’s the delay from when a request arrives until the first prediction is ready. Latency matters for interactive workloads (e.g., real‑time recommendation). Mathematically, latency \(L\) is the sum of all per‑step delays in the computational graph: data loading + preprocessing + inference + post‑processing.

**Throughput** is how many requests can be processed per unit time when a system is saturated. It’s essentially the reciprocal of *average* service time, but only after the queue has built up. In queueing theory, throughput \(\lambda_{\text{max}} = 1 / E[T]\) where \(E[T]\) is the expected completion time for a batch.

The subtle insight most overlook: **bandwidth and latency are orthogonal; increasing one does not automatically improve the other**. For example, compressing data reduces bandwidth but increases preprocessing latency. Conversely, batching predictions improves throughput (amortizing kernel launch costs) while inflating per‑request latency. Thus, system designers must *jointly* optimize a convex trade‑off surface defined by these three axes, rather than treating them as independent knobs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
