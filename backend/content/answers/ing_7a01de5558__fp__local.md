---
qid: ing_7a01de5558__fp__local
question: How would you index a 100k-file monorepo so an AI editor can retrieve relevant
  context - and keep the index fresh as the user edits?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 409
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:23:48-05:00'
sources: []
---

**Why indexing matters**

An AI editor must *condition* on a subset of the code that is statistically related to the cursor position.  
If we treat each file as a point in an **information‑theoretic feature space**, relevance corresponds to mutual information between the current token and candidate files.  The naive “search all files” cost scales as \(O(N)\) and is infeasible for \(N=10^5\).

**From optimization to locality**

The problem reduces to *online nearest‑neighbour search* in a high‑dimensional embedding space that changes whenever the user edits.  
We construct an **incremental vector index** (e.g., HNSW or Faiss IVF) where each node stores:
1. A compressed *semantic vector* of the file (BERT‑style embeddings over ASTs).  
2. A *version hash* of the file’s content.

When a user edits, only affected nodes are recomputed; the rest of the graph remains untouched, yielding \(O(\log N)\) update time.  

**Keeping freshness**

We maintain a lightweight **change log** that records edit timestamps per file.  
During query, we first filter candidates by timestamp within a sliding window (e.g., last 5 min).  
Because embeddings are cached, the system never recomputes on every keystroke—only when the change‑log flag is set.

**Non‑obvious insight**

A single *semantic vector* per file suffices because the AI’s internal language model already captures token‑level context.  The index need not be fine‑grained; instead, we rely on the editor to *interpolate* between nearby vectors, preserving relevance while keeping memory footprints low. This turns a massive static search into a lightweight, continuously refreshed nearest‑neighbour problem that scales gracefully with edits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
