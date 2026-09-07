---
qid: ing_b6105c3158__aws__local
question: Your index will not fit on one machine. How do you shard it, and what breaks?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 403
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:15:42-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a global product search index for an e‑commerce platform that served 200 M users daily. The raw index size hit 1.2 TB, far beyond a single EC2 instance’s memory and disk capacity.

**Action**  
- **Sharding strategy:** I partitioned the inverted index by *product category* (≈ 50 shards) using **Amazon Elasticsearch Service (OpenSearch)** with one dedicated cluster per shard.  
- **Cross‑shard coordination:** A lightweight Lambda layer maintained a routing table in DynamoDB, mapping query terms to the relevant shards.  
- **Data consistency & fault tolerance:** Each shard ran in an Auto Scaling group across two AZs; snapshots were stored in S3 and replicated via Cross‑Region Replication for disaster recovery.  
- **Cost/scale trade‑offs:** Sharding reduced per‑node memory from 64 GB to 4 GB, cutting EC2 costs by ~70 %. However, cross‑shard queries introduced a 15 % latency overhead; we mitigated this with a pre‑computed “hot term” cache in ElastiCache.

**Result**  
- Query latency dropped from 1.8 s to **0.45 s** (95th percentile).  
- Search click‑through rate rose 12 %, translating to an additional $3M/month revenue.  
- The architecture is now 99.9 % available and scales elastically with user traffic.

**Learning**  
I realized that *ownership* means anticipating failure points—so I added automated health checks that trigger shard rebalancing before performance degrades. This approach satisfies **Customer Obsession**, **Ownership**, and **Dive Deep** while delivering measurable business results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
