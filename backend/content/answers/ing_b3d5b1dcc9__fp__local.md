---
qid: ing_b3d5b1dcc9__fp__local
question: 'Explain: Memory use during compaction — SSTable compaction and compaction
  strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 477
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:26:26-05:00'
sources: []
---

**Why compaction matters**

In a log‑structured merge tree (LSM‑tree) each write goes to an immutable *SSTable* on disk.  
The cost of reads is the number of SSTables that must be consulted; the cost of writes is the
amortised space used by those SSTables.  Compaction trades the latter for the former: it merges several sorted runs into one, eliminating duplicates and freeing space.  

**Memory footprint from first principles**

During a merge we keep *k* input streams in memory (the number of SSTables being compacted).  
Each stream contributes a *key‑value buffer* that holds the current record and an *index* for fast seek.  
The total RAM is therefore

```
RAM ≈ k · (buf_size + idx_overhead)  +  compaction_buffer
```

where `compaction_buffer` stores the output rows before they are flushed to disk.  
Because every SSTable has a fixed‑size index, the dominant term is `k · buf_size`.  

**Why ScyllaDB limits k**

If `k` were unbounded, RAM would grow linearly with the number of SSTables and could exceed physical memory, forcing paging or OOM kills.  Hence ScyllaDB caps `k` (e.g., 32 for normal compaction, larger for *tombstone‑only* merges) and adapts `buf_size` to the node’s RAM budget.

**Non‑obvious insight**

The *optimal* `k` is not simply “as many as possible”.  
Because each stream incurs a constant index cost but a diminishing marginal benefit (duplicate keys are removed only once per merge), the **memory‑to‑space trade‑off curve is convex**.  ScyllaDB’s scheduler chooses `k` where the *slope* of the space savings equals the slope of the memory penalty, yielding minimal total storage for a given RAM budget. This geometric reasoning underlies its “compact‑on‑demand” policy and explains why aggressive compaction can paradoxically increase overall disk usage if not tuned properly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
