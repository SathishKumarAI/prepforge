---
qid: vq_6c0d80ff82__faang__local
question: What is block scanner in hdfs?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 450
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:14:59-05:00'
sources: []
---

**Clarify**  
The interviewer asks about a *block scanner* in HDFS. I’d confirm that they mean the background process that scans stored blocks for corruption, not the client‑side block reader. Clarify whether they want implementation details or just conceptual understanding.

**Approach**  
1. Define what a block scanner is and its role.  
2. Explain how it operates within the DataNode lifecycle.  
3. Mention key metrics (scan interval, bandwidth).  
4. Touch on failure handling and interaction with NameNode.

**Depth**  
A block scanner is a daemon inside each HDFS DataNode that periodically reads every stored data block in memory‑mapped or disk‑cached form. It verifies the integrity of the block by recomputing its checksum (or MD5/SHA) and comparing it to the stored value. If corruption is detected, the scanner reports the bad block to the NameNode, which then initiates a replication from healthy replicas. The scanner runs on a separate thread pool, using a configurable scan interval (`dfs.blockscan.interval`) and bandwidth limit (`dfs.blockscan.bandwidth.per.node`). It reads blocks in chunks (default 64 KB) and can skip read‑only or replicated‑only blocks based on configuration.

**Edge Cases**  
- *High I/O load*: excessive scanning can starve user requests; tune `blockscan.bandwidth`.  
- *Disk failures*: scanner may hang if a block is unreadable; the DataNode marks it bad after timeout.  
- *Large cluster*: scanning all blocks can take hours; incremental scans or delta‑based checks are common mitigations.

**Optimize & Communicate**  
To improve throughput, the scanner can be parallelized per rack and use prefetching. I’d explain that newer HDFS versions offload checksum verification to the client during reads (client‑side integrity), reducing DataNode load. In an interview, I would summarize: *“The block scanner is a safety net ensuring data durability; it’s configurable, runs in the background, and triggers replication when corruption is found.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
