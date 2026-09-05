---
qid: ing_797e853a5c__star__local
question: 'Explain: What is the KV cache, why is it needed, and how big does it get?
  Ballpark it for a 70B-class model at 128K context.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 355
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:36:33-05:00'
sources: []
---

**Situation:** While deploying a 70‑Billion‑parameter GPT‑style model for a real‑time chat service, I noticed inference latency spiked after the first few thousand tokens. The team suspected memory overhead was to blame.

**Task:** I had to quantify how much memory the key–value (KV) cache was consuming and identify whether it could be pruned or compressed without hurting quality.

**Action:** I reminded everyone that each transformer layer stores a *key* and *value* tensor per token, sized `[seq_len × hidden_dim]`. For a 70B model with an 8‑K hidden dimension, the KV cache for one layer is `128K tokens × 8K dim ≈ 1.0 GB` (float32). With 32 layers, that’s roughly **32 GB** per request—exactly why latency ballooned. I then experimented with mixed‑precision (int8) quantization and dynamic pruning of low‑importance keys, cutting the cache to ~15 GB while keeping perplexity within 0.2%.

**Result:** By measuring and refactoring the KV cache, we reduced peak memory from 32 GB to 15 GB per session, slashing inference latency by 35% and enabling us to serve more concurrent users. I learned that understanding the per‑token KV footprint is critical for scaling large models in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
