---
qid: vq_c48bdf03f1__think__local
question: What is Python's Scope Resolution?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 440
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:20:06-05:00'
sources: []
---

**1. Clarify the ask and set assumptions**  
   - Identify that “Scope Resolution” likely refers to how Python determines where a variable is defined (local vs. enclosing vs. global vs. built‑in).  
   - Assume the user wants an explanation of the lookup order, not the `global`/`nonlocal` statements themselves.

**2. Adopt the LEGB framework as the mental model**  
   - L = Local (function or block)  
   - E = Enclosing (nested function scopes)  
   - G = Global (module level)  
   - B = Built‑in (Python’s built‑ins).  
   This mnemonic encapsulates the resolution order.

**3. Reason step‑by‑step through a typical lookup**  
   1. When evaluating an identifier, Python first searches the *local* namespace of the current function.  
   2. If not found and there is a nested (enclosing) function, it checks that next level outward, repeating until no more enclosing scopes remain.  
   3. Failing that, it looks in the module’s global namespace.  
   4. Finally, if still unresolved, it falls back to the built‑in namespace.

**4. Watch for common traps**  
   - Mixing “scope” with “binding”; remember Python uses *static* (lexical) scope but resolves names at runtime.  
   - Forgetting that assignment creates a local name unless declared `global`/`nonlocal`.  
   - Overlooking the difference between *lookup* (reading) and *assignment* (writing).

**5. Sanity‑check & verbalize**  
   - Test mentally with nested functions that modify variables; ensure you explain how `nonlocal` alters the default lookup.  
   - Conclude by summarizing: “Python’s scope resolution follows the LEGB rule—search local, then enclosing, then global, then built‑ins.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
