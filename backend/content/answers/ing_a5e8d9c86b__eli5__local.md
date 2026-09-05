---
qid: ing_a5e8d9c86b__eli5__local
question: 'Explain: Leveled Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 263
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:01:07-05:00'
sources: []
---

**Leveled Compaction (LC)** is a way databases like Scylla keep their on‑disk data tidy, so reads stay fast and writes stay efficient.

*Think of your bookshelf.*  
You have many little boxes (SSTables) that hold books (rows). In LC, the first level has only one box. When it fills, you move its books into a second box that already contains older books. Those two boxes are then merged into a new, single “clean” box for the next level. Each higher level holds at most twice as many books as the previous one.

**Key terms**

- **SSTable** – a file on disk that stores sorted key/value pairs; once written it never changes.  
- **Compaction** – merging several SSTables into fewer, larger ones to remove duplicates and free space.  

Because each level is always sorted and overlaps only with the next one, a lookup touches at most two files, keeping read speed predictable. LC trades a bit more write work (the merges) for very fast, consistent reads, which is ideal for workloads that read frequently but also insert a lot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
