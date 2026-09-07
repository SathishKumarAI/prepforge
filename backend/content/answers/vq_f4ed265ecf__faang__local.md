---
qid: vq_f4ed265ecf__faang__local
question: WHAT IS THE DIFFERENCE BETWEEN LEAD() AND LAG() FUNCTIONS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 529
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:42:32-05:00'
sources: []
---

**Clarify**  
You’re asking about the SQL analytic/window functions *LEAD* and *LAG*. Both return a value from another row relative to the current one, but they differ in direction: *LEAD* looks **ahead**, while *LAG* looks **behind**. I’ll assume a typical tabular context (e.g., sales by date) and that you’re familiar with window frames.

**Approach**  
Explain each function’s signature, default offset, null handling, and how they fit into a SELECT statement. Then illustrate with a concise example table and query, highlighting the output differences.

**Depth**  

| Function | Offset (default) | Direction | Null if out‑of‑bounds |
|----------|------------------|-----------|-----------------------|
| **LEAD(col [,offset] [,default])** | 1 | Next row(s) in window order | `NULL` unless a default is supplied |
| **LAG(col [,offset] [,default])** | 1 | Previous row(s) in window order | `NULL` unless a default is supplied |

*Example:*  

```sql
SELECT date,
       sales,
       LAG(sales) OVER (ORDER BY date)      AS prev_sales,
       LEAD(sales) OVER (ORDER BY date)     AS next_sales
FROM   daily_sales;
```

Result:  
- `prev_sales` shows the previous day’s sales (NULL for first row).  
- `next_sales` shows the following day’s sales (NULL for last row).

**Edge Cases**  
1. **Empty window** – both return NULL or default.  
2. **Large offsets** – beyond bounds → NULL/default.  
3. **Non‑deterministic order** – missing ORDER BY yields unpredictable results.  
4. **Null values in the target column** – still returned as NULL; offset logic unchanged.

**Optimize & Communicate**  
- Use explicit `ORDER BY` to guarantee deterministic behavior.  
- If you need a fallback, supply the third argument (`default`).  
- For performance, ensure the ordering column is indexed; otherwise the engine must sort before applying the window function.  

Wrap up by stressing that *LEAD* and *LAG* are symmetrical tools for forward/backward look‑ups within a partitioned, ordered set—critical for time‑series trend analysis, difference calculations, or rolling windows in analytics queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
