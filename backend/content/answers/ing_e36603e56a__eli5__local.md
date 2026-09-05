---
qid: ing_e36603e56a__eli5__local
question: 'Explain: Figma — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 275
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:35:38-05:00'
sources: []
---

Think of a software interview like a cooking contest where the judge asks you to whip up a dish using only the ingredients on hand.  
FAANG companies (Facebook, Apple, Amazon, Netflix, Google) often ask questions about **Figma**—the design‑and‑prototype tool that lets teams sketch ideas and build interactive mockups—because it’s a real‑world product everyone uses.  

A typical question might be: *“If you were to add an undo feature to Figma, how would you store the user’s actions?”*  
Here, you’re expected to explain a **command pattern** (each action is a command object) and a **stack** (last‑in, first‑out).  

In plain terms:  
- **Command** = a single change (e.g., “draw a rectangle”).  
- **Stack** = a list that remembers the order of changes so you can reverse them.  

FAANG asks these to see if you understand how real apps keep track of user work, handle mistakes, and stay fast—just like a chef must know how to undo a mistake in the kitchen before serving the dish.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
