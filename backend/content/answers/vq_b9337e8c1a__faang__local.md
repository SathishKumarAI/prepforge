---
qid: vq_b9337e8c1a__faang__local
question: List all basic sqoop commands along with their properties?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 659
total_tokens: 893
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:30:22-05:00'
sources: []
---

**Clarify**

You want a quick reference for the core Sqoop CLI commands and what each one does (e.g., import, export, job, list‑jobs). I’ll assume we’re talking about Hadoop‑YARN clusters with Hive/HBase integration.

---

### 1️⃣ `sqoop import`
* **Purpose** – Pull data from a relational DB into HDFS/Hive/HBase.  
* **Key flags** – `--connect`, `--username`, `--password`, `--table`/`--query`, `--target-dir`, `--hive-import`, `--hbase-table`, `--split-by`, `--num-mappers`.  
* **Typical use** – One‑time bulk load or scheduled batch.

### 2️⃣ `sqoop export`
* **Purpose** – Push data from HDFS back to a relational DB.  
* **Key flags** – `--connect`, `--username`, `--password`, `--table`, `--export-dir`, `--input-fields-terminated-by`, `--num-mappers`.  

### 3️⃣ `sqoop job`
* **Purpose** – Persist an import/export job for reuse.  
* **Sub‑commands** – `create`, `run`, `list`, `remove`, `show`.  
* **Key flags** – `--job-name`, plus all the options from import/export depending on type.

### 4️⃣ `sqoop list-databases`
* **Purpose** – Show DBs available via JDBC.  
* **Flags** – `--connect`, `--username`, `--password`.

### 5️⃣ `sqoop list-tables`
* **Purpose** – List tables in a given DB.  
* **Flags** – Same as above plus optional `--database`.

### 6️⃣ `sqoop eval`
* **Purpose** – Run arbitrary SQL against the source DB and output to stdout or HDFS.  
* **Flags** – `--query`, `--connect`, `--username`, `--password`.

---

#### Depth & Trade‑offs
- **`split-by` + `num-mappers`** → parallelism; choose a low‑cardinality column for speed but beware skew.
- **Hive/HBase integration** automatically creates tables/regions; ensure schema compatibility.
- **Export** is slower and less fault‑tolerant than import; use fewer mappers to reduce lock contention.

#### Edge Cases
- Missing JDBC driver → `ClassNotFoundException`.  
- Query with subqueries may need `--direct` or `--query` mode.  
- Export of very large files can hit HDFS block size limits.

#### Optimization & Communication
Explain that the most common pattern is *import → process in Hive/MapReduce → export*; caching results in Parquet/Hudi for incremental loads improves performance. When presenting, show a sample command flow and discuss when to use `--direct` (for MySQL) vs standard mode. This demonstrates structured thinking, depth, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
