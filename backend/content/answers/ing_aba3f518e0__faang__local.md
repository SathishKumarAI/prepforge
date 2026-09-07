---
qid: ing_aba3f518e0__faang__local
question: 'Explain: use to get to work and if — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 578
total_tokens: 838
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:23:18-05:00'
sources: []
---

**Clarify**  
You’re asking how to build a hyper‑scale NoSQL database like DynamoDB—specifically its storage engine, consistency model, and scaling strategy. Key assumptions: we need sub‑millisecond latency at petabyte scale, linear scalability, strong consistency for a subset of operations, and multi‑region replication.

**Approach**  
1. **Data partitioning** (sharding) on a hash key to spread load across many nodes.  
2. **Replication & quorum**: use Paxos/RAFT‑style consensus per partition to guarantee ACID‑like writes.  
3. **Storage layer**: SSD‑backed log‑structured merge tree (LSM) for write amplification control, with in‑memory compaction buffers and tiered storage (hot vs cold).  
4. **Hot‑spot mitigation**: adaptive re‑hashing or “shard splitting” when a node’s throughput exceeds a threshold.  
5. **Global consistency**: use a global transaction coordinator that leverages the same quorum protocol, but only for cross‑partition ops.

**Depth**  
- *Partition key* drives data locality; each partition has its own leader and followers (3‑node cluster).  
- Writes go to the leader’s write‑ahead log, replicated via Raft; once committed, an in‑memory “memtable” is flushed to disk asynchronously.  
- Reads hit the memtable first; if miss, read from SSTables via a Bloom filter + LSM merge.  
- Consistency: **eventual** by default (read‑your‑writes guaranteed on leader), but strong consistency achieved with *Read‑Your‑Writes* and optional *Strongly Consistent Reads* that hit the quorum.  
- Scaling: add nodes; rebalance partitions automatically; use a global metadata service to map keys to nodes.

**Edge Cases**  
- **Hot partition spikes** → trigger split, allocate new node, redistribute key range.  
- **Node failure** → leader election via Raft; followers catch up from logs.  
- **Network partitions** → fallback to read‑your‑writes on the local quorum, risking stale reads elsewhere.

**Optimize & Communicate**  
Improvements: introduce *adaptive Bloom filters* to reduce disk I/O, use *serverless compute* for compaction jobs, and expose a *partition preview API* so developers can pre‑heat hot keys. When explaining, start with business problem (low latency at scale), then walk through the architecture layers, highlight trade‑offs (e.g., quorum cost vs consistency), and finish with operational resilience strategies. This narrative demonstrates both technical depth and structured reasoning—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
