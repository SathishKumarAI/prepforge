---
qid: ing_ddd5952fbf__eli5__local
question: 'Explain: Functional Programming — Top 8 Programming Paradigms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 264
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:25:42-05:00'
sources: []
---

**Functional programming (FP)** is a style where you treat *code as math*.  
Imagine cooking with recipes that are pure: every time you mix the same ingredients in the same order, you always get exactly the same dish, and nothing outside the recipe changes—no leftover crumbs or secret spices. In FP, a “function” is like such a recipe: it takes input values (arguments), produces an output, and never alters anything else (no side‑effects).  

Key terms:  
- **Function** – a reusable block that maps inputs to outputs.  
- **Pure function** – always gives the same result for the same inputs and doesn’t change outside data.  
- **Immutable data** – once created, values don’t get modified; you create new ones instead.

Because everything is predictable, FP makes reasoning about code easier, supports parallel execution (since no shared state), and fits naturally with modern tools that build software by combining small, testable pieces. It’s one of the eight main programming paradigms—others include imperative, object‑oriented, event‑driven, logic, procedural, concurrent, and reflective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
