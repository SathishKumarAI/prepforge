---
qid: ing_62a463b4c0__fp__local
question: 'Explain: LLM Inference, Serving and Cost Optimization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 488
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:35:02-05:00'
sources: []
---

**LLM inference, serving, and cost optimisation**

At its core an inference engine must evaluate a probabilistic language model \(p(\mathbf{y}\mid\mathbf{x})\) for every request \(\mathbf{x}\). The computation is a sequence of tensor‑operations that grow linearly with the number of *tokens* produced. Thus the *cost* of serving a request is proportional to the *token count* and the *model size*.  
To keep latency low we use **batching**: grouping requests so that each GPU kernel processes many tokens in parallel, exploiting data‑parallelism. However batching introduces a trade‑off—larger batches reduce per‑token cost but increase waiting time. Optimal batch sizing emerges from solving a queuing problem where the arrival rate \(\lambda\) and service rate \(\mu\) satisfy \(\rho=\lambda/\mu<1\). The sweet spot is when \(\mathbb{E}[T]\) (expected latency) equals the system’s SLA, which can be derived analytically for M/M/1 queues.

**Serving architecture** further reduces cost by *model pruning* and *quantisation*. Reducing precision from 32‑bit to 8‑bit drops memory traffic, but naïvely applying it harms accuracy. The key insight is **layer‑wise dynamic precision**: early transformer layers are more tolerant of quantisation errors because they learn coarse syntax; later layers capture fine semantics and require higher precision. By allocating bits adaptively we shave ~30 % GPU utilisation without perceptible quality loss.

**Cost optimisation** then boils down to balancing compute, memory, and network bandwidth. The non‑obvious rule is that **pre‑emptive checkpointing**—saving intermediate activations at checkpoints—lets us resume long inference jobs on cheaper spot instances after a preemption, saving cost while keeping latency bounded.

In sum, efficient LLM serving hinges on:  
1. Queue‑theoretic batch sizing.  
2. Layer‑wise precision allocation.  
3. Pre‑emptive checkpointing for elastic compute.  

These principles together reduce inference cost by 40–60 % while meeting real‑time SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
