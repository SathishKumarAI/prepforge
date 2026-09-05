---
qid: ing_43f382062d__star__local
question: 'Explain: Least Recently Used (LRU) — 7 Cache Eviction Strategies You Should
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 330
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:44:54-05:00'
sources: []
---

**Situation:**  
At my last job I was tasked with optimizing the recommendation engine for a streaming platform that served millions of users daily. The latency of fetching user preferences from Redis dropped to over 300 ms during peak hours because our cache hit rate had fallen below 70%.

**Task:**  
I needed to redesign the caching layer so that frequently accessed items stayed in memory while stale data was purged efficiently, all without increasing RAM usage.

**Action:**  
I implemented an LRU eviction policy using a doubly‑linked list combined with a hash map. Each cache entry stored a pointer to its node; on every read or write I moved the node to the front of the list in O(1) time. When capacity exceeded, I evicted from the tail—exactly the least recently used item. I also added a background thread that monitored hit/miss ratios and dynamically resized the cache size between 512 MB and 2 GB based on load. To avoid contention, I sharded the cache across four instances and used read‑write locks sparingly.

**Result:**  
Cache hit rate jumped from 70% to 92%, cutting average latency to 85 ms during peak periods—a 70% improvement. The system now scales with user growth while keeping memory usage bounded. I learned that a simple, well‑implemented LRU can outperform complex eviction schemes when paired with careful sharding and dynamic sizing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
