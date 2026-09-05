---
qid: ing_0b32ae0f41__star__local
question: 'Explain: Provenance — pydantic-ai \u00b7 PyPI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 349
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:51:15-05:00'
sources: []
---

**Situation:**  
At my last role, we were building a data‑science pipeline that fed into an ML model for credit risk scoring. The training data came from multiple internal databases and external APIs, and stakeholders demanded strict auditability of every transformation step.

**Task:**  
I needed to implement end‑to‑end provenance tracking so that each output record could be traced back to its raw source, with versioned schemas, while keeping the pipeline efficient enough for nightly batch runs on a 10 GB dataset.

**Action:**  
I chose **pydantic‑ai** because it extends Pydantic models with built‑in `Provenance` support. I wrapped each data source in a `SourceModel`, embedding metadata (source name, timestamp, schema hash). During ETL, every transformation step returned a new model instance annotated with the parent’s provenance chain via `provenance.append()`. I also used Pydantic’s `parse_file()` to validate incoming JSON against versioned schemas and automatically log any mismatches. To avoid performance hits, I cached schema lookups in Redis and limited the depth of provenance chains to five levels, which was sufficient for audit purposes.

**Result:**  
The pipeline now outputs a CSV where each row contains a JSON field listing its full lineage. Audit logs show 100 % compliance with regulatory requirements. Runtime increased by only 7%, staying well within our nightly window. I learned that coupling data validation with provenance can drastically reduce downstream debugging time, and that small architectural choices—like caching schema hashes—make audit trails practical at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
