---
qid: ing_6f8a268914__think__local
question: 'Explain: Size-Tiered Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 215
output_tokens: 458
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:21:20-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *What is being asked?* Explain how ScyllaDB uses “Size‑Tiered Compaction” for SSTables and why it matters.  
- *Assume*: The reader knows basic LSM‑tree concepts (SSTable, compaction) but not Scylla’s specific implementation.

**2️⃣ Adopt a mental model**  
Think of an LSM tree as a hierarchy of “levels” where each level holds SSTables whose total size grows exponentially. Size‑Tiered Compaction keeps the number of files small by merging *all* tables in a level when they exceed a target size, unlike Level‑Based compaction which merges only a few.

**3️⃣ Step‑by‑step reasoning**  
1. **Trigger condition** – When a level’s total SSTable size > `size_threshold`.  
2. **Merge policy** – Pick *all* tables in that level and merge them into one larger table.  
3. **Write back** – The merged file is written to the next level; old files are dropped.  
4. **Repeat** – The process cascades up levels, keeping each level roughly 10× larger than the previous.

Explain how this reduces I/O by batching many small reads into a single large read, but can increase compaction latency and temporary storage usage.

**4️⃣ Avoid common pitfalls**  
- Don’t conflate Size‑Tiered with Level‑Based; highlight their different merge triggers.  
- Don’t ignore that Scylla’s implementation allows tuning `size_threshold` per level.  
- Avoid overemphasizing the “size” metric without mentioning *number of files*.

**5️⃣ Sanity‑check & verbalize**  
Quickly test: if a level has 10 GB and threshold is 5 GB, all 10 GB are merged into ~10 GB for next level—makes sense. Then explain the trade‑offs (fewer compactions vs. larger merges). Wrap up by linking to Scylla’s docs or GitHub for code specifics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
