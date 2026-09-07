---
qid: ing_6046daf5ff__faang__local
question: 'Explain: Sparse (Keyword) Retrieval — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 438
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:27:55-05:00'
sources: []
---

**Sparse (Keyword) Retrieval – Hybrid Search**

| Step | What to say |
|------|-------------|
| **Clarify** | “We’re looking at a retrieval system that combines *sparse* keyword matching with *dense* semantic embeddings.”  Ask: 1️⃣ Do we need exact phrase matches? 2️⃣ Is latency critical? 3️⃣ How large is the corpus? |
| **Approach** | 1. Index documents with an inverted index (BM25). 2. Generate vector embeddings for queries/documents via a transformer (e.g., Sentence‑BERT). 3. For a user query, run BM25 to get top‑k hits and cosine‑search in the embedding space; merge scores using weighted fusion or re‑rank with a learnable model. |
| **Depth** | • **Sparse part:** O(1) term lookup → fast retrieval of highly relevant passages. <br>• **Dense part:** ANN (FAISS, HNSW) gives semantic recall beyond exact terms. <br>• **Fusion:** Linear interpolation (`score = λ*BM25 + (1-λ)*cosSim`) or a small MLP trained on relevance labels. <br>Complexity: O(log N) for ANN, O(terms) for BM25; overall ~O(k log N). |
| **Edge Cases** | • Ambiguous queries → dense part may dominate.<br>• Extremely short queries → BM25 might miss context – tune λ accordingly. <br>• Out‑of‑vocabulary terms → fallback to subword embeddings. |
| **Optimize & Communicate** | • Cache top‑k BM25 results; only run ANN on re‑ranked subset. <br>• Use GPU for embedding inference. <br>Explain: “By keeping the sparse engine for speed and the dense model for recall, we get the best of both worlds—fast, precise keyword hits plus semantic coverage.” |

*Word count: ~190*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
