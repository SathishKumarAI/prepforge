---
qid: ing_4aa6017387__star__local
question: 'Explain: Running Experiments — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 320
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:57:37-05:00'
sources: []
---

**Situation** – In a fraud‑detection project, our model pipeline was producing inconsistent predictions across environments because the feature engineering code was silently accepting malformed input. The QA team flagged that the same raw transaction logs yielded different fraud scores when run locally versus on the staging cluster.

**Task** – I had to build a reproducible experiment framework that validated every data point before it hit the model, and provide clear diagnostics so we could catch schema drift early.

**Action** – I introduced Pydantic Evals: each raw log was parsed into a `Transaction` pydantic model with strict field types and custom validators for amounts, timestamps, and categorical codes. Using `pydantic.validate_arguments`, the feature‑extraction function became a type‑safe API that raised detailed errors on invalid rows. I wrapped the entire pipeline in an experiment harness that logged the count of valid vs. rejected records per run, stored the pydantic schema version, and automatically generated a CSV summary for comparison across environments.

**Result** – The validation layer caught 2.4% of incoming data as malformed, eliminating a key source of drift. Production fraud scores now match staging to within 0.02 RMSE, and the experiment logs reduced debugging time from hours to minutes. I learned that coupling strict schema enforcement with automated experiment tracking can dramatically improve model reliability without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
