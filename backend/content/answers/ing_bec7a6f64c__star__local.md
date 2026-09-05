---
qid: ing_bec7a6f64c__star__local
question: 'Explain: Implement a thread-safe batching logger: many producer threads
  call `log(msg)`, and a background thread flushes batches of up to 100 messages every
  second or when full, whichever comes first.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 374
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:52:29-05:00'
sources: []
---

**Situation:** In my previous role as a backend engineer at a fintech startup, our real‑time transaction system produced millions of log entries per minute. The existing single‑writer logger caused contention and dropped messages during traffic spikes.

**Task:** I was tasked with designing a thread‑safe batching logger that would allow thousands of producer threads to enqueue logs efficiently while a dedicated background worker flushed batches of up to 100 messages every second or immediately when the batch filled, whichever came first. The goal was to reduce lock contention and guarantee no loss of log data.

**Action:** I used a `ConcurrentLinkedQueue` for the message buffer and a `ReentrantLock` with a `Condition` to signal the worker thread. Producers called `log(msg)` which simply performed `queue.offer(msg)`; this operation is non‑blocking and lock‑free. The background thread ran in a loop: it waited on the condition or timed out after one second, then atomically swapped the queue reference using `AtomicReferenceFieldUpdater` to avoid holding the lock while flushing. It serialized up to 100 messages to disk via an efficient bulk I/O call (`Files.write(Path, List<ByteBuffer>, StandardOpenOption.APPEND)`). If the queue reached capacity before the timeout, producers signaled the condition to wake the worker immediately.

**Result:** The new logger reduced average log latency from ~120 ms to <10 ms under peak load and eliminated lost entries during a 30× traffic surge. We saw a 40% drop in CPU usage on the logging subsystem, freeing resources for core transaction processing. This experience taught me how lightweight lock‑free data structures combined with timely signaling can build robust, high‑throughput services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
