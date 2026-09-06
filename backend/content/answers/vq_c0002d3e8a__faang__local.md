---
qid: vq_c0002d3e8a__faang__local
question: Which of the following is NOT VALID in PL/SQL ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 402
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:31:19-05:00'
sources: []
---

**Clarify**  
The interview asks for a statement that *cannot* be written in PL/SQL.  
We’ll assume the options are typical syntax snippets (e.g., `SELECT`, `IF … THEN`, `FOR … LOOP`, `CREATE OR REPLACE FUNCTION`). The goal is to identify which one violates PL/SQL grammar or runtime rules.

**Approach**  
1. Recall core PL/SQL constructs: declarative section, executable statements, exception handling.  
2. Verify each snippet against the syntax diagram in Oracle docs.  
3. Check for illegal uses (e.g., using `SELECT INTO` with a non‑scalar target, calling SQL inside an anonymous block without a cursor, or missing semicolons).

**Depth**  
The invalid construct is:

```plsql
FOR i IN 1..10 LOOP
   DBMS_OUTPUT.PUT_LINE('i=' || i);
END FOR;      -- ❌ Wrong terminator
```

In PL/SQL, loops are terminated with **`END LOOP;`**, not `END FOR;`. Using the wrong keyword causes a compilation error (`PLS-00103: Encountered the symbol "FOR"`). All other options (e.g., `SELECT INTO`, `IF … THEN END IF;`, `WHILE … END WHILE;`) are syntactically correct.

**Edge Cases**  
If an option used `END FOR` but was inside a PL/SQL block that allowed dynamic SQL, the error would still occur. Test by compiling each snippet individually in SQL*Plus or an IDE to confirm the compiler message.

**Optimize & Communicate**  
Explain that understanding the exact terminator for control structures is crucial; a small typo leads to immediate compilation failure. Highlight how you’d quickly spot such errors during code reviews and automated linting, ensuring robust PL/SQL modules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
