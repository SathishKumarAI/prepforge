---
qid: ing_06de0954df__fp__local
question: 'Explain: Log Compaction — Logcompaction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 393
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:20:25-05:00'
sources: []
---

### Why log compaction exists  
In a distributed event store, each record is appended to an immutable log.  
If the same key appears many times, the log grows linearly with the number of
updates, even though only the latest value matters for most consumers (e.g.,
state‑store reconstruction).  Log compaction solves this *space–time trade‑off* by
retaining **one** record per key—the newest—while discarding older ones.  

### How it works from first principles  
1. **Invariant:** For every key `k`, the log must contain at least one occurrence of `k`.  
2. **Goal:** Minimise disk usage while preserving the ability to rebuild current state.  
3. **Algorithmic insight:** The log is already ordered by append time; therefore, when scanning it linearly we can keep a *hash map* of the latest offset per key.  
4. When compacting, we emit only those records whose offsets are the most recent for their keys.  All others become *garbage*.  

### Deeper connection  
Log compaction is an instance of **incremental compression via deduplication**:  
- It exploits the *stateless* nature of key–value updates (the latest value supersedes all older ones).  
- The hash map implements a *Bloom‑filter‑like* memory structure that turns the
  sequential scan into a linear‑time, constant‑space operation per record.  

### Non‑obvious insight  
Because compaction is *lazy*, it can be performed **in parallel** across partitions without locking the log for readers or writers. The only requirement is that each consumer sees records in order; compacted segments are simply replaced atomically, preserving linearizability while dramatically reducing storage cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
