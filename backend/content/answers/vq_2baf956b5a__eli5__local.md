---
qid: vq_2baf956b5a__eli5__local
question: Why do we use Hdfs for files with large data sets but not when there are
  lot of small files?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 231
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:06:57-05:00'
sources: []
---

Think of HDFS like a giant library that’s built to hold huge encyclopedias, not tiny notebooks.  
In HDFS every file is split into big blocks (default 128 MB). The system keeps a master list of where each block lives, and the nodes that store those blocks are called data‑nodes.  

When you have a few massive files, the library can hand out whole volumes to readers with only a handful of shelves—fast and efficient.  
But if you try to put thousands of tiny notebooks in the same place, the master gets flooded with “I know where this 2 KB file is” entries. Each small file still needs its own block, so the library ends up creating millions of tiny blocks that occupy space on the disks but bring almost no useful data per block. The overhead (metadata, network chatter, disk seeks) swamps any benefit.

So HDFS shines with few large files; it becomes sluggish and wasteful when faced with many small ones.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
