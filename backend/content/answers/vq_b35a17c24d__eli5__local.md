---
qid: vq_b35a17c24d__eli5__local
question: How do I set the initial values of parameters for the parameter form at
  runtime?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 249
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:24:49-05:00'
sources: []
---

Think of a recipe that you’ll make many times, but each time you can tweak the spices. In programming, “parameters” are those spice slots. When you write a function (the recipe), you decide which parameters it needs and give them *default* values—just like putting 1 teaspoon of salt in the recipe book.

At runtime, when you call the function, you can either leave the slot empty (and the default value is used) or supply your own amount. That’s how you “set the initial values” for parameters: by assigning defaults when you declare the function. Then, whenever the function runs, it starts with those defaults unless you override them on that particular call. It’s the same as having a recipe card that already lists 1 cup of flour; you can change it if you want a thicker batter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
