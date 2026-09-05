---
qid: ing_fbeb64b6de__eli5__local
question: 'Explain: Synchronous execution — How AWS Lambda Works Behind the Scenes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 235
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:13:46-05:00'
sources: []
---

Think of AWS Lambda as a kitchen in a busy restaurant that only opens when you place an order.  
When your app sends a request (the **synchronous call**), Lambda’s “kitchen” immediately checks if there is an available chef (a *container*). If one exists, the chef starts cooking right away; if not, AWS spins up a new kitchen in seconds and hands it the recipe.  

The chef prepares the dish (runs your code) and places the finished plate on a counter (the response). The caller waits on that counter until the plate is ready—just like waiting for your meal. Once the plate leaves, Lambda may keep the kitchen warm for a few minutes in case another order comes, but it does not stay open forever.

In short: synchronous Lambda means “request‑and‑wait”: your code runs immediately in a container, returns its result, and then that container can be reused or shut down.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
