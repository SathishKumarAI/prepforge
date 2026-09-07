---
qid: ing_f5be528510__faang__local
question: 'Explain: Rate limiting — SSTable compaction and compaction strategies \u00b7
  scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 613
total_tokens: 868
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:11:10-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how ScyllaDB (a Cassandra‑compatible key‑space) handles *rate limiting* during **SSTable compaction** and the various *compaction strategies* it offers. I’ll assume they’re interested in: 1) why rate limiting matters, 2) what strategies exist (SizeTiered, Leveled, TimeWindow, Dynamo, Unified), and 3) how Scylla implements them for throughput/latency trade‑offs.

**Approach**  
I’ll first describe the compaction problem—merging many immutable SSTables into fewer larger ones to reduce read amplification. Then explain that each merge writes new SSTables; if done too fast, it can saturate disk I/O or CPU, so a *rate limiter* throttles write throughput. Finally, outline the strategies and when Scylla selects them.

**Depth**  
- **Rate limiting**: Scylla tracks *write bandwidth* per node (bytes/second) and caps compaction I/O to stay below this threshold, using a token‑bucket algorithm that smooths spikes. This protects read performance and avoids thrashing.  
- **SizeTieredCompactionStrategy (STCS)**: merges SSTables of similar size; fast but high read amplification.  
- **LeveledCompactionStrategy (LCS)**: keeps each level bounded by a target size, resulting in low read amplification at the cost of more writes during compactions.  
- **TimeWindowCompactionStrategy (TWCS)**: groups by time windows; ideal for time‑series workloads.  
- **DynamoCompactionStrategy**: simple, deterministic merging based on key ranges; used in older Cassandra releases.  
- **UnifiedCompactionStrategy (UCS)**: hybrid of STCS and LCS that dynamically chooses the best plan per table, balancing write amplification vs read cost.  

Scylla’s compactor runs as a background thread pool; each task obeys the rate limiter and can be paused/resumed by admin commands.

**Edge Cases**  
- Very high‑write workloads may exhaust disk I/O even with throttling—need to tune *max_bytes_per_sec*.  
- If compaction stalls, reads may hit “compacting” SSTables leading to increased latency; monitoring metrics like *compaction_throughput* is essential.  
- Misconfigured strategy (e.g., STCS on a hot key) can cause read hotspots.

**Optimize & Communicate**  
I’d recommend exposing rate‑limit knobs via `scylla.yaml` and recommending UCS for most production tables because it adapts automatically. I would explain to the interviewer that by keeping compaction throughput bounded, Scylla ensures predictable latency while still cleaning up obsolete data efficiently—exactly what a FAANG system must guarantee under variable traffic patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
