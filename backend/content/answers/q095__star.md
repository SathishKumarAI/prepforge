---
qid: q095
question: "How would you find the second-highest salary in an employees table using SQL?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** During a data engineering handoff, a junior analyst asked me for "the second-highest salary" for a compensation-benchmarking report, and their first attempt used ORDER BY with LIMIT 1 OFFSET 1, which broke whenever the top salary was tied across several people.

**Task** I needed to give them a correct, edge-case-safe query and explain why the naive approach failed.

**Action** I walked through the tie problem: OFFSET counts rows, not distinct values, so duplicate top salaries shift the answer. My preferred solution used DENSE_RANK: SELECT salary FROM (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk FROM employees) t WHERE rnk = 2. DENSE_RANK gives tied salaries the same rank without skipping, so rank 2 is genuinely the second-distinct salary. I also showed the classic subquery alternative, SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees), and noted DENSE_RANK generalizes cleanly to the Nth-highest.

**Result** The analyst adopted the DENSE_RANK version, and it correctly returned the second-distinct salary even with ties, fixing a benchmark that had been off. The lesson I reinforced: "second highest" almost always means second-distinct, so rank on distinct values rather than blindly offsetting rows.
