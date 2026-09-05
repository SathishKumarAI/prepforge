---
qid: ing_6737403a86__star__local
question: 'Explain: Hashed sharding — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 303
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:07-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our user table had grown to 50 million rows and read latency hit 350 ms on the primary RDS instance during peak hours, jeopardizing our SLAs for real‑time account balances.

**Task** – I was tasked with scaling reads without redesigning the application, aiming to bring average latency below 80 ms while keeping cost under a 15% increase.

**Action** – I proposed and implemented hashed sharding on Amazon Aurora. Using the user’s `customer_id` as a hash key, I split the table into 16 logical shards, each mapped to its own Aurora cluster in separate Availability Zones. I wrote a lightweight routing layer in Node.js that hashes the ID and directs queries to the correct shard endpoint. To keep cross‑shard joins minimal, I denormalized balance aggregates into each shard. I also enabled Aurora’s Global Database feature for read replicas, providing low‑latency reads from local regions.

**Result** – Read latency dropped from 350 ms to 65 ms on average, and the total cost increased only by 12%. The exercise taught me how careful key selection and denormalization can turn a monolithic table into a scalable, highly available system with minimal code churn.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
