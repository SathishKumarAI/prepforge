---
qid: vq_5822e7248c__faang__local
question: How can I prevent tablespace fragmentation?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 521
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:11:30-05:00'
sources: []
---

**1️⃣ Clarify**

You’re asking how to keep a database’s tablespace from becoming fragmented so that performance and storage usage stay optimal.  
Assumptions:  
- RDBMS supports *tablespaces* (Oracle, PostgreSQL with tablespaces).  
- We can modify DDL or maintenance routines but not the underlying engine.  
- “Fragmentation” refers to unused gaps between allocated extents, causing read‑latency and wasted space.

**2️⃣ Approach**

1. Use *autonomous* tablespace allocation (automatic extent sizing).  
2. Periodically run `ALTER TABLE … MOVE` or `REORG`.  
3. Keep a uniform *extent size* for similar objects.  
4. Avoid excessive TRUNCATE/DELETE on large tables; use *partitioning*.  
5. Monitor with tools (`DBA_TABLESPACE_USAGE_METRICS`, `pgstattuple`).  

**3️⃣ Depth**

- **Automatic Extent Management**: In Oracle, set `MAXEXTENTS = UNLIMITED` and let the system grow in 1‑MB increments; this reduces fragmentation because extents are contiguous.  
- **Reorganization**: `ALTER TABLE … MOVE` physically rewrites the table, packing rows back-to-back and updating indexes. Complexity is O(N) on row count but can be scheduled during low load.  
- **Partitioning**: Split a large table into ranges or hash partitions; each partition gets its own tablespace or extent strategy, limiting fragmentation to smaller units.  
- **Compression & Shrink**: Use `ALTER TABLE … SHRINK SPACE` in Oracle or `VACUUM FULL` in PostgreSQL; both defragment and reclaim space but lock the table temporarily.

**4️⃣ Edge Cases**

- Tables with frequent updates may re‑fragment quickly; schedule nightly REORG.  
- Very small tables benefit little from MOVE—skip to avoid overhead.  
- Partitioned tables: if partitions are unevenly sized, consider *partition merge* or *split*.  

**5️⃣ Optimize & Communicate**

Start by automating extent sizing and periodic REORGs. Add a monitoring dashboard that alerts when fragmentation > 10%. Document the impact: “After 3‑month reorg cadence, read latency dropped 15% and free space grew by 8%.” This shows data‑driven ROI and keeps interviewers impressed with structured thinking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
