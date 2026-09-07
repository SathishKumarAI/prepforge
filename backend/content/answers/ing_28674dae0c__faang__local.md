---
qid: ing_28674dae0c__faang__local
question: 'Explain: Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 404
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:17:30-05:00'
sources: []
---

**Hybrid Search**  
*A blend of keyword‑matching and semantic understanding to retrieve the most relevant results.*

---

### Clarify  
> *Problem:* Build a search system that can handle both exact keyword queries (e.g., “Apple iPhone 15”) and natural‑language intent (“best phone for photography”).  
> *Assumptions:* We have indexed text documents, an inverted index, and a vector model (BERT embeddings). Latency ≤ 200 ms per query.

### Approach  
1. **Keyword pass** – use the inverted index to fetch top‑N hits by TF‑IDF or BM25.  
2. **Semantic pass** – encode the query with a transformer; score all candidate documents via cosine similarity.  
3. **Fusion** – combine scores (e.g., weighted sum, learning‑to‑rank) to rank final results.  
4. **Relevance feedback** – re‑score using click logs or user dwell time.

### Depth  
*Complexity:* Keyword pass is O(log N + |hits|). Semantic pass costs O(|candidates|·d) where d is embedding dim; we limit candidates via the keyword top‑N.  
*Trade‑offs:* Larger N → better recall but higher latency. Use approximate nearest neighbors (FAISS) to keep semantic scoring fast.

### Edge Cases  
- Empty or ambiguous queries → fallback to popular results.  
- Extremely rare terms not in embeddings → pad with zero vector, rely on keyword score.  
- Multilingual queries → language detection before routing.

### Optimize & Communicate  
*Improvements:* Cache frequent query vectors; use early‑exit transformer layers for short queries.  
*Narration:* “By first narrowing the universe with a fast keyword lookup and then refining with semantic similarity, we achieve both precision and recall while staying within strict latency budgets.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
