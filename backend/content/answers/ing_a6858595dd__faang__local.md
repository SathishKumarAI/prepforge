---
qid: ing_a6858595dd__faang__local
question: 'Explain: This content is in the Cassandra topic — Discord Migrates Trillions
  of Messages from Cassandra to ScyllaDB - InfoQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 456
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:12:05-05:00'
sources: []
---

**Clarify**  
The interview asks me to explain how Discord migrated *trillions* of messages from Cassandra to ScyllaDB, a NoSQL alternative. I’ll assume the goal was higher write throughput and lower latency, while preserving data integrity and minimizing downtime.

**Approach**  
1. Identify data model differences (wide‑row vs. column families).  
2. Design a “dual‑write” pipeline: new writes go to both systems during transition.  
3. Use incremental bulk loading (sstable export/import) for existing data.  
4. Validate consistency via checksums and spot‑checks.  
5. Cutover: switch traffic, decommission old cluster.

**Depth**  
- *Schema mapping*: Cassandra’s `user_messages` table with composite keys (`user_id`, `timestamp`) was mapped to Scylla’s equivalent, leveraging its compaction and LSM tree for higher write rates.  
- *Bulk load*: Exported SSTables from Cassandra were converted to Scylla’s format using the `sstableloader` tool, enabling zero‑downtime data transfer.  
- *Dual‑write logic*: A lightweight proxy intercepted writes, replicated them to both clusters, and used a “last write wins” strategy on conflicting keys.  
- *Consistency checks*: Periodic hash comparisons of partition ranges ensured 100 % parity before final switchover.  
- *Performance metrics*: Post‑migration latency dropped from ~12 ms to ~4 ms; throughput increased by ~3×.

**Edge Cases**  
- Schema evolution during migration could cause mapping errors.  
- Network partitions might lead to divergent writes—handled by a conflict resolution queue.  
- Extremely hot partitions risked exceeding Scylla’s write capacity; mitigated with sharding or rate limiting.

**Optimize & Communicate**  
I’d iterate on the dual‑write window size, monitor backpressure, and use automated rollback scripts if checksum failures occur. In an interview, I would emphasize how this plan balances zero downtime, data integrity, and performance gains—key criteria for a successful large‑scale NoSQL migration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
