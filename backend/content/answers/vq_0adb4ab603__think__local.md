---
qid: vq_0adb4ab603__think__local
question: Fig. 2 –How to answer a coding question?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 459
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:07:42-05:00'
sources: []
---

**1. Clarify the question & assumptions**  
   - Identify exactly what “Fig. 2” refers to (e.g., a diagram in a textbook, a slide, or an online post).  
   - Note any constraints given: language, library, dataset size, runtime limits.  
   - Assume you’re expected to write a short, functional code snippet that illustrates the concept shown.

**2. Adopt a mental model**  
   - Treat the problem as *“explain‑and‑implement”*: first explain what the figure depicts (e.g., a data flow diagram), then map each component to code.  
   - Use the *Problem → Plan → Execute* loop: understand, outline steps, write minimal working code.

**3. Step‑by‑step reasoning**  
   1. **Read the figure** – list input(s), output(s), intermediate variables.  
   2. **Translate to pseudocode** – e.g., “Load X, compute Y = f(X), return Z.”  
   3. **Choose language & libraries** that match the context (NumPy/PyTorch for tensors).  
   4. **Implement minimal boilerplate**: import statements, function definition, sample data.  
   5. **Add comments linking back to the figure’s elements** so the answer is self‑explanatory.

**4. Avoid common traps**  
   - Don’t over‑engineer: keep it concise.  
   - Don’t assume hidden variables; ask if needed or make reasonable defaults.  
   - Avoid hard‑coding numbers unless they’re explicitly shown in Fig. 2.  
   - Ensure the code runs with minimal dependencies.

**5. Sanity‑check & verbalize**  
   - Run a quick test (if possible) to confirm it behaves as described.  
   - Explain aloud: “Here’s how the figure translates into code…”, walking through each line and its purpose.  
   - End by summarizing what the snippet accomplishes in the context of the figure.

Follow this pattern for any coding question that references a diagram or figure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
