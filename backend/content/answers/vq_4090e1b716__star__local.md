---
qid: vq_4090e1b716__star__local
question: Is the data structured, semi-structured, or unstructured?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 364
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:56:13-05:00'
sources: []
---

**Situation:**  
At my previous company we were migrating the legacy customer support system to a new analytics platform. The incoming logs were a mix of JSON tickets, CSV call records, and raw text transcripts from chat sessions. The business wanted a single view for churn prediction, but the data quality varied wildly.

**Task:**  
I had to classify each source as structured, semi‑structured, or unstructured, clean it accordingly, and build a unified ingestion pipeline that fed into Snowflake while preserving key attributes for modeling.

**Action:**  
First, I wrote a quick Python script using `pandas` and `jsonschema` to scan 10 k rows from each source. JSON tickets were validated against the schema—structured. CSV call records had inconsistent headers but could be coerced into tabular form—semi‑structured. Chat transcripts were free‑form text; I used NLTK to tokenize and stored them in a document store (Elasticsearch). Then, I built Airflow DAGs that routed each type through different ETL stages: schema enforcement for structured data, column mapping for semi‑structured, and NLP feature extraction for unstructured. All results landed in Snowflake tables with consistent customer IDs.

**Result:**  
The unified dataset grew from 2 TB of raw logs to a single 500 GB clean lake. The churn model’s accuracy improved by 12% (from 68% to 80%) after incorporating the newly structured features. I learned that early classification and tailored pipelines save downstream engineering effort and dramatically boost data reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
