---
qid: vq_24eb16c6e5__fp__local
question: Using Sqoop command how can we control the number of Mappers?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 499
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:26:58-05:00'
sources: []
---

**Why the mapper count matters**

When Sqoop pulls data from a relational database into HDFS, each *mapper* reads a slice of rows via JDBC and streams them to HDFS. The total work is linear in the number of rows, but the I/O cost per row is **constant**; therefore throughput scales almost linearly with the number of parallel mappers until one of two limits is hit:

1. **Database connection pool / lock contention** – every mapper opens a JDBC session and may acquire locks on the source table.
2. **HDFS block allocation / network bandwidth** – each mapper writes to HDFS, and if many writers target the same datanode they contend for disk I/O.

Thus, the optimal number of mappers is the largest value that keeps both the DB and HDFS saturated but not overwhelmed.

**How to set it**

```bash
sqoop import \
  --connect jdbc:postgresql://host/db \
  --username user --password pass \
  --table my_table \
  --target-dir /data/my_table \
  --num-mappers N          # override the default
```

* `--num-mappers` is an integer.  
* If omitted, Sqoop defaults to **4** or the number of HDFS blocks (whichever is smaller).  
* A rule‑of‑thumb: `N = min(10 000 rows per mapper, available DB connections)`.

**Non‑obvious insight**

The *default* calculation is based on HDFS block size, not on the source table’s row count. If your table has many tiny rows (e.g., 1 KB each) and a large number of blocks, Sqoop will spawn more mappers than necessary, causing excessive JDBC overhead. Conversely, for very large rows, fewer mappers may be better to avoid exhausting DB connections. Hence, always benchmark with `--num-mappers` tuned to both the database’s connection limits and the size distribution of your rows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
