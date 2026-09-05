---
qid: vq_f8a528ef82__fp__local
question: WHAT DOES THE NULLIF() FUNCTION DO?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 373
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:04:16-05:00'
sources: []
---

**Why `NULLIF()` exists**

When you compare two expressions, a *null* value is treated as “unknown”.  
If either side of a comparison is null, the result is also unknown, which can
break predicates such as `WHERE col = value` or aggregate functions that ignore
nulls.  
The fundamental problem is: *how do we turn an equality test into “no match”
when one operand is null?*

**Derivation**

1. **Define the desired behavior**:  
   - If `expr1 = expr2`, return `NULL`.  
   - Otherwise, return `expr1` (or equivalently `expr2`; they differ only when
     the first clause fires).

2. **Implement via a conditional**:  
   ```sql
   CASE WHEN expr1 = expr2 THEN NULL ELSE expr1 END
   ```

3. **Generalize to any two expressions**: that is exactly what `NULLIF()` does.

Thus, `NULLIF(expr1, expr2)` evaluates the equality of its arguments and,
if they match (including both being null), yields a single null; otherwise it
passes through the first argument unchanged.  

**Non‑obvious insight**

`NULLIF()` can be used to *avoid division by zero* safely:  
```sql
SELECT 1 / NULLIF(col,0) AS safe_div FROM t;
```
If `col` is zero, the function returns null instead of raising an error,
allowing analytic queries to continue without special‑case handling. This
pattern exploits the fact that any arithmetic with a null propagates the null,
turning a potential runtime exception into harmless missing data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
