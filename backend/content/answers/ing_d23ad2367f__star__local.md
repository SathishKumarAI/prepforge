---
qid: ing_d23ad2367f__star__local
question: 'Explain: Solution — What is Database Sharding? - Shard DB Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 309
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:30:03-05:00'
sources: []
---

**Situation:**  
At my last company we launched a social‑media app that grew to over 12 million daily active users in just six months. The PostgreSQL instance kept lagging; queries for user timelines started taking 2–3 seconds, and our SLA was 200 ms.

**Task:**  
I had to redesign the data layer so that read latency dropped below 200 ms while keeping write throughput high, all without rewriting the application code.

**Action:**  
I introduced horizontal sharding: we partitioned the user table by a hash of `user_id`, creating four logical shards on separate EC2 RDS instances. Using AWS Aurora’s cross‑region replication, each shard served reads locally and writes were routed through a lightweight Go microservice that calculated the target shard from the incoming request. We also added Redis caching for hot timelines and set up a nightly data compaction job to keep each shard lean. To avoid “hot spots,” we monitored query patterns with CloudWatch and adjusted hash ranges when one shard grew disproportionately.

**Result:**  
Read latency fell to 70 ms on average, and write throughput increased by 4×. The app maintained 99.9% uptime during a 3‑month beta test. I learned that sharding is less about splitting tables arbitrarily and more about aligning data access patterns with physical partitions—balancing performance, operational complexity, and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
