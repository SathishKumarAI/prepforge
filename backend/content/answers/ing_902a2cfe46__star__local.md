---
qid: ing_902a2cfe46__star__local
question: 'Explain: Study map — Data Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 354
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:21:00-05:00'
sources: []
---

**Situation** – At my previous company we were building an internal knowledge graph for our AI research team. The data came from multiple legacy systems (SQL, NoSQL, CSV exports) and the existing “study map” was a hand‑drawn diagram that no one could programmatically use.

**Task** – I had to design and implement a reproducible pipeline that would ingest all source datasets, normalize them into a unified schema, and output a graph‑ready study map in Neo4j. The goal was to reduce the time from data ingestion to queryable knowledge by 70 % and enable automated hypothesis generation.

**Action** – I started by writing an Airflow DAG that extracted each dataset, applied a Python ETL script using Pandas for cleaning, and performed schema mapping with dbt to ensure consistency. For the graph conversion, I leveraged the Neo4j APOC library to bulk‑load nodes and relationships from CSVs. To keep the map up‑to‑date, I scheduled incremental updates every 12 hours and added a unit‑test suite that validated node counts against expected baselines. I also documented the entire workflow in Confluence so other teams could fork it.

**Result** – The new automated study map reduced manual effort from three days to under two hours per refresh. Query latency dropped from ~45 s to <2 s, and we saw a 65 % increase in research sprint velocity. I learned the importance of treating data engineering as an API: clear contracts, versioned schemas, and automated tests make downstream AI work faster and more reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
