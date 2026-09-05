---
qid: ing_36fe389e09__fp__local
question: 'Explain: Write index — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 464
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:01:20-05:00'
sources: []
---

**Why an “index” is needed for a data stream**

A *data stream* in Elasticsearch is a logical grouping of time‑ordered documents that share the same schema and lifecycle.  
The underlying storage, however, remains a set of immutable index files (Lucene segments). To route writes to the correct segment set, Elasticsearch must keep track of **where** each document belongs.

1. **Problem:** Incoming documents arrive continuously and may belong to any stream.  
   The system needs an efficient lookup that tells it *which* underlying Lucene index a new document should be appended to, without scanning all streams.

2. **Solution (index):**  
   - Every data‑stream is represented by a single *write* index (e.g., `my-stream-000001`).  
   - The write index is the only place that accepts `_doc` writes; all other indices are read‑only snapshots of past shards.  
   - When a document arrives, Elasticsearch consults the stream’s *metadata* to find its current write index and routes the request there.

3. **Why this design works:**  
   - **Append‑only semantics**: Lucene segments cannot be modified; they’re only merged. By funneling all writes into one mutable index, we avoid costly merges during ingestion.  
   - **Scalability**: Each write index can shard independently, allowing horizontal scaling while keeping routing trivial (just a hash of the stream name).  
   - **Lifecycle control**: When retention policies trigger rollover, Elasticsearch creates a new write index and updates the metadata atomically, ensuring that all subsequent writes go to the fresh segment set.

4. **Non‑obvious insight:**  
   The *index* is not just a storage bucket; it’s an *implicit version counter*. Each rollover increments the stream’s logical “generation.” Because Lucene segments are immutable, this counter guarantees that queries always hit the correct historical snapshot without needing to lock or rebuild indices during writes. This separation of concerns (immutable reads vs mutable writes) is the core optimization that lets data streams handle billions of events per day while keeping query latency low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
