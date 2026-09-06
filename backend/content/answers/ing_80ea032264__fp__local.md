---
qid: ing_80ea032264__fp__local
question: 'Explain: Memory — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 394
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:39:27-05:00'
sources: []
---

**Why a live‑comment system needs “memory”**

When users stream video, the service must surface every comment within milliseconds while keeping latency low and bandwidth cheap. The *fundamental problem* is that each viewer receives a different subset of comments: those posted just before they join, those already in the buffer, and new ones arriving continuously. A naïve design would replay the entire log for every user—a quadratic blow‑up.

**First‑principle solution**

Treat the comment stream as an *incremental, time‑ordered data structure*.  
1. **Sliding window index**: Keep only the last *T* seconds (e.g., 60 s) of comments in memory. Older entries are archived to disk; they can be replayed later if a user replays the video but never served in real‑time.  
2. **Partition by time bucket**: Each second gets its own lightweight container (hash or array). Insertion is *O(1)*, and pruning older buckets is also *O(1)* per tick.  
3. **Per‑user cursor**: Store the last seen timestamp in a fast key‑value store; when a user reconnects, we fetch only comments newer than that cursor.

This design satisfies the constraints of low latency (constant‑time reads), bounded memory (fixed window size), and scalability (sharding by time bucket).  

**Non‑obvious insight**

The *windowed index* is essentially a **queue with exponential decay**—a specialized form of an LRU cache where eviction is deterministic (by age) rather than frequency. This guarantees that the system never over‑allocates memory to stale data, while still providing perfect real‑time service for fresh comments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
