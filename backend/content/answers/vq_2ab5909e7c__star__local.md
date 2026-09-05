---
qid: vq_2ab5909e7c__star__local
question: What are the two types of fragmentation?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 299
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:53:05-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with optimizing a large-scale ETL pipeline that ingested millions of daily logs into our Snowflake warehouse. The query performance had dropped from sub-second to over ten seconds for key dashboards.

**Task:**  
I needed to identify the root cause and reduce query latency by at least 50% before the next quarterly reporting cycle.

**Action:**  
I first examined how data was physically stored in the warehouse. Two main fragmentation types surfaced: **internal fragmentation**, where small, unused spaces accumulate inside micro‑partitions due to frequent updates and deletes; and **external fragmentation**, where related rows are scattered across many partitions because of non‑optimal clustering keys. I ran a `SHOW PARTITIONS` analysis, then re‑clustered the table on the most selective column (`event_type`) and performed a `VACUUM` operation to compact internal gaps. I also scheduled periodic `RECLUSTER` jobs during off‑peak hours.

**Result:**  
After these changes, query runtimes dropped from 12 s to 4.5 s—a 62% improvement—and storage costs fell by ~15% due to reduced duplicate space. The exercise reinforced that understanding both internal and external fragmentation is essential for maintaining high performance in modern columnar warehouses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
