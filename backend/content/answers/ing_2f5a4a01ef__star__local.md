---
qid: ing_2f5a4a01ef__star__local
question: 'Explain: Prefill vs Decode — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 339
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:03:29-05:00'
sources: []
---

**Situation:** While working as a research engineer at a startup developing an AI chatbot, we noticed our inference time was too high for real‑time customer support. The model was a transformer with a standard decoder that processed tokens one by one (decode mode), and each token required a full attention pass over all previous tokens.

**Task:** I needed to cut the latency of generating responses without sacrificing quality or increasing GPU memory beyond our budget.

**Action:** I compared two attention strategies: *prefill* and *decode*. In prefill, we compute the self‑attention for the entire prompt once in parallel, storing the key/value tensors. During generation, each new token only attends to the cached keys/values (a single matrix multiplication), eliminating the full recomputation of earlier tokens. I implemented this caching mechanism in PyTorch, using `torch.nn.functional.multi_head_attention_forward` with `use_cache=True`. I also benchmarked both modes on a 16‑GB GPU and profiled memory usage.

**Result:** Switching to prefill reduced inference latency from ~350 ms per token to ~120 ms, a 66% speedup. Memory consumption stayed within the 8 GB limit because we avoided redundant key/value creation. I learned that careful attention caching can dramatically improve real‑time performance while keeping model accuracy intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
