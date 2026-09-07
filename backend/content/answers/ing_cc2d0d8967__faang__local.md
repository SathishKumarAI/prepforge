---
qid: ing_cc2d0d8967__faang__local
question: 'Explain: Changing Data Structures is Complicated — Bonsai Blog | Fully
  Managed Elasticsearch & OpenSearch \u2022 Why Elasticsearch should not be your Primary
  Data Store'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 481
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:34:00-05:00'
sources: []
---

**Clarify**  
You’re asking *why shifting the schema or underlying data structure in an Elasticsearch/OpenSearch cluster is fraught with difficulty*, especially when considering it as a primary store. The core issue is that these systems are built for immutable, append‑only ingestion; changing how data is laid out forces costly re‑indexing and can break query semantics.

**Approach**  
1. Highlight the immutability model of Lucene indices.  
2. Explain the cost of re‑indexing (disk I/O, CPU, downtime).  
3. Discuss mapping evolution limits (no true “alter table” semantics).  
4. Touch on operational pitfalls: shard split/merge, field data caches, and search performance regressions.

**Depth**  
- **Immutable shards**: Each document lives in a segment; once written it never moves. A schema change means creating new segments or re‑indexing the entire collection.  
- **Mapping constraints**: Adding/removing fields is allowed only if compatible (e.g., adding a field is fine, dropping one isn’t). Changing analyzers or data types requires a full rebuild.  
- **Re‑index overhead**: For terabytes of data, re‑indexing can take hours/days, consuming cluster resources and potentially causing shard failures.  
- **Operational risk**: During migration you must maintain read consistency (e.g., dual writes), handle index aliases, and ensure search latency doesn’t spike.

**Edge cases**  
- Small indices may be rebuilt quickly, but large ones break service windows.  
- Schema drift in a multi‑tenant environment can lead to data loss if mapping conflicts arise.  
- Elastic’s “dynamic templates” can mask issues until queries fail at runtime.

**Optimize & communicate**  
Use *index aliases* and *rollover indices* for continuous ingestion; plan schema changes during low‑traffic windows; consider *data lakes* or relational stores for primary persistence, with Elasticsearch as a search layer. Communicate the trade‑off: “Elasticsearch excels at fast full‑text queries but is not designed for mutable schemas—think of it as a read‑optimized cache rather than an OLTP store.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
