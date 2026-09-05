---
qid: ing_e5fc249be2__eli5__local
question: 'Explain: Caching after compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 290
total_tokens: 473
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:39:06-05:00'
sources: []
---

Imagine a library that keeps every book it receives in many tiny boxes (the *SSTables*). When the library gets a lot of new books, the boxes become disordered and scattered. **Compaction** is like hiring a librarian who takes all those boxes, pulls out duplicate pages, re‑orders chapters, and packs them into fewer, larger, neatly organized boxes.  

After compaction, the library wants to answer readers’ questions quickly. It keeps a *cache*—a small, fast shelf of the most recent or most requested books—so it doesn’t have to open the big boxes every time. ScyllaDB’s caching after compaction means that once the big boxes are reorganized, the system updates its quick‑access shelf with the newest versions of data.

**Compaction strategies** decide how the librarian chooses which boxes to merge:  
- *Size‑Tiered* groups boxes by size, merging similar sizes.  
- *Time‑Window* keeps recent data together for fast reads.  
- *Leveled* creates layers where each layer holds one set of sorted data, ensuring a bounded number of merges.

In short, compaction cleans up storage, and caching after it makes the cleaned data instantly reachable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
