---
qid: vq_68e8faa4c9__think__local
question: WHAT IS A COMMON TABLE EXPRESSION (CTE)?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 402
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:43:04-05:00'
sources: []
---

**1. Clarify the ask and set assumptions**  
   - The user wants a *definition* of “Common Table Expression (CTE)”.  
   - Assume they’re familiar with SQL but not necessarily advanced concepts.  
   - Provide a concise, practical explanation that can be reused for similar questions.

**2. Choose an explanatory framework**  
   - **What it is** → formal definition.  
   - **Why use it** → benefits (readability, recursion, modularity).  
   - **How it looks in code** → minimal syntax example.  
   - **Typical use‑cases** → joins, self‑joins, recursive queries.

**3. Reason step by step toward the answer**  
   1. Start with “A CTE is a temporary named result set…”  
   2. Mention that it’s defined using `WITH` and lasts for one statement.  
   3. Explain that it can be referenced like a table in subsequent clauses.  
   4. Highlight recursion support (`RECURSIVE`).  
   5. Show a short example: selecting rows from an employee hierarchy.

**4. Avoid common pitfalls**  
   - Don’t over‑explain syntax details (e.g., `AS` vs. no `AS`).  
   - Don’t confuse CTEs with subqueries; emphasize the naming and reusability.  
   - Avoid jargon that might obscure the core idea for beginners.

**5. Sanity‑check & verbalize**  
   - Re‑read: does it answer “what” without assuming too much?  
   - Keep tone explanatory but concise.  
   - End with a quick takeaway: CTEs are like named, temporary tables that can be reused and even defined recursively within one SQL statement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
