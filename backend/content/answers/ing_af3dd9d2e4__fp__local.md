---
qid: ing_af3dd9d2e4__fp__local
question: 'Explain: 3.3 Neither Concurrent Nor Parallel — Concurrency vs Parallelism
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 419
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:17:13-05:00'
sources: []
---

### 3.3 “Neither Concurrent Nor Parallel” – a deep dive

At its core, the statement addresses *time‑sharing* versus *simultaneous execution*.  
When a single processor is tasked with multiple jobs, it **concurrently** interleaves them: each job receives a slice of CPU time, but no two jobs actually run at the same instant. The system’s goal is to reduce perceived latency by keeping all tasks moving forward.

In contrast, **parallelism** exploits *multiple* processing units (cores, GPUs) so that distinct jobs progress simultaneously. Here the objective shifts from reducing individual wait times to maximizing throughput and minimizing total completion time.

Why must we distinguish them? Because the mathematics of scheduling changes dramatically:

- Concurrent execution is governed by *sequential* resource constraints; it can be modeled as a **queueing system** with service rates λ, μ. The key metric is *latency* (E[W]), which scales inversely with spare capacity.
- Parallel execution turns into an **optimization problem** over the allocation vector \(x\) of jobs to processors, subject to constraints \(\sum x_i = P\). The objective becomes minimizing \(\max_i T_i(x)\), a classic *min‑max* formulation.

A non‑obvious insight: **concurrency is inherently bounded by the law of diminishing returns**. Adding more threads beyond the number of cores never improves latency because context switches introduce overhead; instead, they can *degrade* performance. Parallelism, however, scales linearly up to a point where memory bandwidth or synchronization costs dominate—this is often called the *roofline model*.

In practice, a hybrid strategy that dynamically balances concurrent threads per core with inter‑core parallelism yields the most robust system. Understanding the underlying queueing vs. optimization dichotomy lets engineers predict when adding cores will help versus when they’ll just add noise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
