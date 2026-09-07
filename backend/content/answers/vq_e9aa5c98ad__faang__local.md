---
qid: vq_e9aa5c98ad__faang__local
question: Handling nulls while importing data?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 479
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:40:49-05:00'
sources: []
---

**Clarify**  
*What does “handling nulls” mean here?* Are we talking about schema‑level defaults, runtime cleansing, or downstream analytics impact? I’ll assume the goal is to preserve data integrity while ensuring that downstream consumers (BI, ML) receive usable values without silently dropping rows.

**Approach**  
1. **Identify source semantics** – map each nullable column to its business meaning.  
2. **Define transformation rules** – default values, derived imputation, or flagging for review.  
3. **Implement in the ETL pipeline** – use declarative transforms (SQL/DBT) with `COALESCE`, `ISNULL`, or custom UDFs.  
4. **Audit & monitor** – maintain a null‑rate metric per table and alert on spikes.

**Depth**  
- *Schema*: Mark columns as nullable but add CHECK constraints where appropriate (e.g., `price > 0`).  
- *Imputation*: For numeric fields use median or model‑based predictions; for categorical, use the most frequent value or a special “UNKNOWN”.  
- *Metadata flagging*: Add a bit column (`is_null_flag`) to preserve original null status for audit.  
- *Performance*: In Spark/BigQuery, avoid expensive UDFs; prefer built‑in functions and broadcast joins for small lookup tables. Complexity stays O(N) per row with constant extra space.

**Edge Cases**  
- Mixed data types (e.g., string “NULL” vs SQL null).  
- Cascading nulls that invalidate foreign keys.  
- High cardinality columns where defaulting leads to skew.  
Test by injecting synthetic rows with varying null patterns and measuring downstream query correctness.

**Optimize & Communicate**  
Start with a minimal viable policy (default + flag), then iterate: add context‑aware imputation for critical metrics, cache lookup tables, and use partition pruning to keep pipelines fast. Explain trade‑offs clearly—e.g., defaulting improves throughput but may bias analytics; flagging preserves truth at the cost of extra storage. This structured plan shows clear problem framing, actionable steps, technical depth, and awareness of edge cases—all key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
