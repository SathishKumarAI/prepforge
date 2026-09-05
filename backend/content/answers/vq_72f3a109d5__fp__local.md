---
qid: vq_72f3a109d5__fp__local
question: Which function will be created successfully in SQL* Plus?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 320
total_tokens: 491
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:40:51-05:00'
sources: []
---

In Oracle SQL*Plus a *CREATE FUNCTION* succeeds only if the PL/SQL block is syntactically correct **and** all referenced objects exist and are accessible.  
The fundamental problem a function solves is: *“return a deterministic value for given inputs”*.  
To guarantee that, Oracle enforces:

1. **Return type declaration** – the `RETURN` clause must match the declared variable.
2. **No side‑effects** – unless declared `PRAGMA AUTONOMOUS_TRANSACTION`, it cannot modify data outside its scope.
3. **Dependency resolution** – every table, view or other function called inside must be present and owned by a user with privileges.

Thus a function that simply performs arithmetic (e.g., `CREATE FUNCTION add_two(p1 IN NUMBER) RETURN NUMBER IS BEGIN RETURN p1 + 2; END;`) will always succeed because it meets all three criteria.  
A function that references a non‑existent table, or tries to insert into another schema without privileges, fails at compile time.

**Non‑obvious insight:** Even if the body compiles, Oracle defers checking of *runtime* errors (like division by zero) until execution; the `CREATE FUNCTION` succeeds regardless. Therefore, for safety you should wrap risky operations in exception handlers even when compilation passes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
