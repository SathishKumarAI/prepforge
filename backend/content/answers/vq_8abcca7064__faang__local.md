---
qid: vq_8abcca7064__faang__local
question: what is broadcast variable?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 400
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:21:18-05:00'
sources: []
---

**Clarify**  
You’re asking about *broadcast variables* in distributed data‑processing frameworks (e.g., Spark). They let you ship a read‑only value to every executor once instead of sending it with each task. I’ll assume we’re dealing with large, immutable lookup tables or config maps that many tasks need.

**Approach**  
Explain the concept, how they’re created, where they live in memory, and why they’re useful for performance and consistency. Then touch on pitfalls (memory pressure, stale data).

**Depth**  
A broadcast variable is a distributed read‑only object cached on each executor’s JVM or local storage. You create it with `sc.broadcast(obj)`; Spark serializes `obj` once, distributes the serialized block to executors, which deserialize lazily when accessed. Tasks then reference the local copy via `broadcast.value`.  
Benefits:  
- **Network savings** – one copy per executor vs. sending data with every task.  
- **Consistency** – all tasks see the same value at runtime.  
Complexity: O(1) lookup after deserialization; memory overhead is proportional to object size times number of executors.

**Edge Cases**  
- *Large broadcasts*: can exhaust executor memory → spill to disk or use `Broadcast` with a custom serializer.  
- *Mutating the source*: broadcasting a mutable reference gives stale data; enforce immutability.  
- *Invalidation*: after an update you must create a new broadcast and unpersist the old one.

**Optimize & Communicate**  
If the broadcast is huge, consider partitioning it or using a distributed cache (e.g., Redis). Always call `unpersist()` when done to free memory. Explain that proper use of broadcasts can reduce shuffle traffic by orders of magnitude, which is why FAANG teams emphasize careful data sharing in big‑data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
