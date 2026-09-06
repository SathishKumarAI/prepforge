---
qid: ing_a957d4044c__fp__local
question: 'Explain: Clustered Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 441
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:05:28-05:00'
sources: []
---

### Why a *clustered index* exists

When a query asks for rows that satisfy a predicate on column `X`, the DB can either scan every row or jump directly to the relevant records.  
A **clustered index** solves this by forcing the physical order of the table’s pages to match the logical ordering on `X`. Thus, a range query like  

```sql
SELECT * FROM orders WHERE customer_id = 12345;
```

does not need to examine every page; it can locate the first record with `customer_id = 12345` and then read contiguous pages until the key changes.  
This works because disk I/O is *sequential*‑friendly: reading a block of adjacent pages costs almost as little as reading one page, whereas random seeks are expensive.

### Deeper principle

The clustered index embodies the trade‑off between **write cost** (the table must be reorganised when rows are inserted or deleted) and **read speed**.  
From an information‑theoretic view, the index is a *sorted* representation of the data that minimises the entropy of access patterns: once you know the target key range, the probability that the next page belongs to the same range is 1.

### Non‑obvious insight

Most people think a clustered index is simply “a sorted table.”  
In reality, it is **the physical layout itself**. Because each row’s pointer (its address on disk) is *fixed* by the sort order, updates that change the indexed column must move the entire block of pages—a cost that many systems hide behind background re‑organisation jobs.  
Consequently, the choice of clustering key should be driven not only by query frequency but also by write patterns: a hot key that changes often can erode the very benefit it was supposed to provide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
