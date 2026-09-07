---
qid: ing_0f640d3ea6__aws__local
question: 'Explain: Query Optimization — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 496
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:00:15-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role at a fintech startup I was tasked to cut the latency of our nightly ML training pipeline from **3 min → 30 s** on the same RDS instance.  
*Situation:* The pipeline executed complex SQL queries over millions of rows, and every incremental improvement in query performance translated directly into faster model refreshes for fraud detection.  
*Task:* I owned a full audit of our relational workload, identified bottlenecks, and redesigned the schema/queries to fit the ML use‑case.  
*Action:*  
1. **Profiling & Indexing** – Used `EXPLAIN ANALYZE` on Postgres, discovered table scans on `transactions`. Added composite B‑Tree indexes `(user_id, txn_date)` and a partial index for high‑value accounts.  
2. **Query Refactor** – Rewrote correlated subqueries into joins; replaced expensive `LIKE` filters with full‑text search (`tsvector`).  
3. **Partitioning & Vacuum** – Implemented range partitioning on `txn_date`; scheduled nightly `VACUUM FULL`.  
4. **AWS Migration** – Deployed the optimized DB to **Amazon Aurora PostgreSQL** (serverless) for elastic scaling; used **RDS Proxy** to reduce connection overhead.  
5. **Monitoring & Alerting** – Integrated CloudWatch metrics and created a Lambda that auto‑scales read replicas when query latency > 200 ms.

*Result:* Query execution time dropped from **3 min → 30 s**, cutting nightly compute cost by **$1,800/month** (≈ 40% of our ML spend). The faster pipeline enabled real‑time fraud scoring with a 15% reduction in false positives.  

**Leadership Principles Highlighted:**  
- *Ownership* – I took full responsibility for the end‑to‑end performance loop.  
- *Dive Deep* – Detailed query analysis and index tuning drove tangible ROI.  

**Bar‑raiser cues:** The answer demonstrates measurable impact, depth of technical understanding (indexing, partitioning), cost‑aware AWS service selection, and a clear learning loop from profiling to production deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
