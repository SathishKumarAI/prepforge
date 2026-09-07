---
qid: ing_e5e6dc19af__faang__local
question: 'Explain: Reciprocal Rank Fusion (RRF) — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 416
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:32:50-05:00'
sources: []
---

**Reciprocal Rank Fusion (RRF)**  
*Hybrid Search – combining multiple rank lists into one.*

---

### Clarify  
We’re asked how RRF works for hybrid search: merging results from, say, a keyword BM25 engine and an embedding‑based semantic retriever. Assume each source returns a ranked list of documents with unique IDs; ties are broken arbitrarily.

### Approach  
1. **Normalize ranks** – convert each document’s position *r* into a score `score = 1/(k + r)` (k is a smoothing constant, often 60).  
2. **Aggregate** – for every document appearing in any list, sum its scores across all sources.  
3. **Re‑rank** – sort documents by the aggregated score to obtain the final hybrid ranking.

### Depth  
- The `1/(k+r)` term ensures that top hits receive disproportionately higher weight while still allowing lower‑ranked items to contribute modestly—mitigating the “winner‑takes‑all” effect.  
- Complexity is linear in total retrieved documents: **O(N)** time, **O(N)** memory.  
- Trade‑offs: choosing *k* controls bias toward early ranks; too small → over‑emphasis on top hits, too large → flattening.

### Edge Cases  
- **Missing IDs** – if a doc appears only in one source, its score comes solely from that source.  
- **Duplicate IDs across sources** – summed correctly.  
- **Large rank lists** – memory may be a concern; streaming aggregation can mitigate.

### Optimize & Communicate  
To improve efficiency, use a min‑heap of size *M* (desired top‑k) while aggregating so we never store all scores. I’d explain this by walking through a small example and highlighting how RRF balances precision from lexical retrieval with recall from semantic vectors—exactly what hybrid search needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
