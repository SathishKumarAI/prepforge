---
qid: ing_73543770db__star__local
question: 'Explain: Real world use cases — Neo4J'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 344
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:18:22-05:00'
sources: []
---

**Situation:**  
At my last company we were building a recommendation engine for an e‑commerce platform that had over 2 million users and 10 million products. Our data was highly relational—users, items, tags, reviews—and we needed to surface relevant bundles in real time.

**Task:**  
I was tasked with designing a graph layer that could ingest the transactional logs, maintain dynamic relationships, and expose embeddings for downstream machine‑learning models without slowing down our existing SQL pipelines.

**Action:**  
I chose Neo4j because its native graph storage eliminates costly join operations. I built an ETL job in Python using the `neo4j-driver` to stream clickstreams into a property graph: users → purchased → items, items ↔ tags, and user → similar_users (based on cosine similarity). We then used Neo4j’s Graph Data Science library to run node2vec embeddings nightly. The embeddings were exported via the Bolt protocol to a Spark cluster where we trained a LightGBM model for personalized ranking. To keep latency low, we cached the top‑10 recommendations in Redis keyed by user ID.

**Result:**  
The graph‑based pipeline cut recommendation response time from 350 ms (SQL join‑heavy) to 45 ms, and lift in click‑through rate rose by 18 % over three months. I learned that a well‑designed graph model can dramatically simplify complex relational logic and provide rich features for ML without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
