---
qid: vq_c48bdf03f1__faang__local
question: What is Python's Scope Resolution?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 457
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:32:26-05:00'
sources: []
---

**Scope Resolution in Python**

1. **Clarify**  
   *Problem:* Explain how Python determines the visibility of variables (the “scope”) and the order it searches for names.  
   *Assumptions to confirm:* We’re dealing with standard lexical scopes, not dynamic features like `locals()`/`globals()`, nor module‑level globals in multi‑process contexts.

2. **Approach**  
   • Outline the LEGB rule (Local → Enclosing → Global → Built‑in).  
   • Mention static vs. dynamic resolution and the role of `global`/`nonlocal`.  
   • Touch on how closures capture names and why read/write differ.

3. **Depth**  
   *Local:* Variables defined in a function body or comprehension; resolved first.  
   *Enclosing:* Names from outer non‑module functions (closures); searched next.  
   *Global:* Module namespace; accessed if not found locally/enclosing.  
   *Built‑in:* Python’s built‑ins (`len`, `int`, …) are the last resort.  
   When a variable is assigned in a block, it becomes local unless declared `global` or `nonlocal`. `nonlocal` lets you modify an enclosing variable (Python 3 only). Look‑ups follow LEGB; writes obey the declaration.  

4. **Edge Cases**  
   • NameError if not found after built‑ins.  
   • Shadowing: a local name hides an outer one.  
   • Default arguments are evaluated at definition time, using the global scope then.  
   • In comprehensions, Python 3 treats them as separate scopes; Python 2 didn’t.

5. **Optimize & Communicate**  
   Emphasize that understanding LEGB prevents subtle bugs (e.g., accidental globals). For interviewers: “If I needed to read a global inside a nested function without re‑assigning, I’d just reference it directly; if I had to modify it, I’d declare `nonlocal` or `global`.” This shows clear reasoning and mastery of Python’s namespace mechanics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
