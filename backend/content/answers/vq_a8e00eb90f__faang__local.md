---
qid: vq_a8e00eb90f__faang__local
question: What are managed and external tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 414
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:27:02-05:00'
sources: []
---

**Clarify**  
> *What’s the difference between a “managed” table and an “external” table, and why would we choose one over the other?*  
Assumptions: We’re talking about Hive/BigQuery‑style data warehouses where tables can be either fully owned by the warehouse or reference external storage (S3/GCS).  

**Approach**  
1. Define each term in plain language.  
2. Explain lifecycle & metadata ownership.  
3. List typical use cases and trade‑offs.  

**Depth**  
- **Managed Table** – The warehouse owns both schema *and* data files. When you drop the table, all underlying files are deleted (garbage‑collected). Data is stored in a system‑managed location (`/user/hive/warehouse/<table>`). Good for transactional workloads and quick prototyping.  
- **External Table** – Schema lives in the warehouse, but the data resides in external storage you control (S3, ADLS, GCS). Dropping the table only removes metadata; the files stay intact. Ideal for shared datasets, cost‑control (you pay for object store), or when you need to preserve raw logs across multiple tools.

**Edge Cases**  
- **Data format mismatches** – External tables require explicit schema mapping (parquet/avro).  
- **Security & ACLs** – Managed tables inherit warehouse IAM; external tables rely on storage‑level permissions.  
- **Performance** – Partition pruning works similarly, but external tables may need to be refreshed if the underlying data changes.

**Optimize & Communicate**  
Highlight that choosing “managed” gives you simplicity and automatic lifecycle management, while “external” offers flexibility, cost efficiency, and interoperability. In practice, we often start with external tables for raw ingestion pipelines, then materialize managed tables for curated analytics views. This balances governance with performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
