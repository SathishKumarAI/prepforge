---
qid: ing_42fc2b3dc6__think__local
question: How do you keep a RAG index fresh as documents change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 431
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:02:58-05:00'
sources: []
---

**1. Clarify the problem and assumptions**  
   - What *“fresh”* means for your use case (full re‑indexing vs. incremental updates).  
   - The nature of document changes (additions, deletions, edits) and their frequency.  
   - The RAG pipeline architecture: vector store, embedding model, retrieval logic.

**2. Adopt a mental model**  
   - Treat the index as a *time‑stamped* collection of embeddings.  
   - Think in terms of *diffs*: “what changed” → “which vectors to add/replace/remove”.  
   - Use a *pipeline* approach: ingestion → change detection → embedding → vector store update.

**3. Step‑by‑step reasoning**  
   1. **Detect changes**: hash documents or use file system watchers / database triggers.  
   2. **Compute deltas**: for each changed doc, decide whether to re‑embed or skip (e.g., unchanged metadata).  
   3. **Update embeddings**: run the embedding model on new/changed text; delete old vectors.  
   4. **Synchronize vector store**: batch upsert/delete operations to keep consistency and avoid partial updates.  
   5. **Validate freshness**: run a quick query or checksum against known content.

**4. Common traps**  
   - Re‑embedding everything on every change → wasteful.  
   - Forgetting to delete stale vectors → retrieval drift.  
   - Not handling concurrent writes → race conditions in the index.  
   - Ignoring metadata changes that affect relevance but not text.

**5. Sanity‑check & verbalize**  
   - Ask: “Does every change trigger exactly one vector update?”  
   - Explain to a colleague: “We watch for diffs, re‑embed only those parts, and atomically replace the vectors so the RAG system always sees the latest content.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
