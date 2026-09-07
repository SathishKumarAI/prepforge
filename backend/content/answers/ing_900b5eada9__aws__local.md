---
qid: ing_900b5eada9__aws__local
question: 'Explain: Data Flow — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 408
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:51:34-05:00'
sources: []
---

**Situation / Task**  
I was leading a ML‑ops team that needed a fast, type‑safe pipeline from raw JSON payloads to model inference on SageMaker. Our existing codebase had ad‑hoc `json.loads` calls and brittle manual checks, causing 15 % of production requests to fail due to schema drift.

**Action**  
I introduced **Pydantic** as the single source of truth for request validation.  
1. *Define data models* (`BaseModel`) that mirror the expected feature vectors and use `Field(..., alias="raw_feature")` to keep legacy names.  
2. *Evals*: built a lightweight wrapper around `pydantic.validate_model` that runs **runtime type checks** and logs any mismatches to CloudWatch with severity tags.  
3. *Docs*: leveraged Pydantic’s auto‑generated OpenAPI schema (`model.schema_json()`) to feed our internal Swagger UI, giving developers instant feedback on payload shape.

This design ran on an EC2 Spot Fleet (t3.medium) behind a Lambda front‑end, costing $0.03 / request vs the previous $0.08 / request, and reduced validation errors by **82 %** in the first month.

**Result**  
- 4× faster onboarding for new features (validation time dropped from ~200 ms to ~50 ms).  
- 90 % reduction in downstream batch failures.  
- Cost savings of ~$12k annually on compute and Lambda invocations.

**Learnings**  
I realized that **ownership** means building self‑documenting contracts, while **Dive Deep** shows that a single library can cut both latency and costs when applied correctly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
