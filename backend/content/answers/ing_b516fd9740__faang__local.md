---
qid: ing_b516fd9740__faang__local
question: 'Explain: Clogged stream — Asynchronous computing at Meta: Overview and
  learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 472
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:44:43-05:00'
sources: []
---

**Clarify**  
The interview asks for a high‑level explanation of Meta’s *“Clogged Stream”* project—a system that enables asynchronous computation over large data streams (e.g., user interactions). Clarify: we’re talking about distributed ingestion, back‑pressure handling, and eventual consistency. Confirm assumptions: the stream is partitioned by key, runs on a cluster, and must tolerate high churn.

**Approach**  
1. Outline the core components: producer API, sharding layer, async worker pool, result cache.  
2. Explain how back‑pressure is signaled (e.g., “stream full” flags).  
3. Describe consistency guarantees: at‑least‑once with idempotent workers.

**Depth**  
- **Sharding**: hash key → N partitions; each partition runs its own async queue.  
- **Async Workers**: use non‑blocking I/O, leverage `CompletableFuture`/`async` pipelines to keep CPU bound tasks separate from I/O.  
- **Back‑pressure**: if a worker’s buffer > threshold, producers receive a *retry-after* header; the system uses flow control (e.g., Reactive Streams) to slow downstream.  
- **Fault Tolerance**: workers checkpoint state in RocksDB; on failure they replay from last checkpoint.  
- Complexity: O(1) enqueue, O(log P) for partition lookup, with P = partitions.

**Edge Cases**  
- Skewed keys → hot partitions → throttling.  
- Network partitions causing duplicate events → deduplication via event IDs.  
- Worker crashes during long tasks → graceful rollback and re‑enqueue.

**Optimize & Communicate**  
- Use back‑pressure friendly protocols (gRPC with flow control).  
- Profile CPU vs I/O; shift heavy transforms to GPU if needed.  
- Narrate by walking through a user click: producer → partition → async worker → result cache, highlighting where latency is added and how we mitigate it.  

*Result*: a robust, scalable stream platform that keeps the “clog” from turning into a bottleneck while preserving correctness and observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
