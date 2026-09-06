---
qid: ing_9df1750363__fp__local
question: 'Explain: Search Indexing — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 587
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:41:18-05:00'
sources: []
---

**Why we need CDC for a search index**

A full‑rebuild of a distributed inverted index is \(O(N)\) in the number of documents and cannot keep up with real‑time user queries.  
The *fundamental problem* is that a search engine must maintain **staleness ≤ Δ** (e.g., 1 s) while ingesting updates at millions per second.

---

### 1. Core principle: incremental propagation

Let \(D_t\) be the document set at time \(t\).  
Updates are expressed as a delta \(\Delta D_{t+1}=D_{t+1}\setminus D_t\).  
If we can apply \(\Delta D_{t+1}\) to every shard in parallel, the cost per update is proportional to the *size of the change*, not the entire corpus.  
This is a direct application of **incremental computation** (cf. differential dataflow).

### 2. System design components

| Layer | Role |
|-------|------|
| **Change Producer** (Kafka / Pulsar) | Emits fine‑grained events: `INSERT`, `UPDATE`, `DELETE` with primary key and payload. Guarantees ordering per key. |
| **CDC Processor** (Flink/Beam) | Materializes *current state* using a key‑by operator; emits *index operations* (e.g., term → posting list delta). Handles schema evolution via change‑feed adapters. |
| **Index Updater** (Elasticsearch / Solr shards) | Consumes the delta stream, updates postings atomically per shard. Uses a write buffer + batch flush to keep throughput high while preserving consistency. |
| **Versioned Snapshot Store** | Keeps a copy of each document’s last indexed version for idempotency and rollback. |

### 3. Deep insight

Most designs treat CDC as an “append‑only” log, but the *real bottleneck* is the **post‑processing cost of term extraction**.  
By caching a *partial inverted index* per micro‑batch (e.g., a Bloom‑filter of terms seen in that batch), we can skip re‑tokenizing unchanged fields—saving CPU and I/O by an order of magnitude.

### 4. Correctness

Because each CDC event is idempotent (same key → same final state) and processed in strict order, the index remains **monotonic**: every query sees a consistent snapshot that never regresses.

---

In short, CDC turns the *global* re‑indexing problem into a *local*, incremental one governed by differential dataflow, yielding sub‑second latency with linear scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
