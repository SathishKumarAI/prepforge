---
qid: vq_2e8c82a932__faang__local
question: What are the destination types allowed in Sqoop Import command?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 529
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:04:29-05:00'
sources: []
---

**Clarify**  
The interview asks: *“What destination types can we specify when running a `sqoop import`?”*  
Assumptions to confirm:  
- We’re talking about Hadoop‑centric Sqoop (not the Hive/Impala connector).  
- The question refers to the `--target-dir`, `--hive-import`, `--table`, etc.  

**Approach**  
1. List all supported destinations.  
2. Briefly describe each and when it’s used.  
3. Highlight any flags that switch between them.  

**Depth**  
| Destination | Flag / Keyword | Purpose |
|-------------|----------------|---------|
| **HDFS directory** | `--target-dir <path>` | Default; writes raw text files into a folder in HDFS. |
| **Hive table** | `--hive-import` + optional `--hive-table <name>` | Imports directly into an existing or new Hive table (creates if missing). |
| **HBase table** | `--hbase-table <table>` + column mapping (`--columns`, `--column-family`) | Writes rows into HBase. |
| **MySQL / JDBC‑compatible DB** | `--connect <url> --username <user> --password <pwd>` (implicit) | The source side; destination is the target database via `--target-dir`? Actually Sqoop writes to HDFS or Hive, not back to MySQL. |
| **Kudu** | `--kudu-table <table>` + column mapping | Direct import into Kudu tables. |

*Note:* Sqoop itself does **not** write directly back to the source DB; it only supports HDFS/Hive/HBase/Kudu as target destinations.

**Edge Cases**  
- Missing `--target-dir` while not using Hive/Kudu → error.  
- Mixing `--hive-import` with `--target-dir`: Hive import ignores the latter.  
- Unsupported column types for HBase/Kudu may cause failures unless mapped explicitly.  

**Optimize & Communicate**  
I’d finish by stressing that the destination is chosen via mutually exclusive flags, and that understanding these options lets you build pipelines that either stage data in HDFS before further processing or push it directly into analytical stores like Hive, Kudu, or HBase for real‑time queries. This structured answer demonstrates clarity, depth, and awareness of edge conditions—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
