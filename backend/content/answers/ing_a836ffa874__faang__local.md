---
qid: ing_a836ffa874__faang__local
question: 'Explain: Rollover — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 472
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:15:54-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *Rollover* feature for data streams in Elasticsearch (Elastic Docs).  
Assumptions: you know what a data stream is (logical view over multiple backing indices), and that rollover is used to create new indices when size/age limits are hit.

**Approach**  
1. Define a data stream and its backing indices.  
2. Describe the *rollover* API: trigger, conditions (`max_size`, `max_age`, etc.).  
3. Explain how Elasticsearch chooses the target index name.  
4. Mention how rollover keeps the stream readable while writing continues.  
5. Note related concepts (index templates, ILM policies).

**Depth**  
A data stream is a logical grouping of indices that share mapping and settings. The primary backing index is writable; others are read‑only.  
The *rollover* API (`POST /<data_stream>/_rollover`) checks the current index against predicates: `max_size` (e.g., 50 GB), `max_age` (e.g., 7 days). If any predicate is true, Elasticsearch creates a new backing index with an incremented number (`_000001`, `_000002`, …) and switches writes to it. The old index becomes read‑only but remains part of the stream for queries.  
The API can also be forced (`?dry_run=false`) or combined with `max_docs`. Rollover is often wired into Index Lifecycle Management (ILM) policies, automating retention (`delete`, `warm`, etc.) after rollover.

**Edge cases**  
- No backing index → error.  
- Predicate never satisfied → no rollover.  
- Concurrent rollovers on same stream → atomic lock prevents race conditions.  
- Extremely large size thresholds may delay rollover; test with synthetic indices.

**Optimize & communicate**  
Highlight that rollover keeps ingestion throughput high (no reindexing) and simplifies retention by decoupling index creation from lifecycle policy. In an interview, I’d conclude: “Rollover is the glue between a logical data stream and its physical storage, enabling scalable, time‑based partitioning while preserving query simplicity.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
