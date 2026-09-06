---
qid: ing_c015390813__fp__local
question: 'Explain: Store Events for Audit and Replay — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 366
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:51:30-05:00'
sources: []
---

**Why store events before sending them?**  
When a system must *audit* user actions and later *replay* them (e.g., for compliance or debugging), the fundamental requirement is **durability + determinism**. An event that disappears mid‑flight violates causality: downstream services may act on a payload they never actually received, yet the audit log shows it did. The solution is to treat the event as an immutable fact first, then let delivery be a separate, idempotent process.

**The design principle:**  
1. **Write‑once, read‑many** – Persist each event in a durable store (e.g., append‑only log or CDC table).  
2. **Idempotent consumer** – Webhook endpoints must tolerate duplicates; use a unique event ID and a deduplication window.  
3. **Replay via replay queue** – Re‑enqueue events from the log, optionally throttled, to simulate original traffic.

**Geometric insight:**  
Imagine the system as a directed graph: *source → storage node → consumer*. The storage node is the *bottleneck* that guarantees no edge can be traversed without first being anchored. This transforms the problem into a *causal chain* rather than an unreliable message pipe, ensuring audit integrity.

**Non‑obvious trick:**  
Store events in a **versioned columnar format** (e.g., Parquet) and index by timestamp. This lets you replay any arbitrary window efficiently without pulling all data, and the columnar layout compresses high‑cardinality fields, reducing storage cost—something most designs overlook when they treat logs as plain JSON blobs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
