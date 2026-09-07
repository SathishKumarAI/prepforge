---
qid: ing_aa4fba7b9a__faang__local
question: 'Explain: Cleaning and Normalization — Data Engineering For Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 504
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:20:07-05:00'
sources: []
---

**Clarify**  
You’re asking how a data engineer prepares raw data for an AI model—specifically the *cleaning* (removing noise, errors) and *normalization* (scaling features). I’ll assume we work with tabular logs or sensor streams, need reproducible pipelines, and target supervised learning.

**Approach**  
1. **Ingest & Schema‑Validation** – use a streaming engine (Kafka → Spark Structured Streaming) to capture data, validate against Avro/Parquet schemas.  
2. **Cleaning Pipeline** – handle missing values, outliers, duplicates; apply domain rules (e.g., timestamp order).  
3. **Feature Engineering & Normalization** – encode categorical vars (one‑hot or target encoding), scale numeric features (z‑score or min‑max), bin continuous variables if needed.  
4. **Versioning & Lineage** – store processed tables in Delta Lake with table version tags; keep a metadata catalog (AWS Glue/Data Catalog).  
5. **Testing & Monitoring** – unit tests on sample data, drift alerts when distribution shifts.

**Depth**  
- *Missingness*: impute with median or model‑based methods; flag imputed rows for downstream bias checks.  
- *Outliers*: use IQR or robust z‑score; optionally clip instead of remove to preserve rare events.  
- *Normalization*: choose standardization when algorithms assume zero mean (SVM, logistic regression); min‑max for tree‑based models is often unnecessary but useful for neural nets.  
- Complexity: O(n) per row, linear in features; memory‑efficient with Spark’s lazy evaluation.

**Edge Cases**  
- Sudden schema changes → automated alert + fallback to previous schema.  
- Mixed units (e.g., Celsius vs Fahrenheit) → detect via metadata and convert.  
- Highly sparse categorical columns → use hashing trick to avoid exploding dimensionality.

**Optimize & Communicate**  
Explain that cleaning removes bias, while normalization ensures numerical stability for gradient‑based models. Highlight trade‑offs: aggressive outlier removal may discard rare but important events; over‑normalization can mask meaningful scale differences. Conclude by stressing reproducibility—store every transformation step in code (e.g., PySpark functions) and test against a golden dataset, so the pipeline is auditable and scalable across multiple AI workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
