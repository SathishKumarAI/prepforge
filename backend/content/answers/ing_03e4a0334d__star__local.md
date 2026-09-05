---
qid: ing_03e4a0334d__star__local
question: 'Explain: Neo4j'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 374
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:36:28-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a recommendation engine for an e‑commerce platform that had over 2 million users and 10 million product nodes. The existing relational approach struggled with graph traversal latency, especially when we needed to surface “people who bought this also bought” suggestions in real time.

**Task** – My goal was to migrate the recommendation logic into a graph database so that we could compute multi‑hop relationships within milliseconds while still supporting incremental updates from our streaming pipeline. I had to choose the right schema, ensure data consistency, and keep the read throughput above 1 k requests per second.

**Action** – I evaluated Neo4j for its native graph model, ACID guarantees, and Cypher query language. I modeled users and products as nodes, purchases as `BOUGHT` relationships, and added a `SIMILAR_TO` edge derived from collaborative filtering. Using the APOC library, I wrote a batch loader that ingested Kafka streams into Neo4j via `apoc.periodic.iterate`, maintaining a 5‑minute lag. For queries, I crafted Cypher patterns with index hints (`USING INDEX`) to keep traversal depth under 3 hops, and leveraged Neo4j’s in‑memory mode for hot data.

**Result** – The new graph service cut recommendation latency from ~350 ms to <30 ms per request, boosted click‑through rate by 18%, and reduced the load on our legacy SQL tier by 60%. I learned that choosing a graph database like Neo4j can turn complex relational joins into simple traversals when the data naturally forms relationships.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
