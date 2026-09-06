---
qid: vq_a2fb0dd0bf__faang__local
question: How do you implement data masking in ADF for sensitive data?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 467
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:26:14-05:00'
sources: []
---

**Clarify**

> *Goal:* Mask sensitive columns (PII, financial) while preserving analytics.  
> *Assumptions:*  
> 1. Source is relational or blob storage accessible via ADF pipelines.  
> 2. Masking rule set (static mask, deterministic hash, random string).  
> 3. No change to downstream schema; consumers expect same column names.

**Approach**

1. **Identify target columns** in the source dataset and create a *masking policy* table.  
2. Build an **ADF Data Flow** that reads the source, applies a `Derived Column` transformation per policy:  
   - Static mask → `"****"`  
   - Deterministic hash → `hash('SHA256', col)` (base64 truncated).  
   - Random string → `rand()` + `substring()`.  
3. Write to an **intermediate staging** dataset (e.g., ADLS Gen2) or directly overwrite the target table if permissions allow.  
4. Use **Copy Activity** for bulk data transfer; enable *Data Flow Debug* and *Publish*.

**Depth**

- *Derived Column* is evaluated per row, O(n).  
- Hashing keeps deterministic results for same input → useful for joins.  
- Random string breaks referential integrity; use only when no relationships needed.  
- Store masking policies in a parameter file or Azure Key Vault to avoid hard‑coding.

**Edge Cases**

- Null/empty values → preserve nulls.  
- Large columns (e.g., JSON blobs) → apply custom UDF in Spark if needed.  
- Schema drift → add `Alter Row Count` check before flow execution.  

**Optimize & Communicate**

- Cache masking functions with *Cache Lookup* to reduce compute.  
- Parallelize Data Flow with *Auto‑scale* for high throughput.  
- Document the pipeline: “Masking Pipeline vX – Source, Policy, Target.”  
- Explain trade‑offs: deterministic hash vs random mask; performance impact of UDFs.

This structured solution satisfies ADF’s capabilities while keeping data privacy compliant and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
