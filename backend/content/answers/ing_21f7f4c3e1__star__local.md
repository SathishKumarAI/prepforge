---
qid: ing_21f7f4c3e1__star__local
question: 'Explain: FULL OUTER JOIN — How do SQL Joins Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 425
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:37:23-05:00'
sources: []
---

**Situation** – In a recent data‑engineering sprint we were tasked with merging customer records from our legacy CRM (PostgreSQL) and a new marketing platform (Snowflake). The two tables had overlapping IDs but also many unique entries, so the business insisted on a *complete* view of every customer.  

**Task** – I needed to design the ETL step that would combine both sources, ensuring no record was lost, and then explain how the SQL join works to the product manager who was unfamiliar with database jargon.  

**Action** – I wrote a single `FULL OUTER JOIN` query:

```sql
SELECT COALESCE(a.id,b.id) AS customer_id,
       a.name   AS crm_name,
       b.email  AS marketing_email,
       CASE WHEN a.id IS NULL THEN 'Marketing only'
            WHEN b.id IS NULL THEN 'CRM only'
            ELSE 'Both' END AS source
FROM crm_customers a
FULL OUTER JOIN marketing_customers b
ON a.id = b.id;
```

During the demo I walked through each part:  
1. `ON a.id = b.id` matches rows with identical keys.  
2. When no match exists, the side that is NULL represents an orphan record; `COALESCE` guarantees every row appears once.  
3. The `CASE` clause labels the origin, so downstream dashboards can filter by source.

**Result** – The merge produced 12,340 rows—8,500 present in both systems and 3,840 unique to one side—without any data loss. The product manager could immediately see that our full outer join retained every customer, and we avoided costly manual reconciliation. I learned that a clear, step‑by‑step walk through the SQL logic turns an abstract concept into actionable insight for non‑technical stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
