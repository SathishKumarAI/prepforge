---
qid: ing_61e3cb9a09__star__local
question: 'Explain: Flexible schema — Recommendation engine & system use cases with
  graph databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 398
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:43:50-05:00'
sources: []
---

**Situation** – At my last job I was tasked with revamping our e‑commerce recommendation engine because the product catalog had exploded to over 2 million SKUs and the existing relational model couldn’t keep up with the real‑time “user–item–context” relationships. The KPI was a 15 % lift in click‑through rate (CTR) while keeping latency under 200 ms.

**Task** – I needed to design a data layer that could ingest millions of user interactions, support dynamic attributes (e.g., seasonal tags, bundle offers), and enable fast traversal for personalized “people who bought this also liked” queries.

**Action** – I chose Neo4j as our graph database. First, I modeled users, items, and events as nodes with relationship types like `PURCHASED`, `VIEWED`, `CART_ADDED`. To capture the flexible schema, each node carried a JSON‐encoded properties map that stored arbitrary metadata (e.g., brand, price tier). I implemented a streaming pipeline using Kafka Connect to push clickstream data into Neo4j in near real‑time. For recommendation, I wrote a Cypher query that walked two hops from a user’s recent purchases and scored candidates by weighted co‑occurrence, then used the built‑in APOC procedures for random sampling to keep latency low. Finally, I wrapped the query behind a lightweight Go microservice exposing a REST endpoint.

**Result** – The new engine increased CTR by 18 % within three months and reduced query latency from 350 ms to 110 ms. I learned that a flexible graph schema combined with streaming ingestion lets you evolve product attributes without costly migrations, and that careful index tuning in Neo4j is key for sub‑200 ms response times.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
