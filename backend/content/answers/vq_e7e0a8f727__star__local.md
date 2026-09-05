---
qid: vq_e7e0a8f727__star__local
question: What is A DDL statements?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 324
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:25:03-05:00'
sources: []
---

**Situation** – At a fintech startup, the data team was scaling from a single PostgreSQL instance to a sharded architecture. Our reporting dashboards were lagging because new tables for daily transaction logs had not been created in the new shards, and the existing schema lacked partitioning.

**Task** – I needed to design and implement a set of DDL (Data Definition Language) scripts that would create all required tables, apply appropriate indexes, and enable table partitioning across shards while ensuring zero downtime during production traffic spikes.

**Action** – I wrote SQL migration files using `CREATE TABLE`, `ALTER TABLE` for adding constraints, and `CREATE INDEX` for performance. To avoid locking the live database, I used PostgreSQL’s declarative partitioning (`PARTITION BY RANGE`) and created the new partitions in a maintenance window. I also leveraged `pg_repack` to rebuild indexes without blocking writes, and scripted automated rollback steps with `DROP TABLE IF EXISTS`. All scripts were version‑controlled in Git and executed via Flyway, which tracked schema versions across environments.

**Result** – The new sharded schema reduced query latency by 60% for the daily reports and cut maintenance window time from 4 hours to under 30 minutes. I learned how critical precise DDL design is for scalability and that automated migrations with proper rollback paths are essential for high‑availability systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
