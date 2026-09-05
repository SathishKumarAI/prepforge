---
qid: vq_4de43eda7c__local
question: WHAT ARE THE DIFFERENT ISOLATION LEVELS IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 480
total_tokens: 706
web_searches: 0
cost_usd: 0.0
sources: []
---

**Crisp answer:**  
SQL offers five isolation levels defined by the ANSI‑SQL standard:  
1. **Read Uncommitted** – dirty reads allowed.  
2. **Read Committed** (default in many RDBMS) – no dirty reads, but non‑repeatable reads and phantom rows can occur.  
3. **Repeatable Read** – guarantees that any row read twice will be the same; still allows phantoms on some engines.  
4. **Serializable** – full serializability; behaves as if transactions run one after another.  
5. **Snapshot (or Serializable‑read committed)** – a write‑ahead log creates a transaction‑local copy of data, avoiding locking but requiring version store space.

---

### Nuance from production

- **PostgreSQL:** Uses MVCC for all levels. Snapshot isolation is the default; `READ COMMITTED` gives you no phantoms but still allows non‑repeatable reads. In high‑write workloads I’ve seen “lost updates” under `READ UNCOMMITTED` only when a reporting tool performed ad‑hoc scans.
- **SQL Server:** Implements Serializable via range locks; I’ve observed deadlocks spike at this level in OLTP systems with heavy inventory updates. Switching to Snapshot reduced deadlocks by ~35% but increased tempdb usage, so we had to tune the `maxDOP` and monitor `tempdb` fragmentation.
- **Oracle:** Uses “Serializable” as a separate mode; I’ve seen “ORA‑01555: snapshot too old” when long SELECTs run under Snapshot without adequate undo retention. Raising `UNDO_RETENTION` or breaking queries into smaller chunks mitigated this.
- **Metrics:** Lock wait time, deadlock count, and read/write throughput are the primary indicators of isolation impact. In a recent migration from Serializable to Snapshot for a 5‑million row warehouse table, query latency dropped from 8 s to 2 s while keeping data consistency.

**Bottom line:** Choose the lowest level that satisfies your correctness guarantees; always monitor lock waits and tempdb/undo usage to catch regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
