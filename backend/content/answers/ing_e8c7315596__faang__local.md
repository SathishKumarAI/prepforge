---
qid: ing_e8c7315596__faang__local
question: 'Explain: Inbox/Outbox pattern — Inboxoutbox'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 444
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:40:41-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of the *Inbox‑Outbox* (or *Inbox/Outbox*) pattern used in event‑driven architectures. Confirm that they’re referring to the transactional pattern for reliable message delivery between services, not just a mailbox metaphor.

**Approach**  
1. Define “inbox” and “outbox” tables.  
2. Explain how writes are atomically recorded in both domain data and outbox.  
3. Show the worker that reads from the outbox, publishes to Kafka/AMQP, then marks rows as sent.  
4. Mention idempotency and exactly‑once semantics.

**Depth**  
- **Inbox**: stores incoming events (id, type, payload) so a service can process each message once; a consumer reads, processes, then deletes or flags it.  
- **Outbox**: on every state change, the application writes a domain record *and* an outbox entry in a single transaction. A background worker polls the outbox, publishes to the broker, and marks the row as `sent`. If the worker crashes before marking, the message will be retried; if it succeeds but the publish fails, the transaction is rolled back.  
- Guarantees *at least once* delivery with deduplication via unique event IDs, achieving *exactly‑once* semantics at the application level.  
- Complexity: O(1) per write plus periodic worker scans; latency added by the outbox table but negligible for most workloads.

**Edge Cases**  
- Outbox growth → use TTL or compaction.  
- Duplicate processing if consumer crashes before marking `sent`.  
- Large payloads may bloat DB; consider compression or external storage.

**Optimize & Communicate**  
Explain that the pattern removes the need for distributed transactions, scales horizontally, and is broker‑agnostic. Highlight trade‑offs: extra write overhead vs. reliability. Conclude by noting it’s a proven FAANG‑grade solution for microservices needing consistent event propagation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
