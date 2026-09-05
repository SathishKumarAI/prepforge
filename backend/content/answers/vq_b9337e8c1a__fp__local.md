---
qid: vq_b9337e8c1a__fp__local
question: List all basic sqoop commands along with their properties?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 459
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:53:21-05:00'
sources: []
---

**Sqoop – the bridge between Hadoop and relational stores**

| Command | What it does | Key properties | Why it works this way |
|---------|--------------|----------------|-----------------------|
| `sqoop import` | Pulls a table/SQL query into HDFS as one or more files. | *--table*, *--query*, *--target-dir*, *--split-by*, *--num-mappers* | Splits the source on a column so each mapper reads a distinct key range, exploiting parallelism and avoiding duplicate rows. |
| `sqoop export` | Pushes data from HDFS back into an RDBMS table. | *--table*, *--export-dir*, *--input-fields-terminated-by* | Each mapper writes to the DB in batches, keeping ACID semantics via JDBC transactions. |
| `sqoop list-tables` | Enumerates tables in a database. | *--connect*, *--username* | Uses metadata queries (e.g., `SHOW TABLES`) to discover schema. |
| `sqoop describe` | Shows column names/types of a table. | *--table* | Queries the information schema, enabling type‑safe mapping. |
| `sqoop eval` | Executes an arbitrary SQL statement and streams results to stdout. | *--query*, *--driver* | Useful for quick checks without creating files. |

**Underlying principle:** Sqoop turns a distributed file system into a “relational” view by partitioning data on a key, then applying map‑reduce to read/write in parallel. This leverages the *divide‑conquer* optimization of Hadoop while preserving transactional integrity via JDBC.

> **Non‑obvious insight:** The `--split-by` column must be *highly cardinal and evenly distributed*. If you pick an ID that is sequential, early mappers finish quickly but later ones stall on a long tail—this is the “straggler” problem in data import. Choosing a hash of a composite key can balance load more effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
