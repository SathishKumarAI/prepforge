---
qid: ing_7d3814f442__star__local
question: 'Explain: Users Table (Optional) — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 326
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:44:10-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a marketing platform that required a custom URL‑shortening service for campaigns. The existing public shortener was unreliable and cost‑prohibitive, so the product team asked me to design an internal solution that could handle millions of redirects per day while supporting analytics.

**Task:**  
I needed to build a scalable, low‑latency shortener with optional user association, secure key generation, and robust analytics, all within our existing microservices stack.

**Action:**  
I chose a sharded key–value store (Redis) for fast lookups, backed by PostgreSQL for durability. Keys were generated using a Base62 counter seeded per shard to avoid collisions. To support optional user tables I added a nullable `user_id` column and exposed a REST API that accepted an email; if provided, the service created a record in the `users` table and linked the key. For analytics I instrumented each redirect with a Kafka producer that streamed events to a Spark job, which updated per‑link click counts in real time. I also implemented rate limiting via Redis counters and added HSTS headers for security.

**Result:**  
The service handled 3 M redirects/second with <10 ms latency, reduced costs by 70%, and gave the marketing team instant click reports (average 95% accuracy). I learned that coupling a fast cache with durable persistence and streaming analytics is essential for high‑traffic URL services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
