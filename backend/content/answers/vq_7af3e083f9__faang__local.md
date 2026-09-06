---
qid: vq_7af3e083f9__faang__local
question: How do you define block, and what is the default block size?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 484
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:18:32-05:00'
sources: []
---

**Clarify**  
The interviewer asks for two things: (1) a definition of *block* in the context of distributed storage or data processing, and (2) what the “default block size” is for that system. I’ll assume we’re talking about Hadoop HDFS, since it’s the canonical example.

**Approach**  
- Define what a block represents (a unit of storage).  
- State HDFS’s default configuration.  
- Mention how the size can be tuned and why it matters.

**Depth**  
A *block* is the smallest logical chunk that Hadoop stores on a DataNode. Each file is split into one or more blocks, each stored as an independent file on the local filesystem of a node. The block’s metadata (checksum, replication factor) lives in the NameNode.  

HDFS ships with a default block size of **128 MiB** (prior to Hadoop 3 it was 64 MiB). This value is set by `dfs.blocksize` and can be overridden per file or globally via configuration.

The block size balances two concerns:  
- *Large blocks* reduce metadata overhead in the NameNode but increase recovery time for a lost node.  
- *Small blocks* improve fault tolerance and parallelism but inflate NameNode memory usage (≈ 24 bytes per block).  

**Edge Cases**  
- Very small files (< block size) still occupy an entire block, wasting space (“small file problem”).  
- Extremely large blocks (> 1 GiB) can cause long read/write latencies.  
- Changing the default after data has been written requires a re‑split of existing files.

**Optimize & Communicate**  
I’d explain that choosing 128 MiB is a compromise: it keeps NameNode memory manageable (≈ 1 GB for 10⁶ blocks) while enabling reasonable parallelism. If an application needs finer granularity, we can set `dfs.blocksize` to 64 MiB or even 32 MiB; if we need fewer metadata entries, we could bump it to 256 MiB and run a Hadoop‑fsck to re‑balance the cluster. This shows I understand both the theory and practical tuning knobs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
