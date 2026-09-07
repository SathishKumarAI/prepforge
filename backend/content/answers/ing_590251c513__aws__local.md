---
qid: ing_590251c513__aws__local
question: 'Explain: Sort Key — Sortkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 498
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:46:50-05:00'
sources: []
---

**Situation & Task**

At my previous company we built a real‑time recommendation engine that ingested user clickstreams into an Amazon DynamoDB table. The table’s primary key was `UserID` (partition) + `EventTimestamp` (sort key). We needed to query the last 24 h of events per user for downstream ML training, but the query latency grew from ~20 ms to >200 ms as traffic hit 5 M writes/day.

**Action**

I *owned* the issue and *dived deep* into DynamoDB’s sort‑key semantics. The sort key is a lexicographically ordered attribute that lets us fetch items in time order without scanning. I re‑architected the table:

1. **Composite Sort Key:** `EventTimestamp#ShardId` – added a 2‑digit shard prefix to spread hot spots.
2. **Global Secondary Index (GSI):** `UserID + EventTimestamp` with a projected attribute set containing only the fields needed for ML, reducing read capacity units.
3. **Provisioned Autoscaling:** Enabled on both table and GSI to match peak write traffic (+30 % buffer).
4. **Caching Layer:** Integrated Amazon ElastiCache‑Redis as a read cache for the most recent 1 h of events, cutting 80 % of DynamoDB reads.

I also wrote a Lambda pipeline that streams the raw events into an S3 data lake via Kinesis Data Firehose for batch ML training, ensuring durability and cost efficiency.

**Result**

- Query latency dropped from **200 ms → 25 ms** (p99) for 24‑h lookups.
- Read capacity usage fell by **42 %**, saving ~$1.2k/month.
- The caching layer reduced DynamoDB read traffic by **80 %**, lowering operational cost and improving ML model freshness.

**Reflection**

I learned that a *sort key* is not just an ordering tool—it’s the linchpin for efficient range queries in NoSQL. By combining sharding, GSIs, autoscaling, and caching, we achieved high availability, scalability, and cost‑effective performance—exactly what Amazon values under **Customer Obsession** (fast data for better recommendations) and **Ownership** (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
