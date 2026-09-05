---
qid: vq_45bb007b60__fp__local
question: What is locking ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 391
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:32:53-05:00'
sources: []
---

**Locking** is the synchronization primitive that guarantees *mutual exclusion* for a shared resource.  
At its core, a lock solves the problem of *race conditions*: two or more threads may concurrently read‑write a data structure (e.g., a linked list), leading to inconsistent states. By requiring each thread to acquire a lock before accessing the resource and releasing it afterward, we enforce an ordering that preserves invariants.

Why must this work as it does?  
1. **Atomicity**: The acquisition/release operations themselves must be indivisible; otherwise another thread could interleave in between and break exclusivity.  
2. **Progress guarantees**: Locks are designed to prevent *deadlock* (cycles of waiting) and, when fair, to avoid starvation.  
3. **Performance trade‑off**: Holding a lock for too long serializes all access; releasing it too often incurs overhead. Thus, algorithm designers balance critical‑section size with contention.

A deeper principle is that locking implements *sequential consistency*—the view of execution must be as if threads executed in some sequential order consistent with program order. This mirrors the “no‑interference” condition in information‑flow security: a thread’s actions cannot leak or corrupt another’s state.

**Non‑obvious insight:**  
Locks are not merely barriers; they *shape* the algorithm’s data layout. For example, fine‑grained locks on nodes of a concurrent skip list enable parallelism by localizing contention, whereas coarse‑grained locking forces serialization. Thus, the choice and granularity of locks is an optimization dimension equivalent to choosing a cache‑friendly data structure in sequential algorithms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
