---
qid: ing_9342e160cc__star__local
question: Why Scale by √d_k? — Llm Internals
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 354
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:27:10-05:00'
sources: []
---

**Situation**  
During a sprint at my previous internship, we were refactoring the transformer’s self‑attention module for a custom language model that had to run on edge devices with limited memory. The original implementation used dot‑product attention without any scaling factor, and our profiling showed huge variance in the softmax outputs, causing unstable gradients during training.

**Task**  
My goal was to stabilize training while keeping the computation lightweight enough for deployment on a 512‑core DSP. I needed a mathematically sound scaling scheme that wouldn’t introduce extra parameters or significant runtime overhead.

**Action**  
I recalled the derivation from “Attention Is All You Need”: when computing \(QK^T\), each dot product is a sum of \(d_k\) terms, and by central limit theorem its variance grows with \(d_k\). To keep the softmax inputs bounded, we divide by \(\sqrt{d_k}\). I added this scaling to our custom kernel, replacing the naive multiplication with a fused multiply‑add that incorporated the reciprocal of \(\sqrt{d_k}\) precomputed once per layer. This change required only minor code edits and no extra memory.

**Result**  
After training, loss curves flattened within the first epoch instead of oscillating wildly. Validation perplexity dropped from 35 to 28 on our dev set—an 18% relative improvement—and we achieved a 12 ms inference latency per token, meeting the edge‑device target. I learned that a small mathematical tweak can yield huge practical benefits in stability and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
