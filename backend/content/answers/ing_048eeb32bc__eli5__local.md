---
qid: ing_048eeb32bc__eli5__local
question: 'Explain: Composite Keys — Partition Key vs Composite Key vs Clustering
  Columns in Cassandra \u2013 BMC Software | Blogs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 207
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:42:42-05:00'
sources: []
---

Think of a library that keeps books on many shelves.  
**Partition key** = the main shelf label (e.g., “Science Fiction”). All books whose first word is “SF” sit on that same shelf, so the system knows exactly which shelf to open.

**Composite key** = the combination of the main shelf and a secondary tag (e.g., “SF‑2024‑A12”). It tells the library not only *which* shelf but also *where* inside that shelf. In Cassandra you build this by adding more columns after the partition key, called **clustering columns**.

Clustering columns are like the row number and page number on a shelf: they order the books within the same shelf so you can quickly find “SF‑2024‑A12” without scanning every book.  
So: partition key → which shelf; clustering columns → where inside that shelf (ordering).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
