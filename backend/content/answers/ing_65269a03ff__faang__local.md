---
qid: ing_65269a03ff__faang__local
question: 'Explain: Moving collections — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 521
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:39:22-05:00'
sources: []
---

**Clarify**

You want to relocate a large collection from one shard cluster (or shard key) to another without downtime.  
Assumptions:  
* The source and destination shards are part of the same cluster or are connected via network.  
* Data is sharded on a hashed or ranged key; you can’t just copy rows.  
* You need minimal service interruption.

**Approach**

1. **Create a new shard (or new key space)** in the target cluster.  
2. **Enable change‑stream replication** on the source collection to stream inserts/updates to the destination.  
3. **Bulk‑copy** existing documents using `mongoexport` → `mongorestore` or an aggregation pipeline with `$out`.  
4. **Switch routing**: Once the copy is complete, update the config server’s metadata (`config.chunks`) so that all chunks now point to the new shard keyspace.  
5. **Decommission** the old collection after a grace period.

**Depth**

*Bulk‑copy*: Use `mongodump`/`mongorestore` with `--gzip --parallel=4` for speed, or an aggregation pipeline: `db.src.aggregate([{$match:{}}, {$out:"dest.coll"}])`.  
*Change streams*: Set up a listener that writes to the destination collection; this keeps eventual consistency.  
*Metadata switch*: Use `sh.moveChunk()` in a loop until all chunks are moved, then drop the old namespace. Complexity: O(N) for copy + O(C log S) for chunk moves (C = #chunks, S = shards).  

**Edge Cases**

*Large writes during migration may be lost if change‑stream isn’t captured; verify checkpointing.*  
*Network partitions can leave chunks orphaned—use `--repair` on config server after switch.*  
*Shard key collision: ensure the new shard’s key space doesn’t overlap existing ranges.*

**Optimize & Communicate**

- Parallelize chunk moves and use `--maintainInsertionOrder` to preserve order.  
- Log each step; present a rollback plan (restore from backup).  
- Explain trade‑offs: faster copy vs higher consistency risk, and how you’ll monitor latency spikes.

This method keeps the application online, guarantees data integrity, and leverages MongoDB’s built‑in sharding mechanics for a clean migration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
