---
qid: ing_6f8a268914__faang__local
question: 'Explain: Size-Tiered Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 445
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:02:32-05:00'
sources: []
---

**Clarify**

You’re asking about *Size‑Tiered Compaction* (STC), the default strategy in ScyllaDB/Cassandra for merging SSTables.  
Assumptions: we have a LSM‑style storage engine, immutable SSTables sorted by key, and compaction is triggered when thresholds are met.

**Approach**

1. Group SSTables by size into “tiers” (e.g., 64 MB, 128 MB, …).  
2. When a tier reaches its limit, merge all tables in that tier into one larger SSTable.  
3. The new table is written to the next tier; old files are deleted.

**Depth**

- **Algorithmic steps**:  
  *Select* all SSTables of size `S`.  
  *Merge* them via a k‑way merge, discarding duplicates (keeping latest value).  
  *Write* the merged data sequentially.  
- **Complexity**: I/O is linear in total data size (`O(N)`), CPU proportional to merging overhead.  
- **Trade‑offs**:  
  - *Pros*: Simple, low compaction latency, works well when write amplification is acceptable.  
  - *Cons*: Generates large “stale” segments; read paths may touch many SSTables (high read amplification).  

**Edge Cases**

- Very uneven key distributions can cause “hot spots.”  
- Continuous heavy writes may lead to long compaction chains and disk thrashing.  
- Large compactions risk exhausting memory if merge buffers are too small.

**Optimize & Communicate**

To mitigate read amplification, one can switch to *Leveled Compaction* (LC) or use *Hybrid* strategies that blend STC’s low latency with LC’s bounded read cost. I’d explain this trade‑off to the interviewer, highlighting how thresholds and merge buffer sizes are tunable knobs in ScyllaDB’s configuration. This shows understanding of both the algorithmic core and operational tuning—key points for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
