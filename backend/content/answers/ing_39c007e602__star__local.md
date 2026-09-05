---
qid: ing_39c007e602__star__local
question: 'Explain: Cardinality — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 304
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:24:12-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we launched a new mobile payments product that reached 1 M active users in six months. Our PostgreSQL cluster was suddenly hitting the 30 GB limit and query latency spiked to 2–3 seconds for balance checks.

**Task** – I had to scale the database horizontally so that read/write throughput could grow with traffic while keeping a single, consistent view of user balances across all services.

**Action** – I designed a sharding strategy based on user‑ID hash ranges. Each shard ran in its own Aurora PostgreSQL instance; we used Amazon RDS Proxy for connection pooling and automated failover. We added a lightweight “shard router” microservice that intercepted incoming requests, calculated the target shard via modulo hashing, and forwarded the query. To maintain cross‑region consistency, we set up asynchronous read replicas and leveraged AWS Global Accelerator to route traffic to the nearest shard. I also wrote a migration script to re‑hash existing data into the new shards without downtime.

**Result** – After deployment, write latency dropped from 2.5 s to under 200 ms, and overall throughput increased by 8×. The system now supports 10 M users with minimal operational overhead. I learned that careful shard key selection and automated routing are critical for seamless horizontal scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
