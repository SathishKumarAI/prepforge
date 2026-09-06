---
qid: vq_225fd5a868__think__local
question: What is tail-recursion in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 440
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:16:04-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - The user wants an explanation of *tail‑recursion* specifically in the context of **Scala**.  
   - Assume they’re familiar with functional programming but maybe not Scala’s compiler optimisations.  
   - Decide whether to give a formal definition, practical example, or both.

**2. Pick a mental model / framework**  
   - Use the *“recursion → stack frame → optimisation”* chain:  
     1. Normal recursion creates a new stack frame per call.  
     2. Tail‑recursive calls are the last operation in the function body.  
     3. Scala’s compiler can transform such calls into an iterative loop (Tail‑Call Optimisation).  

**3. Reason step by step toward the answer**  
   - Define tail‑recursion generically.  
   - Show how it differs from ordinary recursion with a small code snippet.  
   - Explain Scala’s `@tailrec` annotation: compile‑time check + enforcement.  
   - Mention that only *true* tail calls (no extra work after the call) qualify.  
   - Note that Scala can optimise only when the method is inlined or called recursively within its own scope.

**4. Avoid common traps**  
   - Don’t conflate “tail‑recursion” with “tail‑call optimisation”—the former is a property, the latter is a compiler feature.  
   - Don’t assume all recursive functions are tail‑recursive; many need additional parameters or accumulator arguments.  
   - Beware of recursion that looks tail‑recursive but isn’t due to side‑effects or multiple returns.

**5. Sanity‑check & communicate**  
   - Re‑read the explanation: does it mention the last‑action property, stack frame elimination, and `@tailrec`?  
   - Keep language concise yet complete—aim for ~150–200 words.  
   - End with a quick example of a tail‑recursive factorial to illustrate the concept.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
