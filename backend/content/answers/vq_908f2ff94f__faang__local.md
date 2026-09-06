---
qid: vq_908f2ff94f__faang__local
question: How does one create a standby database?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 462
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:22:36-05:00'
sources: []
---

**Clarify**  
You’re asking how to set up a *standby* (also called hot or warm) database that continuously receives changes from the primary. I’ll assume an RDBMS like Oracle, PostgreSQL or MySQL in a replicated environment and you want near‑zero recovery time.

**Approach**  
1. **Choose replication mode** – physical (binary log / redo) for exact copy, logical for schema‑agnostic sync.  
2. **Configure primary** – enable archiving/streaming (`archive_log`, `wal_level=replica`, etc.) and create a *standby* user with REPLICATION privilege.  
3. **Provision standby server** – install same DB version, set data dir empty, copy the base backup from primary (e.g., `pg_basebackup` or Oracle’s RMAN).  
4. **Set up recovery config** – in PostgreSQL: `standby.signal` + `primary_conninfo`; in Oracle: `init.ora` with `DB_CREATE_ONLINE_LOG_DEST_n`.  
5. **Start standby** – it will stream redo logs, apply them asynchronously (hot standby) or wait for commit confirmation (warm).  

**Depth**  
- *Latency*: physical streaming yields <1 s lag; logical can add a few seconds due to transformation overhead.  
- *Failover*: use tools like `pg_auto_failover` or Oracle Data Guard’s `DGMGRL`.  
- *Monitoring*: track `pg_stat_replication` or `V$ARCHIVE_DEST_STATUS`.  

**Edge Cases**  
- Network partitions: ensure WAL replay stops cleanly to avoid corruption.  
- Schema changes: logical replication may require manual mapping; physical needs downtime for major DDL.  
- Disk space: standby can grow if primary writes slowly—set retention policies.

**Optimize & Communicate**  
Explain trade‑offs (latency vs. consistency), show a simple recovery script, and emphasize monitoring/alerting to keep the standby healthy. This demonstrates clear structure, technical depth, and operational awareness—all key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
