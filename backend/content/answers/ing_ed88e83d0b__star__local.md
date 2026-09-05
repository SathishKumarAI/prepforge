---
qid: ing_ed88e83d0b__star__local
question: 'Explain: Schema — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 391
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:23:54-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, we were building a real‑time fraud detection platform that needed to ingest millions of transaction events per day while still supporting complex analytics on historical data.

**Task**  
I had to design the underlying data layer: decide whether to use a relational database or a NoSQL store, and how to structure schemas for both operational and analytical workloads.

**Action**  
I first profiled read/write patterns. For transactional ingestion I chose Apache Cassandra—a wide‑column NoSQL system—because its schema‑flexible model (partition key + clustering columns) allowed us to write events in under 3 ms while scaling horizontally with minimal admin overhead. I defined a compact table: `transactions(id PK, user_id, amount, timestamp, status)` and used composite keys for time‑series queries.  
For analytics I set up PostgreSQL with a star schema: fact table `fraud_events` linked to dimension tables (`users`, `cards`, `merchant`). I used partitioning on date and materialized views for frequent aggregates (daily fraud rates). ETL jobs moved data from Cassandra nightly, keeping the analytical model consistent. I also implemented JSONB columns in PostgreSQL to store evolving metadata without schema changes.

**Result**  
The system handled 4 M transactions/day with <5 ms latency for writes and delivered 90‑second batch analytics reports. Read throughput increased by 35% compared to our monolithic SQL prototype, and the dual‑schema approach reduced operational complexity by separating write‑heavy from read‑heavy workloads. I learned that a hybrid schema strategy—leveraging NoSQL’s flexibility for ingestion and SQL’s strong consistency for reporting—is often the most scalable solution in real‑time data systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
