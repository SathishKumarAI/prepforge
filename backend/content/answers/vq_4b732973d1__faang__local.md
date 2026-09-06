---
qid: vq_4b732973d1__faang__local
question: How do you handle schema evolution in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 462
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:09:23-05:00'
sources: []
---

**Clarify**  
> “Schema evolution in Azure Data Factory (ADF)” – we’re talking about handling changes to source/target schemas over time without breaking pipelines or losing data.  
Assumptions:  
1. The data comes from a relational source (e.g., SQL Server, Synapse) or semi‑structured blob (Parquet, Avro).  
2. We use ADF mapping/data flows or Copy Activity for movement.  
3. Versioning and lineage are required.

**Approach**  
1. **Discover & version** – Use *Data Flow* with the “Infer schema” option to capture current structure; store the JSON in a control‑table.  
2. **Detect changes** – Periodically run a lightweight job that compares the new inferred schema against the stored one (diff of columns, types).  
3. **Plan migration** – For additive columns: add them to target with default values. For removed or type‑changed columns: create an intermediate “staging” table and apply transformation rules.  
4. **Automate updates** – Store pipeline parameters (e.g., column list) in a parameter file or Azure Key Vault; update via ARM template deployment when schema changes.

**Depth**  
- *Copy Activity*: set `PreserveHierarchy` & `SchemaCompatibility=“Additive”`.  
- *Data Flow*: use “Derived Column” to cast new types, “Drop Columns” for removed fields.  
Complexity: O(n) per row for transformations; cost driven by Data Lake storage and pipeline runs. Trade‑off: more granular control (data flows) vs. simplicity (Copy with schema compatibility).

**Edge Cases**  
- Non‑additive changes (type downgrade) → fallback to staging + manual review.  
- Large schema churn → trigger alert & pause pipelines.  
- Binary columns → ensure proper encoding.

**Optimize & Communicate**  
Explain that this pattern keeps pipelines idempotent, preserves lineage via control tables, and scales by leveraging ADF’s built‑in schema compatibility. Highlight how automated diff + parameterization reduces manual effort, enabling rapid adaptation to evolving data sources while keeping cost predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
