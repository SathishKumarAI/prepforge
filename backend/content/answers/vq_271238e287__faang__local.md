---
qid: vq_271238e287__faang__local
question: What is granularity?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 375
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:02:49-05:00'
sources: []
---

**Clarify**  
Granularity in data engineering refers to the *level of detail* captured by a dataset or schema—how fine‑grained the information is (e.g., per user vs. per day). I’ll assume we’re talking about database/table design and ETL pipelines.

**Approach**  
1. Define “detail level” for the use case.  
2. Choose a granularity that balances query performance, storage, and maintenance.  
3. Document the decision with trade‑offs.

**Depth**  
- **Fine‑grained** (e.g., raw logs) offers maximum flexibility; queries can slice on any attribute but cost more storage and slower aggregations.  
- **Coarse‑grained** (e.g., daily totals) saves space and speeds reads for common aggregates, but sacrifices the ability to drill down or recompute with new logic.  
- In practice we often create *fact* tables at business‑relevant granularity (orders per day) and maintain a separate raw layer for detailed logs.

Choosing granularity also affects ETL: finer granularity requires more frequent batch jobs or streaming, while coarser needs fewer but larger transformations.

**Edge Cases**  
- If downstream analytics suddenly need event‑level detail, the coarse design becomes a bottleneck.  
- Over‑granular data can hit storage limits or violate compliance if sensitive fields are duplicated unnecessarily.

**Optimize & Communicate**  
Explain that we’ll start with a *business‑centric* granularity (e.g., daily sales), add an optional raw layer for future needs, and document the rationale. This keeps the pipeline efficient while preserving flexibility—exactly what FAANG teams expect when designing scalable data systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
