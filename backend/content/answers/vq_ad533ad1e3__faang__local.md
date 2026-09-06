---
qid: vq_ad533ad1e3__faang__local
question: 'Which set of commands must be added to handle the non-predefined error:
  ORA-02292?'
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 456
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:28:02-05:00'
sources: []
---

**Clarify**  
The Oracle error *ORA‑02292* is “integrity constraint violated – child record found”. It typically occurs when a `DELETE` or `UPDATE` on a parent table would orphan rows in a child table. We need to add SQL commands that prevent this by enforcing referential integrity, e.g., `ON DELETE CASCADE` or `ON UPDATE CASCADE`.  

**Approach**  
1. Identify the foreign‑key relationship causing the error.  
2. Decide whether we want cascading deletes/updates or a restriction.  
3. Alter the child table’s FK constraint accordingly.  
4. Add triggers if business logic requires custom handling.  

**Depth**  
```sql
-- 1. Find the offending FK
SELECT constraint_name, table_name, r_constraint_name 
FROM user_constraints 
WHERE constraint_type = 'R' AND r_owner = 'SCHEMA' 
      AND r_table_name = 'PARENT_TABLE';

-- 2a. Add ON DELETE CASCADE (preferred for many apps)
ALTER TABLE CHILD_TABLE 
DROP CONSTRAINT FK_CHILD_PARENT,
ADD CONSTRAINT FK_CHILD_PARENT
FOREIGN KEY (parent_id) REFERENCES PARENT_TABLE(id)
ON DELETE CASCADE;

-- 2b. Or use ON UPDATE CASCADE if needed
ALTER TABLE CHILD_TABLE
MODIFY CONSTRAINT FK_CHILD_PARENT
FOREIGN KEY (parent_id) REFERENCES PARENT_TABLE(id)
ON UPDATE CASCADE;
```
If business rules forbid automatic deletion, create a trigger that raises an application exception instead of silently blocking the operation.

**Edge Cases**  
- Existing orphaned rows: need cleanup before altering.  
- Large tables: `ALTER` can lock tables; use online DDL if supported.  
- Multi‑schema setups: ensure correct owner references.  

**Optimize & Communicate**  
Explain that `ON DELETE CASCADE` removes dependent rows automatically, preventing ORA‑02292 and simplifying maintenance. If cascade is undesirable, a trigger gives explicit control while still avoiding the error. Always test in a staging environment to confirm no unintended data loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
