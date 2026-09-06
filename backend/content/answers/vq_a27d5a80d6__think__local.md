---
qid: vq_a27d5a80d6__think__local
question: WHAT ARE SOME DOWNSIDES OF USING INDEXES?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 466
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:07:53-05:00'
sources: []
---

**1. Clarify the context & assumptions**  
- The question asks for *downsides* of indexes in databases (not data structures).  
- Assume a relational DBMS where B‑tree/bitmap/indexes are used on tables.  
- Note that “downside” is relative to use‑case: read‑heavy vs write‑heavy workloads.

**2. Mental model / framework**  
- Think of an index as a *secondary data structure* that trades space and maintenance for speed.  
- Evaluate trade‑offs in three dimensions: **storage**, **write performance**, and **query planning complexity**.

**3. Step‑by‑step reasoning**  

| Dimension | Why it’s a downside |
|-----------|---------------------|
| Storage overhead | Each index consumes disk pages; large tables can double storage usage. |
| Write amplification | INSERT/UPDATE/DELETE must also modify every relevant index, adding I/O and CPU cost. |
| Maintenance cost | Rebuilding or reorganizing indexes (e.g., after bulk loads) is expensive. |
| Fragmentation | Long‑running workloads cause page splits; fragmentation degrades performance unless defragmented. |
| Suboptimal query plans | Over‑indexed tables may mislead the optimizer into choosing a plan that scans an index instead of using statistics, leading to slower queries. |
| Complexity in schema evolution | Adding or dropping columns changes many indexes; accidental removal can break performance. |

**4. Common traps to avoid**  
- Don’t assume “more indexes = better.”  
- Beware of “index bloat” when columns have high cardinality but are rarely queried.  
- Ignore that bitmap indexes, while space‑efficient for low‑cardinality columns, can cause contention on concurrent updates.

**5. Sanity‑check & communicate**  
- Verify with a small experiment: add an index and measure insert latency before/after.  
- Explain the trade‑off to stakeholders: “Indexes speed reads but slow writes; we’ll monitor write throughput and rebuild only when fragmentation exceeds X%.”  

This structured approach lets you quickly list, justify, and communicate the disadvantages of indexing in any database scenario.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
