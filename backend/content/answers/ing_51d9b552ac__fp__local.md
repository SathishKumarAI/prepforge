---
qid: ing_51d9b552ac__fp__local
question: Sources change constantly. How do you keep the vector index in sync - including
  deletes?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 465
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:59:08-05:00'
sources: []
---

**Why a vector index must stay consistent**

When an application maps documents to dense vectors and builds an inverted‑like structure (e.g., IVF, HNSW), the *index* is a data‑dependent approximation of a similarity graph. Every query walks that graph assuming every node still represents a live document. If a source disappears or mutates, the graph becomes stale: a dead vector may be returned, or a new one might be missed. The fundamental problem is **data‑driven consistency**—the index must mirror the underlying corpus to preserve recall and precision.

**How it can be achieved**

1. **Versioned updates** – Treat each ingestion batch as a *commit*. Store a monotonically increasing version number with every vector.  
   - *Add*: insert new nodes under that commit.  
   - *Delete*: mark nodes with the current version as “tombstoned” instead of physically removing them.  

2. **Periodic rebuilds** – After a configurable number of commits (or when a deletion threshold is crossed), trigger an incremental rebuild:  
   - Scan only vectors whose version ≤ last committed version and are not tombstoned.  
   - Re‑construct the graph or prune deleted nodes in place (HNSW supports dynamic deletions via lazy removal).  

3. **Lazy pruning + consistency check** – During queries, if a retrieved vector is marked dead, skip it and continue traversing. The cost of occasional false positives is amortized by infrequent rebuilds.

**Non‑obvious insight**

Most systems treat deletes as “remove immediately.” In high‑throughput settings, that incurs O(n) restructuring or expensive lock contention. By **tombstoning** and rebuilding only when a *critical mass* of deletions accumulates, you convert many small updates into a single bulk operation, preserving throughput while guaranteeing eventual consistency.

Thus, the index stays in sync by coupling *temporal versioning*, *lazy deletion markers*, and *periodic incremental rebuilds*, all grounded in the principle that an approximate nearest‑neighbour graph must reflect the current state of its underlying data to maintain query quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
