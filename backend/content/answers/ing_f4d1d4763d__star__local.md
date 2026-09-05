---
qid: ing_f4d1d4763d__star__local
question: 'Explain: But normally you would also want to — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 310
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:38:14-05:00'
sources: []
---

**Situation:**  
During a system‑design interview for a recommendation engine, my interviewer asked me how I would choose the best database and what design choices I’d make to keep latency low while handling millions of user interactions per day.

**Task:**  
I needed to outline a concrete database strategy that balanced consistency, scalability, and cost, and demonstrate how it supports real‑time ML inference.

**Action:**  
I first profiled read/write patterns: 80 % reads for serving recommendations, 20 % writes for logging user clicks. I chose a hybrid approach—Redis for hot cache (TTL 5 min) to satisfy latency <10 ms, and PostgreSQL with partitioned tables for durable storage of click logs. For ML features, I pre‑computed embeddings in an S3 data lake, refreshed nightly via Spark jobs, and exposed them through a read‑only ClickHouse cluster for fast analytical queries. I added row‑level security and automated scaling using Aurora Serverless to keep costs predictable.

**Result:**  
The design achieved <8 ms response time for 95 % of requests, reduced query cost by 35 %, and allowed the ML model to ingest fresh data every 12 hours with minimal downtime. I learned that a layered database architecture lets you optimize each use case without compromising overall system integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
