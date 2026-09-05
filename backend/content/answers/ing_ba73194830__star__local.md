---
qid: ing_ba73194830__star__local
question: 'Explain: Active-Passive (Standby) — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 346
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:43:56-05:00'
sources: []
---

**Situation:**  
In my last role, we were launching a real‑time analytics platform for a financial services client that required 99.999% uptime. Their existing single‑instance architecture couldn’t meet the SLA; any hardware failure would bring down the entire service.

**Task:**  
I had to design an active‑passive (standby) solution that kept the system live during hardware or software failures, while keeping costs manageable and ensuring data consistency across nodes.

**Action:**  
I chose a clustered PostgreSQL setup with streaming replication. The primary node handled all writes; the standby replicated WAL logs in real time using asynchronous mode to reduce latency. I implemented a heartbeat service (using Keepalived) that detected failover within 15 seconds. For seamless switchover, I used PgBouncer to maintain connection pooling and scripted automatic promotion with `pg_ctl promote`. To keep data identical, I scheduled nightly bulk syncs during low‑traffic windows and employed logical replication for schema changes. I also added health checks in the application layer that redirected traffic to the standby if it became unresponsive.

**Result:**  
The new architecture achieved 99.999% availability over a year of production, dropping downtime from 12 hours/month to under 1 minute/month. Latency increased by only ~5 ms during normal operation, and we saved roughly $18k annually on redundant hardware. I learned that careful trade‑offs between consistency and performance are key in active‑passive designs, and automation of failover processes eliminates human error.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
