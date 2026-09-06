---
qid: vq_3d37c2346a__think__local
question: How do you calculate "PCTINCREASE" value?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 583
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:26:21-05:00'
sources: []
---

**1. Clarify the problem & assumptions**

- Confirm what “PCTINCREASE” means in the given context (e.g., percentage increase of a numeric field over time, between two rows, or relative to a base value).  
- Identify data types: are values integers, decimals, or percentages already?  
- Decide if rounding or truncation is required and what precision (whole‑number %, 2 dp, etc.).  

**2. Adopt a mental model**

Treat the calculation as a standard “percentage change” problem:

\[
\text{PCTINCREASE} = \frac{\text{New Value} - \text{Old Value}}{\text{Old Value}}\times100
\]

If the old value can be zero, plan to handle division‑by‑zero (e.g., return `NULL` or a sentinel).  

**3. Step‑by‑step reasoning**

1. **Extract values**: fetch Old and New from the dataset (could be columns, subqueries, or window functions).  
2. **Subtract**: compute `delta = new - old`.  
3. **Divide**: `ratio = delta / old` (ensure both operands are cast to a float to avoid integer division).  
4. **Multiply by 100** to get percent form.  
5. **Format**: round or cast to desired precision.  

If you’re using SQL, the expression might look like:

```sql
CASE WHEN old = 0 THEN NULL
     ELSE ROUND((new - old) / NULLIF(old,0) * 100, 2)
END AS pctincrease
```

**4. Common pitfalls**

- **Integer division**: `1/2` → `0`. Cast to decimal first.  
- **Division by zero**: leads to runtime error or Infinity; use `NULLIF` or a guard clause.  
- **Sign confusion**: negative results mean decrease, not increase.  
- **Base value selection**: using the wrong “old” (e.g., previous month vs. baseline) yields misleading percentages.

**5. Sanity‑check & communicate**

- Test with known pairs: e.g., old = 100, new = 150 → 50%.  
- Verify edge cases: old = 0, new > 0 → handled as expected.  
- Explain the formula verbally to stakeholders: “We’re taking the difference between the new and old values, dividing by the old value to normalize, then scaling by 100 to express it as a percent.”  

By following this structured approach—clarify, model, compute carefully, watch for traps, and validate—you’ll reliably calculate `PCTINCREASE` in any DSA setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
