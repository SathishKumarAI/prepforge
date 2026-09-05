---
qid: vq_a059566b19__fp__local
question: WHOW DOES INDEXING IMPROVE PERFORMANCE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 392
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:49:02-05:00'
sources: []
---

**Why indexes matter**

At its core, a database query is a search over a table’s rows for those that satisfy some predicate (e.g., `WHERE age > 30`). Without an index the engine must scan every row—a *linear* cost \(O(n)\). An index turns this into a *logarithmic* or even constant‑time lookup by storing a sorted, often B‑tree–like structure of key values and pointers to rows. The search problem reduces from “find all matches in an unsorted list” to “binary search in a sorted array,” which is \(O(\log n)\) per match.

**Statistical advantage**

Indexes also encode selectivity: the fraction of rows that satisfy the predicate. If only 1 % of rows match, the engine can estimate that it will read roughly \(0.01 \times n\) pages. This probability‑driven cost model lets the optimizer choose between a full scan (cheaper if selectivity is high) and an index seek (cheaper if low). Thus indexing transforms *deterministic* lookup into *probabilistically guided* execution.

**Non‑obvious insight**

Many overlook that indexes are not just “lookup tables”; they also impose a **data locality** constraint. Because B‑trees keep related keys together on the same disk block, subsequent reads for range queries (e.g., `BETWEEN`) benefit from prefetching and caching. This spatial coherence can reduce I/O by orders of magnitude, especially in columnar stores where each key points to compressed segments.

In short, indexing solves the fundamental problem of *efficiently locating* rows under a predicate, leveraging sorted data structures, probability‑based cost estimation, and disk locality—all of which together give dramatic performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
