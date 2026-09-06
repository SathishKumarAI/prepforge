---
qid: vq_95451e341b__faang__local
question: To which timing will this trigger be assigned?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 564
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:23:18-05:00'
sources: []
---

**Clarify**  
You’re asking *when* a database trigger executes. In most RDBMS (Oracle, MySQL, PostgreSQL) a trigger is bound to an event (`INSERT`, `UPDATE`, or `DELETE`) and a **timing**—either `BEFORE` or `AFTER`. Some engines also allow `INSTEAD OF` for view‑level triggers.

Assumptions:  
- The trigger is on a base table (not a view).  
- We’re dealing with row‑level triggers, not statement‑level.

---

**Approach**  
1. Identify the event type (`INSERT/UPDATE/DELETE`).  
2. Read the `timing` clause in the trigger definition.  
3. Map that to when the trigger fires relative to the data modification.

---

**Depth**  

| Timing | Execution point | Typical use |
|--------|-----------------|-------------|
| **BEFORE** | Just *before* the row is written (or before the statement completes). | Validation, default value calculation, audit logging that must see old values. |
| **AFTER** | Immediately *after* the row has been committed for that statement. | Cascading actions, updating summary tables, notifying external services. |
| **INSTEAD OF** *(views)* | Replaces the original operation entirely; you manually implement the logic. | Virtual tables, complex view updates. |

Complexity is O(1) per fired trigger; overall cost depends on how many rows are affected.

---

**Edge Cases**  
- Triggers can fire recursively if they modify the same table; many DBs allow disabling recursion or set a `MAX_RECURSION` limit.  
- In statement‑level triggers, `BEFORE` runs once per statement, not per row.  
- View triggers only support `INSTEAD OF`.

---

**Optimize & Communicate**  
When designing triggers, prefer `AFTER` for actions that don’t need the pre‑modification state to reduce locking contention. Use `BEFORE` sparingly and keep logic simple to avoid performance hits. In code reviews, always document the trigger’s timing and intent so future maintainers understand its side effects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
