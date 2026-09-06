---
qid: ing_74688a5ea7__fp__local
question: 'Explain: Create a sharding strategy — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 501
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:12:24-05:00'
sources: []
---

### Why shard at all?

A document store that grows beyond the memory of a single node must split its data into **shards** so that each machine handles only a fraction of the load.  
If we let \(S\) be the size of a shard and \(N\) the number of nodes, the total capacity is \(C = N\times S\).  
When a query hits the index it must contact at least one node per *primary* shard that contains the relevant documents; the rest are replicas.  

### The optimization problem

We want to minimize two competing costs:

| Cost | What it depends on |
|------|--------------------|
| **Search latency** | Number of shards a query must hit (\(k\)) × time per shard. |
| **Re‑indexing cost** | Shard size \(S\) (larger shards mean fewer splits, but each split is heavier). |

Assuming uniform document distribution and constant query rate \(Q\), the expected latency is proportional to \(k = Q / S\).  
The re‑indexing cost grows roughly as \(\log_2(S)\) because splitting a shard of size \(S\) into two halves requires scanning all \(S\) documents.

Thus we minimize
\[
L(S)=a\,\frac{Q}{S}+b\,\log_2 S,
\]
where \(a,b>0\) are implementation constants.  
Differentiating and setting to zero yields the optimal shard size:
\[
S^\* = \sqrt{\frac{b Q}{a}}.
\]

### Non‑obvious insight

Most practitioners tune shards by “empirical rules of thumb” (e.g., 5 GB per shard).  
The derivation above shows that **the optimal shard size scales as the square root of the query volume**.  
Consequently, a cluster handling twice the traffic should not simply double its shard count; it should increase each shard’s capacity by only \(\sqrt{2}\), preserving latency while keeping re‑indexing manageable.

This principle bridges information‑theoretic efficiency (balancing read vs write costs) with geometric intuition about how many partitions are needed to keep a distributed search system both fast and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
