---
qid: ing_0a785ccb7c__think__local
question: 'Explain: Let’s discuss what database to use to — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 620
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:24:32-05:00'
sources: []
---

We need a numbered list of 5 points, about how to think through explaining database choice for that system design interview. Include clarifying assumptions, mental model like CAP, scaling, latency, consistency, etc. Provide reasoning steps, traps, sanity-check. Use Markdown.**1️⃣ Clarify the problem & state assumptions**  
   * What data must we store? (businesses, reviews, photos, ratings)  
   * Typical query patterns: “nearest N places”, “filter by category/price”, “get details of a place”.  
   * Scale targets: how many users per day, writes per second, read latency requirement.  
   * Consistency needs: do we tolerate stale data for a review?  

**2️⃣ Choose a mental model / framework**  
   * Start with the **CAP theorem** → pick consistency vs availability based on use‑case (read‑heavy = eventual).  
   * Map to a **polyglot persistence** view: think of relational for ACID, NoSQL for scale/latency.  
   * Use the **data‑access pattern matrix** (lookup by key, range query, geospatial index) to guide database choice.

**3️⃣ Reason step‑by‑step toward a concrete design**  
   1. **Relational DB** (e.g., PostgreSQL) for core entities (places, users) → strong consistency, joins.  
   2. **Geospatial indexing**: PostGIS or ElasticSearch to support “find nearest N”.  
   3. **Cache layer** (Redis/Memcached) for hot queries (popular places).  
   4. **Document store** (MongoDB/Cassandra) for unstructured data (photos, reviews) and high write throughput.  
   5. **Search engine** (Elasticsearch) for full‑text review search & faceted filtering.  
   * Explain sharding strategy: hash on place_id for relational shards; range or geo‑shard for NoSQL.  
   * Discuss replication & backup plans.

**4️⃣ Avoid common traps**  
   * Don’t pick “the most popular database” without matching query patterns.  
   * Ignore latency of joins across shards – can kill performance.  
   * Forget to handle eventual consistency: show how read‑after‑write latency is mitigated (e.g., write‑through cache).  
   * Over‑engineer with too many stores; keep it simple yet extensible.

**5️⃣ Sanity‑check & verbalize clearly**  
   * Recount the data flow for a typical request: user → API gateway → cache → geo‑index → relational/NoSQL → response.  
   * Highlight trade‑offs: latency vs consistency, cost vs performance.  
   * End with “Given our assumptions (10M daily users, 1 ms read SLA), this hybrid stack balances speed and correctness.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
