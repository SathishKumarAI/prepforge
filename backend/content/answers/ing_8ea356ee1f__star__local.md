---
qid: ing_8ea356ee1f__star__local
question: 'Explain: Estimate the KV-cache footprint for serving a Llama-3-70B-class
  model, and explain what PagedAttention fixes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 439
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:18:06-05:00'
sources: []
---

**Situation**  
At my previous company we were preparing to deploy a new Llama‑3‑70B model for real‑time question answering in a customer support bot. The engineering team needed to size the KV‑cache that would sit on GPU memory while the model processed user queries, and understand how PagedAttention could change our resource budget.

**Task**  
I had to estimate the per‑token KV‑cache footprint for the 70B parameters and then explain how PagedAttention mitigates the memory bottleneck so we could fit the model on a single 80GB A100 GPU without sacrificing latency.

**Action**  
First, I calculated that each token generates key/value tensors of shape (heads × head_dim). With 128 heads and 64‑dim hidden size per head, each KV pair is 8 bytes per element. For a 70B model the effective embedding dimension is ~4,096, giving roughly 2 KB per head per token, or about 256 KB per token total. At a maximum context of 2048 tokens that equates to ≈520 MB just for KV cache—well below GPU memory but still significant when multiplied by batch size and other overhead.

Then I described PagedAttention: it stores KV tensors in large pages (e.g., 16‑kB) and keeps only the most recent page in fast on‑device memory while older pages are paged out to host RAM or NVMe. The algorithm updates pointers so each attention step pulls from the correct page, allowing us to keep the active cache within GPU limits while still supporting long contexts.

**Result**  
Using these calculations, we chose a 4‑kB page size and confirmed that a single A100 could handle up to 8 concurrent queries with ≤30 ms latency. PagedAttention cut our effective KV memory by ~70%, enabling us to deploy the 70B model on existing hardware. I learned that precise per‑token sizing is critical, but clever paging can dramatically reduce footprint without compromising throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
