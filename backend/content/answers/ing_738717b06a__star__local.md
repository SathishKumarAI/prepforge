---
qid: ing_738717b06a__star__local
question: 'Explain: SQL vs NoSQL — System Design was HARD until I Learned these 30
  Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 313
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:18:45-05:00'
sources: []
---

**Situation:**  
At my last startup we were building a recommendation engine that had to serve millions of users in real time. Our initial prototype used a single MySQL database; as traffic grew, the query latency shot up from 120 ms to over 3 s during peak hours.

**Task:**  
I needed to redesign the data layer so that read throughput stayed below 200 ms while still supporting complex joins for user profiles and item metadata.

**Action:**  
I mapped out thirty core concepts: ACID vs BASE, schema flexibility, horizontal scaling, CAP theorem trade‑offs, eventual consistency, sharding strategies, read replicas, write amplification, key–value access patterns, document stores, graph databases for relationships, time‑series handling, indexing (B‑trees, inverted indexes), caching layers (Redis), and data partitioning by hash vs range. I chose a hybrid approach: user profiles in PostgreSQL with JSONB for semi‑structured data, item metadata in a Cassandra cluster for fast writes, and Redis for hot recommendation caches. We added a Kafka pipeline to sync updates across stores.

**Result:**  
Read latency dropped to 90 ms on average, throughput increased by 4×, and we reduced infrastructure cost by 25 %. The exercise taught me that choosing the right database isn’t about one tool but orchestrating multiple systems based on their strengths and the problem’s consistency/latency requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
