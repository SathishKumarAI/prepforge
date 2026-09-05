---
qid: ing_b3d5b1dcc9__star__local
question: 'Explain: Memory use during compaction — SSTable compaction and compaction
  strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 379
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:38-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with optimizing the write‑throughput of a ScyllaDB cluster that served a real‑time analytics dashboard. The cluster had reached 2 TB of data and our compaction logs showed memory usage spiking to 90 % during major SSTable compactions, causing OOM kills on several nodes.

**Task:**  
I needed to reduce peak memory consumption during compaction while keeping the write amplification within acceptable limits (≤ 1.5×) and ensuring that read latency did not rise above 10 ms for 95th‑percentile queries.

**Action:**  
First, I instrumented the compaction manager to log per‑segment buffer sizes and observed that default `SizeTieredCompactionStrategy` was allocating large merge buffers (up to 8 GB). I switched to a custom `TimeWindowCompactionStrategy` with a 12‑hour window and set `compaction_buffer_size_mb=256`. Then, I enabled the “lazy compaction” flag so that only the newest SSTables were merged, reducing the number of concurrent buffers. Finally, I tuned the JVM’s G1 garbage collector thresholds to allow ScyllaDB’s native memory pools to release unused space more aggressively.

**Result:**  
Peak memory usage dropped from 90 % to about 55 %, eliminating OOM incidents. Write throughput improved by ~20 % due to fewer compaction pauses, and read latency stayed below the 10 ms target for 99 % of requests. I learned that careful selection of compaction strategy and buffer sizing can dramatically improve stability without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
