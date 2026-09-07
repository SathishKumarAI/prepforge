---
qid: ing_85a64a7536__faang__local
question: 'Explain: Data Replication — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 577
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:55:13-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise, architecture‑level explanation of how Hadoop’s Distributed File System (HDFS) replicates data blocks across the cluster, why it matters for fault tolerance and throughput, and what trade‑offs exist.

**Approach**  
1. Outline HDFS layering: NameNode + DataNodes.  
2. Describe block replication process and placement policy.  
3. Highlight consistency guarantees & failure handling.  
4. Summarize performance/consistency trade‑offs.

**Depth**  

| Layer | Responsibility |
|-------|----------------|
| **NameNode** | Keeps a global namespace and the mapping *file → blocks → DN locations*. It is single‑point of control; all metadata resides in RAM (hence why it’s critical). |
| **DataNodes** | Store raw block files on local disks. They periodically send heartbeats & block reports to the NameNode. |

*Replication flow*  
1. Client asks NameNode for a write location.  
2. NameNode returns a list of *N* DataNodes (default = 3). Placement follows: first on rack‑local node, second on different rack, third on same rack as the second to balance load and avoid single‑rack failure.  
3. Client streams block data directly to chosen DataNodes; each writes locally and acknowledges.  
4. NameNode updates metadata once acknowledgments are received from ≥ N nodes.

*Fault tolerance*  
- If a DN dies, its heartbeats stop → NameNode marks it dead.  
- The NameNode triggers re‑replication of the missing block to another DN on a different rack, maintaining replication factor.  

*Consistency*  
- HDFS is **write‑once** and *append‑only*. After a client finishes writing, the file becomes immutable (except for appends). No locking or MVCC needed, which simplifies scaling but limits concurrent updates.

**Edge Cases**  
- Network partitions → temporary loss of heartbeats → potential under‑replication.  
- Disk failure during write → partial block; NameNode cleans it up on next heartbeat.  
- Extremely high replication factor can waste storage and slow writes.

**Optimize & Communicate**  
To improve throughput, enable *rack awareness* and *block prefetching*. For large clusters, consider **HDFS Federation** to avoid a single NameNode bottleneck. In an interview, I’d emphasize that HDFS trades strong consistency for high availability and throughput, which is acceptable for batch analytics workloads but not for OLTP systems. This structured explanation showcases clear problem framing, technical depth, and trade‑off awareness—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
