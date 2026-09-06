---
qid: vq_42e37d78d7__faang__local
question: Why we use Hbase and how it store data?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 461
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:07:38-05:00'
sources: []
---

**Clarify**  
The interviewer asks why HBase is chosen in a big‑data stack and how it physically stores rows. I’ll confirm that we’re talking about a column‑oriented NoSQL store on top of HDFS, not a relational DB, and that the focus is on storage format (row key, columns, blocks).

**Approach**  
1. List key use cases: low‑latency random reads/writes, sparse data, large row sets.  
2. Explain architecture: region servers, memstore + WAL, HFile compaction.  
3. Detail the storage layout: sorted by row key → block cache → on‑disk HFiles with compression.

**Depth**  
- **Why HBase?** It provides ACID‑like atomicity per row, horizontal scalability, and real‑time access to massive datasets where a relational engine would choke on lock contention or slow batch scans.  
- **Data model:** Each cell is identified by *row key + column family + qualifier + timestamp*. Cells are stored in a sorted map (B+tree) inside the memstore; when flushed, they become immutable HFiles.  
- **Storage layout:** An HFile contains blocks of compressed data (Snappy/Deflate). Within each block, cells are grouped by column families to exploit locality. The WAL records every write for crash recovery before it hits disk.  
- **Access path:** Reads hit the memstore first, then the block cache; if miss, a direct lookup in the relevant HFile via its index.

**Edge Cases**  
- Extremely wide tables can cause large blocks → slower scans.  
- Hot row keys lead to region server overload; need pre‑splitting or auto‑sharding.  
- Skewed timestamps may bloat cell versions if not trimmed.

**Optimize & Communicate**  
I’d highlight tuning knobs: block size, compression codec, Bloom filters for read amplification. I’d explain how these choices trade off latency vs. storage cost, and mention that careful region design (based on key distribution) is critical to avoid hotspots—this shows my understanding of both theory and practical ops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
