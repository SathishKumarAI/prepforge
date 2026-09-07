---
qid: ing_b3d5b1dcc9__faang__local
question: 'Explain: Memory use during compaction — SSTable compaction and compaction
  strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 517
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:42:09-05:00'
sources: []
---

**Clarify**  
We’re asked how a distributed KV store like ScyllaDB manages memory while performing SSTable compaction and what strategies it offers. Key points: *compaction is the merge of multiple sorted string tables (SSTables) into one*, and *memory use must be bounded to avoid GC pauses or OOMs*.  
Assumptions I’d confirm:  
- We’re dealing with immutable SSTables on disk, not in‑memory data structures.  
- Compaction runs concurrently with reads/writes.  

**Approach**  
1. Explain the core compaction pipeline (reading, merging, writing).  
2. Discuss memory allocation per operation.  
3. Enumerate ScyllaDB’s strategies: *universal* vs *size‑tiered*, *level‑based*, and *priority queues*.  
4. Highlight tuning knobs (`compaction_throughput_mb_per_sec`, `max_compaction_memory`).  

**Depth**  
During a compaction run, Scylla reads a set of SSTables into a *merge buffer*—a priority queue that holds one record per input file. The buffer size is limited by the *max_compaction_memory* (default ~1 GB) plus a small overhead for the output writer. For each key, it pulls the smallest value from the heap, writes to a new SSTable, and discards the consumed record.  
Memory consumption ≈ (#input SSTables × avg_record_size) + output buffer. The engine streams data; only a few records per SSTable live in memory at any time, keeping GC pressure low.  

**Edge Cases**  
- **Hot tables**: many small SSTables → frequent compactions → higher peak memory.  
- **Large record sizes**: merge buffer may hit the limit earlier.  
- **Concurrent compactions**: if not throttled, total memory can exceed node capacity.

**Optimize & Communicate**  
Improvements: adaptive compaction that monitors heap usage and pauses when approaching `max_compaction_memory`; using *size‑tiered* compaction for write‑heavy workloads reduces the number of SSTables merged at once. I’d explain this trade‑off to interviewers: fewer merges → less CPU, but potentially more disk reads later. Conclude by stressing that ScyllaDB’s tunable parameters let operators balance latency vs throughput while keeping memory bounded.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
