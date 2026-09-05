---
qid: ing_7da204695b__star__local
question: 'Explain: Synchronous vs Asynchronous Replication — Availability | System
  Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 324
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:45:01-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our core transaction database was built on PostgreSQL and we had to meet a new regulatory requirement: every balance update must be reflected across all data centers within 100 ms or risk being flagged for non‑compliance.

**Task** – I needed to design a replication strategy that would keep the global user experience highly available while still meeting the strict consistency window. The challenge was to choose between synchronous and asynchronous replication without compromising uptime during network partitions.

**Action** – I ran latency and failure simulations using pg_rewind and Barman for disaster recovery, then implemented a hybrid scheme: critical writes (balance changes) used synchronous two‑phase commit across the nearest region; less critical reads were served from asynchronously replicated replicas in other regions. I added a lightweight “lag monitor” that pushed alerts to an Ops dashboard if replication lag exceeded 50 ms, triggering automatic failover to local read replicas. I also tweaked PostgreSQL’s `synchronous_commit` settings and used `pg_stat_replication` for real‑time metrics.

**Result** – The new setup reduced compliance risk by ensuring 99.999% consistency within the required window while keeping overall system availability above 99.97%. We cut mean time to recovery from hours to under five minutes, and the team learned that a well‑tuned hybrid approach can satisfy both strict consistency and high availability demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
