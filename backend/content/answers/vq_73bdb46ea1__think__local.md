---
qid: vq_73bdb46ea1__think__local
question: In Python, how are arguments delivered by value or reference?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 471
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:49:02-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   - The user asks about *how* arguments are passed in Python (by value vs. by reference).  
   - Assume they mean function parameters, not method binding or keyword semantics.  
   - Note that Python’s terminology is “pass‑by‑object‑reference” (or “call‑by‑sharing”), which differs from strict pass‑by‑value or pass‑by‑reference in other languages.

**2️⃣ Mental model / framework**  
   - Every name in Python refers to an *object*.  
   - When a function is called, the arguments are bound to new local names; the objects themselves are not copied.  
   - Mutable vs. immutable objects determine observable side effects: mutating a mutable object inside a function changes the original; reassigning a parameter only changes the local binding.

**3️⃣ Step‑by‑step reasoning**  
   1. Illustrate with an example: `def f(x): x.append(4)` and call it with a list.  
   2. Show that `x` becomes a new reference to the same list; modifications affect the caller’s list.  
   3. Contrast with immutable type: `def g(y): y += 1` on an int – the local `y` is rebound, original stays unchanged.  
   4. Explain that no deep copy occurs unless explicitly done (e.g., `copy.copy`, `deepcopy`).  

**4️⃣ Common traps to avoid**  
   - Confusing “pass‑by‑value” with “immutable objects”; a mutable object can still be altered.  
   - Assuming reassignment inside the function changes the caller’s variable.  
   - Overlooking that functions receive *references* (not raw memory addresses) and that Python variables are just names.

**5️⃣ Sanity‑check & communicate**  
   - Verify by running small code snippets mentally or in a REPL.  
   - Communicate clearly: “Python passes references to objects; the function gets its own local name pointing to the same object.”  
   - Emphasize that whether changes appear outside depends on mutability, not the passing mechanism itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
