---
qid: ing_83e223c1f6__eli5__local
question: 'Explain: Functional Programming — Imperative vs Functional vs Object-oriented
  Programming'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 225
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:05:51-05:00'
sources: []
---

Think of coding like cooking a meal.

**Imperative programming** is the “cook‑by‑steps” style: you tell the kitchen what to do, one action after another—mix flour, add eggs, stir, bake. Each step changes the pot’s contents (the program’s state).  
**Object‑oriented programming** adds “containers.” You put ingredients into labeled jars (objects), each jar knows how to handle its own stuff. The chef calls a jar’s method (“stir”) and the jar does it, keeping its internal mix hidden.  
**Functional programming** is the “recipe cards” approach: you write pure recipes that take inputs and return outputs without touching any outside ingredients. Each recipe card is independent; you can stack or reorder them freely because they never alter shared state.

So: imperative = step‑by‑step actions, object‑oriented = labeled containers with hidden state, functional = isolated recipes that never change the world around them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
