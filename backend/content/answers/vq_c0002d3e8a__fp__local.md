---
qid: vq_c0002d3e8a__fp__local
question: Which of the following is NOT VALID in PL/SQL ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 343
total_tokens: 515
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:54:16-05:00'
sources: []
---

In PL/SQL, the only *control‑flow* statements that are truly “native” are `IF…THEN…ELSE`, `LOOP…END LOOP`, and the three forms of `FOR` (`FOR i IN … LOOP`, `FOR record IN query LOOP`, and `FOR i IN RANGE`).  
The language purposely rejects constructs that would undermine its deterministic, typed nature:

| Invalid construct | Why it fails |
|-------------------|--------------|
| **`GOTO`** | PL/SQL is a structured language; jumping arbitrarily between labels would break static analysis (e.g., reachability, variable liveness). |
| **`BREAK` / `CONTINUE` outside loops** | These are only meaningful inside loop bodies. Outside them, the parser cannot resolve the target block. |
| **`RETURN` in a procedure without a value** | Only functions may return a value; procedures must not use `RETURN`. |

The *non‑obvious insight* is that PL/SQL’s design deliberately mirrors the declarative spirit of SQL: it enforces a clear, predictable flow so that the optimizer can reason about execution plans. Any “unstructured” jump would force the engine to treat code as opaque, negating its ability to merge or inline statements, which would degrade performance and reliability. Thus, even though many other languages offer `goto`, PL/SQL’s constraint is a deliberate choice rooted in optimization and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
