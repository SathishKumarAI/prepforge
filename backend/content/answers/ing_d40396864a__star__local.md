---
qid: ing_d40396864a__star__local
question: 'Explain: Rebalancing and Resharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 333
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:33:32-05:00'
sources: []
---

**Situation** – At my previous company we built a recommendation engine that served millions of users. The data was partitioned by user ID across 12 shards, but traffic skew grew: one shard handled 45 % of requests while others were idle.

**Task** – I had to rebalance the load without downtime and later reshard the dataset when we added new features that required a finer key space.

**Action** – First, I introduced a lightweight proxy layer that read the current request distribution and temporarily routed 20 % of traffic from hot shards to under‑utilized ones. Using Kafka streams I migrated user rows in batches, updating the shard map in ZooKeeper atomically so all nodes saw the new layout instantly. For resharding, I designed a two‑phase commit: phase 1 hashed each user’s ID into 24 target shards and staged data copies in S3; phase 2 swapped the live pointers after validating consistency checks (checksum + record count). Throughout, I monitored latency with Grafana and throttled migration to keep RPS below 10 % of peak.

**Result** – Load balanced within 4 hours, reducing average shard latency from 250 ms to 95 ms. Resharding took 12 hours with <0.5 % error rate and zero downtime. I learned that proactive monitoring and atomic metadata updates are key to seamless scaling in sharded ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
