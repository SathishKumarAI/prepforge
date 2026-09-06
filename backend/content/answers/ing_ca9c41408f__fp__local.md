---
qid: ing_ca9c41408f__fp__local
question: 'Explain: Disadvantages — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 398
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:11:20-05:00'
sources: []
---

**Why data replication hurts a DBMS**

At its core a database must keep *consistency* (all users see the same truth).  
Replication duplicates a table across nodes to boost availability and read throughput.  
However, every write now has to be applied to every replica.  

1. **Write amplification & latency** – A single `UPDATE` becomes *k* operations (k = replicas), so the cost grows linearly with k.  
   The system must wait for all acknowledgments (or at least a quorum) before committing, turning a cheap update into a network‑bound transaction.  

2. **Stale reads & divergence** – If a replica lags or a network partition occurs, reads may return outdated data.  The DBMS must then resolve conflicts, usually by “last‑writer wins” or application‑level merges, which introduces nondeterminism and subtle bugs.  

3. **Storage & maintenance overhead** – Each replica consumes disk space; backup, index rebuilds, and schema changes are duplicated, inflating operational cost.

4. **Consistency–performance trade‑off** – Strong consistency (e.g., serializable isolation) forces a global lock or two‑phase commit across replicas, erasing the throughput benefit that replication promised.

**Non‑obvious insight:**  
Replication *does not* merely “copy data”; it turns a single logical resource into a distributed consensus problem. The overhead is dominated by the **information‑theoretic cost of synchronizing state**—each replica must receive every bit of change, so the network bandwidth required scales with the total write volume, not just the number of reads. Thus, unless the workload is overwhelmingly read‑heavy and tolerates eventual consistency, replication can become a net negative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
