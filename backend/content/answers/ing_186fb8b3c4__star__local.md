---
qid: ing_186fb8b3c4__star__local
question: 'Explain: Monotonic change — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 339
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:17:42-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, our user base grew from 50K to over 300K active accounts within six months. The PostgreSQL cluster that stored all transaction logs was hitting 90 % CPU and latency spiked from 30 ms to 250 ms during peak hours.

**Task:** I needed to redesign the data layer so the system could handle 10× more traffic without rewriting the application, while keeping read‑write consistency for audit purposes.

**Action:** I introduced horizontal sharding on AWS RDS Aurora. First, I analyzed access patterns and partitioned users by geographic region—each shard received a subset of user IDs. Then I implemented a lightweight routing layer in Go that hashed the account ID to the correct shard. To preserve monotonic change (ensuring data never regressed), I set up cross‑region read replicas with Aurora Global Database, so every write propagated synchronously within milliseconds. Finally, I added automated failover scripts and continuous monitoring via CloudWatch.

**Result:** Latency dropped to 15 ms on average, throughput increased by 8×, and the system stayed within the 1 % SLA for downtime. I learned that sharding with a deterministic hash plus global replicas can maintain monotonic data consistency while scaling elastically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
