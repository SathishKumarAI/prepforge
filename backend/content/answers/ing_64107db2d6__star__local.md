---
qid: ing_64107db2d6__star__local
question: 'Explain: Sources — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 399
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:48:01-05:00'
sources: []
---

**Situation** – In my last role as a data scientist for an e‑commerce startup, we were launching a recommendation engine that had to surface products from multiple supplier catalogs in real time. The suppliers exposed their product feeds through different APIs and static XML dumps, so the “source” layer was fragmented and often out of sync.

**Task** – I needed to design a unified ingestion pipeline that could automatically discover new data sources (“glean”), validate schema changes, and keep our internal catalog fresh without manual intervention. The goal was to reduce lag between supplier updates and product availability on our platform by at least 50%.

**Action** – First, I implemented a source‑registry service in Python using FastAPI where each supplier registered its endpoint, frequency, and authentication details. Then I built an “auto‑glean” worker that periodically pinged the registry, fetched metadata (e.g., XML schema or JSON schema), and compared it against our canonical model. If differences were detected, a lightweight diff report was sent to the data team for approval. For ingestion, I used Apache Airflow DAGs with dynamic tasks generated from the registry; each task ran a containerized extractor that parsed the feed, performed ETL into Snowflake, and updated a staging table. To handle schema drift, I leveraged dbt’s “schema tests” and added a nightly job that reconciled new columns against our data quality rules.

**Result** – The pipeline cut supplier lag from an average of 48 hours to under 6 hours, boosting recommendation accuracy by 18 % as measured by click‑through rate. We also reduced manual source onboarding time from weeks to days. I learned that treating the “source” layer as a first‑class citizen—complete with discovery, validation, and automated orchestration—turns disparate feeds into a reliable data backbone for AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
