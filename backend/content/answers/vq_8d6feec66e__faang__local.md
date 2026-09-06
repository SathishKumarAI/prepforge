---
qid: vq_8d6feec66e__faang__local
question: Why the output of map tasks are spilled to local disk and not in hdfs?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 471
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:22:03-05:00'
sources: []
---

**Clarify**  
The question asks why, during a MapReduce job, each mapper writes its intermediate key‑value pairs to *local* disk (e.g., `/tmp/hadoop/mapred/...`) instead of directly into HDFS.

Assumptions:  
- We’re talking about the Hadoop 1.x/2.x framework.  
- The mapper’s output is unsorted and may exceed memory limits.

**Approach**  
Explain the MapReduce execution flow, focusing on the *spilling* phase, and then justify the design choice.

**Depth**  
Mappers process records in a streaming fashion. Their outputs are first buffered in RAM. When the buffer reaches a threshold (default ~64 MB), Hadoop *spills*: it writes the buffered data to a local file, sorts it, and merges spills incrementally. This is done **in‑process** on the node that owns the mapper.

Why not HDFS?  
1. **Latency & throughput:** Writing to HDFS incurs RPC round‑trips to NameNode/DataNodes and network traffic; spilling to local SSD/HDD is orders of magnitude faster, keeping mappers from idling.  
2. **Fault tolerance:** Mappers are short‑lived tasks that run on the same node that will later execute reducers. Local spill files can be deleted after shuffle without affecting global consistency.  
3. **Cost & bandwidth:** HDFS is designed for long‑term storage; using it for transient shuffle data would waste network and storage resources.

After spilling, the mapper initiates a *shuffle* phase where reducers pull these local spill files over the network. Thus, only the final sorted output (the reduce result) ends up in HDFS.

**Edge cases**  
- If a node fails during spill, its intermediate data is lost; Hadoop re‑runs the mapper on another node.  
- Extremely large mappers may exhaust local disk space → job failure or OOM errors.

**Optimize & communicate**  
Mention that newer frameworks (e.g., Tez, Spark) use in‑memory shuffle to avoid disk spills entirely. Highlight that this design balances speed, resource usage, and fault tolerance—key trade‑offs interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
