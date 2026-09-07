---
qid: ing_6bc21d5ffc__faang__local
question: 'Explain: Partial or Filtered Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 436
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:54:01-05:00'
sources: []
---

**Clarify**  
You’re asking how *partial* (or *filtered*) indexes work in a relational DB and why they matter for ML pipelines that scan large tables for training data. I’ll assume:  
1) We have a wide table with many rows but only a subset is relevant for a given model.  
2) The database supports partial indexes (PostgreSQL, SQL Server, etc.).  

**Approach**  
Explain the concept, give a concrete syntax example, discuss benefits (space, speed), then cover use‑cases in ML: feature selection, caching frequent queries, and incremental training.

**Depth**  
A partial index is built only on rows that satisfy a predicate. In PostgreSQL:

```sql
CREATE INDEX idx_user_active ON users(user_id)
WHERE status = 'active';
```

Only active rows appear in the index tree.  
*Complexity*: lookup remains O(log n) for the indexed subset, but insert/update cost is lower because fewer rows are touched.  
*Storage*: proportional to the filtered set, often 10‑30% of a full index.

In ML pipelines, you might index `features` where `label IS NOT NULL` or `feature1 > threshold`. Queries that pull training data for a model then hit a tiny index instead of scanning millions of rows, cutting I/O and CPU by orders of magnitude.

**Edge Cases**  
- If the filter becomes too broad (e.g., `TRUE`), you’re back to a full index.  
- Updates that flip a row out of the predicate must remove it from the index—extra overhead.  
- Stale statistics can mislead the optimizer; keep them refreshed.

**Optimize & Communicate**  
For incremental learning, combine partial indexes with materialized views: refresh only when new rows enter the filter set. Mention trade‑offs: more maintenance code vs. significant performance gain for high‑volume training jobs. Conclude by stressing that careful predicate design and regular statistics updates keep the system efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
