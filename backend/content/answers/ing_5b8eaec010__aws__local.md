---
qid: ing_5b8eaec010__aws__local
question: 'Explain: Partitioning Key Tips - DynamoDB — Partitionkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 420
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:52:16-05:00'
sources: []
---

**Situation / Task**  
While architecting a recommendation engine for an e‑commerce platform, I had to model user‑session data in DynamoDB. The table would store millions of “Session” items per day and needed sub‑second reads for real‑time personalization.

**Action**  
I chose the **partition key = `UserId`** and added a **sort key = `Timestamp`**.  
- **Customer Obsession**: This ensured that every read for a user’s current session hit a single partition, giving instant feedback to shoppers.  
- **Ownership & Dive Deep**: I profiled hot keys with CloudWatch metrics; one “power‑user” account generated 70 % of traffic. To avoid hot partitions I introduced an optional **hash prefix** (`UserId#Region`) when the load exceeded 2 M items/second, keeping write throughput balanced across partitions.

I leveraged:
- **DynamoDB Auto Scaling** for on‑demand capacity,
- **Global Secondary Indexes (GSI)** on `ProductCategory` to support cross‑category analytics without affecting primary access patterns,
- **AWS Lambda** with step functions for batch rebalancing during off‑peak windows, keeping cost below $15 k/month.

**Result**  
After deployment, read latency dropped from 250 ms to <10 ms (99th percentile). Write throughput scaled to 3 M ops/sec without throttling, and the monthly cost remained 12 % lower than the previous RDS‑based design. I documented a post‑mortem on the hot key issue; the team adopted the hash‑prefix pattern across all tables, improving overall system resilience.

> **Bar‑raiser takeaways**: clear ownership of the data model, deep understanding of partitioning trade‑offs, quantified performance gains, and a lesson learned that was codified for future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
