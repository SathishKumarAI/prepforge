---
qid: ing_0bcfc39c24__fp__local
question: 'Explain: Cons — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 378
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:31:06-05:00'
sources: []
---

**Why scalability is a hard problem in ML system design**

At its core, an ML pipeline must *translate data into predictions* at speed and cost that match the user’s business objectives.  
The *fundamental constraint* is **information‑to‑computation ratio**: each training example carries finite bits of useful signal, but processing it requires a disproportionate amount of CPU/GPU time, memory bandwidth, and I/O. When you scale up data volume \(N\) or model size \(M\), the computational load grows roughly as \(\Theta(NM)\) for naive algorithms, while the *effective* information gain saturates early due to diminishing returns (the bias–variance trade‑off).  

Because of this mismatch, a system that works for thousands of samples on one GPU quickly breaks when \(N\) reaches millions:  
- **Communication bottlenecks** arise; gradients must be aggregated across nodes, but the bandwidth does not scale linearly with node count.  
- **Memory contention** forces models to shard or compress, introducing non‑trivial synchronization overhead that erodes parallelism gains.  
- **Data locality** becomes critical: reading from distributed storage introduces latency that dominates compute time.

A non‑obvious insight is that *scalability is not just a hardware problem but an algorithmic one*. Techniques such as **model parallelism, gradient sparsification, and adaptive batch sizing** emerge because the underlying principle—maintaining a high information‑to‑computation ratio—is violated when scaling. Thus, system designers must rethink both the math (e.g., stochastic approximation vs. full‑batch) and the architecture to keep the pipeline efficient as data and models grow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
