---
qid: vq_5a60a83c9b__star__local
question: Explain Distributed cache in MapReduce Framework?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 274
total_tokens: 508
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:00:11-05:00'
sources: []
---

**Situation:**  
At my previous company we were processing 12 TB of log data nightly with Hadoop. The downstream analytics job was stuck on a repeated join that pulled the same user profile table for every record, causing a 4× slowdown and hitting the 10‑hour SLA.

**Task:**  
I needed to reduce the time spent reading the static lookup table from HDFS while keeping memory usage within the cluster limits, so the batch could finish before midnight.

**Action:**  
I introduced a distributed cache in MapReduce: I packaged the user profile CSV as a compressed archive and added it to the job’s `DistributedCache`. In each mapper I loaded the file into an in‑memory hash map keyed by user ID. I also implemented LRU eviction for IDs that were never referenced, preventing OOM errors on nodes with limited RAM. Finally, I tuned the cache size via `mapreduce.job.cache.files` and monitored GC to avoid thrashing.

**Result:**  
The lookup time dropped from 45 s per mapper to under 5 s, cutting overall job runtime from 10 hours to 6 hours— a 40% improvement. The exercise taught me how to balance memory footprint against performance when using distributed cache in Hadoop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
