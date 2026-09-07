---
qid: ing_3452bbe050__faang__local
question: 'Explain: cells that way we can filter out — UBER System design | OLA system
  design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 514
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:45:50-05:00'
sources: []
---

**Problem Clarification**  
We’re asked to explain how Uber (or a similar rides‑hailing platform) designs its system—architecture, scaling, and filtering mechanisms (“cells that way we can filter out”). Assume we need a high‑level view: data flow from driver/ rider app → backend services → routing & matching. Clarify constraints: low latency (< 200 ms), 10M+ concurrent users, multi‑region, fault tolerance.

**Approach**  
1. Identify core components (API gateway, auth, trip orchestration, geo‑indexing, dispatch, billing).  
2. Map data flow and inter‑service contracts.  
3. Highlight scalability patterns: sharding by city (“cell”), event streaming, caching, and eventual consistency.  

**Depth – Core Architecture**  
- **Cells (geo‑shards)**: The world is partitioned into geographic cells (~1 km²). Each cell owns a Redis cluster for real‑time driver availability and a PostgreSQL shard for history. This limits cross‑region traffic and ensures locality.  
- **Routing Layer**: A stateless microservice queries the nearest cell’s cache, applies filters (vehicle type, surge), then pushes to a Kafka topic for dispatch workers.  
- **Dispatch Workers**: Consume events, run an in‑memory priority queue, and invoke the *matching* algorithm. Matching is a greedy assignment that respects driver proximity and ETA constraints.  
- **Event Bus & CQRS**: All state changes (trip start/end, driver status) are published to Kafka; read models are materialized into ElasticSearch for search & analytics.  
- **Fault Tolerance**: Each cell replicates data across AZs; a circuit‑breaker pattern isolates failing nodes.  

**Edge Cases**  
- Driver drop‑off during surge → re‑evaluate price.  
- Network partition → stale driver location → fallback to last known state.  
- Sudden spike (e.g., event) → autoscale dispatch workers, back‑pressure on Kafka.

**Optimization & Communication**  
Explain trade‑offs: using Redis for speed vs. eventual consistency; sharding reduces latency but adds complexity in cross‑cell queries. Narrate reasoning by tying each choice to SLA goals and cost constraints. This structured explanation demonstrates deep system‑design knowledge while keeping the answer concise (≈ 190 words).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
