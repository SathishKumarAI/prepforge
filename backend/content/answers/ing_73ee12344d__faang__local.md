---
qid: ing_73ee12344d__faang__local
question: 'Explain: Native reranking in Atlas — MongoDB Search: Scalable Full-Text
  Search | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 487
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:14:01-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how *native re‑ranking* works inside **Atlas Search**, MongoDB’s built‑in full‑text search powered by Lucene.  
Assumptions:  
- The user has already performed a text query and received a result set.  
- Results are scored by the default Lucene TF‑IDF/ BM25 algorithm.  
- Atlas allows an optional *re‑rank* phase that can adjust those scores before final output.

**2️⃣ Approach**  
Explain the pipeline:  
1. **Initial search** → Lucene produces a ranked list of hits.  
2. **Re‑ranking request** → Client sends the same query plus `reRank` parameters (`maxDocs`, `windowSize`, `scoreFunc`).  
3. Atlas pulls a *sliding window* of top‑N docs (e.g., 10 000) and re‑computes scores using an arbitrary function (Python, JavaScript, or MongoDB aggregation).  
4. The re‑ranked list is merged back into the final response.

**3️⃣ Depth**  
- `maxDocs` limits how many hits are considered for re‑ranking; larger values mean more CPU but potentially better quality.  
- `windowSize` controls the breadth of the sliding window (default 10 000).  
- The custom scoring function receives a document’s fields and the original score, returning a new float.  
- Complexity: O(`maxDocs`) per request; memory is bounded by the window size.  
- Trade‑offs: tighter windows reduce latency but may miss good docs beyond the window.

**4️⃣ Edge Cases**  
- `maxDocs` > collection size → falls back to full collection.  
- Invalid scoring function syntax → error 400.  
- Very large documents → memory pressure; Atlas caps doc size for re‑rank.  

**5️⃣ Optimize & Communicate**  
To improve latency, cache frequent scoring functions or pre‑compute auxiliary fields (e.g., popularity). Communicate results by showing before/after score distributions and highlighting the top 10 re‑ranked docs in a UI demo. This demonstrates both technical depth and user impact—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
