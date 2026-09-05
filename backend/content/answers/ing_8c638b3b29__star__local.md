---
qid: ing_8c638b3b29__star__local
question: 'Explain: RR (Random Replacement) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 346
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:13:40-05:00'
sources: []
---

**Situation**  
At my last gig I was tasked with optimizing the GPU‑accelerated inference pipeline for a real‑time recommendation system that served millions of requests per day. The model’s input tensors were cached in on‑device memory, but we hit a 15 % slowdown when the cache thrived beyond its 8 GB limit, largely due to poor eviction decisions.

**Task**  
I had to design and implement an efficient cache eviction policy that could run within the tight latency budget (<2 ms per inference) while keeping hit‑rate high enough (≥ 90 %) for our model’s performance targets.

**Action**  
After benchmarking LRU, LFU, ARC, and Random Replacement (RR), I chose RR because its constant‑time O(1) eviction was the only one that met the latency constraint when combined with a simple bitset index. I wrapped the GPU tensor pool in a CUDA kernel that maintained an array of pointers; on cache miss I randomly selected an index using cuRAND, swapped out the tensor, and inserted the new one. I also added a lightweight “warm‑up” phase that prefetched the top‑20 most frequently requested tensors to improve hit‑rate before RR kicked in.

**Result**  
The new policy reduced average inference latency from 3.2 ms to 1.9 ms, a 40 % improvement, while maintaining a 92 % cache hit‑rate. I learned that sometimes the simplest algorithm—when tuned for hardware constraints—beats more complex heuristics in production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
