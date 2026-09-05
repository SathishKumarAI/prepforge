---
qid: vq_5bfae2a974__star__local
question: PLAYER_BAT_STAT table is online?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 388
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:00:25-05:00'
sources: []
---

**Situation** – At my previous job we were migrating the cricket analytics platform from an on‑premise Oracle database to Amazon RDS Aurora MySQL. The flagship table, PLAYER_BAT_STAT, held over 4 million rows and was accessed by more than 30 concurrent dashboards that refreshed every minute. A downtime of even a few seconds would have broken our SLA of 99.9% uptime.

**Task** – I had to make sure the PLAYER_BAT_STAT table remained online during the migration while preserving referential integrity, indexes, and foreign‑key constraints, all without halting any read traffic.

**Action** – I used MySQL’s *online DDL* feature (ALTER TABLE … ALGORITHM=INPLACE) to rebuild the primary key index and add a new composite index on (bat_id, match_date). Before executing the statements I created a lightweight replication stream that sent all incoming write transactions to a standby replica. While the online ALTER ran, I switched read replicas to the new schema version using Amazon RDS “Read Replica promotion” with zero downtime. I also set `innodb_lock_wait_timeout` to 30 seconds and monitored lock waits via performance_schema to catch any blocking queries early.

**Result** – The migration finished in under 12 minutes, with no visible interruption to end users. Post‑migration query latency dropped by 18%, and the table’s online DDL usage saved us a $1,200 monthly cost that would have been incurred for a manual maintenance window. I learned how to leverage database engine features and cloud tooling together to achieve truly zero‑downtime migrations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
