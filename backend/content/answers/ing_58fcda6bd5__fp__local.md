---
qid: ing_58fcda6bd5__fp__local
question: What is chunked prefill and what scheduling problem does it fix?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 494
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:13:27-05:00'
sources: []
---

**Chunked prefill** is a technique that reorganises the way large language models (LLMs) generate tokens during *inference* so that the initial “prefill” stage (computing all attention weights for a new prompt) can be parallelised across multiple GPUs or cores without incurring the usual linear‑time bottleneck.

---

### Why it exists  
When a model starts generating, every token in the prompt must be processed through *self‑attention* to initialise hidden states. In a naïve implementation this step is serial: each token’s attention depends on all preceding tokens, so you can’t overlap work across devices. The resulting latency grows linearly with prompt length and becomes the dominant cost for long inputs.

### How it works  
Chunked prefill breaks the prompt into *chunks* (e.g., 64‑token blocks). For each chunk, we compute its attention **in parallel** with the previous chunk’s computation, using a *look‑ahead* schedule that respects causality. The trick is to use *prefix‑sum* style dependency tracking: while GPU A works on chunk k+1, GPU B can finish the matrix multiplication for chunk k, and once both are ready we fuse them into the final state.

### Scheduling problem solved  
This method converts a **sequential** scheduling problem (each token depends on all earlier tokens) into an *overlapped* one, effectively turning a depth‑first dependency graph into a breadth‑first pipeline. The result is a **sub‑linear** scaling of latency with prompt length and a significant reduction in memory pressure because intermediate activations can be discarded sooner.

### Non‑obvious insight  
The key observation that most people miss is that *attention* is not a pure “pairwise” operation; it is essentially a **matrix multiplication** whose dependencies are only on the *row index*. By treating each row (token) as an independent task and carefully ordering the row‑level multiplications, we can exploit standard GPU parallelism even though the underlying algorithm remains self‑attention. This re‑interpretation turns a seemingly serial kernel into a highly parallel one without changing the model’s mathematical behaviour.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
