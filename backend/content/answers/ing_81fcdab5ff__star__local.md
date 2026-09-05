---
qid: ing_81fcdab5ff__star__local
question: 'Explain: About this document — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 371
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:53:13-05:00'
sources: []
---

**Situation:** While leading a data‑engineering team at a streaming analytics startup, our Cassandra‑based cluster was ingesting ~3 TB of sensor data daily. The read latency for recent queries spiked to 350 ms because the SSTables were fragmented across multiple levels, and compaction logs were filling up disk space.

**Task:** I had to redesign the compaction strategy to reduce read amplification, reclaim disk space, and keep write throughput above 10k ops/sec without causing hot spots or excessive GC pauses.

**Action:** First, I profiled read patterns with `nodetool cfstats` and identified that most reads hit the newest SSTables. I switched from the default “size‑tiered” compaction to a “leveled” strategy:  
1. Configured multiple levels (L0–L4) with target sizes based on the cluster’s write amplification goals.  
2. Implemented “compaction window” tuning, setting `compaction_window_size` to 6 hrs to batch writes efficiently.  
3. Added a custom “tombstone‑aware” compactor that aggressively purged expired deletions using `gc_grace_seconds=0`.  
4. Monitored disk usage with JMX and adjusted `max_compaction_threshold` to avoid runaway compactions.

**Result:** Read latency dropped from 350 ms to 75 ms, write throughput stayed at ~12k ops/sec, and disk space usage fell by 40% within two weeks. I learned that aligning compaction strategy with actual access patterns—rather than relying on defaults—can yield dramatic performance gains in a real‑time analytics environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
