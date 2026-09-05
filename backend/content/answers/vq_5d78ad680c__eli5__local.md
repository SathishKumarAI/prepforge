---
qid: vq_5d78ad680c__eli5__local
question: What is a CTE and when should you use it?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 256
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:12:47-05:00'
sources: []
---

Think of a **CTE (Common Table Expression)** as a quick‑draw recipe card you jot down on a sticky note before cooking a big dish.  
You write the note once, give it a name, and then use that name in your main recipe just like any ingredient.  

In SQL, a CTE lets you build a temporary result set—like a mini‑table—inside a single query. It’s defined with `WITH cte_name AS ( … )` and can be referenced by its name right after the `SELECT`, `INSERT`, or other statement.  

Use a CTE when:  
1. **You need to break a complex query into readable parts** – each part becomes a named block.  
2. **You want to reuse the same subquery multiple times** without rewriting it.  
3. **You’re working with recursion**, such as walking an organizational chart or tree structure, where the CTE can call itself.  

Just remember: a CTE is temporary and lives only for that one query; it’s not stored in the database like a real table.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
