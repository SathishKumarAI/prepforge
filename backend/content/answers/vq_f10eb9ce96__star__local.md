---
qid: vq_f10eb9ce96__star__local
question: WHAT IS THE LIKE OPERATOR USED FOR?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 356
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:26:23-05:00'
sources: []
---

**Situation** – In my last role I was tasked with cleaning up a sales database that had been imported from several legacy systems. The `customer_notes` field contained free‑text comments, and we needed to pull out all entries mentioning “discount” for a compliance audit.

**Task** – Build an efficient query that would return every record where the note included any form of the word discount (e.g., “Discount”, “discounted”, “DISCOUNTS”) without pulling in unrelated words like “undiscountable”.

**Action** – I used the SQL `LIKE` operator with wildcard patterns. By writing `WHERE customer_notes LIKE '%discount%'`, I captured all variations regardless of case and position within the string. To improve performance, I added a full‑text index on `customer_notes` and wrapped the pattern in `LOWER()` to ensure case‑insensitivity:  
```sql
SELECT * 
FROM sales_records 
WHERE LOWER(customer_notes) LIKE '%discount%';
```
I also benchmarked against `REGEXP` and found that for this volume of data, `LIKE` was simpler and faster while still meeting the requirement.

**Result** – The query returned 3,472 rows in under two seconds, compared to a baseline of 8 seconds with a naive full‑table scan. The audit completed on schedule, and I documented the pattern usage for future developers, reducing similar performance regressions by 30%. This experience reinforced how a simple `LIKE` operator, when combined with proper indexing and case handling, can solve real-world data extraction problems efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
