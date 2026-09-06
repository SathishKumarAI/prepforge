---
qid: vq_97fd9e3342__think__local
question: What is the difference between Stored Procedure and UDF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 436
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:04:07-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
   - Confirm that “UDF” means *User‑Defined Function* (SQL/PL).  
   - Assume we’re talking about relational databases (e.g., SQL Server, PostgreSQL) where both objects exist.  
   - Note whether the user cares about performance, scope, or usage patterns.

**2️⃣ Mental model / framework**  
   - Treat a *stored procedure* as a **command block** that performs actions and may return multiple result sets or output parameters.  
   - Treat a *UDF* as an **expression evaluator** that returns a single value (scalar) or table, usable inside SQL statements.

**3️⃣ Step‑by‑step reasoning**  
   1. List core characteristics: input, output, where it can be invoked, side effects, transaction control.  
   2. Compare each characteristic across the two objects.  
   3. Highlight typical use cases (batch updates vs inline calculations).  
   4. Note any database‑specific nuances (e.g., T‑SQL UDFs cannot modify data).

**4️⃣ Common traps to avoid**  
   - Mixing up *procedures* with *functions* in other languages; remember that DB functions must be deterministic and side‑effect free (unless it’s a table‑valued function).  
   - Forgetting that UDFs can degrade performance because they’re executed row‑by‑row.  
   - Assuming all UDFs can return tables—only *table‑valued* UDFs do.

**5️⃣ Sanity‑check & communicate**  
   - Re‑state the differences in plain language: “Procedures are like scripts you run; functions are like reusable formulas.”  
   - Verify against a quick mental test: if I need to update several tables, which object? → Procedure. If I need a calculated column, which object? → UDF.  
   - Conclude with a concise bullet list that captures the essence for easy recall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
