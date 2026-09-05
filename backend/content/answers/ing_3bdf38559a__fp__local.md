---
qid: ing_3bdf38559a__fp__local
question: 'Explain: 2.7 System Design: Design a 1-on-1 Chat System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 399
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:12:04-05:00'
sources: []
---

**Why a 1‑on‑1 chat must be *stateless, event‑driven, and scalable in the same way that a distributed database is designed**  
A private conversation is nothing more than an ordered sequence of messages that two users can read and write. The fundamental problem is to guarantee **consistency (every user sees the same order), durability (no data loss), and low latency**, while handling millions of concurrent pairs.

1. **Event‑driven log** – Treat each message as a log entry in an immutable stream (`topic=userA-userB`). Append‑only storage gives linear scalability, natural fault tolerance (replay logs to recover state), and simplifies conflict resolution: two writes cannot interleave because the stream is ordered by timestamp.

2. **Stateless microservice** – The chat service only reads from or appends to the log; it does not keep per‑conversation state in memory. This allows horizontal scaling, automatic failover, and easy deployment of new versions without downtime.

3. **Real‑time propagation via WebSocket/Server‑Sent Events** – Clients subscribe to their conversation topic. The broker pushes new entries as they appear, guaranteeing sub‑100 ms delivery for active users while keeping idle connections cheap (long‑polling or exponential backoff).

4. **Back‑pressure and rate limiting** – Since the log is append‑only, a malicious user cannot block others; the system merely throttles that client’s writes.

**Non‑obvious insight:** *The ordering guarantee of the event log eliminates the need for distributed locks.* In many designs, two users’ messages are written concurrently to separate tables and later merged, which requires complex conflict resolution. An immutable stream ensures a total order with a single atomic append operation, turning the hardest part of consistency into a trivial database operation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
