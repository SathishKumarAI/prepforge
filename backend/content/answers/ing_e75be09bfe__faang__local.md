---
qid: ing_e75be09bfe__faang__local
question: 'Explain: Search API — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 522
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:37:56-05:00'
sources: []
---

**Clarify**  
We need to explain the *Search API* that powers Airbnb’s listing discovery, as described in Neo Kim & Hayk’s System Design lecture. Clarifying: we’re not building it from scratch but describing its key components—request flow, ranking, and scalability.

**Approach**  
1. **Client → Gateway** – thin layer that authenticates and forwards query parameters (location, dates, price).  
2. **Query Planner** – decomposes the request into sub‑queries: geospatial filter, availability window, price range, and amenities.  
3. **Distributed Indexes** – each sub‑query hits a dedicated shard (e.g., Elasticsearch for geo‑search, relational DB for availability).  
4. **Candidate Aggregation & Ranking** – merge results, dedupe, apply ranking model (click‑through, recency, host reputation).  
5. **Result Delivery** – paginate and return JSON to the client.

**Depth**  
- *Geospatial* uses a 2D R‑tree or H3 hex grid; complexity O(log N) per shard.  
- *Availability* is pre‑computed “free slots” tables, queried in O(1).  
- Ranking leverages a learned model (e.g., LightGBM) scored in memory; top‑k selected via priority queue.  
- Caching: LRU for hot queries, CDN edge cache for static payloads.  
- Failover: read replicas and circuit breakers to isolate shard outages.

**Edge Cases**  
- *Time zone* handling for check‑in/out.  
- *Overbooking*: double‑check availability after candidate selection.  
- *Cold start* for new listings: fallback to popularity score.  
- *Rate limiting*: protect against query storms.

**Optimize & Communicate**  
We can reduce latency by sharding the ranking model per region, use vector similarity search for personalization, and adopt a *search‑as‑you‑type* incremental API with debouncing. In explaining this, I’d narrate the flow from client to backend, highlight trade‑offs (index freshness vs. query speed), and conclude with key metrics: 50 ms P90 latency, 99.9% availability, and <5 % cache miss rate for top 1k queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
