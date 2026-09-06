---
qid: vq_6422da4a7c__faang__local
question: What are the types of tables in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 561
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:13:31-05:00'
sources: []
---

**Clarify**  
The interview asks for *the different kinds of tables that can exist in Apache Hive*. I’ll assume we’re talking about table metadata stored in the Hive metastore and not about storage formats alone.

**Approach**  
I’ll first list the high‑level categories, then explain each subtype’s purpose and typical use case. I’ll also note any caveats (e.g., external tables require a managed location).

**Depth**

| Table type | Definition | Typical use |
|------------|------------|-------------|
| **Managed (Internal)** | Hive owns the data; dropping the table deletes both metadata *and* underlying files in HDFS/other storage. | Development, ETL staging where data is not needed after job completion. |
| **External** | Only the metadata lives in Hive; the data resides at a user‑supplied path. Dropping the table removes metadata but preserves files. | Sharing data between Hive and other tools, long‑term storage, or when you want to keep raw files. |
| **Transactional (ACID)** | Requires `transactional=true` and ORC format with ACID support; supports INSERT/UPDATE/DELETE. | OLTP workloads or incremental processing where data mutability is needed. |
| **Partitioned** | Data physically split by one or more columns; each partition maps to a sub‑directory. | Improves query performance on large datasets when filtering on the partition key(s). |
| **Bucketed** | Rows are distributed into a fixed number of buckets based on hash of a column, optionally sorted within each bucket. | Enables efficient joins and aggregations on bucket columns; often combined with partitioning. |
| **External Hive‑On‑Spark/Presto tables** | Logical tables that point to data stored in non‑Hive systems (e.g., S3, HBase). | Allows querying external datasets without moving them into Hive’s warehouse. |

**Edge cases**

* Dropping a managed table with `CASCADE` removes all child objects (views, functions).
* External tables cannot be transactional unless the underlying storage supports ACID.
* Partition pruning only works when query predicates match partition columns.

**Optimize & communicate**  
I’d emphasize that most applications use *managed + partitioned* for ease of maintenance, while *external + bucketed* is common in production pipelines where data lives long‑term outside Hive. I’d finish by noting the trade‑off: managed tables simplify lifecycle but risk accidental data loss; external tables give control but require careful path management. This structure demonstrates clear reasoning, covers depth, and anticipates edge cases—key for a FAANG score.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
