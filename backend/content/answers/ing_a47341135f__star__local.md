---
qid: ing_a47341135f__star__local
question: 'Explain: Summary — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 350
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:02:19-05:00'
sources: []
---

**Situation:**  
While leading a recommendation engine for an e‑commerce platform, our real‑time inference latency hit 250 ms on average, pushing the page load time above the acceptable threshold and causing cart abandonment.

**Task:**  
I had to reduce inference latency to under 80 ms without sacrificing model accuracy or increasing infrastructure cost.

**Action:**  
1. Profiled the pipeline with PyTorch Profiler; identified that the embedding lookup (≈ 120 MB of sparse tensors) dominated runtime.  
2. Designed a multi‑level cache:  
   - **Level‑1 in‑process LRU cache** for the top 10,000 most frequent user embeddings, using `torch.nn.functional.embedding` with pre‑allocated CUDA tensors.  
   - **Level‑2 distributed Redis cache** keyed by user ID, storing serialized embedding vectors (float32). Implemented a cache‑aside pattern so that misses hit the GPU memory pool and were asynchronously prefetched for future requests.  
3. Added a cache invalidation policy based on TTL of 12 hours and event‑driven updates when user profiles changed.  
4. Updated the inference service to first consult Level‑1, then Level‑2, falling back to recomputation only if both miss.

**Result:**  
Latency dropped from 250 ms to 65 ms (≈ 74% improvement). Hit rates climbed to 96% overall, reducing GPU usage by ~30% and eliminating the need for a larger cluster. I learned that careful profiling and tiered caching can yield dramatic performance gains in ML systems while keeping costs low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
