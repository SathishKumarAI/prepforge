---
qid: vq_fd6dca7357__think__local
question: Which of the following is not correct about an Exception ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 364
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:44:25-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- Assume “Exception” refers to the Java exception hierarchy (checked vs unchecked).  
- The question asks for a *statement that is NOT true*; we need to evaluate each option against known facts.

**2️⃣ Adopt a systematic mental model**  
- Map each candidate statement to the key properties of exceptions: origin (runtime/compile‑time), handling requirements, inheritance, and propagation.  
- Create a quick truth table: *True / False* for each property.

**3️⃣ Reason step‑by‑step through each option**  
1. “All exceptions are objects.” → True (Exception is a class).  
2. “Checked exceptions must be declared or caught.” → True (compile‑time rule).  
3. “RuntimeExceptions are checked exceptions.” → Likely false—this directly contradicts the definition.  
4. “An exception can be thrown by `throw` statement.” → True.  

**4️⃣ Spot common traps**  
- Don’t confuse *checked* with *unchecked* (runtime) exceptions.  
- Avoid assuming that “exception” always means “error”; Java distinguishes `Error` and `Exception`.  
- Remember that the language itself throws `Throwable`, not just `Exception`.

**5️⃣ Sanity‑check & verbalize**  
- Cross‑verify each false statement with JLS excerpts or trusted docs.  
- If a candidate seems off, re‑read it: does “checked” appear? Is “runtime” used incorrectly?  
- Finally, articulate the answer: “RuntimeExceptions are checked exceptions” is the incorrect statement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
