---
qid: vq_d751e91222__star__local
question: How do you get the second highest salary from a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 348
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:22:05-05:00'
sources: []
---

**Situation** – In my last role as a data analyst at a mid‑size finance firm, the HR dashboard was showing duplicate entries for employee salaries due to an oversight in the ETL process. When preparing the quarterly report, I discovered that our “Top Earners” list was skewed because the query used `MAX(salary)` which always returned the same value even when there were multiple top payees.

**Task** – I needed to produce a reliable metric: the second highest unique salary across all employees, so the leadership could benchmark compensation fairness and plan budget adjustments for the next fiscal year.

**Action** – I wrote a concise SQL solution using a subquery with `DISTINCT` and `ORDER BY`, then limited the result with `OFFSET 1 FETCH NEXT 1 ROWS ONLY`. In code:

```sql
SELECT salary
FROM (SELECT DISTINCT salary FROM employees) AS uniq
ORDER BY salary DESC
LIMIT 1 OFFSET 1;
```

I tested it against a mock dataset, verified that it returned the correct value even when several employees shared the top salary, and added a comment block explaining its purpose for future maintainers.

**Result** – The query delivered the second highest salary in under 0.02 seconds on our production database of 120,000 records. It corrected the dashboard, saved the finance team from misreporting, and I documented the approach so new analysts could reuse it. This experience reinforced my habit of validating assumptions and using clear SQL patterns for edge cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
