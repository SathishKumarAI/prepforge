---
qid: ing_84c908953f__think__local
question: 'Explain: Why compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 212
output_tokens: 747
total_tokens: 959
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:48:10-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**

- The user wants an explanation of *why* SSTable compaction is needed and what *strategies* are used, specifically in ScyllaDB (but concepts apply broadly).  
- Assume they know basic LSM‑tree storage but not the inner trade‑offs.  
- Keep the answer concise yet deep enough for a technical audience.

**2️⃣ Mental model / framework**

1. **Write‑ahead log → SSTables** – data is first appended to memtables, then flushed to immutable SSTables.  
2. **Read amplification** – each read may hit many SSTables unless they’re merged.  
3. **Space amplification & compaction cost** – merging creates new files and discards obsolete rows.  
4. **Compaction strategies** balance *read* vs *write* performance, *space* usage, and *resource* constraints.

Use the “trade‑off triangle” (Read Amplification ↔ Space Amplification ↔ Write Amplification) to frame each strategy.

**3️⃣ Step‑by‑step reasoning**

- **Why compaction?**  
  - Prevents unbounded growth of SSTables.  
  - Removes deleted/overwritten rows, freeing space and keeping reads fast (fewer files).  
  - Maintains data locality: newer data is co‑located.

- **How does ScyllaDB approach it?**  
  - *Compaction strategy* selects which SSTables to merge.  
  - *Compaction executor* runs merges concurrently, respecting CPU/memory limits.  
  - *Write amplification* is controlled by tuning “target size” and “max threshold”.

- **Common strategies**:  
  - **Size‑Tiered (ST)** – merges tables of similar sizes; good for write‑heavy workloads.  
  - **Time‑Window (TW)** – groups by time window; keeps recent data in smaller files → better read locality for hot data.  
  - **Leveled (LV)** – ensures bounded overlap per level; excellent for read‑heavy workloads but higher write cost.

- **ScyllaDB specifics**:  
  - Uses a *Hybrid* strategy that blends ST and TW, tuned via `compaction_strategy_options`.  
  - Implements *dynamic compaction*: monitors “bytes written vs. bytes read” to decide when to compact.  
  - Leverages Scylla’s thread‑pool model for parallel compactions without blocking writes.

**4️⃣ Common traps & wrong turns**

- Assuming compaction is a one‑time cleanup; it’s continuous and reactive.  
- Forgetting that aggressive compaction increases write latency (write amplification).  
- Over‑tuning target sizes leading to “compaction storms” where many merges run simultaneously, starving other operations.

**5️⃣ Sanity‑check & verbalize**

- Re‑read the explanation: does it answer *why* and *how*?  
- Translate each bullet into a short sentence: “Compaction keeps SSTables bounded…”.  
- If I had to explain in 60 s, I’d say: *“SSTable compaction merges immutable data files to limit read amplification and reclaim space. ScyllaDB chooses which files to merge via strategies (size‑tiered, time‑window, hybrid) that balance write cost against read performance, all orchestrated by a parallel executor.”*  
- If any part feels vague, add a concrete example or a diagram reference (e.g., link to the Scylla Wiki).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
