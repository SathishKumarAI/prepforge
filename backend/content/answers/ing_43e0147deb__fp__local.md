---
qid: ing_43e0147deb__fp__local
question: 'Explain: Roadmap — SGLang v0.4: Zero-Overhead Batch Scheduler, Cache-Aware
  Load Balancer, Faster Structured Outputs - LMSYS Org'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 425
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:30:23-05:00'
sources: []
---

**Why the new SGLang scheduler matters**

In a language‑model pipeline every *token* is an independent computational request that must be mapped onto GPUs.  
If we treat each token as a separate job, we incur **kernel launch overhead** and waste memory bandwidth on tiny tensors.  
Zero‑overhead batch scheduling eliminates this by **coalescing many token requests into one big kernel launch**.  
Mathematically, the total latency *L* ≈ Σ tᵢ + K·n, where *K* is per‑launch cost and *n* tokens.  By making *K→0*, *L* asymptotically equals Σ tᵢ, the true compute time.  
This directly follows from queueing theory: a server with zero service‑time variance achieves maximum throughput.

**Cache‑aware load balancing**

Each GPU has a finite on‑device cache; if a batch straddles cache boundaries, repeated memory traffic kills speed.  
The scheduler predicts **cache miss probability** using the *size of activations* and *access pattern*, then partitions tokens so that each GPU’s working set fits its cache.  
This is an instance of the classic bin‑packing problem with an additional locality constraint, solvable in near‑linear time via a greedy heuristic.

**Faster structured outputs**

Structured predictions (e.g., parse trees) require dynamic programming over token sequences.  
SGLang implements *dynamic batching* that groups tokens by sub‑graph size and reuses the same BLAS kernels for all of them, reducing the number of small calls by an order of magnitude.  

**Non‑obvious insight**

Most practitioners tune batch sizes heuristically; SGLang shows that **batch size is a function of both compute‑to‑memory ratio and cache capacity**, not just raw throughput.  By aligning these two dimensions, you can double effective GPU utilization without adding hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
