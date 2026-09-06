---
qid: ing_81fcdab5ff__fp__local
question: 'Explain: About this document — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 446
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:41:32-05:00'
sources: []
---

**Why SSTables need compaction**

When a write occurs in a log‑structured merge (LSM) store such as ScyllaDB, it is appended to an immutable *SSTable* (sorted string table). Each write creates a new file; over time the system accumulates many small tables. Reads then have to scan several SSTables for a single key, and disk space explodes because obsolete rows remain in older files.  
Compaction solves two optimization problems at once:

1. **Space‑time trade‑off** – by merging sorted runs we eliminate duplicates (the newest value wins) and free the old files, reducing I/O on future reads.
2. **Index locality** – merging preserves sort order, so a key’s location in the final SSTable is deterministic; this enables efficient range scans.

**Compaction strategies**

* **Size‑Tiered**: Files of similar size are merged together (like “bin‑packing” by level). It is cheap to schedule but can produce many overlapping ranges, hurting read performance.  
* **Leveled**: Each *level* holds SSTables that never overlap in key space; merging moves data from a lower level to the next only when the size threshold is exceeded. This guarantees bounded read amplification (a key appears in at most one file per level) but incurs higher write amplification because more merges are needed.  
* **Universal**: A hybrid of the two, it uses a *weight* function that balances size against overlap, aiming for low overall I/O while keeping read costs acceptable.

**Non‑obvious insight**

The choice of strategy is not just about “more writes” vs “fewer reads”; it’s fundamentally an *information‑theoretic* problem. Each compaction step reduces entropy in the key distribution (duplicates vanish) but increases correlation between adjacent keys, enabling better compression and cache locality. Thus, optimal compaction balances **entropy reduction** against **access pattern regularity**, a principle that extends beyond Scylla to any LSM‑based system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
