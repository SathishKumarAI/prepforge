---
qid: ing_593382ebf7__star__local
question: 'Explain: Stage 2: Separate Database (10K-100K users)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 366
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:18-05:00'
sources: []
---

**Situation:**  
At my previous company we were rolling out a recommendation engine for a social‑media app that already had ~50 k active users. The pilot phase required the system to serve personalized feeds in real time while keeping the user data isolated from our main transactional database to avoid performance hits.

**Task:**  
I needed to design and implement a separate analytics database that could ingest, store, and query 10–100 k users’ interaction logs with minimal latency, while ensuring data consistency and easy scaling for future growth.

**Action:**  
I chose PostgreSQL with partitioned tables by user hash and enabled logical replication from the main DB. To keep read performance high I added a Redis cache layer for the most recent interactions and used Kafka to stream events in real time into the analytics store. I also wrote an ETL job that ran nightly, aggregating click‑through rates per user and materialized views for quick access by the ML pipeline. Throughout, I monitored query plans with EXPLAIN ANALYZE and tuned indexes on `user_id` + `timestamp`.

**Result:**  
The new database handled 30 k concurrent read/write operations per minute without exceeding 200 ms latency. The recommendation model’s accuracy improved from 68 % to 82 % AUC because we could now use richer, up‑to‑date user features. I learned that partitioning combined with a lightweight cache can give you near‑real‑time analytics at scale while keeping the core transactional system unaffected.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
