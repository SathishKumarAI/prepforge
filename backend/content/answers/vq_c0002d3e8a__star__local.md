---
qid: vq_c0002d3e8a__star__local
question: Which of the following is NOT VALID in PL/SQL ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 359
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:17:32-05:00'
sources: []
---

**Situation:**  
During a quarterly audit of our legacy payroll system I was tasked with refactoring the PL/SQL package that generated employee payslips. The team had been using an older syntax that was no longer supported by Oracle 19c, and several runtime errors were surfacing in production.

**Task:**  
I needed to identify every non‑standard or deprecated construct in the package, replace it with valid code, and ensure the refactor didn’t alter business logic or performance.

**Action:**  
I ran a static analysis script that highlighted all PL/SQL statements flagged by the compiler. One of the flagged lines was `FOR i IN 1..10 LOOP`, which I initially assumed was fine. However, when I tested it in a sandbox, Oracle threw an error: “PLS-00103: Encountered the symbol "LOOP" when expecting one of the following…”. I dug into the documentation and discovered that numeric ranges in `FOR` loops must be declared as constants or variables; using a literal directly is not valid in this context. I replaced it with `FOR i IN 1..10 LOOP` inside a sub‑program where `i` was explicitly typed, then recompiled.

**Result:**  
After the changes, the package compiled cleanly and ran 15% faster due to reduced parsing overhead. The audit passed without any further PL/SQL errors, and I documented the rule in our coding standards so future developers avoid this pitfall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
