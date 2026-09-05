---
qid: ing_8fd23b4ce0__star__local
question: 'Explain: Data Denormalization — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 315
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:20:31-05:00'
sources: []
---

**Situation:**  
At my last company we built a recommendation engine for an e‑commerce platform. Our analytics team needed real‑time product views and user interactions in a single query, but our relational schema spread data across five tables (users, sessions, products, events, impressions). Join latency was 350 ms during peak traffic, breaking the SLA.

**Task:**  
I had to redesign the data model so that read queries could hit a single table with sub‑100 ms latency while keeping write throughput high and avoiding data inconsistency.

**Action:**  
I introduced a denormalized “event_snapshot” table in PostgreSQL. Each row stored user_id, product_id, session_id, event_type, timestamp, and a JSONB payload of the product’s current attributes (price, stock). I used logical replication to keep snapshots updated from the source tables. To handle write bursts, I sharded the table by hash(user_id) and enabled WAL‑based hot standby replicas for read scaling. I also added an index on (user_id, event_type) and a materialized view for top 10 products per category.

**Result:**  
Read latency dropped to 65 ms during peak load, and we handled 12 k writes/sec without locking contention. The trade‑off was a 1.8× increase in storage and the need for eventual consistency checks, but overall system reliability improved by 40% and the engineering team could iterate on models faster.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
