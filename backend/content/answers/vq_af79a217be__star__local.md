---
qid: vq_af79a217be__star__local
question: when we use select command does it goes to reducer in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 465
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:14:52-05:00'
sources: []
---

**Situation:**  
At my previous company we were migrating our nightly ETL pipeline from a legacy system to Hive on Hadoop. The job processed ~5 TB of transactional logs and produced daily sales aggregates for the business intelligence team. When we ran the original query, it hit an OOM error in the reducer stage and took over 12 hours.

**Task:**  
I needed to determine why our SELECT statement was causing a massive shuffle and how to redesign the job so that data flowed directly from mappers to reducers without an unnecessary reduce phase, thereby cutting runtime by at least 50%.

**Action:**  
First I inspected the execution plan (`EXPLAIN`). The query had a `SELECT` with a `GROUP BY` on a non‑partitioned column and no aggregation function. Hive interpreted this as a “map-only” job only when it could push down all predicates to the map phase; otherwise, the SELECT was treated like a transformation that required a reduce shuffle. I rewrote the query to use a **SELECT * FROM table WHERE partition_col = '2024-08-15'** and added a **`SET hive.exec.reducers.bytes.per.reducer=10737418240`** to let Hive auto‑tune reducer count. Then I applied **`INSERT OVERWRITE DIRECTORY`** with `STORED AS PARQUET` to avoid an extra reduce step, and finally enabled **Tez execution engine** (`SET hive.execution.engine=tez`) which allowed the SELECT to be executed as a map-only job.

**Result:**  
The job finished in 4 hours—an 80% reduction. The data was written directly from mappers to HDFS without shuffling, saving cluster resources and reducing cost by ~$500/month. I learned that Hive’s SELECT can trigger a reducer only when the query requires aggregation or non‑partitioned predicates; otherwise, configuring the execution engine and tuning reducer settings is key to achieving map‑only performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
