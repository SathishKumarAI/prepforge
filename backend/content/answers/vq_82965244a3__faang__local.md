---
qid: vq_82965244a3__faang__local
question: how to load data in hive table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 492
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:19:55-05:00'
sources: []
---

**Clarify**  
You want to ingest external data into a Hive table so it can be queried with HiveQL.  
*Assumptions*: we’re using Hadoop‑based Hive (not Spark‑SQL), the source file(s) are in HDFS or S3, and the schema is known.  

**Approach**  
1. **Create the table** – either external (keeps data on the filesystem) or managed (Hive owns it).  
2. **Load the data** – point Hive to the location of the files.  
3. **Verify** – run a quick `SELECT` and check metadata.

**Depth**  

```sql
-- 1. Create an external table (partitioned if needed)
CREATE EXTERNAL TABLE sales (
  id BIGINT,
  product STRING,
  qty INT,
  price DECIMAL(10,2),
  sale_date DATE
)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
STORED AS TEXTFILE
LOCATION '/data/sales/';

-- 2. Load data from HDFS (or S3 via s3a://)
LOAD DATA INPATH 's3a://my-bucket/raw-sales.csv' INTO TABLE sales;

-- 3. Verify
SELECT COUNT(*) FROM sales LIMIT 5;
```

*Complexity*: `LOAD DATA` is O(N) on the size of the file; it just moves metadata, not data.  
*Trade‑offs*: External tables keep data outside Hive’s control (good for cost & sharing); managed tables delete data on drop.

**Edge Cases**  
- File format mismatch → use `SERDE` or `STORED AS PARQUET`.  
- Duplicate rows – need dedup logic post‑load.  
- Large files > 1 GB – split into smaller parts to avoid single‑node bottlenecks.

**Optimize & Communicate**  
For high‑volume ingestion, prefer **INSERT INTO SELECT** from an external staging table or use **Hive’s `MSCK REPAIR TABLE`** for partition discovery. Explain that I’d monitor the Hive Metastore logs and HDFS block placement to ensure data locality and avoid single points of failure. This shows structured thinking, depth in implementation details, and awareness of operational nuances—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
