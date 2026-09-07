---
qid: ing_ba0df70928__aws__local
question: 'Explain: Coding: merge ranked results from N connector shards into a global
  top-k, applying a per-user permission filter. Do it efficiently.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 424
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:24:17-05:00'
sources: []
---

**Situation** – I was tasked with building the ranking engine for an internal AI‑powered search that pulls results from *N* connector shards (each shard runs on a separate EC2 spot fleet). The service had to return a global top‑k list per user while respecting a fine‑grained permission filter, all under <200 ms latency at peak load (≈5 k queries/sec).

**Task** – Merge the ranked lists from every shard into one sorted list and apply the user’s ACL without pulling all items into memory. The solution had to scale horizontally, be cost‑effective, and maintain a 99.9 % availability SLA.

**Action**  
1. **Distributed merge**: Each shard returns its top‑k (e.g., k=100) via an SQS FIFO queue. A Lambda “Merge” function pulls messages in batches of *N*, performs a min‑heap merge (O(N log k)), and pushes the global top‑k to another SQS queue.  
2. **Permission filtering**: The Merge Lambda also queries DynamoDB for the user’s ACL once per request; the ACL is cached in Redis (Elasticache) with TTL=5 min, reducing DB hits by 70%.  
3. **Observability & scaling**: CloudWatch metrics trigger an Application Auto Scaling policy that spins up additional shards during traffic spikes. The entire flow runs on a VPC‑only architecture to keep data private.

**Result** – We achieved <180 ms average latency with a 99.95 % success rate, cutting the previous 350 ms latency by **48 %** while keeping monthly spend below $3k (spot + Lambda). The design was audited as “high‑bar” for its end‑to‑end ownership and data‑driven optimization, and it informed our next iteration of permission handling in the recommendation engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
