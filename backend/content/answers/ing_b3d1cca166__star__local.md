---
qid: ing_b3d1cca166__star__local
question: 'Explain: Table of System Design Interview Problems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 321
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:30-05:00'
sources: []
---

**Situation** – At my last company we were building a platform to host hundreds of ML models, each with versioned artifacts and audit logs. The engineering team was stuck on how to design the database schema that could scale while still supporting fast queries for model lineage.

**Task** – I needed to create a normalized table structure that would store model metadata (name, description, tags), artifact references (S3 URIs, checksums), version history, and audit events, all with minimal read latency and easy integration into the CI/CD pipeline.

**Action** – I proposed a star‑schema: a central `models` fact table linked to dimension tables (`versions`, `artifacts`, `audit_events`). Using PostgreSQL’s JSONB columns for flexible tag storage and partitioning by release year kept inserts fast. I added composite indexes on `(model_id, version)` and a materialized view for the latest artifact per model. We also integrated a lightweight caching layer with Redis to serve the most recent metadata within 2 ms.

**Result** – Query latency dropped from ~350 ms to under 30 ms for the latest‑artifact lookup, and write throughput increased by 40 %. The new design handled 10× more models without additional hardware. I learned that balancing normalization with read performance often requires hybrid approaches like JSONB + materialized views, especially in ML ops environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
