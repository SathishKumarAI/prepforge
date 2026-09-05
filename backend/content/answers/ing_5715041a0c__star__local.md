---
qid: ing_5715041a0c__star__local
question: 'Explain: Real-time recommendations — Recommendation engine & system use
  cases with graph databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 359
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:22:10-05:00'
sources: []
---

**Situation** – At my previous company we had a live streaming platform where users binge‑watch shows. The click‑through rate on the “Recommended for You” carousel was only 3 %, and our content licensing partners demanded higher engagement to justify their fees.

**Task** – I was tasked with building a real‑time recommendation engine that could surface personalized titles within two seconds of a user’s action, using a graph database to model relationships between users, shows, genres, actors, and viewing history.

**Action** – I chose Neo4j because its Cypher query language lets you traverse multi‑hop relationships efficiently. First, I ingested user‑watch logs into the graph as “User–WATCHED–Show” edges with timestamps. Then I created composite nodes for “Actor”, “Genre”, and “Director” linked to each show. For real‑time scoring, I implemented a custom algorithm that combined weighted path lengths (e.g., User → WATCHED → Show → ACTED_IN → Actor) and cosine similarity on user embeddings stored in Redis. The engine ran as a microservice; when a user paused a video, it queried Neo4j for the top 5 shows within 1 s, then cached results in Memcached to serve subsequent requests instantly.

**Result** – After deployment, the click‑through rate jumped from 3 % to 12 %, and average session time increased by 18 %. I learned that coupling a graph database’s natural relationship modeling with an embedding‑based similarity layer can deliver both speed and relevance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
