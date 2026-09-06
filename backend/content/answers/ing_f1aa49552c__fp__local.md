---
qid: ing_f1aa49552c__fp__local
question: 'Explain: Each index, shard, segment and field has overhead'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 449
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:33:10-05:00'
sources: []
---

### Why every **index / shard / segment / field** carries extra bytes

In a search engine the data are stored on disk and read into memory only when needed.  
Each logical unit (an index, a shard, a Lucene *segment*, or even a single *field*) is
a self‑contained data structure that must be **locatable, searchable, and mergeable**.

| Unit | What it stores | Why overhead exists |
|------|----------------|---------------------|
| **Index** | Global metadata (schema, routing tables) + list of shards | The engine needs to know *where* each shard lives; a small per‑index dictionary (≈ kB) keeps this mapping. |
| **Shard** | A copy of the index split by key ranges | Shards are treated as independent Lucene indices. Each one must keep its own segment list, commit log, and lock files. That adds ≈ hundreds of bytes per shard. |
| **Segment** | Sorted postings + inverted‑list blocks | Segments are immutable; each has a header (doc count, term dictionary offset, compression flags) so that they can be merged or discarded independently. |
| **Field** | Per‑field metadata (type, analyzer, norms) | The field dictionary allows quick lookup of term dictionaries and term vectors; it also stores per‑field boosts and norms, which must exist for every document in the segment. |

The overhead is unavoidable because:

1. **Random access** – each unit must be independently seekable.
2. **Mergeability** – immutable segments need headers to merge efficiently.
3. **Fault isolation** – a corrupted shard should not bring down the whole index.

A non‑obvious insight:  
*Segment headers are deliberately kept very small (≈ 200 B) so that even thousands of them fit in RAM, enabling fast merges and low disk I/O. The cost paid now pays off by keeping the merge process linear rather than quadratic.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
