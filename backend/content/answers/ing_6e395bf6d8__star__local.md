---
qid: ing_6e395bf6d8__star__local
question: 'Explain: External Side Effects — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 327
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:07:43-05:00'
sources: []
---

**Situation** – At my last company I was building an online recommendation engine that updated user profiles every time they clicked a product. The click‑through data flowed through a Kafka stream into our Spark batch jobs, which persisted the results to Cassandra and triggered downstream email campaigns via a REST API.

**Task** – We needed to guarantee that each user click resulted in only one profile update and at most one campaign sent, even if network hiccups caused duplicate messages or retries from Kafka. The system had to be idempotent so that repeated side‑effects wouldn’t corrupt analytics or annoy users.

**Action** – I introduced a de‑duplication layer using the click’s unique event ID as the key in a Redis cache with a TTL of 24 h. Each Spark task checked Redis before writing to Cassandra; if the key existed, it skipped the write and email trigger. For the REST calls we added an “idempotency‑key” header that the campaign service stored in a PostgreSQL table; duplicate requests were recognized and ignored. I also added monitoring alerts on hit rates of the cache and Kafka offset lag.

**Result** – After deployment we saw a 99.8 % reduction in duplicate profile updates, and email sends per user dropped from an average of 2.3 to 1.0 per day during peak traffic. The system now reliably handles retries without side‑effect amplification, improving data integrity and user trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
