---
qid: ing_f94911a901__fp__local
question: 'Explain: It Reduces Fault Tolerance — Bonsai Blog | Fully Managed Elasticsearch
  & OpenSearch \u2022 Why Elasticsearch should not be your Primary Data Store'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 411
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:49:27-05:00'
sources: []
---

**Why Elasticsearch (and its managed variants) erodes fault‑tolerance**

At the core of any data store is *durability*: a guarantee that once an application writes a record, it will survive crashes, power loss, and network partitions.  
Elasticsearch stores documents in Lucene segments on local disk, then replicates those segments to other nodes via a lightweight “replica” protocol. The system assumes that every node’s disks are reliable and that the replication pipeline is instantaneous.

1. **Write‑ahead vs. commit** – A write is considered durable only when it reaches a replica node’s *write buffer*; the segment file is not yet on disk. If the master dies before the OS flushes buffers, the data can be lost—contrary to ACID semantics.  
2. **Eventual consistency of replicas** – Replicas are asynchronously updated. During a network partition, the primary may continue accepting writes that never reach a replica; once connectivity resumes, stale or missing documents appear.  
3. **Cluster‑wide coordination** – The master node holds cluster state in RAM and persists it to a single file. A crash of this node can corrupt the entire cluster’s metadata, forcing manual recovery.

These weaknesses stem from treating *search* as the primary workload: low latency at the cost of strong durability guarantees. In contrast, relational or key‑value stores employ synchronous commit logs and consensus protocols (e.g., Raft), ensuring that a write is truly persisted before acknowledging it.

**Non‑obvious insight:**  
Elasticsearch’s design intentionally trades *durability* for *scalability*. By keeping the master thin and replication lightweight, it gains horizontal scale but loses the ability to guarantee data integrity under failure. For mission‑critical workloads, this trade‑off is unacceptable; a “primary” store should enforce ACID guarantees before adding search as a secondary feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
