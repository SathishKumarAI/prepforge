---
qid: vq_1dd10353f1__star__local
question: What is a Table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 323
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:50:27-05:00'
sources: []
---

**Situation:** While leading the migration of our legacy billing system to PostgreSQL, I discovered that the existing flat files were causing duplicate invoices and slow lookups during peak hours.

**Task:** My goal was to design a robust table structure that would eliminate redundancy, enforce referential integrity, and support efficient querying for real‑time reporting.

**Action:** I started by normalizing the data into three tables: `customers`, `invoices`, and `invoice_items`. The `customers` table held unique customer IDs and contact details. Each `invoice` referenced a single customer via a foreign key and stored totals, dates, and status flags. The `invoice_items` table captured line‑level details with a composite primary key of `(invoice_id, item_seq)` to prevent duplicate lines. I added indexes on the foreign keys and a partial index on `invoices.status = 'paid'` to speed up payment reconciliation queries. During design reviews, we weighed trade‑offs between denormalization for faster reads versus strict normalization for data consistency.

**Result:** After deployment, invoice retrieval times dropped from 3 seconds to under 200 ms, duplicate invoices fell by 98%, and the system now supports real‑time dashboards with 99.9% uptime. I learned that a well‑thought‑out table schema is foundational—balancing normalization, indexing, and business requirements ensures both performance and data integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
