---
qid: ing_318ac9e898__aws__local
question: Are indices and shards not free? — How many shards should I have in my Elasticsearch
  cluster? | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 406
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:17:09-05:00'
sources: []
---

**Situation & Task**  
When I migrated a 3‑TB e‑commerce catalog to Amazon OpenSearch (ES) on an **auto‑scaling cluster**, the team faced a spike in search latency after adding new product feeds. The root cause was an *over‑sharded* index that inflated query overhead and increased node churn.

**Action**  
I first *dive deep* into shard metrics: `cluster.health`, `indices.shards` and `node.store.size`. Using the **Shard Allocation Awareness API**, I calculated the optimal shard count:

```bash
# Rough rule: 50 GB per primary shard for read‑heavy workloads
desired_shards = ceil(3_000 / 50) ≈ 60
```

I re‑indexed with `shard=30` and `replica=2`, then turned on **OpenSearch’s Auto-Tune** to keep the cluster at ~80 % CPU. I also implemented a *custom metric* in CloudWatch that alerts when `search.query.total_time_ms > 200ms`.

**Result**  
- Query latency dropped from **650 ms → 140 ms** (5× faster).  
- Node churn reduced by **70 %**, cutting EC2‑hour costs from $12k/month to $3.6k/month.  
- Search throughput increased to **4,200 QPS** without additional nodes.

**Reflection**  
I learned that *indices are not free*—each shard incurs storage and GC overhead. By owning the trade‑off between granularity and cost, I delivered measurable performance gains while keeping AWS bill in check.

> **Leadership Principles:** *Customer Obsession*, *Ownership*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
