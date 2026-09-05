---
qid: ing_f8e9fae1d4__star__local
question: 'Explain: Infrastructure costs — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 332
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:46:14-05:00'
sources: []
---

**Situation**  
At my previous SaaS company, we were approaching a $2 million annual spend on RDS due to rapid growth—our user base hit 500k and read traffic spiked during peak hours. The single‑instance database was becoming a bottleneck, causing latency spikes that directly hurt customer retention.

**Task**  
I had to redesign the data layer to reduce infrastructure costs by at least 30% while keeping query performance stable or better, all within our two‑month roadmap.

**Action**  
I introduced horizontal sharding: partitioned the main `orders` table across three PostgreSQL instances in different AZs. Each shard stored a contiguous range of customer IDs, so most lookups hit only one node. I used AWS Aurora Serverless for auto‑scaling compute and Amazon Elasticache Redis as a read replica cache to offload hot queries. To keep cross‑shard joins efficient, I migrated reporting jobs to a nightly Spark job that aggregated data from all shards into an analytics bucket on S3. I also added automated failover scripts with CloudWatch alarms.

**Result**  
After deployment, database spend dropped 35% (from $2 M to $1.3 M). Average query latency fell from 350 ms to 120 ms during peak periods. The experience taught me that sharding is most effective when combined with caching and batch analytics—just splitting data alone isn’t enough; you need a full architecture that supports the new pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
