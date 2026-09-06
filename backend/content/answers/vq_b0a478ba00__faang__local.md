---
qid: vq_b0a478ba00__faang__local
question: How does one loop through tables in PL/SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 514
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:28:41-05:00'
sources: []
---

**Clarify**  
> *Problem:* In Oracle’s procedural extension (PL/SQL) we need to iterate over the rows of a table (or query result).  
> *Assumptions I’d confirm:*  
> - Is it a static cursor (`SELECT … FROM t`) or a dynamic SQL string?  
> - Do we need to process each row once, or are there nested loops?  
> - Are any DML operations required inside the loop?  

**Approach**  
1. Declare a record type matching the query’s columns.  
2. Open a cursor (static or dynamic).  
3. Fetch into the record in a `LOOP … EXIT WHEN NO_DATA_FOUND`.  
4. Process the record, then repeat until all rows are consumed.  

**Depth**  
```plsql
DECLARE
  TYPE t_rec IS RECORD (
    id   NUMBER,
    name VARCHAR2(50),
    amt  NUMBER);
  v_row t_rec;
BEGIN
  FOR cur IN (SELECT id, name, amt FROM sales ORDER BY id) LOOP
     -- process each row directly in the loop body
     DBMS_OUTPUT.PUT_LINE(cur.id || ': ' || cur.name || ' = ' || cur.amt);
  END LOOP;
END;
```
*Static cursor:* `FOR … IN (…)` is a cursor‑for‑loop—no explicit open/close/fetch, automatically commits when done.  
*Dynamic cursor:* use `OPEN`, `FETCH INTO`, `CLOSE`; handle `NO_DATA_FOUND`.  

**Edge Cases**  
- Empty result set → loop body never executes.  
- Large tables: consider bulk collect (`BULK COLLECT`) to reduce context switches.  
- DML inside the loop can cause row‑level locking; use commit strategy if needed.  

**Optimize & Communicate**  
- For heavy processing, switch to `FORALL` with BULK BINDs when performing DML.  
- Explain trade‑offs: cursor‑for‑loop is concise but less control; explicit cursors allow fine‑grained error handling.  
- Highlight that using `%ROWTYPE` ties the record to the table structure automatically, simplifying maintenance.  

This structured answer covers assumptions, a clear plan, implementation details, edge considerations, and optimization insights—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
