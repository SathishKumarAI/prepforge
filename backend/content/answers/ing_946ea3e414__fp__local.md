---
qid: ing_946ea3e414__fp__local
question: What is Spotify? — Design Spotify | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 338
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:20:56-05:00'
sources: []
---

**Spotify as a distributed recommender‑system**

At its core, Spotify solves the *“given millions of songs and users, how do we present each user with a personalized stream that maximizes engagement?”*  
The problem is twofold:

1. **Discovery (exploration)** – surface content the user has never heard but will enjoy.  
2. **Retention (exploitation)** – keep the user listening by recommending familiar favourites.

These objectives are formalised as an online optimisation problem: maximise expected listening time subject to constraints on novelty, diversity and freshness. The solution is a hierarchical architecture that turns raw audio and metadata into *latent representations* (embedding vectors) for tracks, artists and users.  

- **Feature extraction**: convolutional nets transform spectrograms → embeddings; collaborative filtering supplies user‑track interaction vectors.  
- **Similarity search**: approximate nearest neighbour indexes (FAISS/HNSW) deliver millions of candidate recommendations in milliseconds.  
- **Ranking & A/B testing**: a learnable policy (e.g., bandit, gradient boosting) scores candidates on engagement features and is continuously updated via online learning.

A non‑obvious insight: *cold‑start tracks are not an “orphan” problem but a feature.* By jointly training embeddings for audio and metadata, Spotify turns unseen songs into dense points in the same space as known ones, allowing immediate recommendation without explicit user interaction. This coupling is what lets Spotify scale to 70 M+ tracks while keeping latency under 100 ms per request.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
