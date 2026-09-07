---
qid: ing_8081570492__faang__local
question: 'Explain: Deleting the old SSTables — SSTable compaction and compaction
  strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 493
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:43:47-05:00'
sources: []
---

**Clarify**  
The interviewer asks how ScyllaDB handles old SSTables during compaction—what strategies exist and why they’re needed.

Assumptions to confirm:  
1) We’re talking about the LSM‑tree based storage used by ScyllaDB.  
2) “Deleting” means freeing disk space after data is merged or marked tombstoned.  

**Approach**  
Outline three core steps: (a) trigger compaction, (b) merge & rewrite SSTables, (c) delete obsolete files.

**Depth**  
- **Triggering**: Scylla automatically runs *background* compactions based on size thresholds and *user‑initiated* major compactions.  
- **Merge strategy**: Uses a *tiered* or *size‑tiered* algorithm; it reads multiple SSTables, merges sorted key ranges, writes a new SSTable, and keeps the old ones until they’re no longer referenced by any memtable or Bloom filter.  
- **Deletion**: After the merge finishes, Scylla marks the source SSTables as “obsoleted” in the metadata. A *garbage‑collector* thread then deletes those files atomically to avoid dangling pointers. Tombstones and expired rows are also purged during compaction.

Complexity: Merge is O(n) per key; total I/O ≈ size of input + output.  
Trade‑off: Tiered compaction reduces write amplification but may leave many small SSTables, increasing read latency.

**Edge cases**  
- **Concurrent reads**: Readers still reference old SSTables until all compactions finish; we use immutable file handles to avoid race conditions.  
- **Failure during delete**: If a crash occurs mid‑delete, Scylla restores from the last consistent metadata snapshot.  
- **Large tombstone storm**: Compaction can become expensive; we recommend manual major compaction.

**Optimize & communicate**  
Explain that tuning *compaction thresholds* and choosing between *size‑tiered* vs *leveled* strategies directly impact write amplification, read latency, and storage usage—key metrics for a high‑scale system. Conclude by highlighting Scylla’s automatic balancing of these trade‑offs to maintain performance with minimal operator intervention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
