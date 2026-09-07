---
qid: ing_7d604312d8__aws__local
question: 'Explain: Hot Shards — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 402
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:08:55-05:00'
sources: []
---

**Situation (S)**  
While redesigning our recommendation engine for a global e‑commerce platform, we hit a *hot shard* problem: a few user ID ranges were generating > 30 % of all read/write traffic, throttling the rest of the cluster.

**Task (T)**  
I had to eliminate the hotspot without adding extra cost or breaking existing APIs, and keep latency under 50 ms for 99.9 % of requests.

**Action (A)**  
*Customer Obsession & Ownership.* I mapped the traffic heat map with CloudWatch metrics and discovered that users in a single geographic region were over‑represented.  
I introduced **consistent hashing** with *virtual nodes* (10× more shards per physical node) and added a small **Redis Cluster** as a write‑through cache to absorb bursts.  
Using **Amazon DynamoDB Global Tables** for eventual consistency, I re‑balanced the keyspace across AZs, and enabled **DAX** for low‑latency reads.  
I scripted an automated *shard rebalancer* in Lambda that runs nightly, monitors skew, and triggers a *Data Pipeline* to redistribute data via AWS Glue jobs.

**Result (R)**  
Traffic was evenly spread—hot shard traffic dropped from 30 % to < 5 %. Read latency fell to 32 ms on average; the 99.9th percentile stayed below 48 ms. Cost increased by only 12 % due to the Redis cache, while overall throughput grew 2×.

**Bar‑raiser takeaway:**  
Ownership is demonstrated by taking full responsibility for both problem diagnosis and end‑to‑end solution delivery; dive deep into metrics drives quantifiable impact; learning from a failure (hot shard) led to an architecture that scales automatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
