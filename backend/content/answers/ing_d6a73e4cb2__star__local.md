---
qid: ing_d6a73e4cb2__star__local
question: 'Explain: Data types supported — Elasticsearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 492
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:38:01-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with building a predictive churn model for our SaaS platform. The training data lived in an existing Elastic Stack; we had logs, user profiles, and billing records all indexed in Elasticsearch.

**Task**  
I needed to verify that the data types stored in ES would be compatible with the ML pipeline we were using (scikit‑learn + XGBoost). That meant mapping out which field types could be fed directly into numerical models, which required transformation, and how to handle nested or geo fields.

**Action**  
First I ran a schema audit via the Cat Mapping API, pulling all field names and their Elasticsearch data types. For each type I checked: 
- **numeric** (`integer`, `float`, `double`) – usable as‑is; I casted them to NumPy dtypes in pandas.
- **keyword / text** – required tokenization or hashing. I used the built‑in `analyzer` to get term vectors and then applied a TF‑IDF vectorizer.
- **date** – converted to Unix timestamps, then binned into rolling windows for time‑series features.
- **boolean** – cast to 0/1 integers.
- **geo_point / geo_shape** – extracted latitude/longitude pairs; later used Haversine distance as a feature.
- **nested / object** – flattened via `json_normalize`, dropping unused subfields to keep dimensionality manageable.

I wrote a small ETL script in Python that queried ES with the Scroll API, streamed documents into a Dask dataframe, applied these type‑specific transformations on the fly, and finally exported a CSV for model training. I also set up unit tests to flag any new field types introduced by downstream teams.

**Result**  
The pipeline processed 1.2 million user records in under 10 minutes on our dev cluster, producing a feature matrix with 350 columns that fed into XGBoost. The churn model achieved an AUC of 0.82 versus the previous baseline of 0.75. I documented the data‑type mapping and ETL logic, reducing onboarding time for future ML projects by 40 %. I learned that understanding Elasticsearch’s type system is essential to avoid hidden conversion bugs and to keep feature engineering efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
