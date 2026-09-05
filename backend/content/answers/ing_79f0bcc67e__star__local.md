---
qid: ing_79f0bcc67e__star__local
question: 'Explain: How to optimize database sharding for even data distribution'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 361
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:37:32-05:00'
sources: []
---

**Situation:**  
During a quarterly scaling sprint at my previous company, our product’s user base grew from 2 M to 8 M active users in six months. The single PostgreSQL instance was hitting 95% CPU and 90% I/O wait; latency for profile lookups spiked to 350 ms.

**Task:**  
I had to design a sharding strategy that would distribute the user table evenly across three new read replicas, ensuring each shard handled roughly an equal share of traffic while keeping join performance acceptable for our analytics queries.

**Action:**  
First, I ran a histogram on `user_id` distribution using `pg_stat_user_tables`. The data were heavily skewed toward recent IDs, so I implemented a hash‑based sharding key: `hash(user_id) % 3`. I added a routing middleware layer in Node.js that hashed the ID at request time and directed queries to the appropriate replica. To preserve join integrity for cross‑shard analytics, I introduced a materialized view that aggregated user metrics per shard, refreshed nightly via cron jobs. I also set up Prometheus alerts on each replica’s query latency.

**Result:**  
Post‑migration read latency dropped from 350 ms to under 80 ms (77% improvement), and CPU utilization fell below 60%. The even distribution reduced hotspot contention by ~90%, allowing us to scale the system horizontally without a costly new primary. I learned that hashing on a stable key, coupled with a lightweight routing layer, can dramatically flatten load curves in sharded setups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
