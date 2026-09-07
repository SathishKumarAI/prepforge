---
qid: ing_12aa7ae1d4__faang__local
question: 'Explain: Build the full GPU memory budget for a serving deployment, and
  show how it determines maximum batch size and concurrency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 569
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:26:56-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *GPU‑memory budget* for an inference server that hosts one or more neural models. The goal is to decide how much VRAM each model instance consumes, then use that to compute the maximum batch size and the number of concurrent requests (threads) the system can support. I’ll assume:  
- A single GPU with a known total memory *M*.  
- One or more models, each with static weights *Wᵢ* and per‑request activations *Aᵢ(b)* that grow linearly with batch size *b*.  
- Optional shared buffers (e.g., token embeddings).  

**Approach**  
1. **Profile per‑model memory**: `mem_i(b) = W_i + A_i * b`.  
2. **Add overhead**: CUDA context, runtime libs (~10 MiB), and safety margin (~5–10 %).  
3. **Sum across models** to get total usage for a given batch size.  
4. **Solve** for the largest integer `b` such that `Σ mem_i(b) ≤ M`.  
5. Compute *concurrency* as the number of independent inference threads that can share the same GPU while staying under `M`, typically by dividing remaining memory after allocating one batch among parallel pipelines.

**Depth**  
For a transformer, activations ≈ (2 × hidden_dim × seq_len) per token. If hidden_dim=768, seq_len=128, A≈ 200 MiB/1000 tokens; thus `mem(b)=W + 0.2b`. With M=16 GiB and W=8 GiB, solve:  
`8 GiB + 0.2b ≤ 16 GiB → b ≈ 32 000 tokens`.  
If we want two concurrent pipelines, each gets half the memory: `M/2`, so batch size halves to ~16 000 tokens.

**Edge Cases**  
- *Dynamic shapes*: Re‑compute activations per request; use conservative upper bound.  
- *Multiple GPUs*: Distribute weights evenly, but activations stay local.  
- *Memory fragmentation*: Add a fragmentation buffer (~1–2 %).  

**Optimize & Communicate**  
We can cache intermediate tensors across requests to reduce `Aᵢ(b)`. Profiling with tools like Nsight helps refine W and A. In discussion, I’d explain that the budget is a linear inequality; solving it gives us a clear, reproducible rule for batch sizing and concurrency, ensuring we never exceed VRAM while maximizing throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
