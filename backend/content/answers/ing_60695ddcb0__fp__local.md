---
qid: ing_60695ddcb0__fp__local
question: 'Explain: Write a SQL query to update the counter — Distributed Counter
  System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 571
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:30:38-05:00'
sources: []
---

**Why a distributed counter needs a special write path**

A counter is *stateful* and *high‑contention*: every increment or decrement touches the same logical value.  
In a single database the operation would be:

```sql
UPDATE counters SET value = value + 1 WHERE id = :id;
```

The `WHERE` clause forces an index seek, then a lock on that row; every concurrent write contends for the same lock, and the transaction log must serialize all updates.  
When you scale out to many replicas, naïvely writing each increment to every node would explode traffic (O(N) writes per operation).  
The deeper principle is *eventual consistency* with minimal coordination: we want the counter to stay correct while keeping write latency low.

**Design: partitioned increments + merge**

1. **Local shards** – split the counter into `K` shards (`shard_id = hash(id) % K`).  
   Each shard holds a row:

   ```sql
   CREATE TABLE counter_shards (
       id BIGINT PRIMARY KEY,
       value BIGINT NOT NULL DEFAULT 0
   );
   ```

2. **Increment locally** – an update hits only one shard:

   ```sql
   UPDATE counter_shards
      SET value = value + :delta
    WHERE id = :shard_id;
   ```

   No cross‑node locking; the write is O(1) and can be done on any replica that owns the shard.

3. **Read with aggregation** – to obtain the global count, sum all shards:

   ```sql
   SELECT SUM(value) AS total FROM counter_shards WHERE id = :counter_id;
   ```

   The read can run on a single node (if it has all shards replicated) or be distributed across nodes and aggregated.

4. **Periodic merge** – optionally, a background job consolidates shards into a single row for reporting:

   ```sql
   INSERT INTO counters (id, value)
        SELECT :counter_id, SUM(value) FROM counter_shards WHERE id = :counter_id
   ON CONFLICT (id) DO UPDATE SET value = EXCLUDED.value;
   ```

**Non‑obvious insight**

The key is *shard isolation*: by hashing the logical ID to a shard, we turn a global contention problem into independent local counters.  
Because each write touches only one row, the database’s own lock and transaction mechanisms remain efficient even under thousands of concurrent updates.  This mirrors the *concurrent hash table* principle in distributed systems: distribute the keyspace so that most operations are embarrassingly parallel while still enabling a simple aggregate view.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
