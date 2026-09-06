---
qid: vq_858e45ba7f__think__local
question: Is it possible to open a cursor which is in a Package in another procedure
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 534
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:59:05-05:00'
sources: []
---

**1. Clarify the question & assumptions**

   - *What is “open a cursor”*? In PL/SQL, this usually means declaring a `REF CURSOR` and using `OPEN cursor_name FOR ...`.  
   - *Where does the cursor live?* It’s defined in a package body (or spec).  
   - *Which procedure is trying to open it?* Another stored‑procedure somewhere else.  
   - Assume:  
     1. The cursor is declared as a `REF CURSOR` type in the package spec or body.  
     2. The caller has appropriate privileges on the package.  

**2. Mental model / framework**

   Use PL/SQL scoping rules:  
   - Objects in a package are private unless exposed via the specification.  
   - A cursor variable (`REF CURSOR`) is a datatype; the actual query must be opened inside the procedure that owns it or passed around as a handle.

**3. Step‑by‑step reasoning**

   1. If the cursor is **explicitly defined** in the package spec (e.g., `TYPE cur_t IS REF CURSOR;`), other procedures can declare a variable of that type and open it by calling a procedure inside the package that opens it.
   2. The caller cannot *directly* write `OPEN pkg.cursor_name FOR ...` if the cursor is private to the package body.  
   3. Instead, expose an accessor routine:  
      ```plsql
      PROCEDURE get_data(p_cur OUT cur_t) IS
      BEGIN
        OPEN p_cur FOR SELECT …;
      END;
      ```
   4. The external procedure then calls `pkg.get_data(my_cursor);` and fetches from it.

**4. Common traps to avoid**

   - Trying to open a cursor that’s only defined inside the package body; you’ll get “cursor not found”.  
   - Forgetting to declare the cursor variable in the caller with the same type.  
   - Assuming privileges on the package grant access to its private cursors— they don’t.

**5. Sanity‑check & communication**

   - Verify that the cursor’s type is in the spec.  
   - Check that the calling procedure has `EXECUTE` privilege on the package.  
   - Explain: “You can’t open a cursor defined only inside a package body directly; expose it via a public procedure or declare the cursor type in the spec and let a public routine open it.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
