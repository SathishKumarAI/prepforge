---
qid: vq_f17e457a90__star__local
question: What is Either in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 333
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:26:23-05:00'
sources: []
---

**Situation** – In a recent data‑pipeline refactor for our nightly ETL job, the legacy codebase used nested `Option` and custom error classes to propagate failures from parsing CSVs into Parquet. The tests started failing because ambiguous errors were swallowed, leading to silent data loss during production runs.

**Task** – I needed to replace that brittle pattern with a type‑safe error handling mechanism that would make failure paths explicit, improve test coverage, and give us clearer logs without adding runtime overhead.

**Action** – I introduced Scala’s `Either` monad. First, I defined a sealed trait hierarchy (`ParseError`, `SchemaMismatch`, `StorageFailure`) to represent domain errors. Then I rewrote the parsing stage to return `Either[ParseError, ParsedRecord]`. Using `.mapRight` and `.leftMap`, I chained transformations while preserving error context. For downstream stages, I employed pattern matching with a concise `fold` that either logged the failure or forwarded the record to the Parquet writer. I also added unit tests for both branches and updated CI to enforce no implicit conversions.

**Result** – The new implementation reduced runtime errors by 78 % in staging, cut log noise by half, and made our error‑handling code 35 % smaller. I learned that `Either` not only enforces explicit failure handling but also integrates cleanly with functional pipelines, leading to more maintainable data engineering workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
