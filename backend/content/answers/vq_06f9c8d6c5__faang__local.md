---
qid: vq_06f9c8d6c5__faang__local
question: Which of the below gives one to one mapping between input & output. *?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 429
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:56:06-05:00'
sources: []
---

**Clarify**  
You’re asking which data‑engineering operation preserves a one‑to‑one relationship between each input record and its output record—i.e., every input maps to exactly one output and vice versa. Clarifying the intent: we want a *bijective* transformation (no duplicates, no loss).

**Approach**  
List common ETL primitives, then identify which are inherently bijective:
- **Map / Project** – keeps record count unchanged.
- **Join** – can duplicate or drop rows unless key constraints guarantee uniqueness.
- **Filter** – drops rows; not one‑to‑one.
- **Aggregation** – reduces rows; not one‑to‑one.

So the only primitive that always guarantees a bijection is a **map (or projection)** operation that applies a deterministic function to each row without altering cardinality.

**Depth**  
A map operation (`SELECT … FROM source`) can transform columns, cast types, or compute derived fields. Since it processes rows independently, no row disappears or duplicates. Complexity is O(n) in the number of rows; space is O(1) extra per row (streaming). Edge cases: if the function throws errors on nulls, you might need to pre‑handle them, but cardinality remains unchanged.

**Edge Cases**  
- If the map includes a `UNION ALL` with another source, cardinality changes.  
- Using window functions that assign multiple rows to one output breaks bijection.  
- Null handling or default values doesn’t affect mapping count.

**Optimize & Communicate**  
Explain that in distributed engines (Spark/Beam), a map is executed as a `mapPartitions`, preserving record counts while allowing parallelism. Highlight that any downstream operation that reduces or expands rows must be carefully audited to maintain the one‑to‑one guarantee. This demonstrates clear, structured thinking and depth expected of FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
