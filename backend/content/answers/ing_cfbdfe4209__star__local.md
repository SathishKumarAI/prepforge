---
qid: ing_cfbdfe4209__star__local
question: 'Explain: Cache Layers — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 371
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:24:37-05:00'
sources: []
---

**Situation** – In a recent A/B‑testing platform for recommendation models at my previous company, the inference latency on our GPU cluster was averaging 350 ms per request, causing a 12 % drop in click‑through rates because users were waiting too long for personalized suggestions.

**Task** – I was tasked with reducing the average response time to under 150 ms while keeping model accuracy intact and ensuring that updates to the model weights could be rolled out without downtime.

**Action** – First, I profiled the request pipeline and identified that about 85 % of incoming requests were for a small set of popular items. I introduced a two‑layer cache:  
1. A Redis in‑memory store holding precomputed embeddings for those hot items (keyed by item ID).  
2. A local LRU cache on each inference node to hold the most recent 10 k request results, reducing network hops.  
I added a version tag to each cached embedding so that whenever we pushed new weights, the system could invalidate or refresh stale entries via a Pub/Sub channel. I also tuned Redis eviction policies (LRU + TTL) and used async background workers for cache warm‑up.

**Result** – The end‑to‑end latency dropped from 350 ms to 120 ms, boosting click‑through by 7 % in the next campaign cycle. We achieved a 30 % reduction in GPU usage and maintained zero accuracy loss because all cached embeddings were recomputed after each model update. This experience taught me how to balance cache hit rates, consistency guarantees, and infrastructure costs in real‑time ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
