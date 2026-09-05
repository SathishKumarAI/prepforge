---
qid: ing_8db2d30b37__star__local
question: 'Explain: Architecture 3: Staged Retrieval — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 309
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:16:03-05:00'
sources: []
---

**Situation** – At my previous role we were building a knowledge‑base assistant for legal documents. Our initial keyword search returned too many irrelevant results and users complained that the relevant case law was buried deep in the list.

**Task** – I needed to design an architecture that would surface the most pertinent documents quickly while still allowing full-text exploration, all within a 1 second response window on our cloud‑based index.

**Action** – I implemented a staged retrieval pipeline. First, a lightweight semantic encoder (Sentence‑Transformers) mapped each query to a dense vector and performed approximate nearest neighbor search with Faiss to pull the top 200 candidates. In the second stage, I ran an inverted‑index BM25 re‑ranking on those candidates using ElasticSearch, incorporating field boosts for “precedent” and “jurisdiction”. Finally, I added a small neural reranker (BERT fine‑tuned on legal relevance) to reorder the final top 10 results. The stages were orchestrated with a lightweight Node.js microservice that cached intermediate vectors to reduce latency.

**Result** – User click‑through rose by 35 % and query response time stayed under 800 ms. I learned how combining vector similarity, lexical ranking, and a neural reranker can dramatically improve relevance while keeping performance in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
