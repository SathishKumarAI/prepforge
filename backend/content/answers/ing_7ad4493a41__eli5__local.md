---
qid: ing_7ad4493a41__eli5__local
question: How would you build an execution-based eval for a code-generation feature?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 241
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:51:32-05:00'
sources: []
---

Think of your code‑generation model as a chef who writes a recipe (the code) and you want to know if the dish actually tastes good.  
An **execution‑based eval** is like sending that dish to a panel of taste‑testers: you run the program, see what it prints or returns, and compare that outcome to the expected result.

1. **Run the generated code** in a safe sandbox (like a small kitchen where nothing can spill outside).  
2. **Capture its output**—the text printed, the numbers returned, or any files written.  
3. **Compare** this output to the “golden” answer you already know is correct.  
4. **Score** the match: exact match = perfect score; partial match (e.g., wrong order) gets a lower score.

If the code crashes or hangs, that’s like a burnt dish—assign a penalty. By evaluating only what actually happens when the program runs, you measure real usefulness instead of just guessing from syntax.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
