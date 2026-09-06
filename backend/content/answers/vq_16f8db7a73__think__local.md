---
qid: vq_16f8db7a73__think__local
question: Describe the process of executing free-form SQL query to import rows?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 470
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:12:28-05:00'
sources: []
---

**1. Clarify the goal and constraints**  
   - Ask whether the data source is a local file, another database, or an external API.  
   - Confirm permissions: does the user have read access to the target table?  
   - Note any size limits (e.g., bulk‑load vs. row‑by‑row) and performance expectations.

**2. Adopt a “query → fetch → load” mental model**  
   1. *Query* – build the SQL SELECT that pulls exactly the rows needed.  
   2. *Fetch* – execute it against the source, stream results if possible.  
   3. *Load* – insert into the destination using an efficient method (bulk insert, COPY, or staging table).

**3. Step‑by‑step reasoning**  
   - Draft the SELECT with filters, joins, and projections that match the target schema.  
   - Test the query in a sandbox to verify row count and data types.  
   - Decide on a fetch strategy: cursor for large sets, or `LIMIT/OFFSET` paging if needed.  
   - Choose a load method:  
     * If destination is another DBMS that supports bulk import (e.g., `INSERT … SELECT`, `COPY FROM`), use it.  
     * For big data stores (HDFS, Snowflake), convert to CSV/Parquet and load via the platform’s ingestion tool.  
   - Wrap the whole flow in a transaction or batch job with error handling and logging.

**4. Avoid common pitfalls**  
   - Forgetting to cast types or handle NULLs.  
   - Using `SELECT *` when the schema has changed.  
   - Ignoring locking/row‑level contention on large tables.  
   - Not cleaning up temporary staging objects after load.

**5. Sanity‑check and communicate**  
   - Verify row counts before and after, compare checksums if possible.  
   - Present a concise pipeline diagram: Source → Query → Fetch → Load → Target.  
   - Highlight key parameters (batch size, timeout) so stakeholders can tweak performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
