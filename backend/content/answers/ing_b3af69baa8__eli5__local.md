---
qid: ing_b3af69baa8__eli5__local
question: 'Explain: RPC vs REST — Remote Procedure Call (RPC) in Operating System
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 225
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:21:49-05:00'
sources: []
---

Think of your computer as a kitchen and the programs on it are chefs who need ingredients from a pantry.

**REST** is like sending a grocery list to the pantry clerk: “Give me apples, give me bread.” The clerk looks up what you asked for, pulls the items, and hands them back. You only ask *what* you want; you don’t tell the clerk how to prepare it or use the food.

**RPC** is like calling a specific recipe in the pantry’s cookbook: “Make me a fruit salad with apples, bananas, and yogurt.” The clerk follows that recipe, does all the chopping, mixing, and plating for you. You’re not just requesting items; you’re asking the pantry to perform a whole procedure.

So, REST is *requesting resources* (the ingredients), while RPC is *invoking a function* (the recipe). Both let programs talk over a network, but REST keeps things simple and flexible, whereas RPC bundles a task with its instructions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
