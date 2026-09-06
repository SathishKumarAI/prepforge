---
qid: ing_ed0c087506__fp__local
question: 'Explain: Search Service — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 399
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:23:28-05:00'
sources: []
---

**Search Service – Spotify**

The *fundamental problem* is: given a user’s free‑form query, retrieve the most relevant songs, albums, artists, and playlists in milliseconds, while scaling to millions of users and billions of items.  
To solve it we must *optimise* two competing objectives:

1. **Relevance** – rank by semantic similarity (artist intent, mood, genre) rather than exact token matches.
2. **Latency & Capacity** – answer queries under strict SLAs using distributed indexing.

The classic solution is a **hybrid inverted‑index + vector‑search architecture**.  
* Inverted lists provide sub‑millisecond lookup for keyword terms; they’re optimal when the query contains explicit tokens (e.g., “Adele”).  
* Vector embeddings capture latent semantics (e.g., “sad pop” → songs with similar acoustic features). We build an approximate nearest‑neighbor (ANN) index (HNSW, IVFFAISS) that returns top‑k candidates in logarithmic time.

We then **re‑rank** the union of both candidate sets using a learned ranking model (e.g., LambdaMART or BERT‑based relevance scorer), incorporating session history and personalization.  
The re‑ranking layer is *stateless* and can be served by a small cluster, keeping latency low while allowing sophisticated features.

**Non‑obvious insight:** The key to scalability isn’t sharding the index; it’s *sharding the query space*. By clustering queries (e.g., by intent or geographic region) we can route them to specialized sub‑indexes that are far smaller yet highly relevant. This reduces cache misses and memory pressure, enabling linear growth in user traffic without proportional increases in hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
