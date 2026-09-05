---
qid: ing_78aa7314f2__star__local
question: 'Explain: Topical relevance: Hybrid search with reranking'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 301
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:35:15-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we built a knowledge‑base assistant for our customer support team. The internal docs were a mix of PDFs, Markdown files, and live API responses, but the search function kept returning irrelevant legal‑terms that buried the answers the agents actually needed.

**Task:**  
I was tasked with improving top‑n relevance so that 90 % of the time the first page contained an exact answer, without adding more latency to the user query flow.

**Action:**  
First I implemented a hybrid search: Elasticsearch for keyword matching on the full text, and a lightweight sentence‑embedding model (Sentence‑BERT) to compute semantic similarity. I then built a reranking layer that combined BM25 scores with cosine distance in a weighted linear function tuned via grid search. To keep latency low, I cached embeddings per document and used FAISS for approximate nearest neighbor lookups. Finally, I added a small microservice to dynamically adjust weights based on query intent detected by a simple LSTM classifier.

**Result:**  
After deployment, click‑through on the first result jumped from 45 % to 78 %, and support tickets resolved in under two minutes dropped by 35 %. I learned that blending lexical and semantic signals, coupled with careful caching, can deliver both relevance and speed in real‑time search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
