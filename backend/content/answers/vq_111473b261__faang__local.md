---
qid: vq_111473b261__faang__local
question: what is the default location for hive to store in table data?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 431
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:58:10-05:00'
sources: []
---

**Clarify**  
The question asks *where* Hive writes table data by default when you create a table without specifying an external path. I’ll assume we’re talking about **managed (internal) tables** in Hive‑on‑Hadoop, and that the cluster uses the standard Hadoop configuration.

---

**Approach**  
1. Recall Hive’s storage model (managed vs external).  
2. Identify the default warehouse directory (`hive.metastore.warehouse.dir`).  
3. Explain how the table name maps to a subdirectory there.

---

**Depth**  
Hive stores managed tables under **`$HIVE_HOME/conf/hive-site.xml`**’s property `hive.metastore.warehouse.dir`.  
* Default value:* `file:///user/hive/warehouse` on local‑fs, or `hdfs://namenode:8020/user/hive/warehouse` when HDFS is used.  
When you run  

```sql
CREATE TABLE sales (id INT, amount DOUBLE);
```

Hive creates the directory:

```
$HIVE_WAREHOUSE_DIR/sales/
```

and places partition folders (e.g., `year=2023/month=07`) and data files (`part-00000`, etc.) inside.  
If you specify an external table or provide a custom location with `LOCATION '...'`, Hive writes there instead.

---

**Edge Cases**  
* If the warehouse dir is on S3, the URI changes accordingly.  
* A non‑existent parent directory causes Hive to auto‑create it; permissions matter.  
* Multi‑tenant clusters may override the default per‑user directories.

---

**Optimize & Communicate**  
Explain that the default can be changed in `hive-site.xml` or via `SET hive.metastore.warehouse.dir=...;` at session start, allowing flexibility for data locality and governance. This concise explanation demonstrates knowledge of Hive’s storage defaults while highlighting configuration nuances, satisfying a FAANG interviewer's focus on clarity, depth, and practical awareness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
