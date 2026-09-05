---
qid: ing_12bd8c2cbc__star__local
question: 'Explain: Graphs: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 359
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:06:01-05:00'
sources: []
---

**Situation** – In my senior capstone I was tasked with building a recommendation engine for an e‑commerce platform that had over 2 million users and 500 k products. The existing pipeline was a simple content‑based model and couldn’t capture user–product interactions.

**Task** – I needed to design a scalable graph representation of the interaction data, extract meaningful features, and integrate them into a collaborative filtering algorithm without exceeding our 48 hour sprint deadline.

**Action** – I modeled users and products as nodes in a bipartite graph, using adjacency lists stored in Apache Spark’s GraphFrames. Edges were weighted by purchase frequency and recency, encoded as a single float to keep memory usage low (≈4 GB vs 12 GB for raw logs). To compute similarity I applied the Adamic‑Adar metric on user–user subgraphs, which is a classic graph‑based measure from CS61B that balances common neighbors with their rarity. I then fed these similarity scores into an ALS matrix factorization model, tuning hyperparameters via Bayesian optimization in Optuna.

**Result** – The new system lifted recommendation precision@10 from 0.21 to 0.35 (a 66 % relative gain) and reduced cold‑start latency by 70 %. I learned how graph theory can be turned into production‑ready features, and that choosing the right representation (adjacency lists + weighted edges) is often more impactful than tweaking ML hyperparameters alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
