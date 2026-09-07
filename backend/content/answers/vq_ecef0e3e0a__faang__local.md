---
qid: vq_ecef0e3e0a__faang__local
question: WHAT IS A COMPOSITE INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 463
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:41:28-05:00'
sources: []
---

**Clarify**  
A *composite index* (also called a multi‑column or compound index) is an index that covers two or more columns in a table. The interviewer may want to know why you’d use one, how it works under the hood, and what trade‑offs exist.

**Approach**  
1. Define the concept.  
2. Explain storage layout & B‑Tree ordering.  
3. Discuss query patterns that benefit.  
4. Mention limitations (selectivity, maintenance).  

**Depth**  
- **Structure**: The index is a B‑Tree where each leaf node stores keys formed by concatenating the values of the indexed columns in the declared order.  
- **Lookup**: A search for `WHERE a=5 AND b=10` can traverse the tree using both columns, whereas a single‑column index on `a` would need to scan all matching `a` rows and filter by `b`.  
- **Covering index**: If the query only references indexed columns, the DB can satisfy it entirely from the index (no table look‑up).  
- **Selectivity**: The first column must have high cardinality; otherwise the index degenerates into a large fan‑out and performance drops.  

**Edge cases**  
- Queries filtering on only the second column (`b=10`) won’t use the composite index unless it’s defined with `b` as the leading key.  
- Updating indexed columns triggers log writes for each affected leaf node; heavy write workloads can suffer.  
- Index size grows linearly with the number of columns and row count—excessive use can bloat storage.

**Optimize & communicate**  
When deciding on a composite index, I’d first run an *EXPLAIN* plan to see which columns are most frequently used together. I’d also consider adding a *covering index* that includes any non‑key columns needed by the query to avoid lookups. Finally, I’d monitor index bloat and rebuild or drop unused indexes. This shows structured thinking: clarify the concept, outline why it matters, dive into mechanics, anticipate pitfalls, and propose actionable improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
