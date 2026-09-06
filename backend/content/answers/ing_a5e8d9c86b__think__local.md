---
qid: ing_a5e8d9c86b__think__local
question: 'Explain: Leveled Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 544
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:01:32-05:00'
sources: []
---

**1️⃣ Clarify the goal & scope**  
*What exactly is “leveled compaction” in SSTables?*  
Assume we’re talking about a key‑value store (e.g., ScyllaDB) that writes data to immutable sorted string tables (SSTables) and periodically merges them. The question likely wants an explanation of the leveled strategy, its phases, benefits, and trade‑offs.

**2️⃣ Adopt a mental model**  
Think of compaction as “garbage collection” for storage:  
- **Levels** = concentric rings of SSTables, each ring holding files of a fixed size.  
- **Compaction** = moving data from one level to the next while eliminating duplicates and reclaiming space.  
Use this lens to map out how leveled compaction differs from tiered or size‑class strategies.

**3️⃣ Step‑by‑step reasoning**  
a. *Initial write*: new SSTables land in Level 0 (L0).  
b. *Trigger*: when L0 exceeds a threshold, pick a subset of its tables and merge them into Level 1 (L1), ensuring no overlap with existing L1 files.  
c. *Propagation*: as L1 grows, it triggers merges into L2, and so on.  
d. *Size‑based limits*: each level can hold at most a set number of SSTables; once exceeded, the compaction process recurses.  
e. *Read impact*: reads hit fewer files because higher levels contain larger, non‑overlapping SSTables.

**4️⃣ Common pitfalls to avoid**  
- Confusing “leveled” with “tiered”; remember leveled keeps each level’s size bounded while tiered allows overlap.  
- Forgetting that compaction is *background* and may stall if too many L0 files accumulate (the “L0 avalanche”).  
- Assuming lower levels always have fewer SSTables; they hold larger files but can still become saturated.

**5️⃣ Sanity‑check & verbalize**  
Re‑explain in plain terms: “Leveled compaction organizes data into layers so that each layer contains a fixed number of large, sorted files. When a layer fills up, its contents are merged into the next layer, eliminating duplicates and freeing space.”  
Check against known docs (ScyllaDB Wiki) to ensure terminology matches (“Level 0”, “Level 1”, etc.) and highlight key advantages: predictable read latency, efficient compaction cycles, but higher write amplification.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
