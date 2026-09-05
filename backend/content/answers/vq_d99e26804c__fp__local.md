---
qid: vq_d99e26804c__fp__local
question: How to find Third highest salary in Employee table using self-join?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 457
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:59:19-05:00'
sources: []
---

### Why a self‑join can locate the third‑highest salary

The *third highest* salary is the element that has exactly two distinct salaries larger than it.  
A self‑join lets us compare every employee with every other one, producing a pair `(e1,e2)` where `e1.salary < e2.salary`.  
If we count how many distinct `e2` exist for each `e1`, the record whose count equals 2 is precisely the third highest.

#### Derivation

1. **Create all salary‑pairs**:  
   ```sql
   SELECT a.id AS id_a, b.id AS id_b
   FROM Employee a JOIN Employee b
        ON a.salary < b.salary;
   ```
   Each pair represents one higher salary relative to `a`.

2. **Group by the lower salary** and count distinct higher salaries:
   ```sql
   SELECT a.id, COUNT(DISTINCT b.id) AS higher_cnt
   FROM Employee a JOIN Employee b
        ON a.salary < b.salary
   GROUP BY a.id;
   ```

3. **Pick `higher_cnt = 2`**:  
   Only those with exactly two distinct higher salaries survive—i.e., the third highest.

4. **Return the salary (or row)**:
   ```sql
   SELECT e.*
   FROM Employee e
   JOIN (
     SELECT a.id
     FROM Employee a JOIN Employee b
          ON a.salary < b.salary
     GROUP BY a.id
     HAVING COUNT(DISTINCT b.id) = 2
   ) t USING (id);
   ```

#### Non‑obvious insight

The self‑join’s *inequality* (`<`) naturally encodes the ranking order without any `ORDER BY` or window functions.  
It turns a global ordering problem into a local pairwise comparison, which is especially useful in environments lacking analytic extensions.  
Thus, the third highest salary emerges from a simple counting of “higher‑than” relationships—a direct embodiment of rank as a combinatorial property.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
