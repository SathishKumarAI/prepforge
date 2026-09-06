---
qid: vq_4ab81e5caf__faang__local
question: What does WITH CHECK do?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 565
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:09:14-05:00'
sources: []
---

**Clarify**  
The interview question asks about the `WITH CHECK` clause in SQL (commonly seen with views or triggers). I’ll assume we’re talking about *CHECK constraints* that enforce a predicate when data is inserted/updated, and that the interviewer expects an explanation of its semantics and use‑cases.

---

**Approach**  
1. Define the construct: `WITH CHECK` appears in view definitions (`CREATE VIEW … WITH CHECK OPTION`) or in trigger creation (`CREATE TRIGGER … WITH CHECK`).  
2. Explain how it enforces predicate validation on data modifications.  
3. Contrast with `WITH NO CHECK`.  
4. Discuss practical scenarios and trade‑offs.

---

**Depth**  

| Context | Syntax | Effect |
|---------|--------|--------|
| **View** | `CREATE VIEW v AS SELECT … WHERE p1 AND p2 WITH CHECK OPTION;` | Any INSERT/UPDATE through the view must satisfy `(p1 AND p2)`. If not, the statement fails. |
| **Trigger** | `CREATE TRIGGER t AFTER UPDATE ON tab FOR EACH ROW WHEN (condition) BEGIN … END WITH CHECK;` | The trigger’s body is executed *only* if the row satisfies the condition at fire‑time. |

- **WITH CHECK** guarantees referential integrity or business rules by validating data before it reaches the base table.  
- If omitted, SQL Server (or Oracle/PostgreSQL) may allow changes that violate the view’s predicate; the view becomes a “loose” projection.

**Complexity & Trade‑offs**  
- **Performance:** Adds an extra predicate evaluation per row; negligible for small updates but can affect bulk loads.  
- **Flexibility:** Prevents accidental bypass of business logic when developers use alternative pathways (e.g., direct table inserts).  

---

**Edge Cases**  
- Recursive views: `WITH CHECK` may cause infinite loops if the view’s predicate references itself.  
- Triggers with cascading updates: If the trigger updates another table that also has a `CHECK`, nested checks can cascade and slow performance.  
- Testing: Verify that an insert through the view fails when violating the condition, but succeeds via direct table access.

---

**Optimize & Communicate**  

*Optimization*: Use `WITH NOCHECK` only when you’re certain all data paths respect the constraint (e.g., bulk loads with pre‑validated staging tables).  
*Narration*: “I’d employ `WITH CHECK OPTION` on any public view that represents a business entity, ensuring every modification stays within defined boundaries. If performance becomes an issue, I’d profile the predicate and consider materialized views or indexed constraints.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
