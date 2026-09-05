---
qid: vq_99846a278b__star__local
question: WHAT IS THE DIFFERENCE BETWEEN A PRIMARY KEY AND A UNIQUE KEY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 346
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:11:09-05:00'
sources: []
---

**Situation** – While revamping the order‑processing system for a mid‑size e‑commerce client, I discovered that the `Orders` table’s `OrderID` column was set as a primary key but the `CustomerEmail` column had only a unique constraint. The new feature required each customer to have multiple orders while ensuring no duplicate emails entered during bulk imports.

**Task** – I needed to re‑engineer the schema so that the database enforced uniqueness where necessary, avoided unintended nullability issues, and kept performance optimal for both lookups and inserts.

**Action** – First, I explained that a primary key is *both* unique *and* not nullable, and automatically creates a clustered index; it identifies each row uniquely. A unique key guarantees distinct values but allows one NULL (in most RDBMS) and can have multiple such constraints per table. Using SQL Server, I dropped the existing unique constraint on `CustomerEmail` and created a new non‑clustered unique index instead of a unique key constraint, so we could still enforce uniqueness without impacting the clustered primary key. I also added a foreign key to link orders to the `Customers` table, ensuring referential integrity.

**Result** – After deployment, bulk imports ran 30% faster, and data quality improved: duplicate emails were caught at insert time with clear error messages. The team now clearly distinguishes when to use a primary key (row identity) versus a unique key (business rule enforcement).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
