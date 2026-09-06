---
qid: vq_6e96ef813b__think__local
question: What is call-by-name?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 429
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:45:10-05:00'
sources: []
---

**1. Clarify the question & set assumptions**  
   - The user asks *“What is call‑by‑name?”* in a Data Engineering context.  
   - Assume they’re referring to a parameter passing strategy (not the name of a function).  
   - Note that “call‑by‑name” originates from programming language theory, but it can appear in data pipelines (e.g., lazy evaluation).

**2. Choose a mental model / framework**  
   - Think of *parameter passing strategies*: call‑by‑value, call‑by‑reference, and call‑by‑name.  
   - Map “call‑by‑name” to the idea of *lazy substitution* – the argument expression is re-evaluated each time it’s used.

**3. Step‑by‑step reasoning**  
   1. Define what a function parameter normally does.  
   2. Contrast eager evaluation (value) vs. lazy (reference).  
   3. Explain that call‑by‑name substitutes the *expression* itself, not its computed value.  
   4. Mention typical use‑cases: avoiding expensive computations or infinite data structures.  
   5. Provide a concise example in Scala/Scala‑like pseudocode to illustrate.

**4. Common traps & wrong turns**  
   - Mixing it up with *call‑by‑reference* (mutating the caller’s variable).  
   - Forgetting that each use re‑evaluates, so side effects can happen repeatedly.  
   - Overgeneralizing: not all languages support call‑by‑name natively.

**5. Sanity‑check & communicate clearly**  
   - Verify the explanation covers “what”, “how”, and “why”.  
   - Keep it concise (≈150 words).  
   - End with a quick takeaway: “Call‑by‑name is lazy evaluation where the argument’s expression is re‑evaluated each time it’s referenced.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
