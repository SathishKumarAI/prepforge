---
qid: ing_838da6d443__star__local
question: 'Explain: Indexer — Doccollaborationdropboxgoogledocs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 356
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:56:28-05:00'
sources: []
---

**Situation**  
While leading a feature‑engineering sprint at a startup building a real‑time collaborative editor, we noticed that search latency in the shared document space was growing from 150 ms to over 1 s as our user base hit 20k active documents.

**Task**  
I had to design an indexer that could keep up with frequent edits and provide sub‑100 ms lookup for keyword queries across all open docs, without locking the editor’s main thread or consuming excessive memory.

**Action**  
I implemented a hybrid inverted‑index pipeline using Apache Lucene for full‑text tokenization and Redis Streams to capture edit events. Each document update was pushed as a lightweight delta; the indexer ran in a separate worker pool, updating term postings incrementally. I added field‑level caching for “title” and “author” metadata and leveraged Bloom filters to quickly discard non‑matching docs before hitting the index. The system also maintained a background compaction job that merged small segment files every night, keeping read throughput high.

**Result**  
Search latency dropped from 1 s to 80 ms on average; hit‑rate for keyword queries rose to 96%. We reduced memory usage by 35% compared to the naive in‑memory index. The exercise taught me how to balance real‑time indexing with scalability, and reinforced the importance of decoupling heavy I/O from user‑facing threads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
