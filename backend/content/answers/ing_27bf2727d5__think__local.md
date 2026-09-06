---
qid: ing_27bf2727d5__think__local
question: 'Explain: Efficiency of compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 524
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:18:26-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - *What is “efficiency” here?* I’ll interpret it as *time/IO overhead and resource usage during compaction*.  
   - *Scope*: Focus on ScyllaDB’s SSTable compaction (not just Cassandra) and mention key strategies (tombstone cleanup, compaction levels).  
   - Assume the reader knows basic NoSQL concepts but not Scylla internals.

**2️⃣ Mental model / framework**  
   - **Compaction pipeline**: read‑merge‑write → SSTable → new SSTable.  
   - **Metrics to evaluate efficiency**: latency, CPU, I/O, disk space, write amplification.  
   - **Strategies as knobs**: *Size-tiered*, *Leveled*, *Time-windowed*, *Incremental*.

**3️⃣ Step‑by‑step reasoning**  
   1. Explain how Scylla builds SSTables from in‑memory memtables.  
   2. Detail the compaction process (reading overlapping SSTables, merging rows, discarding tombstones).  
   3. Compare *size‑tiered* (fewer passes but higher write amplification) vs *leveled* (more passes but lower read amplification).  
   4. Show how Scylla’s *incremental compaction* reduces I/O by only touching SSTables that changed.  
   5. Highlight tuning knobs: `compaction_throughput_mb_per_sec`, `max_compactions`, `sstable_size_in_mb`.  

**4️⃣ Common traps to avoid**  
   - Confusing “compaction” with “repair” or “flush”.  
   - Assuming more compactions always mean better performance.  
   - Ignoring the impact of tombstone density on compaction cost.

**5️⃣ Sanity‑check & communicate**  
   - Verify that each strategy’s trade‑offs (latency vs space) are clearly stated.  
   - Use a short table or bullet list to contrast strategies.  
   - End with practical tips: monitor `scylla-compaction` metrics, adjust thresholds based on workload.

This structure ensures the answer is thorough, logically organized, and free of common misconceptions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
