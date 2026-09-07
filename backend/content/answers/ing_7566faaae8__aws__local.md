---
qid: ing_7566faaae8__aws__local
question: 'Explain: Vertical Partitioning — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 480
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:51:28-05:00'
sources: []
---

**Situation & Task**  
I was leading the redesign of an e‑commerce recommendation engine that stored user profiles, product catalog and clickstream logs in a single monolithic RDS instance. By 2023 the table had > 50 TB and read latency spiked to 350 ms during peak hours—slowing recommendations and hurting conversion rates (CPC fell by 12 %). I needed to scale the database while keeping cost under $1 M/yr.

**Action – Vertical Partitioning & AWS Design**  
*Customer Obsession / Ownership* – I broke the monolith into three logical shards: **User‑Profile**, **Product‑Catalog** and **Event‑Log**.  
- **RDS Aurora MySQL (Serverless v2)** for User‑Profile and Product‑Catalog (≤ 500 GB each). Serverless auto‑scales read replicas up to 200× during traffic spikes, giving sub‑20 ms latency.  
- **Amazon Timestream** for Event‑Log (hundreds of millions of events/day). It’s time‑series optimized, scales automatically and costs <$0.005 per GB ingested.  
*Dive Deep / Bias for Action* – I added a **DynamoDB Global Secondary Index** on `user_id` in the Profile table to support real‑time personalization queries with 1 ms latency.  
*Invent & Simplify* – A single Lambda function orchestrates data migration, validates consistency via checksums, and updates an S3 landing bucket for archival.  

**Result**  
- Read latency dropped from 350 ms → **< 20 ms** (95th percentile).  
- Recommendation click‑through rate rose by **18 %**, boosting revenue by $2.4M/quarter.  
- Annual DB cost fell from $1.3 M to **$0.9 M** while adding 30 % headroom for growth.

**Learnings** – Early monitoring revealed that the Timestream retention policy needed tuning; a mis‑set TTL caused 15 % of queries to hit cold storage, so I adjusted to 90‑day hot tier. This iterative feedback loop is what keeps us ahead of capacity spikes and cost overruns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
