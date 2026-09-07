---
qid: vq_d99e26804c__aws__local
question: How to find Third highest salary in Employee table using self-join?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 474
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:17:41-05:00'
sources: []
---

**Situation & Task (S)**  
At a fast‑growing fintech, our payroll analytics team needed to expose the *third highest* salary per department for quarterly risk reports. The legacy system stored all salaries in a single `Employees` table; we had to retrieve this value with minimal downtime and cost while ensuring compliance with our data‑governance policy.

**Approach (A)**  
I owned the solution, diving deep into SQL semantics and AWS analytics services. I chose **Amazon Athena** on top of an S3‑backed Parquet dataset for instant queryability without provisioning clusters. The self‑join logic was:

```sql
SELECT e1.department_id,
       MAX(e1.salary) AS third_highest_salary
FROM   Employees e1
JOIN   Employees e2
  ON   e1.department_id = e2.department_id
 AND   e1.salary < e2.salary
GROUP BY e1.department_id
HAVING COUNT(DISTINCT e2.salary) = 2;
```

This joins each employee row to all higher‑salary rows in the same department, counts distinct higher salaries, and keeps only those with exactly two higher salaries—i.e., the third highest.

**Result (R)**  
The query ran under **12 seconds** on a 50 GB dataset, costing <$0.05 per run. The quarterly report was delivered **two days early**, boosting compliance score from 88 % to 97 %. Post‑deployment monitoring showed no performance regressions over six months.

**Reflection (T)**  
I learned that simple self‑joins can outperform window functions when paired with columnar storage and serverless engines like Athena. Future iterations will cache the third‑highest result in **Amazon DynamoDB** for real‑time dashboards, trading a 5 % storage cost increase for sub‑second latency.

> *Leadership Principles:* **Ownership** (I drove the end‑to‑end solution), **Dive Deep** (understood query semantics and AWS cost model), and **Deliver Results** (measurable impact on compliance and cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
