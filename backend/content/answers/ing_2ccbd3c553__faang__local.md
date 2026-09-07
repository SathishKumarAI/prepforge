---
qid: ing_2ccbd3c553__faang__local
question: 'Explain: Problem statement — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 412
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:27:15-05:00'
sources: []
---

**Semantic Search – FAANG‑style Answer**

| Step | What I’d say |
|------|--------------|
| **Clarify** | “You want a system that returns results matching *meaning* rather than exact keyword overlap.  Are we indexing web pages, documents, or user queries?  Do we need real‑time ranking, scalability (10⁶+ docs), and language support?” |
| **Approach** | 1️⃣ Build embeddings for all indexed items using a transformer (e.g., Sentence‑BERT). <br>2️⃣ Store vectors in an ANN index (FAISS or Milvus) for sub‑linear retrieval. <br>3️⃣ Rank candidates by cosine similarity, then re‑rank with a lightweight neural reranker that incorporates query context and relevance signals. |
| **Depth** | *Embedding*: fine‑tune on domain data to capture jargon; dimensionality ~ 768. <br>*ANN*: IVF+PQ gives ≈0.9 recall @ top‑10 at 4 µs per query. <br>*Reranker*: BERT‑based classifier (≈30M params) runs in 20 ms on GPU, improving MAP by ~15%. Complexity: O(log N) index lookup + linear rerank over M candidates; memory ≈ embedding size × N. |
| **Edge Cases** | Empty queries → fallback to popular items. Very short queries → expand via synonym lists. Non‑English docs → multilingual embeddings or language detection + separate models. |
| **Optimize & Communicate** | • Cache hot queries in Redis. <br>• Use quantization to reduce memory. <br>Explain trade‑offs: higher recall vs latency, model size vs inference cost. Conclude with monitoring metrics (latency, NDCG) and A/B testing strategy. |

*Word count: ~210.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
