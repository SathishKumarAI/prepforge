---
qid: vq_dd2a9c02fc__fp__local
question: HOW DOES A CLUSTERED INDEX DIFFER FROM A NON-CLUSTERED INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 471
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:59:58-05:00'
sources: []
---

**Why the distinction matters**

A database table is a set of rows that are stored on disk pages.  
When you query by key `k`, the engine needs to locate the row(s) whose
key equals `k`. The *cost* of this lookup depends on two factors:

1. **How many pages must be read** – every page read costs I/O.
2. **Where the desired rows sit relative to each other** – if they are
   physically adjacent, a single seek brings many rows into cache.

A **clustered index** is an *ordering* of the data itself: the table’s
rows are stored in key order.  
Thus, when `k` is found, the next row(s) with nearby keys already lie on
the same page or the following one; a single read can deliver several
matching rows. The cluster also allows range scans to be extremely cheap:
pages are contiguous.

A **non‑clustered index** is a separate structure that maps each key to
the physical location (page + offset) of its row(s).  
The table’s storage order remains unchanged, so even if the index finds
the exact page for `k`, the next key may be on any other page. Range
scans therefore require many random seeks unless the query is highly
selective.

**Underlying principle**

Both structures embody a trade‑off between *space* and *access speed*,
a classic optimization problem:  
- Clustered → fewer pages read per row (better for large scans) but
  each insert/​update may need page splits.  
- Non‑clustered → faster point lookups when the table is large, at the
  cost of extra I/O for range queries.

**Non‑obvious insight**

Because a clustered index physically orders rows, it can *replace* the
table entirely; a non‑clustered index cannot. Consequently, a table
with only a non‑clustered index must still store all columns in an
unindexed heap, which may duplicate data and increase storage cost.
Thus, choosing between them is not just about speed—it also affects
storage layout and transaction isolation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
