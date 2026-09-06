---
qid: vq_1e2be9f23a__think__local
question: What is the difference between Table scan and seek ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 420
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:14:38-05:00'
sources: []
---

**Thought‑Process Guide: Understanding “Table Scan” vs “Seek”**

1. **Clarify the Context & Assumptions**  
   - Identify the database engine (e.g., SQL Server, PostgreSQL) and storage format (heap, clustered index).  
   - Assume we’re discussing query execution plans where a *scan* touches all rows and a *seek* targets specific ones via an index.  

2. **Adopt a Mental Model**  
   - Treat the table as a physical list of records.  
   - View indexes as secondary “address books” that map key values to record locations.  
   - Recognize that a scan is linear traversal; a seek uses the address book for random access.

3. **Step‑by‑Step Reasoning**  
   - *Table Scan*: engine reads every page/row, filtering in memory → high I/O, good when most rows are needed or no index exists.  
   - *Seek*: engine consults an index B‑Tree (or similar), jumps directly to matching leaf nodes → minimal I/O, ideal for selective predicates.  
   - Compare costs: scan cost ≈ `total_pages × page_read_time`; seek cost ≈ `index_lookup + leaf_page_reads`.  

4. **Avoid Common Traps**  
   - Don’t conflate “scan” with “full table scan”; a *clustered index scan* still reads all rows but uses the index order.  
   - Remember that a seek can degrade to a scan if the predicate is non‑selective or the index is fragmented/unused.

5. **Sanity‑Check & Communicate**  
   - Verify with an execution plan: look for `Index Seek` vs `Table Scan`.  
   - Explain in plain terms: “Seek” = fast, targeted lookup; “Scan” = exhaustive walk through every row.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
