---
qid: vq_a2c1c115c9__star__local
question: How to fetch alternate records from a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 338
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:12:53-05:00'
sources: []
---

**Situation** – In the quarterly reporting pipeline for our retail client, the nightly ETL was pulling millions of transaction rows from a legacy MySQL table into a BigQuery warehouse. The downstream analytics dashboards only needed every other record to reduce noise and storage costs, but our original script was fetching all rows and then filtering in Python, which slowed the job by 40 %.  

**Task** – Redesign the extraction step so that only alternate rows were retrieved directly from the source, cutting runtime and I/O while keeping data integrity for downstream joins.  

**Action** – I added a `ROW_NUMBER()` window function on the primary key in a temporary MySQL view:  
```sql
CREATE VIEW txn_alt AS
SELECT *
FROM (
  SELECT *, ROW_NUMBER() OVER (ORDER BY id) rn
  FROM transactions
) t
WHERE MOD(rn,2)=1;
```  
The ETL then queried `txn_alt` instead of the base table. I validated parity by comparing row counts and a checksum sample against the full table. The change required minimal schema updates and no changes to downstream logic because the view presents the same columns as the original table.  

**Result** – The nightly job now runs 35 % faster, reducing compute cost from $12 to $8 per run. Storage consumption dropped by ~50 %. I learned that leveraging database-level row filtering can eliminate expensive post‑processing and that a simple modulo trick is often enough for “alternate record” requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
