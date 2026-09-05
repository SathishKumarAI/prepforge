---
qid: ing_f609702b22__star__local
question: 'Explain: Attention cost and FlashAttention — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 410
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:40:33-05:00'
sources: []
---

**Situation:**  
I was on a team building a next‑generation conversational LLM that had to generate 32k token context windows. Our baseline transformer with standard scaled dot‑product attention was using ~1.8 GB of VRAM per GPU and took roughly 120 ms per forward pass, which made real‑time inference impossible.

**Task:**  
Reduce the memory footprint and latency enough to hit a target of ≤30 ms per request on a single 24 GB A100 while keeping perplexity within 1.2× the baseline.

**Action:**  
I profiled the attention kernel with Nsight Compute, finding that softmax and gather operations were the biggest bottlenecks. I swapped the vanilla PyTorch implementation for FlashAttention‑v2, which fuses query–key multiplication, scaling, masking, and softmax into a single warp‑level kernel. I also introduced chunked key/value caching to avoid redundant recomputation across multiple decoding steps. After tuning batch size from 4 to 8 and adjusting the dropout schedule, I ran a full benchmark.

**Result:**  
FlashAttention cut per‑pass latency from 120 ms to 32 ms (≈3× faster) and reduced VRAM usage from 1.8 GB to 1.2 GB, freeing up memory for larger batch sizes. The perplexity stayed at 1.05× the baseline. I learned that kernel fusion is often more effective than algorithmic changes alone, and that profiling is essential to pinpoint which part of attention dominates cost in a real deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
