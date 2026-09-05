---
qid: ing_ce3ff3af51__star__local
question: 'Explain: Semantic Chunking — Chunking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 327
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:21:46-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a real‑time customer support chatbot that had to surface relevant knowledge‑base articles within 2 seconds of a user query. Our initial model used simple keyword matching and the latency hit the SLA, with only 60% precision on the top result.

**Task:**  
I needed to redesign the retrieval pipeline so that it could understand context, reduce token usage, and return accurate results under the time constraint.

**Action:**  
I implemented a semantic chunking strategy: first I pre‑processed every article into overlapping 200‑token chunks, each annotated with its section title. Using SentencePiece tokenization, I encoded chunks with a frozen SBERT model to generate dense embeddings. At query time, I embedded the user question and performed approximate nearest neighbor search (FAISS HNSW) over the chunk embeddings. To keep latency low, I pruned the candidate list to the top 20 chunks and ran a lightweight cross‑encoder on them for re‑ranking. I also added a cache layer that stored recent queries and their best chunks.

**Result:**  
The new pipeline cut average retrieval time from 1.8 s to 0.9 s, meeting our SLA. Precision at top‑1 rose from 60% to 85%, and overall user satisfaction scores increased by 12%. I learned that thoughtful chunk sizing and efficient ANN search can dramatically improve both speed and relevance in semantic search systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
