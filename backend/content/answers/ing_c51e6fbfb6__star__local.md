---
qid: ing_c51e6fbfb6__star__local
question: 'Explain: Open Source Models — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 301
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:04:04-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were building a recommendation engine for loan products. Our internal NLP models lagged behind open‑source embeddings like Sentence-BERT, and the similarity search was slow, causing >30 % slower response times during peak hours.

**Task** – I needed to replace our custom TF‑IDF pipeline with a scalable vector‑based similarity system that could handle millions of user profiles while keeping latency under 200 ms.

**Action** – First, I evaluated open‑source embeddings (SBERT, Universal Sentence Encoder) and chose SBERT for its balance between accuracy and speed. I fine‑tuned it on our domain corpus using a GPU cluster, then vectorized every user profile into a 768‑dimensional space stored in an HNSW index via Faiss. To keep memory low, I applied product quantization (PQ) with 8 bytes per vector. For real‑time querying, I built a microservice that pulls the nearest neighbors from the index and scores them against our risk model.

**Result** – The new system cut similarity query latency from 650 ms to 120 ms, increased recommendation precision by 18 %, and reduced GPU usage by 40 %. I learned how embedding choice, dimensionality reduction, and approximate nearest neighbor indexing trade off accuracy for performance in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
