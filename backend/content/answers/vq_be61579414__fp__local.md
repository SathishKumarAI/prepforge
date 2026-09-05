---
qid: vq_be61579414__fp__local
question: How to check the file size in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 355
total_tokens: 524
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:54:01-05:00'
sources: []
---

In Hadoop, a *file* is really a collection of HDFS blocks distributed across DataNodes.  
The “size” you want is the total number of bytes stored for that logical file, not the sum of block sizes (which would double‑count replicated data).  

**Why this matters**  
The HDFS client must know the exact byte count to:
1. Allocate a correct buffer when reading sequentially.  
2. Compute *block boundaries* for parallel reads.  
3. Report metadata accurately in WebHDFS or REST APIs.

**How it works**  
When a file is created, each block write triggers an `AppendBlock` RPC to the NameNode.  
The NameNode keeps an in‑memory map: `<filename> → {length, blocks}`.  
Every time a client finishes writing a block, it reports its size; the NameNode updates the cumulative length.  
Thus the file size is stored once and updated atomically, avoiding costly scans of all DataNodes.

**Non‑obvious insight**  
Because HDFS uses *append‑only* writes, the length can only increase.  
Therefore the NameNode can maintain a simple counter per file that is thread‑safe with a single lock per inode, giving O(1) read complexity for size queries even under heavy concurrent appends.

```bash
# From the command line:
hdfs dfs -stat %b /path/to/file   # returns the logical byte length
```

This one‑liner uses the NameNode’s metadata map directly, proving that Hadoop’s design turns a distributed storage problem into an efficient, atomic size query.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
