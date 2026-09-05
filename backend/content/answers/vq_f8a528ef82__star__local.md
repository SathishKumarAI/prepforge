---
qid: vq_f8a528ef82__star__local
question: WHAT DOES THE NULLIF() FUNCTION DO?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 353
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:27:20-05:00'
sources: []
---

**Situation** – In a recent data‑integration project for a retail client, we were consolidating sales records from three legacy systems into a single PostgreSQL warehouse. The “discount_rate” column in one source contained the string ‘NULL’ instead of an actual NULL value, which caused our ETL jobs to crash when casting to numeric.

**Task** – I had to ensure that any occurrence of the literal ‘NULL’ was converted to a real SQL NULL so that downstream analytics could correctly calculate total revenue and apply business rules without errors.

**Action** – During the data‑load script rewrite, I used PostgreSQL’s `NULLIF()` function:  
```sql
INSERT INTO sales (order_id, discount_rate)
SELECT order_id,
       NULLIF(discount_rate_text, 'NULL')::numeric AS discount_rate
FROM source_sales;
```
This call compares each row’s text field to the string ‘NULL’ and returns a true NULL when they match; otherwise it returns the original value. I also added a fallback `COALESCE` for any residual blanks, and updated unit tests to verify that 0% discounts were preserved while literal ‘NULL’ strings became actual NULLs.

**Result** – After deployment, the ETL succeeded on all batches, eliminating 42 crashes per week. Revenue calculations improved accuracy by 3%, and our BI dashboards now correctly display “No Discount” for those rows. I learned that `NULLIF()` is a lightweight, declarative way to sanitize data during ingestion, saving time compared to manual string replacements or complex CASE logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
