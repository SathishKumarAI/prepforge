---
qid: ing_4447805135__star__local
question: 'Explain: Improving data quality — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 317
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:45:31-05:00'
sources: []
---

**Situation** – At my last role at a fintech startup, our credit‑score model was floundering because the raw transaction logs were riddled with missing timestamps, duplicate merchant IDs, and inconsistent currency codes. The product team’s sprint deadline to launch a new loan offering was looming in two weeks.

**Task** – I had to design a data architecture that would cleanse, standardize, and make our pipeline reproducible so the ML model could ingest high‑quality features without manual intervention.

**Action** – First, I mapped the data flow from ingestion (Kafka) to storage (Snowflake). I introduced an ELT layer: a lightweight Spark job that applied schema validation, deduplication, and currency conversion using deterministic UDFs. I added a lineage metadata store in Atlas to track source‑to‑target transformations. For real‑time quality checks, I deployed Great Expectations dashboards that flagged anomalies before the model training stage. Finally, I set up automated unit tests in Airflow to trigger on every data change.

**Result** – The cleansed dataset’s integrity score jumped from 68 % to 94 %. Model accuracy improved by 12 % (AUC from .82 to .91), and we met the sprint deadline. I learned that a robust, observable data architecture is as critical as the ML algorithm itself—without it, even the best model can’t perform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
