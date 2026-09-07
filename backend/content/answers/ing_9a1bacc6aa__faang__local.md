---
qid: ing_9a1bacc6aa__faang__local
question: 'Explain: Size-based Eviction — CachesExplained \u00b7 google/guava Wiki
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 504
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:43:09-05:00'
sources: []
---

**Clarify**  
The question asks how *size‑based eviction* works in Guava’s `Cache` (see the “CachesExplained” wiki). I’ll assume we’re talking about an in‑memory cache that removes entries when a configured maximum size is exceeded, and that we want to understand the policy, data structures, and complexity.

**Approach**  
1. Identify the eviction trigger (`maxSize`).  
2. Explain how Guava tracks entry “weight” (size or custom).  
3. Describe the eviction algorithm (access‑based LRU vs weight‑aware).  
4. Mention thread‑safety, concurrency, and cost of maintenance.

**Depth**  
Guava’s `CacheBuilder` lets you set a `maximumSize(long)`; each entry is assigned a *weight* (default 1, or via `weigher`). Internally Guava keeps a concurrent hash map plus a **size‑ordered linked list** (a doubly‑linked list of entries sorted by last access). When an operation (`get`, `put`) occurs, the cache updates the entry’s position to the head (most recently used). If the cumulative weight exceeds `maximumSize`, Guava evicts from the tail—i.e., the least recently used weighted entries—until the size constraint holds. Eviction runs in **O(1)** per operation for moving nodes and O(k) for removing k items, where k is minimal because only a few entries are removed each time.

**Edge Cases**  
- Extremely large single entry > `maximumSize`: Guava evicts it immediately (cache ends up empty).  
- Concurrent updates: the eviction algorithm uses fine‑grained locks (`Striped<Lock>`) so contention stays low.  
- Custom weigher that returns negative or zero values can corrupt size accounting; validation is performed at build time.

**Optimize & Communicate**  
To reduce latency, Guava can batch evictions during background maintenance rather than per put. I’d explain that trade‑off: lower immediate overhead vs slightly stale data. When presenting this to an interviewer, I’d emphasize the clear mapping from configuration (`maximumSize`, `weigher`) to runtime behavior (LRU list + weight sum), and note Guava’s O(1) complexity as a key performance guarantee in large‑scale systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
