---
qid: ing_6f8a268914__fp__local
question: 'Explain: Size-Tiered Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 461
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:01:22-05:00'
sources: []
---

**Size‑Tiered Compaction (STC)** is the canonical strategy for merging immutable SSTables in LSM‑based stores such as ScyllaDB.  
The underlying problem: *write amplification* and *read contention*. Writes are cheap—data lands in a new SSTable. Reads, however, may have to probe many SSTables if each contains only a few keys. STC balances these costs by **grouping tables by size** (typically powers of two) and merging them when they reach the same tier.

1. **Why size tiers?**  
   An LSM‑tree guarantees that each key is stored in at most one SSTable per tier. If we merge all tables of a tier, the number of files reduces exponentially, curbing read amplification. The power‑of‑two growth ensures that the cost of merging (proportional to total data size) is amortized over many writes: each key participates in *O(log N)* merges.

2. **Why immutable SSTables?**  
   Immutability removes lock contention; compaction can run concurrently with reads/writes without copying or locking records. It also guarantees that during a merge, the source tables never change, simplifying consistency proofs.

3. **Non‑obvious insight:**  
   The *merge schedule* is not simply “pick any two of equal size.” Instead, STC schedules merges in a **bottom‑up breadth‑first** manner: all tiers are examined concurrently, and the smallest eligible pair is merged first. This avoids creating large intermediate files that would otherwise dominate I/O bandwidth—an effect sometimes called the *merge‑burst problem*. By always merging the smallest pair, STC keeps disk head movement and seek costs minimal, a subtle but critical optimization often overlooked.

In ScyllaDB’s implementation, this strategy is tunable: users can adjust tier thresholds or enable *compaction hints* to steer merges in hot regions. The result is predictable write amplification, bounded read latency, and efficient use of SSD bandwidth—all grounded in the simple principle that “merge what you can without over‑provisioning.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
