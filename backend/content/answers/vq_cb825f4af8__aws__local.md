---
qid: vq_cb825f4af8__aws__local
question: HOW DO YOU OPTIMIZE SQL QUERIES FOR PERFORMANCE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 390
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:14:26-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principles:** *Ownership*, *Dive Deep*  
> **Situation / Task:** While leading a data‑engineering sprint for the e‑commerce recommendation engine, we observed that the daily churn analysis query ran 15 min on an RDS MySQL instance, blocking OLAP workloads.  
> **Action (Technical & System):**  
> 1. **Profiling & Metrics** – Used `EXPLAIN ANALYZE` and CloudWatch logs to identify a full table scan on the `user_sessions` table (~5 M rows).  
> 2. **Index Design** – Added a composite B‑tree index `(session_date, user_id)` after verifying cardinality via `ANALYZE TABLE`.  
> 3. **Query Rewrite** – Replaced correlated subquery with a window function (`COUNT(*) OVER (PARTITION BY user_id)`) to eliminate row‑by‑row lookups.  
> 4. **Caching Layer** – Deployed an Aurora Serverless cluster behind ElasticCache Redis for frequently accessed lookup tables, reducing read pressure on RDS.  
> 5. **Monitoring & Alerting** – Created CloudWatch dashboards; set alarms when query latency >30 s.  
> **Result:** Query runtime dropped from 15 min to 3 sec (≈300× speed‑up), freeing 40 % of CPU capacity for concurrent OLAP jobs. The cost saving was ~$1,200/month on RDS and $300/month on Redis.  
> **Learning:** Early profiling prevented a cascading performance issue; I documented the index strategy in the team's knowledge base, ensuring repeatability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
