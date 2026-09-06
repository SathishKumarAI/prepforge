---
qid: vq_c8439e6061__think__local
question: What exactly is wrong with a recursive function that is not tail-recursive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 476
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:21:34-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
   - The user asks *“what’s wrong with a non‑tail‑recursive function?”*  
   - Assume they’re referring to functional languages (Haskell, ML, etc.) or imperative ones that use recursion for control flow.  
   - They likely want pitfalls like stack growth, performance, and potential bugs.

**2️⃣ Mental model / framework**  
   - **Recursion vs iteration**: tail‑recursion can be optimized into a loop; non‑tail cannot.  
   - **Stack frame cost**: each recursive call pushes a new frame; if the function isn’t tail‑recursive it keeps frames alive until later steps.  
   - **Resource constraints & time complexity**: deeper recursion → more memory, potential overflow.  
   - **Side effects & order of evaluation**: non‑tail calls may delay computations, leading to different observable behaviour.

**3️⃣ Step‑by‑step reasoning toward the answer**  
   1. Identify a non‑tail‑recursive pattern (e.g., `f(n) = g(f(n-1))`).  
   2. Explain that each call must wait for the result of the inner call → frames stay on stack.  
   3. Show how this leads to linear space usage versus constant space in tail recursion.  
   4. Mention practical limits: stack overflow, slower execution, harder optimisation.  
   5. Note that some languages still optimise non‑tail calls (e.g., JVM), but not universally.

**4️⃣ Common traps to avoid**  
   - Don’t claim “wrong” as a bug; it’s just less efficient or risky.  
   - Avoid overgeneralising: tail recursion is optional in many modern runtimes.  
   - Don’t mix up “tail‑call optimisation” with “recursive function correctness”.

**5️⃣ Sanity‑check & communicate clearly**  
   - Verify the explanation covers memory, time, and language‑specific behaviour.  
   - Use a simple example to illustrate stack growth.  
   - Keep the tone neutral: “not wrong in logic, but potentially problematic for large inputs.”  

This structure lets you answer concisely while covering all key concerns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
