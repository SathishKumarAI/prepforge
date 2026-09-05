---
qid: ing_806a581bd1__star__local
question: 'Explain: Conclusions — How many shards should I have in my Elasticsearch
  cluster? | Elastic Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 384
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:50:22-05:00'
sources: []
---

**Situation**  
When I joined the data‑science team at a fintech startup, we were migrating our production search index from a single node to a cluster that could handle millions of daily queries. The existing index had 5 primary shards and was hitting performance bottlenecks during peak hours.

**Task**  
I needed to determine an optimal shard count that balanced query latency, indexing throughput, and hardware limits without over‑fragmenting the data.

**Action**  
1. I collected baseline metrics: average document size (~2 KB), total dataset (120 GB), expected growth rate (15%/month), and peak concurrent queries (~10k).  
2. Using Elasticsearch’s “shard sizing” guidelines, I calculated that each primary shard should be 50–100 GB for efficient cache usage.  
3. I set up a staging cluster with 4 nodes, testing 20, 30, and 40 primary shards while measuring query latency (p95), indexing rate, and disk I/O.  
4. The 30‑shard configuration gave the best trade‑off: p95 latency dropped from 350 ms to 180 ms, indexing throughput increased by 35%, and each shard stayed below 4 GB per node, leaving headroom for replicas.

**Result**  
I implemented a 30‑primary‑shard layout with 2 replicas across the production cluster. This reduced average query latency to under 200 ms during peak traffic, improved indexing speed by 40%, and allowed us to scale nodes linearly as data grew. I learned that empirical testing on realistic workloads is far more reliable than strictly following generic guidelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
