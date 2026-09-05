---
qid: vq_d09f6997f3__star__local
question: Is it possible to modify a Datatype of a column when column contains data
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 397
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:20:38-05:00'
sources: []
---

**Situation:**  
At my previous company we had a legacy e‑commerce platform where the `order_total` column in the `orders` table was stored as an `INT`. During a quarterly audit we discovered that large orders were being truncated because the maximum value of `INT` (2,147,483,647) was exceeded. The data set contained over 1.5 million rows and we couldn't afford to lose any historical sales figures.

**Task:**  
I needed to change the column type from `INT` to `DECIMAL(12,2)` without dropping or manually migrating each row, ensuring zero downtime for the live application and preserving all existing values accurately.

**Action:**  
Using PostgreSQL’s online ALTER TABLE capabilities, I executed a two‑step migration: first, added a new temporary column `order_total_new DECIMAL(12,2)`, then ran an incremental UPDATE that cast each `INT` value to `DECIMAL`. To avoid locking the table for long periods, I processed rows in batches of 50,000 with a background job. After confirming data integrity via checksum comparisons, I dropped the old column and renamed the new one. Finally, I updated all dependent views and application code, then re‑indexed the column to maintain query performance.

**Result:**  
The migration completed within 2 hours of scheduled maintenance with no service interruption. All 1.5 million records were preserved accurately; the maximum order value now sits at 7,892,345.67. Post‑migration, our reporting accuracy improved by 100%, and we avoided potential revenue loss from truncated totals. I learned that careful batch processing and database-native features can safely alter column types even in production environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
