---
qid: ing_0e50b83822__star__local
question: 'Explain: Word Embeddings (Historical) — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 311
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:57:18-05:00'
sources: []
---

**Situation** – While leading a research sprint at my previous company, we were tasked with building an internal search engine for a massive product catalog of over 2 million SKUs. The existing keyword‑based system returned noisy results because many products shared similar titles but differed in subtle attributes.

**Task** – I needed to create a semantic representation that would capture product similarities beyond exact token matches, enabling the search to surface related items and improve click‑through by at least 15 %.

**Action** – I implemented classic word embeddings using the Skip‑gram model from the Gensim library. First, I preprocessed the catalog titles, normalizing brand names and removing stopwords. Then I trained a 300‑dimensional vector space on the corpus of 2 million product descriptions, tuning window size to 5 and negative sampling to 10. After training, each SKU title was mapped to its centroid vector by averaging constituent word embeddings. We integrated these vectors into Elasticsearch’s dense vector search API, adding cosine similarity scoring alongside keyword relevance.

**Result** – The new semantic layer increased relevant result precision from 48 % to 66 %, boosting overall click‑through rate by 18 %. I learned that even simple historical embedding techniques, when carefully tuned and combined with modern search engines, can deliver tangible business impact without deep neural nets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
