---
qid: vq_d751e91222__fp__local
question: How do you get the second highest salary from a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 462
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:58:49-05:00'
sources: []
---

**Why the “second‑highest” salary is a *selection* problem**

In a set of salaries \(S=\{s_1,\dots ,s_n\}\) we want the element that would appear in position 2 if \(S\) were sorted descendingly.  
Sorting is an **optimization**: we minimize the distance to the desired rank by arranging all elements so that each precedes every smaller one.  
Thus, to find the second‑highest without fully sorting, we can perform a single pass and maintain two variables:

- `max1` – current maximum.
- `max2` – best candidate for second maximum.

When encountering salary \(x\):

1. If \(x> \text{max1}\): set `max2 = max1`, `max1 = x`.  
   The former top becomes the new second.
2. Else if \(x>\text{max2}\) and \(x<\text{max1}\): update `max2 = x`.

This algorithm runs in \(O(n)\) time, using only constant extra space, which is optimal for the selection problem.

**SQL‑wise**

```sql
SELECT MAX(salary) AS second_highest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```

The subquery finds the highest salary. The outer query then selects the maximum salary *strictly below* that value, i.e., the second largest.

**Non‑obvious insight:**  
When there are duplicate top salaries (e.g., two employees earn \$100 k), the “second highest” should be the next distinct value (\$90 k). The SQL above automatically handles this because the `WHERE` clause excludes all rows equal to the maximum. If you need the *second* row in a table that allows ties, you must instead use `LIMIT 1 OFFSET 1` after ordering by salary descendingly. This subtle distinction—distinct versus ordinal ranking—is often overlooked but crucial for correct business reporting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
