---
qid: vq_5d78ad680c__fp__local
question: What is a CTE and when should you use it?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 450
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:36:50-05:00'
sources: []
---

A **CTE (Common Table Expression)** is a temporary result set that lives for the duration of a single SQL statement.  
Instead of inventing a new table or repeating a sub‑query, you write

```sql
WITH ranked AS (
    SELECT id, score,
           ROW_NUMBER() OVER (ORDER BY score DESC) rn
    FROM players
)
SELECT * FROM ranked WHERE rn <= 10;
```

Why does this work?  
1. **Modularity** – the `ranked` CTE isolates a complex calculation (`ROW_NUMBER`) so that downstream queries read like plain data.  
2. **Recursion support** – by referencing itself, you can traverse hierarchical structures in one declarative step.  
3. **Optimization** – most engines materialize the CTE once; if it’s referenced multiple times, they avoid recomputing the same sub‑query.

When to use a CTE?

| Situation | Why CTE helps |
|-----------|---------------|
| You need a reusable sub‑query in one statement (e.g., filtering or ordering before aggregation). | Keeps code readable and avoids duplicate logic. |
| The sub‑query is expensive and referenced more than once. | Engine materializes it once, saving work. |
| You’re dealing with recursive data (tree/graph traversal). | CTE syntax directly expresses the recurrence. |
| Debugging complex joins or window functions. | Break the logic into named blocks that can be examined independently. |

**Non‑obvious insight:**  
CTEs are *not* magic; they are just a syntactic convenience for the optimizer’s **plan graph**. If you use a CTE only once, most engines treat it like an inline view—no performance penalty, but clearer intent. Only when you reference it multiple times or make it recursive does the planner actually materialize it, which can be both a benefit (avoiding recomputation) and a cost (extra memory). Thus, consider whether the CTE will be reused before deciding to employ it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
