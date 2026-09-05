---
qid: vq_993ef3e5ba__fp__local
question: Which statement will successfully create the procedure ADD_PLAYER in SQL*
  Plus?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 465
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:47:41-05:00'
sources: []
---

In Oracle’s PL/SQL, a stored procedure is a **named block of executable code** that can be invoked by other SQL statements or applications.  
To *create* it in `SQL*Plus`, you must:

1. **Declare the name and optional parameters** – this tells the engine what the entry point is.  
2. **Use `IS` (or `AS`) to start the declarative section** – here you can declare local variables, cursors, or constants.  
3. **Write the executable block in the `BEGIN … END;` pair** – this is where the actual logic runs.  
4. **Terminate the whole statement with a `/` on a line by itself** – `SQL*Plus` only sends the block to the database when it sees this slash, so that the parser knows the end of the PL/SQL unit.

A minimal procedure adding a player might look like:

```sql
CREATE OR REPLACE PROCEDURE add_player (
    p_name   IN VARCHAR2,
    p_score  IN NUMBER
) IS
BEGIN
    INSERT INTO players (name, score)
    VALUES (p_name, p_score);
    COMMIT;
END add_player;
/
```

**Why this works:**  
- `CREATE OR REPLACE` ensures you can update the procedure without dropping it first.  
- The parameter list defines the *interface*—other code calls it with concrete values.  
- The `BEGIN … END;` block is a **single transaction**; the implicit commit guarantees durability (unless you remove it for finer control).  
- The trailing `/` tells `SQL*Plus` to send the whole text to the database as one unit, preventing syntax errors that arise when only part of the block is transmitted.

**Non‑obvious tip:** If you omit the slash, `SQL*Plus` will keep waiting for more input and the procedure never reaches the server. This subtle requirement is why many beginners see “ORA‑00933: SQL command not properly ended” even though their PL/SQL syntax is correct.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
