---
qid: ing_597bbd3955__think__local
question: 'Explain: Uh oh! — SSTable compaction and compaction strategies \u00b7 scylladb/scylladb
  Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 212
output_tokens: 519
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:54:47-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Identify that *SSTable compaction* is a Cassandra‑derived concept (used by ScyllaDB).  
- Assume the reader knows basic key/value storage but not the internals of SSTables or Scylla’s implementation.  
- State that we’ll focus on how data is merged and garbage‑collected, not on network protocols.

**2️⃣ Build a mental model**  
- View an SSTable as an immutable sorted file containing rows.  
- Think of *compaction* as periodically merging multiple SSTables into fewer larger ones to reduce read amplification and reclaim space.  
- Remember Scylla’s two main strategies: **Size‑Tiered Compaction (STCS)** and **Leveled Compaction Strategy (LCS)**, plus the newer *Time‑Window Compaction Strategy (TWCS)*.

**3️⃣ Step‑by‑step reasoning**  
1. **Trigger** – a compaction job is queued when thresholds (file count or size) are met.  
2. **Selection** – the strategy picks SSTables to merge based on rules (e.g., STCS merges any 4 overlapping files; LCS keeps each level ~10× larger).  
3. **Merge & Dedup** – rows with the same key are merged, keeping the latest tombstone or value; obsolete data is dropped.  
4. **Write new SSTable(s)** – result is written as a fresh immutable file(s) and old ones marked for deletion.  
5. **Repeat** – over time, compaction keeps the number of files bounded and frees disk space.

**4️⃣ Common traps to avoid**  
- Forgetting that compactions are *write‑heavy* operations; they can spike latency if not throttled.  
- Assuming compaction removes all deleted rows immediately—tombstones survive until GC grace period expires.  
- Mixing up “compaction strategy” (algorithm) with “compaction window” (time range for TWCS).

**5️⃣ Sanity‑check & communicate**  
- Verify that the explanation covers *why* compaction matters (read speed, space reclamation).  
- Use analogies: “SSTables are like sorted books; compaction is re‑binding them into fewer, larger volumes.”  
- Summarize key differences between STCS, LCS, and TWCS so the listener can recall the main trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
