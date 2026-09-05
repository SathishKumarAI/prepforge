---
qid: ing_83e51246bf__star__local
question: 'Explain: Vector search: exact vs ANN — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 340
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:57:03-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building an AI‑powered FAQ bot for our help center. The team needed to pull the most relevant knowledge base article from a corpus of 120 k documents in under 200 ms per query.

**Task** – I had to design the retrieval layer: decide between exact cosine similarity over all vectors or using Approximate Nearest Neighbor (ANN) libraries, and integrate it into our Retrieval‑Augmented Generation pipeline.

**Action** – First, I benchmarked an exact search on Faiss CPU with 300 D embeddings. It returned perfect hits but averaged 1.2 s per query—unacceptable for real‑time chat. Next, I switched to HNSW in Faiss with a tuned `efSearch=200` and `M=16`. This cut latency to ~35 ms while keeping recall > 97% on our test set. I wrapped the ANN index behind an async microservice, added cache for hot queries, and logged hit‑rate per request so we could monitor drift.

**Result** – The bot’s response time dropped from 1.2 s to < 0.05 s, boosting user satisfaction scores by 18% in A/B tests. I learned that ANN trade‑offs (tiny recall loss for massive speed) are essential in production RAG systems, and that careful hyper‑parameter tuning can keep accuracy within business tolerances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
