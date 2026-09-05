---
qid: vq_905eb6665b__star__local
question: What is ROWID and ROWNUM in SQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 349
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:09:39-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with optimizing a nightly ETL that pulled millions of rows from a legacy Oracle database into our data warehouse. The extract job kept timing out because the source table had no clustered index and the query engine kept scanning the entire table for each batch.

**Task:**  
I needed to redesign the extraction logic so it could fetch 10 M rows in under an hour, while still preserving row order for downstream processing.

**Action:**  
I leveraged Oracle’s physical identifiers: **ROWID**, a unique pointer to a row’s location on disk, and **ROWNUM**, a pseudo‑column that assigns a sequence number to each row returned by the query. By adding `SELECT ROWID FROM source_table` I could fetch rows in the order they physically reside, avoiding costly index lookups. Then I used `WHERE ROWNUM <= 1000000` within a cursor loop to pull data in controlled chunks, committing every million rows to keep memory usage low. To preserve logical ordering for downstream consumers, I added a temporary surrogate key based on `ROWNUM`.

**Result:**  
The ETL runtime dropped from 3 hours to just 45 minutes—a 85% reduction—while the extracted dataset remained fully consistent and order‑preserved. I learned that understanding Oracle’s internal row identifiers can dramatically improve performance for large, unindexed tables, and that combining ROWID with ROWNUM in a paginated fashion is a robust pattern for bulk data movement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
