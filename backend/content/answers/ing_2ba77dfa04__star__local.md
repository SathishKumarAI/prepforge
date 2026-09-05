---
qid: ing_2ba77dfa04__star__local
question: 'Explain: Shared-nothing architecture — What is Database Sharding? - Shard
  DB Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 352
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:11-05:00'
sources: []
---

**Situation** – At my last job I was tasked with scaling the customer‑profile service for a mobile app that had just hit 2 M active users. The PostgreSQL instance was choking on write traffic; latency spiked to 300 ms and our SLA was at risk.

**Task** – I needed to redesign the data layer so we could handle millions of concurrent writes while keeping read performance under 50 ms, all within a cost‑effective, fault‑tolerant architecture.

**Action** – I introduced a shared‑nothing sharding strategy. Using AWS Aurora Serverless with PostgreSQL compatibility, I partitioned the user table by `country_code` and a hash of the `user_id`. Each shard ran on its own Aurora cluster in a separate AZ, eliminating cross‑node traffic (the “shared‑nothing” principle). I wrote a lightweight routing layer in Go that directed queries to the appropriate shard based on the key. To keep joins efficient, I denormalized critical fields and used Amazon DynamoDB for session data, so reads stayed local.

**Result** – Write latency dropped from 300 ms to <30 ms, read latency stayed below 45 ms, and we handled a 5× traffic surge without additional hardware. The cost per request fell by 18 %. I learned that the key to successful sharding is choosing a partition key that balances load and minimizes cross‑shard joins, and that a shared‑nothing design dramatically simplifies recovery and scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
