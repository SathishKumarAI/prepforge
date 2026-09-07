---
qid: vq_c9568f3ae3__aws__local
question: How can we import data from particular row or column?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 529
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:14:10-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of a legacy sales database to an Amazon Redshift warehouse so that downstream analytics could run 4× faster. The business needed the ability to pull only specific rows (e.g., last‑month orders) and columns (price, quantity) into the warehouse for compliance reviews without moving the entire table.

**Action**  
1. **Data catalog & partitioning** – I created an AWS Glue Data Catalog that defined a schema with *order_date* as a partition key.  
2. **Targeted ingestion** – Using **AWS Glue ETL jobs** (Python‑Spark), I wrote a script that:
   - Reads from the source MySQL via JDBC.  
   - Filters on `WHERE order_date BETWEEN '2024-08-01' AND '2024-08-31'`.  
   - Selects only `order_id, price, quantity` columns.  
3. **Incremental load** – The job writes to S3 in Parquet under the partitioned folder structure (`orders/date=2024‑08‑xx/`).  
4. **Redshift COPY** – I scheduled a Redshift `COPY` command that pulls only the new partitions into the target table, using compression and concurrent copy slots for speed.

**Result**  
- Reduced nightly load time from 3 hrs to 15 mins (84% faster).  
- Cut storage costs by 60 % because we stored only required columns in columnar format.  
- Compliance team now can run ad‑hoc queries on the latest month with <5 s latency.

**Amazon Leadership Principles**  
- **Customer Obsession** – Delivered precise, low‑latency data for compliance, directly meeting stakeholder needs.  
- **Ownership & Dive Deep** – Took full ownership of the ingestion pipeline and engineered a solution that cut costs and improved performance by diving into schema design, partitioning strategy, and AWS service capabilities.

**Bar‑raiser cues**  
- Demonstrated *ownership* by handling end‑to‑end data flow.  
- Showed *depth* through explicit partitioning and compression choices.  
- Quantified impact with real metrics (time & cost savings).  
- Learned from a failed initial attempt that loaded entire tables, leading to the refined targeted approach above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
