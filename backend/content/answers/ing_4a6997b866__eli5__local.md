---
qid: ing_4a6997b866__eli5__local
question: 'Explain: It''s not an intelligent service it just — Google Maps System
  Design Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 214
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:34:58-05:00'
sources: []
---

Think of a machine‑learning model as a *recipe book*, not a chef who thinks for itself.  
When you give the recipe (the trained model) a set of ingredients (input data), it follows the steps written in the book to produce a dish (a prediction). The chef doesn’t decide what the dish should be; he just applies the instructions exactly as written.  

In Google Maps’ system design interview, this is why we say “It’s not an intelligent service.” The service merely runs the recipe: it takes your location query, looks up the pre‑written steps (the model weights), and outputs a route. It doesn’t *think* about new routes on its own; it simply follows what it was taught during training.  

So, ML is a powerful tool that automates pattern recognition, but it remains a set of programmed instructions—no conscious decision‑making involved.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
