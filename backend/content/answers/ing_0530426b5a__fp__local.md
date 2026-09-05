---
qid: ing_0530426b5a__fp__local
question: 'Explain: Simple Coherency Model — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 419
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:16:42-05:00'
sources: []
---

**Simple Coherency in HDFS**

*Problem.*  
A distributed file system must expose a single‑writer, many‑readers view of files while allowing parallel writes across machines. The naïve approach—copying every block to every node—yields prohibitive bandwidth and storage costs.

*Principle.*  
HDFS adopts *coherency by replication*: the **primary copy** (the one being written) is kept only on the client that initiates the write, while all other replicas are read‑only. Thus, a single, deterministic “source of truth” exists for each block at any instant.

*Why it works.*  
1. **Write locality:** The client writes to its local or nearby DataNode, minimizing latency and network traffic.  
2. **Read scalability:** Any replica can serve reads; the number of replicas equals the desired fault tolerance.  
3. **Consistency guarantees:** Since only one writer exists, there is no need for lock coordination across nodes—writes are serialized by the client’s block allocation order.

*Deep connection.*  
This design is an instance of *optimistic concurrency control*: we assume writers rarely conflict and avoid expensive locking. The cost of a failed write (e.g., due to a node crash) is simply re‑allocation, not complex rollback.

*Non‑obvious insight.*  
Because the client holds the primary copy, **HDFS can safely perform block replication asynchronously**. The client can commit its writes locally and later inform the NameNode; replicas are refreshed in the background. This decouples write latency from network reliability, allowing high throughput even over lossy links.

In short, simple coherency reduces HDFS to a *write‑once, read‑many* system with minimal coordination overhead, a design that scales linearly with cluster size while preserving strong consistency for single writers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
