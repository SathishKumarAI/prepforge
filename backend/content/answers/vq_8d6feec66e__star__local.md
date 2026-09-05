---
qid: vq_8d6feec66e__star__local
question: Why the output of map tasks are spilled to local disk and not in hdfs?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 349
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:09:11-05:00'
sources: []
---

**Situation:**  
While refactoring a Spark ETL pipeline for our real‑time analytics platform, I noticed that the intermediate results of several map stages were being written to local disk instead of HDFS. The cluster was under heavy load and our job timeout threshold kept getting hit.

**Task:**  
I needed to understand why this spillage happened, evaluate its impact on performance and reliability, and propose a configuration change that would keep critical data in memory without risking out‑of‑memory errors or excessive network traffic.

**Action:**  
First, I examined the `spark.storage.memoryFraction` and `spark.shuffle.spill.compress` settings. I discovered that our default 0.6 memory fraction was too low for the size of the map output, causing Spark to spill to local disk when the in‑memory buffer filled up. I increased the fraction to 0.8, enabled compression on spills, and added a custom `MemoryStore` plugin to cache frequently accessed keys. I also tuned the shuffle service by raising the block manager’s `spark.shuffle.file.buffer` size from 32kB to 1MB to reduce disk seeks.

**Result:**  
After redeploying, the map output stayed in memory for 95 % of the job runs, cutting shuffle latency from an average of 12 s down to 4 s. The overall job runtime decreased by 35 %, and we eliminated sporadic node failures caused by disk I/O bottlenecks. This exercise reinforced my understanding that local spills are a safety net for memory overflows; proper tuning keeps the benefits while avoiding unnecessary disk traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
