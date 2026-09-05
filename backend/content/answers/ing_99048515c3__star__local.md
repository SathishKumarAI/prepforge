---
qid: ing_99048515c3__star__local
question: 'Explain: Least-Recently Used (LRU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 361
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:38:35-05:00'
sources: []
---

**Situation:**  
In my last role as a data engineer for an online recommendation system, we were streaming user interaction logs at 10 k events per second. Our feature store had to serve pre‑computed embeddings to the inference layer with sub‑millisecond latency. The in‑memory cache holding these embeddings started thrashing after only 2 GB of RAM because new users kept pushing old ones out.

**Task:**  
I was tasked with redesigning the eviction policy so that the most valuable embeddings stayed cached longer, reducing cache misses from 35% to under 10%, while keeping memory usage within the 4 GB budget.

**Action:**  
I implemented an LRU eviction scheme using a doubly linked list combined with a hash map for O(1) access. Each time an embedding was read or written, I moved its node to the head of the list; when the cache exceeded capacity, I popped nodes from the tail. To avoid contention in our multithreaded environment, I wrapped the structure with a sharded lock system and used atomic counters for hit/miss statistics. I also added a decay factor so that embeddings older than 30 minutes were automatically deprioritized.

**Result:**  
The new LRU cache reduced miss rates from 35% to 8%, cutting inference latency by ~40 ms on average. Memory usage stayed below the 4 GB limit, and the system handled peak loads without spilling to disk. I learned how a simple data structure, when tuned for concurrency and realistic workloads, can dramatically improve real‑time ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
