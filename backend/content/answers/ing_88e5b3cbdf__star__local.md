---
qid: ing_88e5b3cbdf__star__local
question: 'Explain: Range-based sharding — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 295
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:06:33-05:00'
sources: []
---

**Situation**  
When I joined the fintech team, our user‑balance table was hitting 30 GB and query latency for top‑up history had spiked above 400 ms during peak hours.

**Task**  
I needed to split the table into shards so that reads and writes stayed under 100 ms while keeping data locality for range queries on account IDs.

**Action**  
I designed a range‑based sharding scheme on AWS RDS Aurora. First, I plotted the distribution of `account_id` values and identified natural breakpoints at every 10 million IDs. Then I created five read replicas, each hosting one shard’s range and set up an Application Load Balancer with routing rules that forwarded requests to the correct replica based on the ID prefix. To keep cross‑shard joins fast, I added a lightweight metadata table in DynamoDB that cached shard endpoints. Finally, I implemented a background migration job using AWS Data Migration Service to move existing rows incrementally, ensuring zero downtime.

**Result**  
After deployment, read latency dropped from 400 ms to 70 ms and write throughput increased by 3×. The system now scales horizontally with minimal operational overhead, and I learned how to balance shard granularity against cross‑shard join costs in a cloud environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
