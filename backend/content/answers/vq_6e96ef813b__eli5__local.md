---
qid: vq_6e96ef813b__eli5__local
question: What is call-by-name?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 229
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:15:04-05:00'
sources: []
---

**Call‑by‑name** is a way of passing arguments to a function that says, “don’t compute the argument now; just remember how to compute it and use that recipe only when the function actually needs its value.”  

Think of it like a *lazy recipe card* in a cookbook. Instead of cooking a whole dish ahead of time (call‑by‑value), you keep a note: “When you need the soup, just grab the ingredients and stir them together.” If the recipe never asks for that soup, you never bother to make it at all.  

In programming terms, the function receives an *expression* (the recipe) rather than a finished result. Whenever the function refers to that argument, the expression is evaluated fresh. This can save time if the value is expensive to compute or might never be used, but it also means the calculation happens each time the argument is referenced.  

So, call‑by‑name = “pass the recipe, not the cooked meal.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
