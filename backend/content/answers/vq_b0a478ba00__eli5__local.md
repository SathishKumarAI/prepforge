---
qid: vq_b0a478ba00__eli5__local
question: How does one loop through tables in PL/SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 239
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:24:31-05:00'
sources: []
---

Imagine your database table as a row of mailboxes, each holding a letter (a record). In PL/SQL you “walk down the street” one mailbox at a time, read the letter, and decide what to do with it.

```plsql
FOR rec IN (SELECT * FROM employees) LOOP
  -- rec is the current letter in the mailbox
  DBMS_OUTPUT.PUT_LINE(rec.first_name || ' – ' || rec.department_id);
END LOOP;
```

* `SELECT * FROM employees` tells Oracle which street to walk: the whole table or a filtered subset.  
* The `FOR … IN (…) LOOP` construct automatically fetches each letter one by one, assigns it to the record variable `rec`, and runs the loop body for that record.  
* When the last mailbox is reached, the loop stops.

So looping in PL/SQL is like reading every letter in a row of mailboxes—simple, automatic, and no need to manage indices yourself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
