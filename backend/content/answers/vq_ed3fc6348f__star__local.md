---
qid: vq_ed3fc6348f__star__local
question: What are all different types of collation sensitivity?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 411
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:26:01-05:00'
sources: []
---

**Situation** – In a recent migration from an on‑prem SQL Server to Azure Synapse, the team noticed that queries returning string columns were producing duplicate rows and wrong join results. The legacy system had been built with case‑insensitive, accent‑sensitive collation, but the target environment defaulted to binary collation.

**Task** – I needed to audit all existing tables, determine the exact collation settings for each column, and redesign the schema so that joins and filters behaved consistently across environments. The goal was to eliminate duplicate data in downstream analytics pipelines while keeping performance high.

**Action** – First, I ran a dynamic SQL script that queried `INFORMATION_SCHEMA.COLUMNS` to list every column’s current collation. Then I grouped columns by business domain and applied a consistent collation hierarchy: 
- **CI-AS (Case‑Insensitive, Accent‑Sensitive)** for user names where accents mattered but case did not.
- **CS-AI (Case‑Sensitive, Accent‑Insensitive)** for product SKUs that must distinguish “A” from “a” but ignore diacritics.
- **BIN2** for internal identifiers to preserve exact binary order.

I updated the schema with `ALTER TABLE … ALTER COLUMN … COLLATE ...`, re‑indexed affected columns, and added a post‑migration validation script that compared row counts pre/post change. I also documented each decision in our Confluence space so future developers understand why certain collations were chosen.

**Result** – After the changes, duplicate rows dropped from 12% to <0.1%, join accuracy improved to 100%, and query performance on key reports stayed within 5 ms of baseline. The exercise also taught me that collations are not just a “nice‑to‑have” setting but a critical part of data integrity, especially when moving between platforms with different defaults.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
