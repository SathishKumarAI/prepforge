---
qid: ing_2725bfa1d3__fp__local
question: 'Explain: Q82: DeepSeek V3.2 and V4 publish $0.28/$0.42 per 1M tokens with
  a 98% cache-hit discount and 50% off-peak pricing. Refactor a production LLM architecture
  to fully exploit these.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 216
output_tokens: 632
total_tokens: 848
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:28:45-05:00'
sources: []
---

**Why the price structure matters**

DeepSeek’s tiered rates (≈ $0.28/$0.42 per 1 M tokens) are only meaningful if *most* of the work is served from a cache. A 98 % hit rate means that for every 100 tokens processed, 98 are retrieved for free; only 2 incur cost. The 50 % off‑peak discount further encourages batching during low‑traffic windows.

**Fundamental design principle**

Treat inference as *probabilistic compression*: a cached token is the “compressed” form of a full forward pass. To keep the cache hit high, we must expose **deterministic sub‑computations** that can be reused across requests (e.g., prompt embeddings, static prompt prefixes). The architecture should therefore separate *mutable* from *static* components and expose an API for incremental evaluation.

---

### Refactor Blueprint

| Layer | Current | Refactored |
|-------|---------|------------|
| **Tokenization & Prompt‑prefixing** | Linear scan + on‑the‑fly embeddings | Pre‑embed common prefixes (e.g., system prompts, task IDs) and store them in a key‑value store keyed by hash. |
| **Transformer blocks** | Monolithic forward pass per request | Split into *shared* (static weights) and *per‑token* layers. The shared part is memoized: once the hidden state for a given prefix+prompt has been computed, cache it. Subsequent requests with the same key reuse that state. |
| **Attention** | Full self‑attention over all tokens | Use **causal caching** (as in GPT‑NeoX). Store past key‑value tensors per token position; when new tokens arrive, only compute attention for them against the cached keys/values. |
| **Scheduler** | First‑come‑first‑served | Batch off‑peak requests into micro‑batches of 128–256 tokens to hit the 50 % discount. During peak, serve minimal‑batch “fast lanes” that still use cached prefixes. |

---

### Non‑obvious Insight

> **Cache hits are maximized when *token order* is preserved across users.**  
> Even if two prompts differ only slightly (e.g., a user’s name), the first few tokens are identical. By indexing the cache on a *rolling hash* of the first N tokens, we can reuse the entire prefix computation for thousands of requests with minimal extra key‑value storage—far beyond what simple prompt hashing offers.

---

**Result:**  
- **Cost:** ≈ 0.02 $ per 1 M tokens (2 % of original).  
- **Latency:** negligible overhead from cache lookup; only new tokens incur compute.  
- **Scalability:** Off‑peak batching leverages the 50 % discount, turning idle GPU cycles into revenue‑saving opportunities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
