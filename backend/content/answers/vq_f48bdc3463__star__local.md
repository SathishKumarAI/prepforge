---
qid: vq_f48bdc3463__star__local
question: What is Normalization?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 333
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:26:51-05:00'
sources: []
---

**Situation:**  
In a recent project we were migrating our customer analytics warehouse from a legacy star schema to a new cloud‑based data lake on Snowflake. The raw fact tables had duplicate dimension attributes that were inflating storage costs and slowing downstream reporting.

**Task:**  
I needed to redesign the schema so that each dimension was stored only once, reduce redundancy, and maintain fast query performance for our BI dashboards while preserving historical accuracy.

**Action:**  
First I performed a data profiling run using Great Expectations to quantify cardinality and duplication across tables. Then I applied first‑normal form (1NF) by splitting composite keys into atomic columns, followed by second‑normal form (2NF) to separate non‑key attributes into dedicated dimension tables. For third‑normal form (3NF), I removed transitive dependencies—moving customer address history into a separate “Address” table linked via surrogate keys. To keep queries efficient, I created materialized views for the most common joins and added clustering on surrogate keys in Snowflake. Throughout, I used dbt to version control the transformations and run automated tests.

**Result:**  
The normalized schema cut storage costs by 35 % and reduced query latency on key dashboards from 12 seconds to under 3 seconds. The team also gained easier maintainability: adding a new address field required only one table change, not multiple fact tables. This exercise reinforced that normalization isn’t just academic—it directly translates to cost savings and performance gains in real‑world data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
