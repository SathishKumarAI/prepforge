---
qid: ing_1dcd0f12cb__aws__local
question: 'Explain: Good Shard Key: user_id — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 489
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:34:00-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
In a SaaS analytics platform serving millions of users, the data‑lake grew from 5 TB to 80 TB in two years. Query latency on user‑level reports hit 8 s, far above our SLA of 1 s. I was tasked with redesigning the sharding strategy for the click‑stream table to restore performance while keeping cost under \$10k/month.

**Action (Dive Deep & Ownership)**  
I evaluated three candidate shard keys: `event_id`, `timestamp`, and `user_id`. Using CloudWatch metrics, I saw that 72 % of queries were *user‑centric* (filtering by user). I chose **`user_id`** as the shard key.  
- **Design**: Partitioned the table in DynamoDB using a composite primary key (`PK=user#<user_id>`, `SK=event#<timestamp>`).  
- **AWS Services**: DynamoDB for low‑latency reads, S3 + Athena for archival analytics, Lambda to populate secondary indexes.  
- **Scalability/Availability**: Auto‑scaling read capacity ensured 99.9 % availability during traffic spikes; cross‑region replication kept latency <200 ms globally.  
- **Cost Trade‑off**: By aggregating events per user into daily partitions, I reduced write throughput by ~40 %, cutting DynamoDB costs from \$12k to \$7.8k/month.

**Result (Deliver Results)**  
Post‑migration, query latency dropped from 8 s to **0.6 s** on average, and the platform handled a 3× traffic surge without incidents. The cost savings of \$4.2k/month were reallocated to an ML model training budget, enabling a recommendation engine that increased user engagement by **18 %** in the next quarter.

**Reflection (Bias for Action & Learning)**  
I initially underestimated the write amplification from per‑event writes; a quick benchmark showed 1.5× higher costs. I adjusted the partition granularity to daily buckets, which mitigated this issue—demonstrating iterative learning and rapid course correction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
