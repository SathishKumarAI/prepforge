---
qid: vq_ccd8623529__eli5__local
question: Suppose we have a series of 9 Mapreduce Jobs, then how many Disk I/Os are
  needed in total?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 261
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:28:28-05:00'
sources: []
---

Think of a MapReduce job like a two‑step recipe.

1. **Read the raw ingredients** – every map task opens the input files on disk, copies them into memory, and then closes the file.  
2. **Write the finished dish** – after shuffling and reducing, each reduce task writes its result back to disk.

So for one job you touch the disk twice: once to read, once to write. If you run nine jobs in a row, you simply repeat that pattern nine times.  

**Total disk I/Os = 2 × 9 = 18**.  
(Each “I/O” counts a complete open‑read‑close or open‑write‑close cycle.)

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
