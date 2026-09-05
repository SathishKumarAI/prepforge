---
qid: ing_1125834a9a__star__local
question: 'Q: What is the KV cache and why does it matter for serving?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 312
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:03:03-05:00'
sources: []
---

**Situation** – At my previous startup we were rolling out a real‑time recommendation engine built on GPT‑4 embeddings. Our latency SLA was 120 ms per request, but the first batch of production traffic hit 350 ms, causing churn in the dashboard.

**Task** – I had to reduce inference time without compromising accuracy or scaling beyond our GPU budget.

**Action** – I introduced a key‑value (KV) cache for transformer attention. Instead of recomputing all cross‑attention scores on every request, we stored the value tensors for the most frequent prompt–context pairs in an LRU cache keyed by the prompt hash. On each inference, if the cache hit, we bypassed the expensive matrix multiplications and reused the cached values. I tuned the cache size to 1 GB per GPU using PyTorch’s `torch.utils.checkpoint` to free memory, and added a small Bloom filter to reduce false lookups.

**Result** – Cache hits covered ~78% of traffic, cutting average latency from 350 ms to 110 ms while keeping BLEU scores unchanged. We also freed up ~4 GB GPU RAM per node, allowing us to deploy on cheaper hardware. The exercise taught me that a well‑designed KV cache is not just a performance trick—it’s essential for meeting real‑world SLAs in AI serving pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
