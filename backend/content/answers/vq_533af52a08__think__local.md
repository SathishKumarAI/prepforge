---
qid: vq_533af52a08__think__local
question: What is the difference between call-by-value and call-by-name function parameters?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 468
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:35:34-05:00'
sources: []
---

**1. Clarify the question & assumptions**  
   - Identify that “call‑by‑value” vs “call‑by‑name” refers to *parameter passing strategies* in programming languages (e.g., Scala, Lisp, ML).  
   - Assume the reader knows basic function calls but not the evaluation semantics.

**2. Mental model / framework**  
   - Treat a function call as two stages: **argument evaluation** → **binding** → **body execution**.  
   - Map each strategy onto where the binding happens and how many times the argument expression is evaluated.

**3. Step‑by‑step reasoning**  
   1. *Call‑by‑value*: evaluate the actual argument first, then bind the resulting value to the formal parameter; the body uses that single value.  
   2. *Call‑by‑name*: don’t evaluate the argument upfront; instead bind a “thunk” (a deferred computation) to the formal name. Each time the parameter is referenced in the body, the thunk recomputes the argument expression.  
   3. Note side effects: call‑by‑value evaluates once (side effects happen once), while call‑by‑name may evaluate multiple times (or never if unused).  
   4. Mention that some languages allow both (e.g., Scala’s `=> T` syntax).

**4. Common traps to avoid**  
   - Mixing up “call‑by‑value” with “pass‑by‑reference.”  
   - Forgetting that call‑by‑name can lead to infinite loops if the argument depends on the parameter itself.  
   - Assuming thunks are always lazy; they may be forced by the language runtime.

**5. Sanity‑check & verbalize**  
   - Ask: “If I pass a mutable counter as an argument, will it increment once or every time the function uses it?”  
   - Answer: once for call‑by‑value, each use for call‑by‑name (unless optimized).  
   - Communicate clearly that the key distinction is *when* and *how often* the argument expression is evaluated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
