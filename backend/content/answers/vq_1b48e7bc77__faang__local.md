---
qid: vq_1b48e7bc77__faang__local
question: What is Hive Managed and External tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 422
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:00:00-05:00'
sources: []
---

**Clarify**  
You’re asking about **Hive table types**—specifically *managed* (internal) vs *external*. The key point: ownership of data storage and lifecycle.

**Approach**  
1. Define each type.  
2. Explain storage location rules.  
3. Detail delete/alter behavior.  
4. Mention common use‑cases.  

**Depth**  
- **Managed Table** (default): Hive owns the data directory under `warehouse/<db>/<table>`. Dropping the table (`DROP TABLE`) deletes both metadata *and* the underlying HDFS files. It’s ideal for staging or temporary analytics where you don’t need to preserve raw data.  
- **External Table**: The user supplies a path (via `LOCATION`). Hive only manages the schema; dropping the table removes metadata but leaves the files untouched. This is used when the same dataset must be shared across systems, or when data originates outside Hive (e.g., S3).  

Both can be queried with standard SQL. They differ in **data lifecycle**, **partition handling** (managed partitions are deleted on `DROP TABLE PARTITION`), and **security** (external tables allow fine‑grained ACLs on the underlying storage).

**Edge Cases**  
- If you drop a managed table that lives in an external location, Hive will still delete those files—dangerous.  
- External tables can become “dangling” if the underlying data is moved or deleted outside Hive; queries fail silently until refreshed.

**Optimize & Communicate**  
Emphasize: choose *managed* for quick prototyping and when you own the data; choose *external* for shared, immutable datasets or when integrating with other big‑data tools. Clarify that `CREATE TABLE … STORED AS` defaults to managed unless `EXTERNAL` is specified. This concise mapping shows clear decision logic—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
