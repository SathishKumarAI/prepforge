---
qid: ing_8081570492__think__local
question: 'Explain: Deleting the old SSTables — SSTable compaction and compaction
  strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 215
output_tokens: 481
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:29:30-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- Identify the audience (e.g., devs familiar with Cassandra/Scylla).  
- Assume “old SSTables” means files no longer referenced by the LSM‑tree after compaction.  
- Note that Scylla is a drop‑in replacement for Cassandra, so concepts overlap.

**2️⃣ Mental model / framework**  
- **LSM‑tree architecture**: writes go to memtables → flush → SSTable; reads merge multiple SSTables.  
- **Compaction**: merges overlapping SSTables, discards obsolete rows/keys, produces new SSTables.  
- **Strategies**: size‑tiered (default), leveled, time‑window, etc., each controlling which SSTables are merged.

**3️⃣ Step‑by‑step reasoning**  
1. *Trigger*: compaction is invoked by policy (time, size, manual).  
2. *Selection*: strategy picks a set of SSTables to merge.  
3. *Merge process*: read data in order, resolve duplicates/expired rows, write new SSTable(s).  
4. *Mark old files*: once new SSTables are safely on disk and the memtable flush is complete, Scylla removes the old SSTable files from the filesystem.  
5. *Metadata update*: compaction logs, Bloom filters, row counts, etc., are refreshed.

**4️⃣ Common traps to avoid**  
- Assuming “deleting” means immediate file removal; actually it happens after a safe‑write phase.  
- Forgetting that compaction can be *manual* or *automatic* and that different strategies have distinct I/O patterns.  
- Overlooking the impact on read latency: more SSTables → higher merge cost.

**5️⃣ Sanity‑check & verbalize**  
- Verify that the explanation covers **why** we delete old SSTables (to reclaim space, reduce read overhead).  
- Check that the description of strategies reflects real Scylla docs (size‑tiered vs. leveled).  
- Present it as: “When Scylla compacts, it merges selected SSTables, writes new ones, and once they’re safely stored, the obsolete SSTables are deleted from disk.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
