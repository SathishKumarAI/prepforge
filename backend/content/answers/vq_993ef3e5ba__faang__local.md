---
qid: vq_993ef3e5ba__faang__local
question: Which statement will successfully create the procedure ADD_PLAYER in SQL*
  Plus?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 396
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:24:09-05:00'
sources: []
---

**Clarify**  
The interviewer wants a single‑statement `CREATE PROCEDURE` that compiles in Oracle’s *SQL* Plus and correctly creates a procedure named `ADD_PLAYER`.  
Assumptions:  
1. The database is Oracle 12c+ (supports PL/SQL).  
2. No external packages or triggers are required.  
3. We’re using the default `CREATE OR REPLACE` syntax.

**Approach**  
Write a minimal, syntactically correct PL/SQL block that creates the procedure, then use `SHOW ERRORS` to verify compilation.

**Depth**  
```sql
CREATE OR REPLACE PROCEDURE ADD_PLAYER (
    p_player_id   IN  NUMBER,
    p_name        IN  VARCHAR2,
    p_score       IN  NUMBER
) AS
BEGIN
    INSERT INTO players (player_id, name, score)
    VALUES (p_player_id, p_name, p_score);
    COMMIT;
END ADD_PLAYER;
/
```
- `CREATE OR REPLACE` ensures idempotent creation.  
- Parameters are typed and scoped with `IN`.  
- The body performs a straightforward `INSERT` followed by a `COMMIT`.  
- The trailing `/` tells SQL*Plus to execute the block.

**Edge Cases**  
- If `players` table does not exist, compilation fails; test by creating the table first.  
- Name collision: existing procedure with same name will be replaced.  
- Parameter name conflicts: ensure no reserved words are used.

**Optimize & Communicate**  
For production, avoid implicit commits inside procedures—return transaction control to callers. Also consider exception handling (`EXCEPTION WHEN OTHERS THEN RAISE;`). Explain that this keeps the procedure simple for the interview while acknowledging real‑world best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
