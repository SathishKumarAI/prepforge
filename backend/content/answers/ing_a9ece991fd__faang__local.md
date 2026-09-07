---
qid: ing_a9ece991fd__faang__local
question: 'Explain: Composite Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 459
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:19:13-05:00'
sources: []
---

**Composite Indexes – Indexing (System‑Design View)**  

| Step | What to do |
|------|------------|
| **Clarify** | *Problem:* We need fast queries on multiple columns of a large table (e.g., `WHERE country = ? AND status = ?`).  *Assumptions to confirm:* cardinality of each column, read/write ratio, update frequency, query distribution, and storage constraints. |
| **Approach** | 1. Choose the column order that matches the most common leading‑predicate pattern (e.g., `country` → `status`). 2. Decide between B‑tree or hash‑based indexes based on selectivity. 3. Evaluate covering index feasibility to eliminate lookups. 4. Consider partial indexes for sparse predicates. |
| **Depth** | *B‑tree composite:* stores tuples `(col1, col2, …)` sorted lexicographically; lookup cost ≈ O(log N) per component.  *Hash composite:* only useful when all columns are equality predicates and the hash key covers them.  *Storage trade‑off:* larger index → faster reads but higher write overhead (each update touches multiple leaf nodes).  *Maintenance:* use bulk‑load for cold data, incremental rebuild for hot tables; monitor fragmentation. |
| **Edge Cases** | • Highly skewed values (e.g., `status = 'ACTIVE'` dominates) → consider bitmap or separate index. <br>• Frequent updates on indexed columns → heavy write cost; may need to de‑index rarely updated fields. <br>• Queries that use only a suffix of the composite → no benefit; use partial indexes or separate single‑column indexes. |
| **Optimize & Communicate** | *Improvements:* Add a covering index (`country, status, last_updated`) to avoid table lookups for `SELECT COUNT(*)`.  Use query profiling to confirm hit ratios.  Communicate decisions by showing read/write benchmarks and storage impact.  Emphasize that composite indexes are powerful when the leading column has high cardinality; otherwise fallback to bitmap or partitioning. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
