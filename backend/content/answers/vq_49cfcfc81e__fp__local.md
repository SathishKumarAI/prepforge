---
qid: vq_49cfcfc81e__fp__local
question: What happens when Clustered Index is created?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 380
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:33:55-05:00'
sources: []
---

**From first principles**

A table is a set of rows stored on disk pages. Without an index the engine must scan every page to find a row that satisfies a predicate—an *O(n)* operation.  
A **clustered index** imposes a global ordering on the leaf‑level keys, and the data pages are physically arranged in that order (a B+tree). When you create it, SQL Server:

1. **Sorts all rows** by the key columns.
2. **Rewrites each page** so that its tuples follow that sorted order.
3. Builds a B+tree whose leaf nodes point to those reordered pages.

Thus every query that filters on the clustered key can walk the tree directly to the page(s) holding matching rows, turning an *O(n)* scan into a log‑time lookup plus sequential I/O—*O(log n + k)* where *k* is the number of qualifying rows.  

**Why it must work this way**

The physical ordering guarantees that range scans (e.g., `WHERE id BETWEEN 1000 AND 2000`) read contiguous pages, exploiting prefetch and cache, whereas a non‑clustered index would still need to fetch each leaf entry’s pointer separately.

**Non‑obvious insight**

Creating a clustered index *overwrites* the original storage order. If you later drop or rebuild it, you’re not just changing pointers—you’re rewriting the entire table. Consequently, the cost of creating or rebuilding can be higher than any query benefit if the table is large and frequently updated; in such cases a **columnstore** or a **secondary clustered index on a different key** may be preferable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
