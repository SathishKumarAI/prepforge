---
qid: ing_7a7ef36924__fp__local
question: 'Explain: Tech Decisions — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 390
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:25:15-05:00'
sources: []
---

**Why a “social‑graph” engine matters**

The core problem is *relating millions of users in real time*.  
From a graph‑theoretic point of view, each user is a node and edges are friendships or follows.  
To answer queries like “who should I see next?” the system must:

1. **Traverse** that graph quickly → breadth‑first search (BFS) with depth limits.  
2. **Rank** candidates by relevance → weighted scores combining recency, interaction frequency, and content similarity.  

A flat relational model would require millions of joins per request; a graph database stores adjacency lists natively, giving O(1) edge lookups. The trade‑off is that updates (new friendships, posts) must be propagated to many nodes; sharding by user id keeps each shard small while retaining locality.

**Why “push + pull” feeds**

A *pull* model (querying a master list on demand) keeps the server simple but can’t scale with millions of concurrent users.  
A *push* model (pre‑computing a per‑user feed) turns the heavy computation into an offline batch job that runs during off‑peak hours, using MapReduce to aggregate friend activity into “feed shards.” The system then serves the pre‑built list in constant time.

**Non‑obvious insight**

The real bottleneck is not network latency but *entropy*: as the graph densifies, the number of plausible candidates explodes. By maintaining a **locality‑preserving hash** (e.g., MinHash on user interests) and pruning to the top‑k per bucket before scoring, the system reduces candidate space logarithmically while preserving diversity—an optimization that many platforms ignore until traffic spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
