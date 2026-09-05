---
qid: ing_16b4fb86a7__fp__local
question: 'Explain: LSM-Tree (Log-Structured Merge Tree) — Database-Internals/DataStructures/LSMTree.md
  at main \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 424
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:53:59-05:00'
sources: []
---

**Why an LSM‑tree?**  
A database must answer point lookups and range scans while ingesting millions of writes per second.  
In a B‑Tree every write touches disk pages on the path to a leaf, causing many random seeks.  
An *LSM‑tree* trades immediate locality for amortized efficiency: it buffers updates in memory, writes them sequentially to disk, and merges sorted runs lazily.

---

### 1. **Core problem** – *write‑amplification vs read‑latency*  
- **Writes** should be *O(1)* I/O (just append).  
- **Reads** must still hit a small number of pages (logarithmic).

The LSM‑tree achieves this by keeping the in‑memory component (*memtable*) sorted.  
When it overflows, it is flushed to disk as an immutable file called a *SSTable*.  
These files are never modified; instead new writes create new SSTables.

### 2. **Amortized merging**  
A background compaction process merges overlapping SSTables into larger ones.  
Because each merge reduces the total number of tables by at least one, the average cost per write is *O(log N)* disk I/Os—yet every individual write still costs only a single append.

### 3. **Probabilistic pruning**  
Each SSTable stores a Bloom filter; during a read we can quickly decide whether to skip an entire file, reducing random seeks to the minimal set that might contain the key.

---

#### Non‑obvious insight  
The *immutability* of on‑disk runs is not just a convenience—it guarantees **concurrency safety**.  Readers never see partial updates; compaction simply replaces old files atomically, enabling lock‑free reads and write‑ahead logging without complex MVCC layers. This architectural choice underlies modern key–value stores like LevelDB, RocksDB, and Cassandra.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
