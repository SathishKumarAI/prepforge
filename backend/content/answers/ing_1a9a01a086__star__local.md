---
qid: ing_1a9a01a086__star__local
question: 'Explain: So think of two points let''s say — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 363
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:22:39-05:00'
sources: []
---

**Situation** – At my previous company we were tasked to build an internal navigation tool for the delivery fleet. The requirement was to compute optimal routes between any two GPS coordinates in real time while handling thousands of concurrent users on a map similar to Google Maps.

**Task** – My goal was to design a scalable system that could ingest live traffic data, store a high‑density road network graph, and deliver route suggestions with sub‑second latency for 10 k requests per minute.

**Action** – I started by modeling the road network as a weighted directed graph stored in a distributed graph database (JanusGraph on Cassandra). For shortest‑path queries I implemented a bidirectional A* algorithm with an adaptive heuristic that used real‑time traffic weights. To keep latency low, I pre‑computed a hierarchical routing table using Contraction Hierarchies and cached the top 100 routes per node pair in Redis. The system ingested traffic feeds via Kafka; a Spark streaming job updated edge weights every minute. Load testing with JMeter showed 95 % of requests served under 200 ms.

**Result** – The final product reduced average delivery time by 12 % and cut API latency from 1.2 s to 0.18 s, earning the “Best Infrastructure” award. I learned how to balance pre‑computation, real‑time updates, and caching to meet strict SLAs in a map‑based service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
