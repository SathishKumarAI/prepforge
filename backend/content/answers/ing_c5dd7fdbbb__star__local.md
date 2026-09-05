---
qid: ing_c5dd7fdbbb__star__local
question: 'Explain: Database Design — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 297
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:05:47-05:00'
sources: []
---

**Situation:**  
During my senior capstone, our team built a real‑time event recommendation engine for a music streaming platform that had to handle 10 M daily active users and serve personalized playlists within 100 ms.

**Task:**  
I was responsible for designing the underlying database layer so it could support high read/write throughput, maintain strong consistency for user preferences, and scale horizontally without downtime.

**Action:**  
I started by modeling a star schema: a central `user_profile` fact table linked to dimension tables (`artist`, `genre`, `device`). To meet latency goals I introduced a Redis cache layer with a write‑through policy that updated the PostgreSQL master asynchronously. For scaling reads, I set up logical replication to read replicas and employed sharding on the `event_log` table by user hash bucket. I also implemented partition pruning and vacuuming scripts to keep query performance stable. Finally, I used pg_stat_statements to monitor slow queries and tuned indexes accordingly.

**Result:**  
The system achieved 95 % of requests under 80 ms, reduced PostgreSQL load by 70 %, and allowed us to add new shards with zero downtime during peak hours. I learned that a clear dimensional model combined with caching and sharding is essential for meeting strict SLAs in production‑grade recommendation systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
