---
qid: ing_2bf7e8506b__fp__local
question: 'Explain: Log-Based CDC — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 447
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:38:11-05:00'
sources: []
---

**Log‑Based CDC (Change Data Capture)**  
The core problem is *obliviously* observing every mutation in a database so that downstream ML pipelines can react in near real time, without imposing heavy locks or materialized views on the source.

1. **Why an append‑only log?**  
   The transaction log already records each change atomically and in order. By treating it as a *linearizable stream*, we inherit its consistency guarantees for free: every consumer sees the same sequence of events, and no update is lost or duplicated unless the consumer explicitly acknowledges receipt.

2. **Why not poll or triggers?**  
   Polling introduces latency and contention; triggers add write overhead and can serialize transactions. The log exists regardless of workload; consuming it requires only reading, a read‑only operation that scales horizontally by partitioning the log (e.g., by shard key).

3. **Deep principle – *exactly‑once semantics via checkpoints*.**  
   Each consumer stores its last processed offset. Because the log is immutable, restarting from an older offset reproduces the same state deterministically. This eliminates the need for idempotent writes or complex deduplication logic in downstream ML models.

4. **Non‑obvious insight:**  
   The log can be *rewritten* (compactified) without breaking CDC. By retaining only the latest state per key, we keep the stream size bounded while still providing a faithful replay of changes for recovery or audit purposes. This is crucial when building long‑running streaming ML services that must survive failures.

In short, log‑based CDC turns the database’s own persistence mechanism into a low‑latency, exactly‑once data feed that aligns naturally with the probabilistic and geometric assumptions underpinning many machine‑learning pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
