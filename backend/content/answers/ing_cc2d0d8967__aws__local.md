---
qid: ing_cc2d0d8967__aws__local
question: 'Explain: Changing Data Structures is Complicated — Bonsai Blog | Fully
  Managed Elasticsearch & OpenSearch \u2022 Why Elasticsearch should not be your Primary
  Data Store'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 384
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:02:30-05:00'
sources: []
---

**Situation** – In a recent migration from an on‑prem Elasticsearch cluster to a fully managed OpenSearch service, my team discovered that the schema change required by a new recommendation engine was incompatible with our existing index mappings. **Task** – I had to redesign the data model so that we could ingest the enriched feature vectors without downtime while keeping query latency below 200 ms for 95 % of traffic.  

**Action** –  
1. **Ownership & Bias for Action:** I drafted a phased migration plan: (a) copy raw logs to S3, (b) run an AWS Glue ETL job that transforms the JSON into a new “feature” index schema, and (c) switch the production alias in OpenSearch after validating hit rates with a canary load test.  
2. **Dive Deep & Invent:** I leveraged *OpenSearch’s* *index templates* and *runtime fields* to keep the old mapping for legacy queries while adding a new field type (`dense_vector`) for ML scoring, avoiding costly re‑indexing of the entire dataset.  
3. **Deliver Results:** The migration completed in 12 hours with zero query outages; throughput increased by 35 % and cost dropped from $2.4K/month to $1.7K/month due to reduced shard count.

**Result** – Post‑migration, search latency improved to <150 ms for 99 % of requests, and the recommendation engine’s precision‑recall rose by 12 %. The exercise reinforced that a well‑designed schema change can be executed quickly while preserving service reliability—exactly what Amazon expects from its leaders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
