---
qid: ing_6052af5f51__star__local
question: 'Explain: Connection Pooling — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 364
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:40:50-05:00'
sources: []
---

**Situation:**  
When I was building a real‑time recommendation engine for an e‑commerce startup, our nightly model training job pulled millions of user interaction rows from a PostgreSQL warehouse. The first run stalled at 4 hours because every query opened and closed a new DB connection, exhausting the pool and hitting the database’s max connections limit.

**Task:**  
I had to cut the data extraction time by at least 50% so the model could train within the 6‑hour window and produce daily updates without overloading the server.

**Action:**  
1. I switched from the default JDBC driver to HikariCP, configuring a pool size of 200 connections (based on DB max + expected concurrency).  
2. Implemented connection timeouts (30 s) and idle eviction policies (10 min) to avoid stale sockets.  
3. Added prepared statements for the heavy SELECT queries and batched them in 50k-row chunks, letting Hikari reuse the same physical connections across batches.  
4. Monitored pool metrics with Prometheus; tuned `maximumPoolSize` and `minimumIdle` until CPU usage stayed below 70 % and connection wait times dropped below 100 ms.

**Result:**  
Data extraction time fell from 4 hours to 1.5 hours—a 63% speed‑up—allowing the full training pipeline to finish in under 3 hours. I learned that a well‑tuned connection pool not only reduces latency but also protects the database from resource exhaustion, which is critical when scaling ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
