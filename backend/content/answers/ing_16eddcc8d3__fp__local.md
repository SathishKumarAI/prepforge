---
qid: ing_16eddcc8d3__fp__local
question: 'Explain: Push and pull queries — Database Streaming with ksqlDB | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 452
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:54:23-05:00'
sources: []
---

### Why “push” and “pull” even exist

A stream is a continuous sequence of events that never ends.  
If you treat it like a table (a snapshot at a point in time), you **pull**: ask the system *“give me all rows where x > 5.”*  
If you want to react as soon as an event arrives, you **push**: register a callback and let the system *“tell me whenever x changes.”*

In ksqlDB this dichotomy is formalised because of two constraints:

1. **Latency vs. throughput** – Pulling forces a full scan or index lookup; pushing requires keeping state per subscriber.
2. **Determinism vs. streaming semantics** – A push query must guarantee *exactly‑once* delivery, which is only possible if the engine knows the logical end of the input (watermarks) and can replay events on failure.

### How ksqlDB implements it

- **Pull queries** are translated into a single SQL `SELECT …` that runs against the current materialised view. The query planner rewrites the statement to a *stream‑to‑table* join, reading only relevant keys.
- **Push queries** become a continuous process: for each incoming record the engine updates the underlying table and emits a change event downstream. The engine tracks offsets per consumer group; if a consumer dies it can resume from the last committed offset, ensuring no loss or duplication.

### A non‑obvious insight

Most people think “push” means *unbounded* output. In ksqlDB, push queries are **bounded** by the state store’s retention and the watermark strategy. This guarantees that even a long‑running push will eventually terminate its output when the source stream ends or when late data arrives beyond the configured lag window. Thus, push semantics in ksqlDB combine *real‑time reactivity* with *finite, recoverable state*, something pure publish/subscribe systems rarely achieve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
