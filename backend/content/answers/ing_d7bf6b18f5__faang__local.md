---
qid: ing_d7bf6b18f5__faang__local
question: 'Explain: The Outbox Pattern — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 504
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:01:09-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *Outbox pattern* as a CDC (Change‑Data‑Capture) technique for reliable event propagation from an application database to downstream consumers.  
Assumptions:  
1. Writes go through a single service that owns the data store.  
2. We need eventual consistency and exactly‑once delivery of change events.  
3. No external message broker guarantees transactional writes with the DB.

**Approach**  
Describe the core idea: every write transaction inserts/updates a row in an “outbox” table inside the same database transaction that mutates business data. A separate *poller* (or logical replication) reads new outbox rows, serialises them to a message broker, then marks or deletes the rows once acknowledged.

**Depth**  
- **Schema**: `business_table(id, …)` and `outbox(id PK, type, payload, status, ts)`.  
- **Write flow**: `BEGIN; UPDATE business…; INSERT INTO outbox (…) VALUES (…) ; COMMIT;` → guarantees atomicity.  
- **Read‑to‑publish**: a worker polls `SELECT * FROM outbox WHERE status='PENDING' ORDER BY ts LIMIT N FOR UPDATE SKIP LOCKED;` serialises payload, publishes to Kafka/Redis Streams, then updates `status='SENT'`.  
- **Exactly‑once**: idempotent consumers or de‑duplication logic on the payload.  
- **Complexity**: O(1) per write; poller cost proportional to message volume.

**Edge cases**  
- Long‑running transactions leave stale outbox rows → use a TTL or background cleanup.  
- Broker downtime: retry logic, idempotent publish.  
- Outbox table growth → partitioning or archiving.

**Optimize & communicate**  
Improvements: use *logical replication* instead of polling to reduce latency; compress payloads for large data; batch publishes for throughput. Communicate the pattern by emphasising its simplicity—no need for distributed transactions, just a single DB transaction—and its robustness: atomic writes + eventual delivery with at‑least‑once semantics that can be made exactly‑once via idempotence. This satisfies FAANG interviewers’ focus on clear structure, depth of implementation details, and trade‑off awareness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
