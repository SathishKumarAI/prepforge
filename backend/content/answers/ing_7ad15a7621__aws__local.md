---
qid: ing_7ad15a7621__aws__local
question: 'Explain: Database Tables — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 443
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:03:07-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of our legacy `tinyURL` table that stored 200 M rows with a single‐column primary key (`short_code`). The table suffered from hot spots, slow reads (latency > 120 ms) and costly storage on an on‑prem RDS cluster. My goal was to build a highly available, low‑cost service that could scale to 10× traffic while keeping per‑lookup latency < 5 ms.

**Approach & Design**  
* **Schema & Sharding** – Split the keyspace into 256 partitions (`short_code[0:2]`) and store each in an independent Amazon DynamoDB table. Each partition is provisioned with on‑demand capacity to absorb traffic bursts.  
* **Cache Layer** – Deploy a global Amazon CloudFront distribution with Lambda@Edge that forwards hit requests to the nearest DynamoDB shard, reducing round‑trip time.  
* **Write Path** – Use an AWS Step Function orchestrating: (1) generate collision‑free code, (2) write to DynamoDB, (3) publish SNS topic for analytics.  
* **Analytics & Cost Control** – Enable DynamoDB On‑Demand and use TTL to auto‑expire unused URLs after 365 days, cutting storage costs by 40%.

**Result**  
After deployment:  
- Lookup latency dropped from 120 ms to **4 ms** (99th percentile).  
- Read throughput scaled from 1 kRPS to **>200 kRPS** without provisioning changes.  
- Storage cost decreased by **$18,000/month** due to TTL and partitioning.

**Learnings & Ownership**  
I iterated on the sharding key after observing a “hot‑partition” spike; adding a random suffix reduced contention by 70%. I documented the failure modes (e.g., DynamoDB throttling) and built automated alerts, demonstrating *Ownership* and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
