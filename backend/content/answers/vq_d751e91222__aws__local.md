---
qid: vq_d751e91222__aws__local
question: How do you get the second highest salary from a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 515
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:17:07-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Leadership Principles:* **Ownership** & **Dive Deep** – I take responsibility for the data pipeline and dig into the underlying storage to choose the most efficient query path.

### Situation  
At my last role we needed a daily report that listed the second highest salary for each department in a 2 M‑row PostgreSQL table. The existing ETL ran overnight, but the nightly job stalled when it hit the “second highest” logic.

### Task  
Deliver a scalable, cost‑effective query that returns the result in < 5 s and can be reused in downstream dashboards.

### Action  

1. **Understand data model** – `employees(emp_id PK, dept_id FK, salary)`; indexes on `(dept_id, salary DESC)`.  
2. **Design choice** – Use a window function to avoid sorting the entire table each run.  
   ```sql
   SELECT dept_id,
          MAX(salary) AS second_highest_salary
     FROM (
           SELECT dept_id,
                  salary,
                  ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC) rn
             FROM employees
         ) t
    WHERE rn = 2
    GROUP BY dept_id;
   ```
3. **AWS service mapping** – Run this in **Amazon Redshift Spectrum** so the table can stay on S3 and we pay only for scanned bytes.  
4. **Scalability / Availability** – The window function is parallelized across slices; adding a node cuts query time roughly linearly. Redshift’s fault tolerance guarantees 99.99 % availability.  
5. **Cost trade‑offs** – Compared to materializing the top‑N per department (which would grow with each salary update), this approach scans only the necessary rows, reducing bytes scanned by ~70 %.  

### Result  
Implemented in production; query time dropped from 45 s to < 4 s. Daily cost saved ~$120/month on Redshift compute credits. The dashboard now refreshes live without manual intervention.

**Learning** – I realized that a small change in the analytic plan (window vs. aggregate) can yield large performance gains, and that understanding the underlying AWS service capabilities lets me trade off latency for cost effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
