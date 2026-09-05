---
qid: ing_9d1ff59128__eli5__local
question: 'Q: How would you design the testing strategy for an AI coding agent in
  CI?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 282
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:46:27-05:00'
sources: []
---

**Imagine the AI coding agent as a chef who learns new recipes from a cookbook that keeps changing.**  
In continuous integration (CI) we want to make sure every time the “cookbook” is updated, the chef still prepares tasty dishes without burning anything.

1. **Unit tests –** Test each cooking step in isolation: does the ingredient‑mixing routine add the right amounts?  
2. **Integration tests –** Feed a full recipe (a set of code files) to the chef and check that the final dish (the compiled program) tastes correct.  
3. **Regression tests –** Keep a library of classic recipes (known good outputs). After every change, run those again; if any fails, something broke.  
4. **Property‑based tests –** Ask the chef to cook “any recipe that follows rule X” and verify the result obeys rule Y (e.g., no syntax errors).  
5. **Model‑specific checks –** Validate that the AI’s predictions stay within acceptable confidence bounds, using a small set of benchmark problems.

Run all these tests automatically whenever code is pushed; if any fail, the CI pipeline stops the merge until the chef (AI) learns to cook again correctly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
