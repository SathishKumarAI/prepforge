---
qid: ing_2462075763__faang__local
question: 'Explain: Snapshots — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 491
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:09:08-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Describe how “snapshots” work in HDFS, focusing on the architecture that enables point‑in‑time copies of a file system without duplicating data.  
*Assumptions to confirm:*  
- We’re talking about Hadoop 2.x/3.x (not legacy 1.x).  
- The user wants an architectural overview, not just API usage.  

**2️⃣ Approach**  
Outline the key components: NameNode metadata, block storage in DataNodes, and the snapshot feature itself. Then walk through creation, deletion, and listing of snapshots, highlighting how HDFS reuses blocks.

**3️⃣ Depth**  
- **NameNode:** Keeps a tree of `INodes` (files/dirs). Each INode holds an array of `BlockInfo`s that point to DataNodes.  
- **Snapshots:** When `createSnapshot(dir)` is called, the NameNode creates a *snapshot root* under the target directory. It copies the directory’s inode list and block references into a new snapshot inode tree.  
- **Block sharing:** No blocks are copied; only metadata (inode pointers) are duplicated. A reference count on each block tracks how many snapshots/files point to it.  
- **Write‑time semantics:** Subsequent writes create new block replicas; old ones stay referenced by the snapshot until all references drop, then garbage‑collected.  
- **Operations supported:** `listSnapshots`, `removeSnapshot` (decrements ref counts), and `rollbackToSnapshot`.  

**4️⃣ Edge Cases**  
- *Large directories:* Snapshot creation is O(number of inodes) but cheap because only metadata copies.  
- *Concurrent writes:* HDFS guarantees snapshot isolation; writers see the pre‑snapshot state.  
- *Deletion of snapshots with many blocks:* Reference counts must be decremented atomically; race conditions handled by NameNode locks.  

**5️⃣ Optimize & Communicate**  
Explain that snapshots give near‑instant, space‑efficient backups and support point‑in‑time restores. Mention trade‑offs: increased metadata size, occasional GC overhead, and the need for sufficient NameNode RAM to hold snapshot inode trees. Conclude by noting that this design scales to petabytes while keeping write performance unaffected.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
