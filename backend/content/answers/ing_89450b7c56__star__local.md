---
qid: ing_89450b7c56__star__local
question: When do you need approximate nearest neighbour search instead of exact search?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 318
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:07:30-05:00'
sources: []
---

**Situation** – In my last role, I was building a recommendation engine for a streaming platform that had over 50 million users and 5 million titles. The user embeddings were 256‑dimensional vectors stored in an Elasticsearch index, and we needed to generate top‑10 similar titles in real time for every request.

**Task** – We had to reduce the query latency from ~250 ms (exact k‑NN with brute force) to under 30 ms while keeping recommendation relevance above 0.85 cosine‑similarity on average.

**Action** – I evaluated approximate nearest neighbour (ANN) libraries: HNSW in Faiss, Annoy, and ScaNN. After profiling, I chose Faiss’s HNSW with 32 neighbors per layer and built a persistent index using IVF on GPU for the top 10k clusters. I tuned the efSearch parameter to balance recall (93%) against speed, and added an optional exact re‑rank step on the candidate set for critical high‑value users.

**Result** – Query latency dropped from 250 ms to ~25 ms, a 90% improvement, while recommendation precision stayed within 1.5% of the exact baseline. I learned that ANN is essential when dataset size and dimensionality make exact search computationally infeasible, but careful tuning can preserve quality.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
