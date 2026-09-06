---
qid: ing_8108a34950__think__local
question: 'Explain: How CDC Works — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 473
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:31:35-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- *Audience*: Intermediate‑level ML engineers who know basic data pipelines but may be new to CDC concepts.  
- *Goal*: Explain how CDC fits into a system‑design interview, not just the mechanics of CDC itself.  
- *Assumptions*: The reader is comfortable with relational DBs, stream processing (Kafka/FSQ), and knows what “change” means in data terms.

**2️⃣ Choose a mental model**

Use a **“source → change capture → target” pipeline** diagram as the backbone.  
Think of CDC as an event‑driven adapter that turns row modifications into a lightweight stream of events, preserving causality and order.

**3️⃣ Reason step‑by‑step**

1. *Identify change sources*: transactional logs (binlog, transaction log), triggers, or application hooks.  
2. *Capture strategy*: read‑through vs. write‑through; snapshot initial state then tail incremental changes.  
3. *Normalize the change record*: include operation type, primary key, timestamp, and before/after snapshots.  
4. *Transport mechanism*: Kafka topics, Pulsar, or a database‑native CDC service (Debezium).  
5. *Consume & apply*: downstream services (data lake, analytics, ML models) replay events to stay in sync; handle idempotency and ordering.

**4️⃣ Avoid common traps**

- Don’t treat CDC as “just a copy”; it’s an event stream with semantics.  
- Forgetting to capture **before/after** states leads to hard‑to‑debug regressions.  
- Ignoring *conflicts* (e.g., concurrent updates) can corrupt downstream state.

**5️⃣ Sanity‑check & communicate**

- Verify that the pipeline preserves **exactly‑once semantics**; ask “what happens if a consumer crashes?”  
- Explain how CDC enables **real‑time ML model retraining** by feeding fresh data streams.  
- End with a quick recap: *CDC = turning DB changes into stream events, which you can then feed into ML pipelines for near‑real‑time learning.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
