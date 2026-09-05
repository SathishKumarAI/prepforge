---
qid: ing_5b568244f6__eli5__local
question: 'Explain: Now even though if it''s a directed — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 237
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:00:51-05:00'
sources: []
---

Think of a machine‑learning pipeline as a **recipe book** that tells you what to do next.  
In this recipe, each step (like “load data,” “clean data,” “train model”) is a **node**.  
The arrows between nodes are the **directed edges**—they point only one way, just like instructions in a recipe: *first stir, then bake*.  

Because the arrows never loop back to an earlier step, you can’t get stuck revisiting the same instruction; this guarantees the process moves forward and finishes.  
In Google Maps’ system‑design interview, they ask about such directed structures (e.g., a graph of services where each service calls only later ones) so that traffic flows cleanly from start to finish without dead ends or infinite loops.  

So, picture a directed graph as a one‑way street network in your recipe: every turn leads to the next step and eventually to the final dish—your trained model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
