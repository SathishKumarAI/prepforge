---
qid: vq_0312b5f9e8__think__local
question: What is the difference between a call-by-value and call-by-name parameter?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 419
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:04:45-05:00'
sources: []
---

**1. Clarify the context & assumptions**  
   - Assume the question refers to *parameter passing strategies* in programming languages (e.g., Scheme vs. C).  
   - Confirm that “call‑by‑value” means evaluating an argument before invoking a function, while “call‑by‑name” defers evaluation until the parameter is actually used inside the body.

**2. Adopt a mental model**  
   - Think of each strategy as a *data flow diagram*:  
     *Call‑by‑value* → **evaluate** → pass **copy** to callee.  
     *Call‑by‑name* → **pass expression** (a thunk) → evaluate on demand inside the callee.

**3. Step‑by‑step reasoning**  
   1. Identify how each strategy handles side‑effects and evaluation order.  
   2. Map out the impact on performance: call‑by‑value can avoid recomputation; call‑by‑name may recompute but saves work if a parameter is unused.  
   3. Consider typical use cases (e.g., lazy lists in functional languages vs. eager arithmetic).  

**4. Avoid common traps**  
   - Don’t confuse *call‑by‑value* with *pass‑by‑reference*: the former copies, not shares.  
   - Remember that call‑by‑name can lead to infinite loops if the parameter is never used or used in a way that forces re‑evaluation.

**5. Sanity‑check & verbalize**  
   - Test with a simple example: `f(x) = x + 1`; calling `f(2+3)` under each strategy should yield the same result, but the timing of evaluating `2+3` differs.  
   - Explain this to a peer by comparing “eager” vs. “lazy” evaluation, ensuring the distinction is clear and intuitive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
