---
qid: ing_8eb6653706__eli5__local
question: 'Explain: 🤖 Agents, Tool Use & MCP — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 312
total_tokens: 472
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:23:02-05:00'
sources: []
---

Imagine you’re in a kitchen and you want to bake a cake (that’s the *goal*).  
A **smart agent** is like an experienced chef who can decide what steps to take—mixing, baking, frosting—without anyone telling her each action. She has a *plan*, but she also keeps learning from how the oven behaves or how the batter reacts.

When the chef needs something special—say a fancy whisk that only fits one size of bowl—that’s **tool use**. The agent checks what tools are available, picks the right one, and applies it exactly where needed. It’s like a robot “searching” its toolbox for the best instrument to finish a task.

**MCP (Model‑Causal Planning)** is the recipe book that the chef consults. It contains *causal rules* (“if you add sugar before flour, the cake rises differently”) and a model of how actions affect the world. The agent uses MCP to simulate possible action sequences, choose the most promising one, then execute it in real life.

So:  
1. **Agent** = chef who plans and acts.  
2. **Tool use** = picking the right utensil from the kitchen.  
3. **MCP** = recipe book that tells the chef what will happen when she mixes, bakes, or folds. Together they let an AI cook up solutions efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
