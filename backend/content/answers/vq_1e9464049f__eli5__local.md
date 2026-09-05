---
qid: vq_1e9464049f__eli5__local
question: How does one get the value of a sequence into a PL/SQL variable?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 291
total_tokens: 455
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:04:53-05:00'
sources: []
---

Imagine your SQL database is a giant library and each row in a table is a book.  
A *sequence* is like an automatic “next‑in‑line” counter that hands out fresh numbers whenever you ask, just as a librarian would give the next available book number.

In PL/SQL you can grab the current value of a sequence into a variable the same way you’d pick up a book: use the `SELECT … INTO` statement.  
```plsql
DECLARE
  v_next_id   NUMBER;
BEGIN
  SELECT my_seq.NEXTVAL          -- the “next number” from the sequence
    INTO   v_next_id             -- put it into our PL/SQL variable
  FROM   dual;                   -- dummy table needed for a single row query
  DBMS_OUTPUT.PUT_LINE('Next id = '||v_next_id);
END;
/
```
* `NEXTVAL` – asks the sequence for its next number.  
* `SELECT … INTO` – copies that single value into the variable `v_next_id`.  

Now you can use `v_next_id` like any other PL/SQL variable—insert it into another table, pass it to a procedure, or simply print it out. This is the simplest way to pull a sequence’s value into your code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
