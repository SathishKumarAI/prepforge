---
qid: ing_0a9b74712e__fp__local
question: 'Explain: Interview Structure — Together AI Interview Guide 2026: Open-Model
  Inference, CUDA Kernels, Speculative Decoding, and Enterprise AI \u2013 techinterview'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 584
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:28:09-05:00'
sources: []
---

**Interview Structure – *Together AI Interview Guide 2026***  
*(Open‑Model Inference | CUDA Kernels | Speculative Decoding | Enterprise AI)*  

1. **Problem Framing (5 min)** – Candidates articulate what “AI inference” means in a production setting: latency budgets, throughput, and reliability. This tests their *optimization mindset*: can they balance cost (GPU hours) against quality (accuracy)?  
2. **Open‑Model Inference (10 min)** – We ask how to run an LLM on commodity GPUs versus specialized hardware. Candidates must reason about *model parallelism*, *quantization*, and the *trade‑off* between *model size* and *inference latency*. A key insight: *layer‑wise sparsity* can reduce FLOPs without harming perplexity, but only if sparsity patterns are *hardware‑aware*.  
3. **CUDA Kernel Design (15 min)** – We present a simplified transformer block and ask the candidate to sketch a custom CUDA kernel. They should show how to fuse matrix‑multiply and softmax, minimize global‑memory traffic, and use shared memory for attention keys/values. The deeper principle: *compute‑to‑memory ratio* dictates performance; kernels that keep data in registers achieve 3–5× speedups on modern GPUs.  
4. **Speculative Decoding (10 min)** – Candidates explain how to generate tokens faster by predicting multiple next tokens and rolling back if the top choice is wrong. This leverages *probability mass concentration*—most probability mass lies in a few tokens, so exploring a speculative branch often yields the same result with fewer kernel launches.  
5. **Enterprise AI (10 min)** – We discuss scaling to thousands of requests: load‑balancing across GPU clusters, model versioning, and monitoring. The guiding principle is *service‑level objectives (SLOs)*; inference pipelines must be *stateless* and *idempotent* so that retries don’t corrupt user data.  
6. **Wrap‑up & Reflection (5 min)** – Candidates summarize trade‑offs they’d prioritize for a new product launch, highlighting any overlooked constraints (e.g., GPU memory fragmentation or power‑draw limits).  

**Non‑obvious insight:** In speculative decoding, the *branching factor* should be tuned not to the token probability distribution but to the *kernel launch overhead*. On current GPUs, launching a kernel costs ~10 µs; if you speculate 4 tokens, you pay 40 µs. If your base inference latency is <50 µs, speculative decoding can actually *hurt* overall throughput—an insight many overlook when proposing “faster” generation strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
