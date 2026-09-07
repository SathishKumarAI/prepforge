---
qid: ing_de36eb4d42__aws__local
question: 'Explain: Shard distribution guidelines — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 426
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:41:54-05:00'
sources: []
---

**Situation / Task**  
I was leading a migration of our recommendation engine from an on‑premises Lucene cluster to Amazon OpenSearch Service (OSS). The dataset grew from 50 GB to 5 TB, and we needed to keep query latency under 200 ms for 99.9 % of traffic.

**Action**  
I applied the *Customer Obsession* and *Dive Deep* principles:  

1. **Shard sizing rule:** `Target shard size = 30–50 GB (hot data) + 10 GB (cold data)` to keep each node’s I/O bounded.  
2. **Elastic‑Docs guideline:** For a given index, calculate `total_docs × avg_doc_size`. If the product exceeds 50 GB, split into `ceil(product / 45 GB)` shards; otherwise use a single shard per node.  
3. Deployed OSS with **dedicated master nodes** and **warm tier nodes** (using EBS gp3 for hot data, io1 for cold).  
4. Configured index‑time routing to balance traffic across shards and set `index.max_shard_size` to enforce limits.

**Result**  
After the re‑sharding strategy:  
- Query latency dropped from 600 ms to **120 ms (80 % improvement)**.  
- Throughput increased by **4×** before any horizontal scaling.  
- Cost decreased by **15 %** because we avoided over‑provisioning nodes.

**Learnings**  
I realized that blindly increasing shards can backfire—too many small shards hurt I/O and increase coordination overhead. The bar‑raiser will hear my ownership of the migration, the depth of my shard‑size analysis, the quantified impact on latency & cost, and my iterative learning from initial over‑sharding failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
