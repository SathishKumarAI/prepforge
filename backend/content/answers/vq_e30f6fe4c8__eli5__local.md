---
qid: vq_e30f6fe4c8__eli5__local
question: How to access HBase tables from Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 554
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:31:49-05:00'
sources: []
---

Imagine HBase is a giant library where each book (row) is stored in a hidden drawer that only the librarian knows how to open. Hive is like a friendly guide who can read the books but usually works with shelves (relational tables). To let the guide access the hidden drawers, we give him a special key.

**Step 1 – Install the HBase‑Hive connector.**  
Just as you’d bring a new tool to your library, download and put the `hbase-hive` JAR into Hive’s classpath (`$HIVE_HOME/lib`). This is the “key” that lets Hive understand how to talk to HBase.

**Step 2 – Tell Hive where the key lives.**  
Add these lines to `hive-site.xml` (or use `SET` in a session):

```
set hive.metastore.warehouse.dir=/user/hive/warehouse;
set hbase.zookeeper.quorum=zk1,zk2,zk3;   # HBase’s ZooKeeper hosts
```

**Step 3 – Create an external Hive table that maps to the HBase table.**  
Just as you’d describe a drawer’s contents to the guide:

```sql
CREATE EXTERNAL TABLE hbase_test (
  row_key STRING,
  cf1_col1 STRING,
  cf1_col2 INT
)
STORED BY 'org.apache.hadoop.hive.hbase.HBaseStorageHandler'
WITH SERDEPROPERTIES ('hbase.columns.mapping' =
   ":key,cf1:col1,cf1:col2");
```

`row_key` is the drawer’s label; `cf1_col1`, `cf1_col2` are columns inside a column family (`cf1`). Hive now knows how to open each drawer and read or write data.

**Step 4 – Query as usual.**

```sql
SELECT * FROM hbase_test WHERE row_key = 'row123';
```

Hive uses the connector (the key) to fetch that specific drawer from HBase, turning it into a normal SQL result set.

*Unavoidable terms:*  
- **HBase**: A NoSQL database storing data in tables with rows and column families.  
- **Hive**: A data warehouse tool that lets you run SQL-like queries on Hadoop data.  
- **External table**: A Hive table that points to data stored outside Hive’s own storage (here, HBase).  

With the connector installed, Hive can read from and write to HBase just like any other table, letting you combine the flexibility of NoSQL with the familiarity of SQL.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
