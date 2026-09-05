---
qid: vq_b907ab4b40__star__local
question: WHAT ARE THE DIFFERENT NORMAL FORMS IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 329
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:16:33-05:00'
sources: []
---

**Situation** – In a recent migration of our legacy sales database to PostgreSQL, the data team noticed that product pricing and customer contact details were duplicated across multiple tables, leading to 15 % slower report generation during peak hours.

**Task** – I was asked to redesign the schema so that it adhered to proper normalization, reduce redundancy, and improve query performance while keeping the existing application code minimally impacted.

**Action** – First, I mapped out the current denormalized structure and identified functional dependencies. I applied 1NF by separating composite columns into individual rows, then moved to 2NF by creating a `Products` table for product attributes and a `Customers` table for contact info. Next, I addressed partial dependencies with a junction table `ProductPrices` linking products to price tiers, ensuring each non‑key attribute was fully dependent on the primary key (3NF). Finally, I used foreign keys with cascading deletes and added indexes on the join columns. During refactoring I ran `EXPLAIN ANALYZE` queries to benchmark performance and iterated until latency dropped from 2.4 s to under 0.7 s.

**Result** – The normalized schema cut duplicate rows by 70 %, improved report generation time by 65 %, and reduced storage usage by 30 %. I learned that a systematic application of normal forms not only enforces data integrity but also delivers tangible performance gains in real‑world systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
