---
qid: ing_54b9c57def__star__local
question: 'Explain: Problems — Consistenthashing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 345
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:17:30-05:00'
sources: []
---

**Situation:**  
In my last role I was leading the redesign of our recommendation engine’s model-serving layer, which had to scale from a few hundred to over ten thousand concurrent users while keeping latency below 120 ms.

**Task:**  
I needed to distribute incoming inference requests across a fleet of GPU workers without causing sudden re‑routing storms when nodes were added or removed, and to keep cache locality for feature embeddings intact.

**Action:**  
I introduced consistent hashing on the worker identifiers. Each worker got multiple virtual tokens spread around a 32‑bit ring; request keys (user IDs) were hashed to the same ring space. When scaling out, only a small fraction of keys mapped to new workers, so most requests stayed with their previous GPU, preserving in‑memory embedding caches. I also implemented a lease mechanism for “warm‑up” nodes: they joined the ring but reported a low weight until their GPU memory was fully populated, preventing them from absorbing traffic too early. The hash function (Murmur3) and token count (200 per node) were tuned based on our traffic distribution to keep load variance under 5 %.

**Result:**  
After deployment we saw a 35 % reduction in cache misses, a 12 % drop in average inference latency, and a smoother scaling curve—adding or removing nodes changed request routing for only ~2.3 % of traffic. I learned that consistent hashing is not just a theoretical trick; its proper tuning (token count, weight, warm‑up) directly impacts real‑world performance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
