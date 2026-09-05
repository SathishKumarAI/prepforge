---
qid: vq_993ef3e5ba__star__local
question: Which statement will successfully create the procedure ADD_PLAYER in SQL*
  Plus?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 434
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:11:01-05:00'
sources: []
---

**Situation:**  
During a mid‑year upgrade of our sports analytics platform at a regional soccer club, the legacy system was lagging behind: new players were being added through manual CSV imports, and data integrity checks were missing. The head coach requested an automated way to insert player records into the Oracle database with validation.

**Task:**  
I had to design and implement a robust `ADD_PLAYER` stored procedure in SQL*Plus that would accept parameters for name, position, birthdate, and club ID, enforce non‑null constraints, validate age (must be ≥ 15), and return a status code.

**Action:**  
Using SQL*Plus I wrote:

```sql
CREATE OR REPLACE PROCEDURE ADD_PLAYER(
    p_name      IN VARCHAR2,
    p_position  IN VARCHAR2,
    p_birthdate IN DATE,
    p_club_id   IN NUMBER,
    p_status OUT NUMBER) IS
BEGIN
  IF (SYSDATE - p_birthdate)/365 < 15 THEN
     p_status := 1; -- age error
  ELSE
     INSERT INTO players(name, position, birth_date, club_id)
       VALUES(p_name, p_position, p_birthdate, p_club_id);
     COMMIT;
     p_status := 0; -- success
  END IF;
EXCEPTION
  WHEN OTHERS THEN
    ROLLBACK;
    p_status := -1; -- database error
END ADD_PLAYER;
/
```

I tested it with SQL*Plus scripts, checking edge cases and ensuring that the procedure returned appropriate status codes.

**Result:**  
The new procedure cut player onboarding time by 70%, reduced manual errors from 5 % to <0.5 %, and was adopted across all regional databases. I learned how to blend validation logic directly into PL/SQL for reliable, maintainable data operations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
