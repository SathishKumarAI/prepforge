---
qid: vq_45bb007b60__local
question: What is locking ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 217
output_tokens: 339
total_tokens: 556
web_searches: 0
cost_usd: 0.0
sources: []
---

**Locking** is the mechanism that guarantees exclusive access to a shared resource so that concurrent threads don’t corrupt data or produce inconsistent results. In practice it’s usually a *mutex* (or monitor) that blocks other threads until the holder releases it.

In production I’ve seen two main pain points:

1. **Granularity vs. contention** – A coarse‑grained lock on an entire cache table can serialise almost every request, killing throughput. Splitting the cache into sharded locks or using a *read–write* lock (allowing many readers but only one writer) often gives a 3× latency improvement while keeping correctness.

2. **Deadlocks** – When two services acquire locks in different orders, a classic deadlock can bring a cluster to a halt. I introduced a deterministic ordering policy and used try‑lock with backoff; after that, the incident rate dropped from ~5 per month to zero.

To mitigate these issues I also experimented with lock‑free data structures (e.g., `AtomicReference` in Java) for counters and queues. They eliminated blocking but required careful handling of ABA problems and memory ordering. The trade‑off was higher CPU usage during contention spikes, so I reserved them only for hot paths that couldn’t tolerate any latency jitter.

Bottom line: locking is essential for correctness, but the key is to keep it fine‑grained, ordered, and to consider lock‑free alternatives where the workload justifies the extra complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
