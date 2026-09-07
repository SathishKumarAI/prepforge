---
qid: ing_fa053c9cf9__faang__local
question: 'Explain: Result context — Pattern: Transactional outbox'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 488
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:20:58-05:00'
sources: []
---

**Clarify**  
You’re asking for an explanation of a *transactional outbox* pattern and its *result context*. The goal is to move data from one system (e.g., a database) to another (e.g., a message broker) while guaranteeing exactly‑once delivery. I’ll assume the reader knows basic ACID and messaging concepts, but not this specific pattern.

**Approach**  
1. Describe what “transactional outbox” means in plain terms.  
2. Explain how it’s implemented: an outbox table inside the same transaction as business writes.  
3. Show the flow to a consumer/producer that reads the outbox and forwards messages.  
4. Discuss the *result context* – the state of data after the pattern runs (idempotent, consistent, audit‑ready).  

**Depth**  
A transactional outbox keeps an `outbox` table in the same database as the domain entity. When a user creates/updates an order, the application writes the order row **and** inserts a JSON payload into `outbox`. Both operations share one transaction; if either fails, the whole commit rolls back. A background worker polls `outbox`, publishes each entry to Kafka (or another broker), then marks it as sent or deletes it. Because publication happens after commit, the message is guaranteed to exist in the DB when the worker sees it, ensuring *exactly‑once* semantics. The resulting context: the source database holds a durable record of every event, and downstream systems can replay or audit events without risking duplicates.

**Edge Cases**  
- Long‑running workers may lock outbox rows → use `SELECT … FOR UPDATE SKIP LOCKED`.  
- Outbox table growth → schedule compaction or archiving.  
- Message broker downtime → worker retries with backoff; eventual consistency is preserved.

**Optimize & Communicate**  
For high throughput, batch reads and publish, use idempotent consumer keys, and add a `processed_at` timestamp to avoid re‑publishing. Explain that this pattern trades a small extra write (the outbox row) for strong consistency across systems—exactly what FAANG interviewers look for: clear problem framing, thoughtful design, complexity trade‑offs, and robustness against edge cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
