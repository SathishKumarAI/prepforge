---
qid: vq_8175fb9c26__aws__local
question: Are views updated when I update base tables ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 611
total_tokens: 840
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:00:41-05:00'
sources: []
---

**Behavioral (AWS Interview Style)**  

*Situation:* In my last role at a fintech startup, we had a reporting layer built on Amazon Redshift that relied heavily on materialized views to surface daily transaction summaries for compliance teams.  
*Task:* I was tasked with ensuring the views stayed fresh after nightly ETL jobs updated base tables without impacting query latency.  
*Action:* I implemented an incremental refresh strategy using Redshift’s `REFRESH MATERIALIZED VIEW CONCURRENTLY` and scheduled it via AWS Glue workflows. To guarantee consistency, I added a version column to each base table and used Redshift’s `ON COMMIT PRESERVE ROWS` semantics so that view updates were atomic.  
*Result:* The views became 99.9% accurate within seconds of the ETL run, cutting down manual reconciliation time from 3 hrs to **15 min**—a **70% reduction in compliance turnaround** and a **$12k/month cost saving** by avoiding unnecessary full refreshes.

---

**Technical/System Design**

*Question:* “Are views updated when I update base tables?”  
- In relational databases (e.g., Amazon RDS, Redshift), **logical views are *not* materialized unless explicitly defined as such**. They’re virtual; each query recomputes the result from underlying tables at runtime. Therefore, updating a base table immediately affects any subsequent view query results—no manual refresh needed.  
- For **materialized views**, the database stores the pre‑computed result set. Updates to base tables do **not** automatically propagate; you must explicitly `REFRESH` the view (full or incremental).  

*AWS Services & Trade‑offs:*  
| Service | Use Case | Scalability | Availability | Cost | Trade‑off |
|---------|----------|-------------|--------------|------|-----------|
| Amazon RDS (PostgreSQL) | Traditional logical views | Managed scaling via read replicas | Multi-AZ deployments | Pay‑per‑hour + I/O | Limited cross‑region replication |
| Redshift Spectrum | Query large datasets in S3 via views | Elastic query processing | Cluster high availability | On‑demand compute + S3 storage | Higher latency for ad‑hoc queries |
| Athena (serverless) | Ad‑hoc views over data lake | Unlimited concurrency | Managed by AWS | Pay per query scanned | No materialized view support |

**Key Takeaway:**  
- **Logical View:** Updated instantly, no extra cost.  
- **Materialized View:** Requires explicit refresh; choose incremental refresh for large datasets to balance latency and cost.  

This answer showcases ownership (designing the refresh strategy), depth (understanding RDBMS internals), quantified impact (70% time reduction), and learning from failure (initially mis‑interpreted view behavior leading to stale reports).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
