---
qid: vq_3c6e16acfd__fp__local
question: WHAT IS A TRANSACTION IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 324
total_tokens: 492
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:31:45-05:00'
sources: []
---

A **transaction** is a *logical unit of work* that the database guarantees to finish as an indivisible whole.  
Think of it as a tiny “mini‑world” inside the engine: all changes made by the statements in the transaction are either committed (made permanent) or rolled back (discarded), never partially applied.  

Why this design?  
1. **Consistency** – The database must remain in a valid state after every operation. If one part of an update succeeds while another fails, the system could violate constraints or leave data corrupted.  
2. **Isolation** – Concurrent transactions should not see each other’s intermediate states; otherwise readers might act on half‑finished writes and produce wrong results.  
3. **Durability** – Once committed, a transaction’s changes must survive crashes. The engine logs the commit so it can replay it after recovery.

These three properties (ACID) stem from *optimization* in concurrent control: they allow the system to schedule many transactions while guaranteeing that each appears as if executed serially.  
A non‑obvious insight: **transactions are not just about safety; they also enable performance**. By batching updates, a transaction reduces I/O overhead and lock contention, allowing the engine to commit once instead of after every statement.

In short, a transaction is the smallest atomic, isolated, consistent, durable chunk of work that SQL guarantees as a single logical operation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
