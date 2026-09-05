---
qid: ing_487eb77d6a__star__local
question: 'Explain: Layer 6: Presentation — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 328
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:53:28-05:00'
sources: []
---

**Situation** – While leading a fraud‑detection pipeline at my previous fintech firm, the raw transaction logs were stored in a mix of JSON and CSV files across several S3 buckets. The model training team complained that data ingestion was brittle because every new field required code changes.

**Task** – I had to build a reusable “presentation layer” so that downstream ML services could consume clean, schema‑agreed inputs without being coupled to storage format or field names.

**Action** – I implemented an ETL microservice using AWS Lambda and Apache Arrow. The service first parsed the raw files, then applied a canonical schema defined in Avro. Using Arrow’s columnar memory layout allowed us to serialize the data as Parquet for efficient GPU training while still exposing a JSON API for real‑time inference. The microservice exposed an HTTP endpoint that performed on‑the‑fly type conversion and field mapping, effectively acting as the OSI Layer 6: Presentation—abstracting away transport details and presenting a consistent view to ML models.

**Result** – After deployment, ingestion latency dropped from 3 s per batch to under 200 ms, and the model training pipeline’s error rate decreased by 15 % because of fewer data‑quality issues. I learned that treating data formatting as an explicit presentation layer can dramatically improve system resilience and developer velocity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
