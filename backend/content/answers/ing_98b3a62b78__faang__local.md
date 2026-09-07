---
qid: ing_98b3a62b78__faang__local
question: 'Explain: General guidelines — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 443
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:39:45-05:00'
sources: []
---

**Clarify**  
You’re asking how to size Elasticsearch shards for a “large” dataset—i.e., decide the number of primary shards and their size so queries remain fast while keeping cluster health stable. I’ll assume:  

* Data is append‑only, mostly read‑heavy.  
* You have 3–5 nodes in the cluster.  
* Node memory ≈ 32 GB, CPU ≈ 8 vCPU.  

**Approach**  
1. Estimate total data size (including replicas).  
2. Decide on shard count: rule of thumb is ~30‑50 GB per primary shard for a 4‑node cluster.  
3. Compute required shards = ceil(total_size / 30 GB).  
4. Cap shards per node to <100 to avoid memory overhead.  

**Depth**  
- **Shard size** ≈ 30–40 GB (primary) gives ~1–2 GB RAM per shard for Lucene’s segment cache, which keeps query latency low.  
- Keep replicas at 1 or 2; each replica doubles storage but improves read throughput and fault tolerance.  
- Use the *shard allocation awareness* to spread shards across racks/availability zones.  

**Edge Cases**  
- If data grows rapidly, you’ll hit the “shard explosion” problem (hundreds of tiny shards). Re‑index with a larger shard size or use the *shrink* API.  
- Very hot indices may need more replicas; cold indices can have fewer.  
- Watch out for the 10 k shard limit per node in ES 7.x+.  

**Optimize & Communicate**  
- Periodically monitor `cluster.health` and `indices.stats`. If GC pauses or query latency spikes, consider re‑sharding or increasing heap.  
- Document shard strategy in a runbook; automate shard resizing with Curator or Index Lifecycle Management (ILM).  

This balances performance, resource usage, and operational simplicity—exactly what a FAANG team would expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
