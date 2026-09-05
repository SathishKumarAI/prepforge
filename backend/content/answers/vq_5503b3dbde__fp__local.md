---
qid: vq_5503b3dbde__fp__local
question: what are hive managed Hbase tables and how to create that?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 451
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:35:43-05:00'
sources: []
---

### Why a “Hive‑managed HBase table” exists

The core problem is **cross‑store queryability**: users want to write SQL on tabular data that lives in HBase’s row‑key‑based store without inventing a new language or manual schema migrations. Hive solves this by acting as an *abstraction layer*—it maps relational concepts (tables, columns, partitions) onto Hadoop’s file system or key–value stores. A Hive‑managed HBase table is simply a logical view that tells Hive to delegate storage and retrieval to HBase while still exposing a SQL interface.

### How it works

1. **Create the table** with `STORED BY 'org.apache.hadoop.hive.hbase.HBaseStorageHandler'`.  
2. **Define columns** as usual; they become HBase qualifiers under a specified column family.  
3. **Specify options** (`hbase.table.name`, `hbase.columns.mapping`) so Hive knows which HBase table and families to use.  
4. When you run `INSERT/SELECT`, Hive translates the SQL into HBase scans or puts via the storage handler.

```sql
CREATE TABLE hive_hbase (
  id    STRING,
  name  STRING,
  age   INT
)
STORED BY 'org.apache.hadoop.hive.hbase.HBaseStorageHandler'
WITH SERDEPROPERTIES ('hbase.columns.mapping' = 
    ":key,cf:name,cf:age")
TBLPROPERTIES ('hbase.table.name'='users');
```

### Non‑obvious insight

Hive‑managed HBase tables **do not create the HBase table**; they merely point to an existing one. If you drop the Hive table, the underlying HBase data remains untouched. This separation allows you to evolve schemas in HBase (add families) without redefining Hive metadata, but it also means you must manage HBase lifecycle (creation, compaction, backup) separately—a subtle point often overlooked when first integrating the two systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
