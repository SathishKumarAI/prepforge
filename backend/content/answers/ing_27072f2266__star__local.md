---
qid: ing_27072f2266__star__local
question: 'Explain: So let''s look at slightly more trickier — Database Design Tips
  | Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 367
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:46:41-05:00'
sources: []
---

**Situation:**  
During a senior‑software‑engineering interview I was asked to architect an online marketplace that supports real‑time bidding, 10 k concurrent users, and daily ingestion of 2 M transaction records.

**Task:**  
I had to pick the database(s) that would deliver low latency for bids, strong consistency for inventory counts, and scalable analytics for seller performance reports.

**Action:**  
I started with a hybrid approach: a PostgreSQL cluster (primary‑replica) for transactional data—ACID guarantees, foreign keys, and row‑level security. For the bidding engine I introduced Redis Streams to buffer bid events, applying Lua scripts for atomic decrement of item stock; this gave <5 ms latency. Finally, I added an Elasticsearch index on product metadata to power fast search and a ClickHouse instance for aggregating historical sales in near real‑time (≤10 s). I wrote migration scripts with Flyway, set up logical replication from Postgres to ClickHouse, and implemented a caching layer in Memcached for hot product pages.

**Result:**  
The system handled 12 k concurrent bids without drops, maintained inventory consistency across replicas, and produced daily sales dashboards within 8 s. The interview panel praised the clear trade‑off reasoning: strong consistency where needed, low‑latency cache for user interactions, and a columnar store for analytics. I learned that “one database fits all” rarely works in production; a well‑justified polyglot persistence strategy can satisfy conflicting performance and correctness requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
