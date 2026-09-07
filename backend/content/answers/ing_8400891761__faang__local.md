---
qid: ing_8400891761__faang__local
question: 'Explain: Example — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 443
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:51:46-05:00'
sources: []
---

**Clarify**

You’re asked how to *size shards* in an Elasticsearch cluster that stores documents (“elastic docs”).  
Assumptions I’d confirm:  
1. What is the total volume of data (in GB/TB) and expected growth rate?  
2. How many nodes are available, what CPU/RAM per node, and disk type (SSD/HDD)?  
3. What read/write patterns do we expect (search‑heavy vs index‑heavy)?  
4. Are there any latency or query‑throughput SLAs?

**Approach**

1. Estimate the *total* data size + growth buffer.  
2. Decide on a **shard size target** (≈ 50–200 GB for SSD, 100–400 GB for HDD).  
3. Compute number of primary shards = ceil(total_size / shard_target).  
4. Allocate at least one replica per node to balance load and fault tolerance.  

**Depth**

- Each shard is an isolated Lucene index; smaller shards mean faster allocation/merge but more overhead.  
- Keep shards ≤ 100 GB on SSD to avoid merge stalls; on HDD you can push up to 400 GB but risk slower random reads.  
- Use the *shard allocation awareness* settings (zone, rack) to spread replicas.  
- Monitor `cluster_stats` and adjust by splitting or merging shards as data grows.

**Edge Cases**

- Sudden spikes in document size (e.g., adding large binary fields).  
- Node failures that trigger re‑allocation; too many small shards can overload the master.  
- Indexing bursts exceeding write throughput → consider bulk API tuning.

**Optimize & Communicate**

Explain trade‑offs: larger shards reduce metadata overhead but increase recovery time and memory pressure during merges. I’d present a simple table showing shard counts for various data volumes, then outline how to monitor and rebalance using the Cluster API. This demonstrates clear reasoning, scalability awareness, and readiness to iterate based on operational metrics—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
