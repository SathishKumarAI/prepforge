---
qid: ing_181daf335f__fp__local
question: 'Explain: Cluster Rebalancing — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 367
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:56:54-05:00'
sources: []
---

**Why a Hadoop cluster needs rebalancing**

A distributed file system like HDFS stores data as *blocks* across DataNodes for fault‑tolerance and parallelism.  
When the cluster grows (new nodes) or shrinks (nodes fail), the *block distribution becomes skewed*: some nodes hold far more blocks than others.  
If one node holds 60 % of the data, read/write throughput collapses to that node’s capacity; spare storage on other nodes remains idle.  
From an **optimization** viewpoint, we want a *load‑balanced* allocation that maximizes aggregate bandwidth and minimizes latency.

**How HDFS rebalancing works**

1. **Scan for imbalance** – the balancer queries each DataNode’s block count and size.  
2. **Compute target distribution** – based on total capacity, it determines how many blocks each node should hold.  
3. **Move excess blocks** – using `DataTransferProtocol`, the source DataNode streams a block to the destination while updating NameNode metadata atomically.  

The algorithm runs *incrementally*; it never stops serving client requests because only the background balancer thread moves data.

**Non‑obvious insight**

Rebalancing is not just about equal block counts; **network topology matters**.  
Moving a block from node A to B on the same rack reduces cross‑rack traffic and thus network congestion, which can be more critical than mere storage equality.  
HDFS allows specifying *topology scripts* so the balancer respects rack boundaries—an optimization that often improves overall cluster throughput without additional hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
