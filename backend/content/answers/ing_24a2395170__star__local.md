---
qid: ing_24a2395170__star__local
question: 'Explain: Using write sharding to distribute workloads evenly in your DynamoDB
  table'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 348
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:42:35-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with building a real‑time analytics pipeline for an ad‑tech platform that ingested millions of click events per day into a single DynamoDB table. By the end of Q1, we were hitting hot spots on the partition key “adId,” causing throttling and a 30 % increase in latency.

**Task:**  
I needed to redesign the ingestion pattern so that writes were evenly distributed across partitions while preserving query semantics for reporting by ad campaign.

**Action:**  
I introduced write sharding: each click event was tagged with a deterministic shard suffix (e.g., `adId#shard0`, `adId#shard1`… up to 10 shards) generated using a simple hash of the timestamp and user agent. The table’s partition key became this composite value, while the sort key retained the original adId for range queries. I updated the Lambda ingestion function to compute the shard on the fly and used batch write API calls with `WriteRequest` batching to keep throughput high. To reconstruct analytics per campaign, I wrote a nightly MapReduce job that aggregated across shards.

**Result:**  
Write throughput increased from 2 kW/s to 15 kW/s without throttling, and query latency dropped by 45 %. The sharding pattern also made the table highly available during peak traffic. From this, I learned how DynamoDB’s partitioning model can be tuned with simple deterministic hashing rather than relying on random UUIDs, balancing performance and data integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
