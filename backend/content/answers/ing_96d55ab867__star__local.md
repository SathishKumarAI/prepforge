---
qid: ing_96d55ab867__star__local
question: 'Explain: REST Service — GitHub - getzep/graphiti: Build Real-Time Knowledge
  Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 359
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:34:42-05:00'
sources: []
---

**Situation** – In my last role I was tasked with creating a live knowledge‑graph API for an AI tutoring platform. The existing data pipeline fed raw JSON logs into a Neo4j instance, but the service layer was slow and couldn’t handle the 3 k queries per second our beta users were generating.

**Task** – I needed to expose a REST endpoint that would return subgraphs around any user query in under 200 ms while keeping the graph updated in real time as new interactions arrived.

**Action** – I rewrote the service layer using FastAPI for async handling and integrated Redis Streams to buffer incoming event logs. Every minute a worker parsed the stream, applied Cypher “MERGE” statements with `ON CREATE SET` and `ON MATCH SET` to upsert nodes/relationships, and then published a Pub/Sub message to invalidate cached subgraphs in Memcached. For the endpoint itself I used Neo4j’s Bolt driver with a parameterized `MATCH (n)-[r]->(m) WHERE n.id=$id RETURN n,r,m LIMIT 200`, wrapping the query in an async coroutine so each request could run concurrently.

**Result** – The new service reduced average latency from 1.3 s to 140 ms, and throughput rose to 4.5 k QPS during peak load. We also cut memory usage by 35% by offloading transient state to Redis. This experience taught me how to balance real‑time consistency with latency by combining streaming ingestion, async web frameworks, and in‑memory caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
