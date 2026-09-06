---
qid: vq_182597abc5__think__local
question: Difference between Call-by-value and call-by-name parameter?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 447
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:12:50-05:00'
sources: []
---

**Thought Process for Explaining Call‑by‑Value vs. Call‑by‑Name**

1. **Clarify the context & assumptions**  
   - Identify whether the audience knows basic function calling conventions.  
   - Assume a language that supports both paradigms (e.g., Scala, Haskell, or Lisp dialects).  
   - Decide if you’ll focus on *semantic* differences or also touch on implementation details.

2. **Select a mental model**  
   - Use the *“argument evaluation”* framework:  
     - *Call‑by‑value*: evaluate the argument first, then pass the resulting value.  
     - *Call‑by‑name*: delay evaluation until the argument is actually used inside the function.  
   - Think of call‑by‑name as a “thunk” or lazy expression.

3. **Step‑by‑step reasoning**  
   - Start with a simple example (e.g., `f(x) = x + 1; f(g())`).  
   - Show what happens when `g()` is expensive: value vs. name.  
   - Highlight side effects: call‑by‑name may evaluate multiple times, leading to repeated side effects.

4. **Avoid common traps**  
   - Don’t conflate *call‑by‑value* with “pass by reference.”  
   - Remember that call‑by‑name can lead to infinite recursion if the argument is never used.  
   - Be careful about mutable state; explain how each paradigm treats mutation.

5. **Sanity‑check & communicate**  
   - Re‑phrase in a real‑world analogy (e.g., ordering a dish vs. ordering a recipe).  
   - Verify that you covered: evaluation timing, side effects, and potential pitfalls.  
   - Conclude with practical implications for data engineering—lazy loading of datasets vs. eager fetching.

This structured approach ensures clarity, completeness, and ease of transfer to other parameter‑passing concepts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
