---
qid: ing_6df412ab7c__fp__local
question: 'Explain: User Data — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 367
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:58:22-05:00'
sources: []
---

**Why we model “user data” the way we do**

At its core a music service must answer *“who is listening to what?”*  
That question forces us into a bipartite graph: users ↔ tracks.  
The edge weight (play count, skip rate, rating) encodes preference strength.  
From information theory this graph is a *probability distribution* over
tracks for each user; the recommendation engine is simply sampling from it
with a bias toward high‑entropy items (new releases).  

**Design implications**

| Requirement | Graph property | Implementation |
|-------------|----------------|----------------|
| **Fast reads** | Sparse adjacency lists | In‑memory cache + Bloom filter to prune non‑friends |
| **Write throughput** | Append‑only log | Kafka topic per user → microservice that aggregates into a materialized view |
| **Cold start** | Side‑information (artist, genre) | Use collaborative filtering on the global co‑play matrix; fall back to popularity scores |
| **Consistency** | Eventual consistency acceptable for recommendations | Read‑your‑writes window via session store |

**Non‑obvious insight**

The *shape* of the user‑track graph is far more important than raw volume.  
If we maintain a *dynamic degree distribution* (e.g., power‑law with a tunable exponent), we can throttle popular tracks to keep the tail dense, ensuring that new or niche songs still surface in recommendations without sacrificing cache hit ratios. This subtle control over topology directly translates into both personalization quality and system scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
