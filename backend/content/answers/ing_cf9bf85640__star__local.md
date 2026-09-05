---
qid: ing_cf9bf85640__star__local
question: 'Explain: Latency tiers (the core design decision)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 334
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:24:16-05:00'
sources: []
---

**Situation:** At my previous company we launched a real‑time recommendation engine for an e‑commerce platform. The click‑through rate had plateaued at 1.8 % and users complained about lag when adding items to the cart.

**Task:** I was tasked with reducing end‑to‑end latency from the current 250 ms to under 80 ms while keeping accuracy high, so we could push personalized offers within seconds of a user action.

**Action:** I introduced a two‑tier latency architecture. For Tier 1 (≤30 ms) we pre‑computed embeddings on a GPU cluster and cached them in Redis, using TensorRT for inference. Tier 2 handled more complex queries that required fresh data; it ran on CPU nodes with ONNX Runtime, accepting a 20–40 ms delay. We added an adaptive routing layer that sent requests to Tier 1 by default but fell back to Tier 2 when the cache miss rate exceeded 5 %. We also implemented asynchronous logging and micro‑batching for Tier 2 to amortize overhead.

**Result:** Latency dropped from 250 ms to an average of 45 ms, with a 12 % increase in click‑through rate. The two‑tier design also cut GPU usage by 35 %, freeing resources for other models. I learned that balancing compute cost against user experience often requires hybrid serving strategies and careful monitoring of cache hit ratios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
