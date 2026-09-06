---
qid: ing_942e189e01__fp__local
question: 'Explain: Automatic partitioning — Time-Series PostgreSQL at Petabyte Scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 454
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:20:25-05:00'
sources: []
---

**Why partitioning is unavoidable**

A time‑series database must answer queries that span arbitrary windows—seconds, days or years.  
Without structure the planner would scan every row, which at a petabyte scale costs *O(N)* I/O and is infeasible.  
The fundamental problem is *range locality*: records close in time are almost always accessed together.  
Thus we can transform the single‑table problem into many small, contiguous segments where the planner’s cost model (row count + data size) becomes accurate.

**Deriving the optimal scheme**

1. **Cost of a query** ≈ `rows_in_window / rows_per_page` × page I/O.  
2. **Rows per segment** must be large enough that the planner can estimate cardinality, yet small enough that a window rarely spans many segments.  
3. Let `S` = target size (e.g., 10 GB). The number of segments is `N ≈ total_size / S`.  
4. For a petabyte dataset, `S=10 GB → N≈100 000`, which fits comfortably in PostgreSQL’s catalog.

The planner then rewrites a window query into a set of *segment scans*; each scan is a simple range predicate on the segment key (e.g., `partition_id`).  
Because segments are immutable once written, we can add new ones by appending to the catalog—no heavy re‑balancing.

**Non‑obvious insight**

Most people treat partitioning as a static schema decision. In fact, *automatic* partitioning works because the **time axis is inherently monotonic**: new rows always arrive at higher timestamps. This guarantees that once a segment’s upper bound is passed, it will never be touched again, allowing us to lock its metadata and avoid locking contention during concurrent writes.

Thus, automatic time‑based partitioning turns an unbounded “scan all” problem into a bounded set of predictable scans, achieving petabyte‑scale performance with PostgreSQL’s native planner.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
