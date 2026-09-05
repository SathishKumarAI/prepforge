---
qid: vq_9e40d3bc8d__star__local
question: WHAT IS NORMALIZATION IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 365
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:12:08-05:00'
sources: []
---

**Situation** – In my last role I was handed a legacy sales system that stored customer, order and product data all in one table. The table grew to over 1.2 million rows, causing slow queries (average read time >3 s) and frequent duplicate customer records.

**Task** – My goal was to redesign the schema so that queries for top‑selling products and customer lifetime value ran under 500 ms, while ensuring data integrity and minimal downtime during migration.

**Action** – I started with a quick ER diagram and identified three functional dependencies: Customer → Address; Order → Customer, Product; Product → Category. Applying 3NF, I split the table into Customers, Orders, Products, and Categories, adding surrogate PKs (customer_id, order_id). I used PostgreSQL’s `pg_dump` to export data, wrote a series of SQL transforms in PL/pgSQL to de‑duplicate customers (using a hash of name+email), and loaded them into the new tables with foreign key constraints. To preserve uptime, I ran the migration during off‑peak hours and switched the application to read‑only mode for 12 minutes while I executed an `INSERT … SELECT` bulk load.

**Result** – Query performance improved from 3.2 s to 0.42 s on average, and duplicate customer records dropped by 98%. The exercise reinforced that careful normalization reduces storage bloat, enforces referential integrity, and yields measurable speed gains—critical for any high‑traffic application.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
