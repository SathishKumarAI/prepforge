---
qid: vq_90d76ef8f7__think__local
question: HOW DO YOU FIND THE SECOND-HIGHEST SALARY IN A TABLE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 451
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:02:23-05:00'
sources: []
---

**1. Clarify the problem and state assumptions**  
   - Identify what “salary” column means (numeric, integer/decimal).  
   - Decide whether NULLs are possible and how they should be treated.  
   - Assume we have a single table (e.g., `employees`) with at least one salary value.

**2. Choose the mental model / framework**  
   - Think of the task as “find the second largest distinct value”.  
   - Two common approaches:  
     *Order‑by‑limit* (SQL’s `ORDER BY` + `OFFSET`).  
     *Set operations / ranking functions* (`DENSE_RANK`, `ROW_NUMBER`).  
   - Pick the one that matches the interview context (e.g., plain SQL vs. window functions).

**3. Step‑by‑step reasoning toward a solution**  
   1. Filter out duplicates: `SELECT DISTINCT salary FROM employees`.  
   2. Order descending so highest is first.  
   3. Skip the first row and take the next one (`LIMIT 1 OFFSET 1`).  
   - Or, use a window function: `DENSE_RANK() OVER (ORDER BY salary DESC)` and filter where rank = 2.

**4. Common traps to avoid**  
   - Forgetting `DISTINCT` when duplicates exist; `MAX()` twice can return the same value if all salaries equal.  
   - Using `LIMIT 2` instead of skipping the first row (`OFFSET 1`).  
   - Assuming NULLs behave like regular numbers—handle them explicitly if needed.

**5. Sanity‑check & explain aloud**  
   - Verify with sample data: e.g., [100, 200, 200, 150] → distinct = [200, 150, 100]; second highest is 150.  
   - Explain the logic: “We first collapse duplicates to ensure we’re comparing unique salaries, then order them so the largest comes first, and finally we skip that top entry to get the next one.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
