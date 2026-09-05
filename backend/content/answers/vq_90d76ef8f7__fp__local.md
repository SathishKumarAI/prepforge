---
qid: vq_90d76ef8f7__fp__local
question: HOW DO YOU FIND THE SECOND-HIGHEST SALARY IN A TABLE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 425
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:46:27-05:00'
sources: []
---

**Why the problem is a “selection” question**

We want the *second* largest value among all salaries, not just any two random ones.  
In a sorted list the answer sits at index `n‑2`.  Finding that element directly (without sorting) is an instance of the **order‑statistics** problem: pick the \(k\)-th largest from an unsorted set in linear time.

---

### One‑pass “two‑max” scan  

Maintain two variables, `firstMax` and `secondMax`.  
For each salary `s`:

1. If `s > firstMax`: `secondMax ← firstMax`; `firstMax ← s`.
2. Else if `s > secondMax` and `s ≠ firstMax`: `secondMax ← s`.

After the scan, `secondMax` is the answer.  
The algorithm is **O(n)** time, **O(1)** space—exactly what an optimal selection method requires.

---

### SQL‑style solution  

```sql
SELECT MAX(salary) AS second_highest
FROM employees e1
WHERE salary < (SELECT MAX(salary) FROM employees);
```

This uses a subquery to find the maximum, then selects the largest value *below* that.  
It’s equivalent to the two‑max scan but expressed declaratively.

---

### Non‑obvious insight

If duplicates exist, the “second highest” **may** equal the highest.  
Most people assume it must be strictly lower; only a proper selection algorithm (or SQL with `DISTINCT`) respects this nuance.  Ignoring duplicates yields an incorrect result in datasets where many employees share the top salary.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
