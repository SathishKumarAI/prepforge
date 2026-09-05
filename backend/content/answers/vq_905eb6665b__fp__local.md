---
qid: vq_905eb6665b__fp__local
question: What is ROWID and ROWNUM in SQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 530
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:46:13-05:00'
sources: []
---

**Why do we need row identifiers in a relational engine?**  
A table is an unordered set of tuples; the SQL standard intentionally hides physical storage order. Yet many operations (e.g., `DELETE … WHERE ROWNUM = 1`) implicitly rely on *some* ordering to be stable across executions. Relational databases therefore expose two orthogonal row‑level proxies:

| Feature | Origin | Behavior |
|---------|--------|----------|
| **ROWID** | Physical address of the tuple in a leaf page (Oracle, DB2). | Uniquely identifies a row *within a table*; stable until the row is deleted or moved. |
| **ROWNUM** | Logical sequence number assigned during query evaluation (Oracle) or `LIMIT/OFFSET` (PostgreSQL/SQL‑Server). | Changes with each execution; useful for pagination, sampling, or limiting result sets. |

### How they are derived

1. **Physical layout** – The storage engine maps a tuple to a page and an offset (`page# + slot`). `ROWID` is essentially that address cast as an opaque value.  
2. **Logical order** – When a query produces rows, the optimizer creates an *execution plan* (a tree of operators). As tuples flow through this tree, each operator can tag them with an incrementing counter (`rownum`). This counter starts at 1 for the first row that reaches the output and increments on every subsequent row.

### Why they must work this way

- **Uniqueness**: `ROWID` guarantees a stable key that can be used in `WHERE`, joins, or subqueries without risking duplicate matches.  
- **Determinism vs. flexibility**: `ROWNUM` is deterministic only within a single execution; it allows the same query to return different slices (e.g., top‑10) without materializing the whole set.

### Non‑obvious insight

Because `ROWID` encodes physical storage, *deleting* a row can cause page compaction, moving subsequent rows. If you rely on `ROWNUM` after such an operation, the sequence may shift unexpectedly—leading to “off‑by‑one” bugs in pagination logic. A robust design uses `ROWID` for identity and a separate surrogate key (e.g., `id`) for ordering when stable results are required.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
