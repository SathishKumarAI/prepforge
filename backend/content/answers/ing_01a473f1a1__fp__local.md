---
qid: ing_01a473f1a1__fp__local
question: 'Explain: Latency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 326
total_tokens: 490
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:08:35-05:00'
sources: []
---

**Latency in machine learning** is the *time* it takes for a trained model to transform an input into an output once deployment begins.  
At its core, latency arises because inference is a **sequential computation pipeline**: data passes through layers, each applying a function (convolution, attention, etc.). The total time equals the sum of per‑layer execution times plus overheads from memory access and parallelization limits.  

Why must it behave this way?  
- **Causality:** Each layer depends on its predecessor; you cannot finish a later stage before finishing an earlier one.  
- **Hardware constraints:** GPU/CPU cores can process only a finite number of operations per clock cycle, so the *critical path* determines latency.  
- **Memory hierarchy:** Cache misses add variable delay; deeper models often exceed L3 cache, forcing slower DRAM accesses.

Latency is thus governed by an optimization problem: minimize the critical‑path length subject to hardware and model accuracy constraints. This links directly to **information theory**—the more information a layer must propagate (e.g., high‑resolution feature maps), the longer its path.

*Non‑obvious insight:*  
Reducing *average* FLOPs does not always lower latency because a single **bottleneck layer** can dominate. Profiling should focus on the *critical path*, not overall compute, to make meaningful speedups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
