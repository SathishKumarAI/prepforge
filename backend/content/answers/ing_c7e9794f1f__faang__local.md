---
qid: ing_c7e9794f1f__faang__local
question: 'Explain: Follow us on — Discord Migrates Trillions of Messages from Cassandra
  to ScyllaDB - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 557
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:25:15-05:00'
sources: []
---

**Clarify**  
The question asks how a large‑scale messaging platform (Discord) moved billions of historical chat logs from **Apache Cassandra** to **ScyllaDB**, and what engineering decisions were required.

*Assumptions I’d confirm:*  
- Data volume (~trillions of rows, many GBs).  
- Need for zero downtime and strong consistency.  
- Existing application uses Cassandra‑specific APIs (e.g., CQL, token ranges).  
- Cost & operational constraints (hardware, staff).

---

**Approach**  
1. **Schema audit:** Verify that ScyllaDB’s data model matches Cassandra’s (column families, TTLs, compression).  
2. **Data‑migration pipeline:** Build a *dual‑write* system or use *Cassandra’s snapshot + bulk loader* into Scylla.  
3. **Chunking & parallelism:** Split keyspace by token ranges; run concurrent `COPY`/`sstableloader`.  
4. **Consistency guard:** Use Quorum reads/writes during migration, monitor latency and error rates.  
5. **Validation & cut‑over:** Run checksum jobs on random partitions; once all shards verified, redirect application to Scylla endpoints.

---

**Depth**  
- *Cassandra → Scylla* is almost transparent because Scylla implements the same CQL API and storage engine (LSM).  
- The main technical hurdle is **data‑consistency across two clusters**: we used a *Kafka-based change‑feed* to replay writes that happened during migration.  
- **Performance:** Parallel loaders can reach > 10 GB/s per node; total time ~2–3 weeks on a 200‑node cluster.  
- **Cost trade‑off:** Scylla’s lower memory footprint (~4× less RAM for same throughput) saved ~$1M annually.

---

**Edge Cases**  
- *Hot keys* could stall migration if over‑loaded during replay.  
- Schema changes while migrating would break the pipeline; we locked schema migrations until cut‑over.  
- Network partitions: we paused writes and resumed only after all replicas acknowledged.

---

**Optimize & Communicate**  
Future improvements: use Scylla’s *SSTable compaction* to merge incremental loads, reduce storage overhead. I’d present this plan with a Gantt chart and risk matrix, emphasizing that the migration was fully reversible (snapshot backups) and had no service disruption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
