---
qid: ing_e34f9ce711__star__local
question: 'Explain: "Hazelcast" is picking up a lot these — Database Design Tips |
  Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 380
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:03:16-05:00'
sources: []
---

**Situation:**  
At my previous company we built an online recommendation engine that served real‑time product suggestions. The model outputs a list of top‑10 items in under 50 ms, but our relational database (PostgreSQL) was adding 30–40 ms latency because it had to join three tables and materialize a view for every request.

**Task:**  
I needed to reduce the end‑to‑end response time to below 25 ms while keeping data consistency and scaling to 200k concurrent users.

**Action:**  
I evaluated several in‑memory stores (Redis, Memcached, Hazelcast). Hazelcast stood out because it offers a distributed map with near‑zero‑copy serialization, built‑in WAN replication, and a query language that can filter by composite keys. I prototyped a cache layer where the model’s feature vectors were stored as a `HazelcastMap<String, FeatureVector>`. The map was partitioned across 12 nodes, giving us linear scalability. We used Hazelcast Jet to stream updates from our Kafka log into the cache so that any new training data would be reflected in under 5 ms.

**Result:**  
The average prediction latency dropped from 70 ms to 22 ms, a 68 % improvement. Traffic handling increased by 3× without additional database resources. I learned that choosing a distributed in‑memory store like Hazelcast can dramatically cut latency for ML inference workloads when the data model fits key–value access patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
