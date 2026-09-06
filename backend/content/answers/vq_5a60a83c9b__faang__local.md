---
qid: vq_5a60a83c9b__faang__local
question: Explain Distributed cache in MapReduce Framework?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 527
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:11:40-05:00'
sources: []
---

## Clarify  
*What you’re asking:* “How does a distributed cache work inside a MapReduce job?”  
*Assumptions I’d confirm:*  
1. We’re using Hadoop v2+ (YARN).  
2. The cache is for small, read‑only files (e.g., lookup tables).  
3. All nodes run the same JVM and have HDFS access.

## Approach  
Describe the lifecycle: **submit → distribute → use in mappers/reducers**.  
Show how Hadoop’s `DistributedCache` API or newer `Context.getCacheFiles()` ties to job configuration.

## Depth  
- **Adding files:** `job.addCacheFile(new URI("hdfs://…/lookup.txt#lookup"));` creates a symlink in the task‑local working directory.  
- **Distribution:** During task launch, YARN copies each cache file from HDFS to the node’s local disk (usually `/tmp/hadoop-yarn/...`). This happens once per task attempt; no network traffic during map/reduce steps.  
- **Accessing data:** Mappers/readers open `new File("lookup")` or use the symlink name. Because files are read‑only, Hadoop can keep them in memory (via `FileSystem.getConf().setBoolean("fs.cache.enable", true)`), further reducing I/O.  
- **Complexity:** Copy cost is O(number of tasks × size_of_file). Runtime cost is O(1) per lookup if cached in RAM; otherwise O(log n) for local disk seek.  
- **Trade‑offs:** Small file overhead vs. network savings; large files should go to HDFS directly.

## Edge Cases  
- Cache file missing → task fails; need `isCacheEnabled()` check.  
- File size > JVM heap → out‑of‑memory during read; split into chunks.  
- Multiple jobs sharing same cache: ensure unique names or use the “#alias” feature.

## Optimize & Communicate  
Explain that in modern Hadoop, the `DistributedCache` class is deprecated; we should use `Job.addCacheFile()` and access via `Context.getCacheFiles()`.  
When speaking, start with a high‑level picture, then drill into the copy mechanism, show code snippets, and finish by summarizing trade‑offs and best practices. This demonstrates structured thinking, depth, and clear communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
