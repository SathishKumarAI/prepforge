---
qid: ing_65a02ff8ef__think__local
question: Your agent spends over half its first turn just finding the relevant code.
  How do you fix that?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 427
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:45:56-05:00'
sources: []
---

**1. Clarify the problem & assumptions**  
   - *What is “first turn” in this context?* Assume it’s the initial prompt‑processing step before any answer generation.  
   - *Why does code lookup dominate time?* Likely due to a large repository or an inefficient search algorithm.  
   - *Goal*: reduce latency while keeping accuracy.

**2. Adopt a retrieval‑augmented framework**  
   - Treat code lookup as a separate, optimizable component (e.g., vector search over embeddings).  
   - Separate concerns: indexing pipeline vs query handling.

**3. Step‑by‑step reasoning to fix it**  
   1. **Profile the lookup** – identify bottlenecks (disk I/O, similarity scoring, data size).  
   2. **Cache frequently used snippets** – LRU or TTL cache for top‑hit results.  
   3. **Pre‑compute embeddings & store in a fast ANN index** (FAISS, Milvus) so queries are sub‑millisecond.  
   4. **Batch queries when possible** – if multiple agents ask similar questions, reuse the same lookup.  
   5. **Prune the search space** – use coarse filters (file type, tags) before fine similarity scoring.

**4. Common traps to avoid**  
   - *Over‑caching*: stale code can mislead responses.  
   - *Too aggressive filtering*: may drop relevant snippets.  
   - *Relying on raw text search*: slower than vector similarity for code semantics.

**5. Sanity‑check & communicate**  
   - Run a latency audit before/after changes; aim for < 50 ms lookup.  
   - Explain to stakeholders that the improvement comes from moving heavy work offline (index build) and using in‑memory fast retrieval at runtime.  
   - Keep monitoring hit rates; if precision drops, tune similarity thresholds or expand cache.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
