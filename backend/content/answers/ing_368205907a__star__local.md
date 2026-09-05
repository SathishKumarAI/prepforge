---
qid: ing_368205907a__star__local
question: 'Explain: Improve response time — What is Database Sharding? - Shard DB
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 376
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:17:03-05:00'
sources: []
---

**Situation**  
At my last role I was leading the migration of our customer‑support platform from a single RDS instance to a more scalable architecture. The product had 3 million active users and we were hitting a 2‑second average response time for ticket search queries, which hurt SLA compliance.

**Task**  
I needed to reduce query latency below 800 ms while keeping the system cost‑effective and ensuring data consistency across regions.

**Action**  
I introduced horizontal partitioning—sharding—by creating five logical shards based on user region. Each shard was an Aurora cluster in its own subnet group, with a dedicated read replica for analytics. I used AWS Database Migration Service to split the legacy table into `tickets_us_east`, `tickets_us_west`, etc., and updated our application’s ORM layer to route queries via a custom routing service that hashed user IDs to the correct shard. To avoid cross‑shard joins, I denormalized the most frequently queried fields and employed DynamoDB for session data. We also added a caching layer with ElastiCache Redis to surface hot tickets.

**Result**  
Post‑migration, search latency dropped from 2 s to 450 ms on average, and our SLA compliance improved from 92% to 99.7%. Cost increased by only 12% due to the efficient use of Aurora serverless for low‑traffic shards. I learned that sharding is not just about splitting tables; it’s also about aligning data access patterns, choosing the right AWS services, and carefully handling cross‑shard consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
