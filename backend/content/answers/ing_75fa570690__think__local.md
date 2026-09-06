---
qid: ing_75fa570690__think__local
question: 'Explain: Disk use during compaction — SSTable compaction and compaction
  strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 548
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:48:40-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   - Identify what “disk use during compaction” means: how much space is temporarily needed while merging SSTables in ScyllaDB.  
   - Assume the reader knows basic LSM‑tree concepts and that they’re interested in practical numbers (e.g., 2× or 3× of data size).  

**2️⃣ Mental model / framework**  
   - Think of compaction as *reading* several source SSTables, *writing* a new merged table, then *deleting* the old ones.  
   - Map the process onto three phases: **Read**, **Write (merge)**, **Cleanup**.  
   - Use ScyllaDB’s documentation and the GitHub code base to pull concrete constants (e.g., `max_compaction_bytes`, compaction window size).  

**3️⃣ Step‑by‑step reasoning**  
   1. *Read phase*: each source SSTable is streamed, no extra space needed beyond cache.  
   2. *Write phase*: the merged table occupies roughly the same size as the sum of sources; thus peak disk use ≈ ∑sourceSizes + any write‑ahead buffer (≈ 10 % of that).  
   3. *Cleanup*: after successful merge, Scylla deletes old files, freeing space.  
   4. Account for compaction strategies: **Size‑Tiered** merges fewer large tables → larger temporary peak; **Time‑Window** merges many small tables → lower peak but more frequent writes.  

**4️⃣ Common traps to avoid**  
   - Forgetting that *compaction windows* can overlap, causing multiple merges in parallel.  
   - Assuming compaction is instantaneous; it actually streams data and may back‑pressure on disk I/O.  
   - Misreading the “max_compaction_bytes” as a hard cap rather than a guideline that Scylla may exceed during heavy load.  

**5️⃣ Sanity‑check & communicate**  
   - Verify with real metrics: look at `system.scylla` tables (`sstables`, `compactions`) after a compaction run.  
   - Explain in plain terms: “During a typical size‑tiered merge, Scylla temporarily needs about twice the data volume on disk; time‑window merges keep it closer to 1.2×.”  
   - Summarize key takeaways: peak usage ≈ sum of sources + buffer, strategy choice influences magnitude, cleanup frees space promptly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
