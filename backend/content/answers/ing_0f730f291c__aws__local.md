---
qid: ing_0f730f291c__aws__local
question: 'Explain: Relational DB — Types of Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 433
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:00:16-05:00'
sources: []
---

**Relational DB – Types of Databases**

*Leadership Principles:* **Customer Obsession** (understand what the app really needs) & **Ownership** (pick the right tool and scale it).

**Situation / Task**  
I led a migration of our recommendation engine from a single‑node MySQL cluster to a multi‑region architecture. The goal was to keep latency < 50 ms for 95% of users while avoiding downtime.

**Action**  
1. **Classify the workloads**:  
   * OLTP – transactional data (orders, inventory) → **Amazon RDS Aurora PostgreSQL** with Multi‑AZ for high availability and read replicas for scale.  
   * Analytical / reporting – ad‑hoc analytics on historical orders → **Amazon Redshift Spectrum** over S3, eliminating the need for a separate warehouse.  
2. **Schema design**: Normalized tables for core entities; denormalized materialized views for fast joins.  
3. **Auto‑scaling**: Aurora Serverless v2 for bursty traffic; Redshift Concurrency Scaling to handle peak query loads.  
4. **Monitoring & cost**: CloudWatch metrics + RDS Performance Insights; reserved instances saved 30 % vs on‑demand.

**Result**  
- Latency dropped from 120 ms to 35 ms (average).  
- 99.99 % uptime during the cutover.  
- Cost decreased by $18K/month, freeing budget for new ML features.

**Bar‑raiser takeaways**  
* Demonstrated ownership: I drove end‑to‑end migration.  
* Dive deep: Chose appropriate DB type per workload and tuned parameters.  
* Quantified impact: Clear latency & cost metrics.  
* Learned from failure: Initial attempt with a single RDS instance caused throttling; pivoted to Aurora Serverless after profiling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
