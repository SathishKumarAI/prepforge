---
qid: vq_4ce85a09e8__faang__local
question: Can one selectively load only the data that you need?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 401
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:09:39-05:00'
sources: []
---

**Clarify**  
You’re asking whether a program can read *only* the subset of data it actually needs from storage (e.g., a file or database) rather than loading everything into memory. Assume we have large datasets that don’t fit in RAM and we want to avoid unnecessary I/O.

**Approach**  
1. Use **streaming/iterative reading**: read line‑by‑line, chunk‑by‑chunk.  
2. Apply **filter predicates** early: as soon as a record fails the filter, discard it.  
3. If the data source supports random access (e.g., indexed files or databases), use an **index lookup** to jump directly to relevant rows.

**Depth**  
- *Files*: open in text/binary mode and iterate; complexity O(n) I/O but constant memory.  
- *Databases*: construct a `SELECT … WHERE` query; the engine uses indexes, scanning only matching pages (cost ~O(log n + k)).  
- *Parquet/ORC*: leverage columnar storage—read only needed columns, skip blocks that don’t satisfy predicates via metadata.

Trade‑offs: streaming is simple but may still scan many irrelevant rows. Indexes reduce scans but add overhead on writes and require maintenance. Columnar formats give the best selective read for analytics workloads.

**Edge Cases**  
- No index → full table scan (inefficient).  
- Highly fragmented files → seek penalties.  
- Dynamic data: indexes can become stale; need to refresh or rebuild.

**Optimize & Communicate**  
Explain that selecting only needed data is standard practice in ETL and OLAP systems. Emphasize the importance of indexing, partitioning, and using columnar formats for optimal I/O patterns. Conclude by highlighting how these techniques keep memory usage low while maintaining acceptable performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
