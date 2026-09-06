---
qid: ing_7f6ac83dc4__fp__local
question: 'Explain: Covering Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 452
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:36:22-05:00'
sources: []
---

### From the problem of *query latency* to *covering indexes*

When a database must answer a query that reads only a handful of columns, the naïve execution plan is:

1. Scan a heap or clustered index to locate rows.
2. For each row, fetch the requested columns from storage.

The cost is proportional to the number of disk seeks plus the amount of data read.  
A *covering index* inverts this logic: it stores **exactly** the columns needed for the query (plus a key that uniquely identifies the row). Thus every required datum lies within the index page itself, eliminating the second fetch.

#### Why it works

- **Optimization principle** – The index is a *compact projection* of the table. By selecting only the columns that appear in the SELECT list or WHERE clause, we reduce I/O volume.
- **Information‑theoretic view** – Each index page contains just enough entropy to answer the query; redundant bits (unqueried columns) are discarded, lowering storage and read entropy.
- **Geometric analogy** – Think of the table as a high‑dimensional point cloud. The covering index projects this cloud onto a lower‑dimensional subspace that still preserves all points relevant to the query.

#### Non‑obvious insight

A covering index *does not* replace the base table; it coexists because its purpose is strictly read‑only for specific access patterns. Consequently, updates must maintain both structures, which can become costly. The trick is to **anticipate** future queries and build *multi‑column* covering indexes that serve a whole family of queries, rather than one off‑hand query. This anticipatory design turns the index into a *lazy pre‑computed view*, saving time at the expense of write complexity but yielding orders‑of‑magnitude speedups for read‑heavy workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
