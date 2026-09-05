---
qid: ing_0b1dcfabb0__fp__local
question: 'Explain: Zero-Overhead Batch Scheduler — SGLang v0.4: Zero-Overhead Batch
  Scheduler, Cache-Aware Load Balancer, Faster Structured Outputs - LMSYS Org'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 323
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:29:48-05:00'
sources: []
---

**Zero‑Overhead Batch Scheduler (SGLang v0.4)**  
At its core the scheduler solves a *resource allocation* problem: how to pack a stream of inference requests into GPU batches so that latency is minimized while throughput stays high. Traditional schedulers treat every request as an atomic unit, incurring context‑switch costs and idle GPU time. The “zero‑overhead” idea starts from the observation that a batch’s total work is simply the *sum* of its constituent kernels; if we can predict this sum accurately we need not materialise each kernel separately.

SGLang implements a lightweight **dynamic programming** routine that, given a set of pending requests, selects a subset whose cumulative workload fits within the GPU’s memory budget and whose expected execution time is minimal. Crucially, it *reuses* compiled kernels across batches, so no recompilation or data movement occurs between successive runs—hence “zero‑overhead”.

The scheduler is **cache‑aware**: it tracks tensor residency in L2/L3 caches and prefers batching requests that share common sub‑tensors, reducing memory traffic. This mirrors the *information bottleneck* principle—only the most informative pieces of data should be moved.

A non‑obvious insight: by treating the batch selection problem as a **knapsack with side constraints**, we can guarantee near‑optimal latency even under highly variable request sizes, something naïve round‑robin schedulers miss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
