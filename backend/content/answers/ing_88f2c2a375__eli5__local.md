---
qid: ing_88f2c2a375__eli5__local
question: 'Q: Why must the verifier be separate from the producer, and where should
  budget enforcement live?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 232
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:13:35-05:00'
sources: []
---

Think of a recipe book (the *producer*) and a food inspector (the *verifier*).  
The chef writes the recipe without worrying about whether the restaurant can afford all the ingredients; that’s the job of the budget‑watcher. If the chef tried to decide both what the dish should taste like **and** how much it costs, he would be tempted to add extra spices just because they’re cheap, or cut quality to stay on budget—mixing two very different goals.

The inspector’s role is to check that the finished dish follows the recipe exactly. If the chef changed a step, the inspector will spot it, but the inspector doesn’t decide whether the change was cheap or expensive; that’s still the chef’s problem (or a separate budgeting tool).

So, keep the *verifier* separate from the *producer*, and put budget enforcement in its own module—like the kitchen manager who knows the price list. This lets each part focus on one clear job: correctness or cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
