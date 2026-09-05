---
qid: vq_3730ba7711__fp__local
question: What are the ways to remove duplicates in hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 754
total_tokens: 924
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:31:03-05:00'
sources: []
---

**Why Hive must purge duplicates**

When a relational schema is materialised in HDFS, every record is stored as an immutable file fragment.  
A duplicate arises when two fragments have identical key‑columns (or the whole row).  
From an optimisation viewpoint, duplicates inflate I/O and skew query plans:  

* **Storage cost** – each copy consumes bandwidth and disk space.  
* **Read cost** – a scan must read all copies before it can dedupe in memory.  
* **Skew cost** – map‑reduce or Tez tasks may receive many identical rows, leading to imbalanced reducers.

Thus the *canonical* solution is to enforce uniqueness *at the data‑generation stage*, not during ad‑hoc queries.  

---

### 1. **Pre‑load deduplication (ETL)**

| Technique | How it works | When to use |
|-----------|--------------|-------------|
| `INSERT … SELECT DISTINCT` | Executes a distinct projection in Tez, emitting one copy per key. | Smallish tables or when you can afford an extra job. |
| `MERGE` (Hive 4+) | Upserts based on primary‑key logic; duplicates are overwritten or discarded. | When you need incremental loading. |

*Non‑obvious insight*: Using `INSERT … SELECT DISTINCT` forces a shuffle, but if the source is already sorted by key you can avoid the shuffle by adding a **bucketed** layout and using `CLUSTERED BY` before insertion.

---

### 2. **Schema‑level uniqueness (DDL)**

```sql
CREATE TABLE t (...) 
ROW FORMAT DELIMITED FIELDS TERMINATED BY ',' 
STORED AS TEXTFILE
TBLPROPERTIES ('hive.enforce.sorting'='true');
```

When you create a **bucketed** table and enable `hive.enforce.bucketing`, Hive guarantees that all rows with the same key land in the same bucket.  
During inserts, it will only keep the first occurrence per bucket if you combine it with `INSERT … SELECT DISTINCT`.  
This reduces shuffle cost drastically.

---

### 3. **Post‑load deduplication (query time)**

| Technique | How it works | Trade‑offs |
|-----------|--------------|------------|
| Window functions (`ROW_NUMBER() OVER(PARTITION BY key ORDER BY ts)`) | Keeps the newest row per key. | Requires an extra sort, but is cheap on already bucketed data. |
| `GROUP BY` + aggregation | Aggregates duplicate rows into a single record. | Loses non‑aggregated columns unless you use `collect_set`. |

*Non‑obvious insight*: If your table is **partitioned** by a date column, dedupe only the latest partition; older partitions can be assumed unique if they were loaded atomically.

---

### 4. **Materialised views / incremental tables**

Create a view that always selects distinct keys from an underlying fact table:

```sql
CREATE MATERIALIZED VIEW mv_unique AS
SELECT DISTINCT key, col1, col2 FROM raw_table;
```

Updating the source triggers automatic refresh of `mv_unique`, keeping duplicates out of downstream analytics.

---

**Bottom line:**  
The *deep principle* is that deduplication is a **pre‑emptive optimisation**: enforce uniqueness at write time using bucketed/partitioned layouts and distinct inserts; otherwise, fall back to window functions or aggregation when you must materialise the result. Each method trades I/O, shuffle cost, and maintenance complexity against query latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
