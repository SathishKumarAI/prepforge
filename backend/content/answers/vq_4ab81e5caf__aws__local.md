---
qid: vq_4ab81e5caf__aws__local
question: What does WITH CHECK do?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 468
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:50:19-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a migration from on‑prem Oracle to Amazon RDS PostgreSQL I was asked what the `WITH CHECK` option does when adding a foreign key.  
- **Situation:** A data‑engineering team needed to enforce referential integrity without locking tables during a 48‑hour nightly load that moved ~5 M rows into staging before bulk inserts into fact tables.  
- **Task:** Add a FK from `orders(order_id)` to `customers(customer_id)` while keeping the pipeline live and meeting our SLA of <30 s for downstream analytics queries.  
- **Action:** I added the constraint with `ALTER TABLE orders ADD CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customers(id) WITH CHECK`. This tells PostgreSQL to *immediately* validate existing rows against the referenced table, but not block new inserts once the constraint is in place—unlike `WITH NO CHECK`, which would skip validation.  
  - **AWS services:** RDS PostgreSQL for managed DB; Amazon S3 + Glue for staging ETL; CloudWatch for monitoring constraint‑validation metrics.  
  - **Scalability & Cost:** The check runs once per alter, so negligible cost; the FK enforces integrity at scale without extra queries, reducing downstream data‑quality jobs by ~15 % and avoiding costly rollbacks.  
- **Result:** Validation completed in 12 s with no performance impact on the pipeline; subsequent analytics queries ran 18 % faster because the data layer was cleaner.  

**Leadership Principles Highlighted**

1. **Customer Obsession / Deliver Results** – Ensured end‑users saw consistent, accurate sales reports without delay.  
2. **Ownership / Dive Deep** – Took ownership of the entire data flow, investigated constraint behavior, and quantified performance gains.

Bar‑raisers look for clear ownership, deep technical reasoning (why `WITH CHECK` matters), a measurable impact (time saved, query speed), and learning from the constraint‑validation failure that could have corrupted downstream dashboards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
