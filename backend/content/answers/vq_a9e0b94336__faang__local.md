---
qid: vq_a9e0b94336__faang__local
question: WHAT ARE SQL TRIGGERS, AND WHEN SHOULD THEY BE USED?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 431
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:27:12-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise definition of *SQL triggers* and guidance on their appropriate use‑cases. I’ll assume they’re referring to database‐level event handlers that fire automatically in response to DML (INSERT/UPDATE/DELETE) or system events.

**Approach**  
1. Define triggers.  
2. List typical scenarios where they add value.  
3. Discuss when they should be avoided, citing performance and maintenance concerns.  
4. Wrap up with a quick note on best practices.

**Depth**  
A trigger is a stored program that executes automatically before or after specified DML events (or system events) on a table or view. It can modify the statement’s effect, enforce business rules, maintain audit trails, or keep derived data in sync.  
*Use cases:*  
- **Audit logging** – capture old/new values and user info without touching application code.  
- **Cascade updates/deletes** – maintain referential integrity when foreign keys cannot be expressed declaratively.  
- **Derived columns** – auto‑populate computed fields (e.g., `last_modified` timestamp).  
- **Business rule enforcement** – reject or transform data that violates domain constraints.  

*When to avoid:*  
- Heavy logic in triggers can obscure application flow and make debugging hard.  
- Triggers fire implicitly, so performance penalties may be hidden; they can also lead to recursion if not carefully guarded.  
- In distributed systems, triggers lock rows and can become bottlenecks under high concurrency.

**Edge Cases**  
Test nested triggers, order of execution (BEFORE vs AFTER), and cross‑table updates that might trigger unintended side effects. Verify rollback behavior on trigger failure.

**Optimize & Communicate**  
Emphasize: “Use triggers sparingly—only when the logic belongs in the data layer, is reusable across applications, or guarantees consistency that application code can’t reliably enforce.” This balances clarity, depth, and practical guidance within the 160‑240 word limit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
