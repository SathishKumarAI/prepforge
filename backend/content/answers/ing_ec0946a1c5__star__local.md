---
qid: ing_ec0946a1c5__star__local
question: 'Explain: So let''s just say if you want — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 319
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:20:59-05:00'
sources: []
---

**Situation:**  
During a product‑launch sprint at my previous company, we had to integrate real‑time traffic data into an internal navigation app that served over 3 million daily users in a single city.

**Task:**  
Design a scalable system that ingests live GPS streams, aggregates traffic heatmaps, and delivers turn‑by‑turn directions with <200 ms latency while keeping cost under $2M per month.

**Action:**  
I architected a microservice stack: Kafka for ingesting 10k events/s from vehicles; Spark Structured Streaming to compute rolling congestion scores every 30 s; Redis Streams as an in‑memory cache for the top 50,000 active routes. For routing I replaced our monolithic graph with a distributed graph database (JanusGraph on Cassandra) and used Dijkstra’s algorithm with edge weights updated from the heatmap layer via a lightweight gRPC service. To keep latency low, I deployed the routing service in two zones and added a CDN‑based edge cache for static map tiles.

**Result:**  
The system handled 12k events/s peak traffic without outages, reduced average turn delay by 35 % (from 5 s to 3.25 s), and stayed within budget at $1.8M/month. I learned how to balance real‑time data pipelines with graph‑based routing while keeping costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
