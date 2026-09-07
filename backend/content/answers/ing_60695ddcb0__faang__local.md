---
qid: ing_60695ddcb0__faang__local
question: 'Explain: Write a SQL query to update the counter — Distributed Counter
  System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 495
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:28:19-05:00'
sources: []
---

**Clarify**  
You need an **update‑and‑read** pattern for a high‑traffic counter that is partitioned across many nodes (shards).  
Assumptions to confirm:  
* Counter key is immutable (`counter_id`).  
* Updates are idempotent and must never overflow.  
* Reads can tolerate eventual consistency but should be fast.  

**Approach**  
1. **Sharding** – store counter shards in a key‑value store (e.g., DynamoDB, Bigtable).  
2. **Atomic increment** – use the database’s atomic `ADD`/`INCREMENT` operation per shard.  
3. **Aggregation** – maintain a *global* aggregate table that is updated asynchronously via an event queue or scheduled job.  

**Depth** (SQL‑style pseudocode for a sharded RDBMS)  

```sql
-- 1️⃣ Atomic update on a specific shard
UPDATE counter_shards
SET value = value + :delta
WHERE counter_id = :id AND shard_id = hash(:id) % :num_shards;

-- 2️⃣ Trigger to push change to global aggregate (async)
CREATE TRIGGER upd_global AFTER UPDATE ON counter_shards
FOR EACH ROW
BEGIN
   INSERT INTO counter_aggregate(counter_id, value)
     VALUES(NEW.counter_id, NEW.value)
   ON DUPLICATE KEY UPDATE value = NEW.value;
END;
```

*Complexity:*  
- Update: **O(1)** on the shard.  
- Aggregate read: **O(1)** if cached; otherwise **O(log N)** scan of aggregate table.  

**Edge Cases**  
* Concurrent updates → database guarantees atomicity per row.  
* Network partitions → eventual consistency for global count.  
* Shard overflow → use 64‑bit integers or big integer type.  

**Optimize & Communicate**  
- Cache the global aggregate in Redis with TTL to reduce DB load.  
- Use a write‑through cache to avoid race conditions.  
- Explain that this design trades off strict consistency for throughput, which is acceptable for counters (e.g., page views).  

This structured solution satisfies FAANG interview expectations: clear problem restatement, methodical plan, detailed implementation with complexity, edge‑case handling, and optimization rationale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
