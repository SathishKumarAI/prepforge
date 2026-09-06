---
qid: ing_976b5d8681__think__local
question: 'Explain: Use case: User views the user timeline — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 494
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:07:53-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   - Identify *what* the “user views timeline” feature entails: fetching a list of tweets, ordering by recency or relevance, handling pagination, etc.  
   - Assume typical scale (millions of users, billions of tweets) and that latency < 200 ms is required.

**2️⃣ Adopt a system‑design framework**  
   - Use the classic *“Design for Scale”* pattern: identify data sources → storage → cache → API layer → client.  
   - Map constraints: write throughput (tweet ingestion), read throughput (timeline requests), consistency, and cost.

**3️⃣ Reason step‑by‑step**  
   1. **Write path** – Tweets are stored in a distributed log or append‑only store (Kafka/Fluentd) then persisted to a NoSQL DB (Cassandra/HBase).  
   2. **Follower graph** – Maintain a fan‑out‐on‑write cache of follower lists (Redis, Memcached).  
   3. **Timeline generation** – On read, pull the latest N tweets from each followed user’s stream (pre‑aggregated in a “timeline” table) or merge streams on the fly using sorted sets.  
   4. **Pagination & caching** – Use key‑based pagination (cursor) and cache hot timelines in Redis for repeated access.  
   5. **Back‑fill & consistency** – Periodic batch jobs reconcile missing tweets; eventual consistency is acceptable.

**4️⃣ Avoid common traps**  
   - Don’t assume a single “timeline” table will scale; it becomes a hotspot.  
   - Forgetting to handle edge cases (new followers, deleted tweets) can break the ordering logic.  
   - Ignoring cache invalidation leads to stale data.

**5️⃣ Sanity‑check & verbalize**  
   - Verify that read latency meets SLA with the chosen caching strategy.  
   - Confirm write path can handle peak tweet bursts without blocking reads.  
   - Summarize: “We fan‑out on write, aggregate timelines per user in a scalable NoSQL store, cache hot items, and paginate via cursors to serve the timeline quickly.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
