---
qid: ing_93bbfea635__star__local
question: 'Explain: Replication — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 318
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:28:21-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our PostgreSQL analytics cluster was hitting 95 % CPU during nightly aggregation jobs, causing data latency that annoyed the product team.  

**Task** – I had to cut the query turnaround time from 45 minutes to under 10 minutes without breaking consistency for downstream services.

**Action** – I designed a master‑to‑replica architecture:  
1. Enabled logical replication on the primary, publishing only the `transactions` and `accounts` tables (≈2 GB daily).  
2. Deployed two read replicas on separate VMs with SSDs and tuned `wal_sender_timeout`, `max_wal_senders`, and `hot_standby_feedback`.  
3. Created a custom replication slot to guarantee no WAL loss, and set up a cron job that promoted the most recent replica for heavy analytics queries, using `pg_basebackup` for failover readiness.  
4. Implemented a lightweight load balancer (PgBouncer) to route read traffic to replicas, while write traffic remained on the master.

**Result** – Query latency dropped from 45 min to 8 min, CPU usage on the master fell to 35 %, and we added a 24/7 read‑only endpoint for dashboards. I learned that careful slot management and selective publication can balance performance with data freshness in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
