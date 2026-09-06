---
qid: ing_e5fc249be2__think__local
question: 'Explain: Caching after compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 512
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:09:21-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - *Scope*: Focus on how ScyllaDB’s SSTable compaction pipeline interacts with its cache (e.g., LRU, key‑value cache).  
   - *Assumptions*: The reader knows basic Cassandra/Scylla architecture, what an SSTable is, and that compaction merges multiple SSTables into one.  

**2. Adopt a mental model / framework**  
   - *Pipeline view*: Think of read/write flow → in‑memory buffers → on‑disk SSTables → compaction → cache.  
   - *Layered caching*: Distinguish between the **row cache** (stores entire rows) and the **key cache** (indexes key to block).  

**3. Step‑by‑step reasoning**  
   1. **During compaction**, old SSTable files are read, merged, and a new SSTable is written.  
   2. The *old* SSTables become stale; any cached blocks/rows that pointed to them must be invalidated or refreshed.  
   3. Scylla’s cache eviction policy (LRU) automatically drops entries whose backing data no longer exists.  
   4. New SSTable blocks are **not** immediately cached; they’re lazily loaded on read, ensuring cache stays consistent with the latest disk state.  

**4. Common traps to avoid**  
   - *Assuming compaction repopulates the cache*: it doesn’t; only reads trigger caching.  
   - *Thinking all stale cache entries are cleared instantly*: eviction is opportunistic based on LRU hits, not a bulk purge.  
   - *Overlooking key‑cache invalidation*: key‑cache must also be purged because block locations shift after compaction.  

**5. Sanity‑check & communicate**  
   - Verify that your explanation mentions **lazy caching**, **LRU eviction**, and the fact that **compaction only affects disk layout, not cache content directly**.  
   - Use a simple diagram or analogy (e.g., “think of SSTables as books; when you rewrite the book, old page references in the index become invalid, but you don’t rebuild your bookmark list until you open the new edition”). This helps readers internalize the sequence and avoid misconceptions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
