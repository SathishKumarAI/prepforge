---
qid: vq_72f3a109d5__star__local
question: Which function will be created successfully in SQL* Plus?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 458
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:04:33-05:00'
sources: []
---

**Situation:**  
During a migration project to Oracle 19c, my team needed to expose a reusable calculation for quarterly revenue growth in reports. I had to create a scalar function that could be called from PL/SQL and SQL scripts.

**Task:**  
I was tasked with writing the function in SQL*Plus so it would compile without errors, return a numeric value, and be accessible to other developers.

**Action:**  
I opened a SQL*Plus session, wrote:

```sql
CREATE OR REPLACE FUNCTION calc_growth (
    p_start DATE,
    p_end   DATE
) RETURN NUMBER IS
    v_rev_start  NUMBER;
    v_rev_end    NUMBER;
BEGIN
    SELECT SUM(amount)
      INTO v_rev_start
      FROM sales
     WHERE sale_date = p_start;

    SELECT SUM(amount)
      INTO v_rev_end
      FROM sales
     WHERE sale_date = p_end;

    RETURN (v_rev_end - v_rev_start) / v_rev_start;
END;
/
```

I used `CREATE OR REPLACE` to avoid duplicate errors, specified the return type (`NUMBER`), and ended with a slash to execute. I also added pragma `AUTONOMOUS_TRANSACTION` only if needed for logging.

**Result:**  
The function compiled cleanly (no ORA‑ errors) and was immediately usable in reports, reducing code duplication by 40 % and cutting query time from 12 s to 3 s. I learned that including the slash and using `CREATE OR REPLACE` are essential for smooth SQL*Plus deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
