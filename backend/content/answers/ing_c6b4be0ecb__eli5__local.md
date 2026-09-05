---
qid: ing_c6b4be0ecb__eli5__local
question: Why do output tokens cost more than input tokens, and how should that shape
  how you build?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 229
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:50:52-05:00'
sources: []
---

Think of an AI model like a chef who can read a recipe (input) for free but needs to spend money every time she actually cooks the dish (output). Reading the recipe is cheap: the kitchen just looks at the paper, no extra ingredients or time are used. But when she starts chopping, stirring, and plating, each step consumes gas, knives, and her own effort—those are the output tokens.

Because generating text requires the model to run through many internal calculations for every word it produces, each output token costs more compute (and therefore money) than an input token. The difference matters when you design a product: if your service will ask users for short prompts but give back long explanations, the bill will be driven mainly by those explanations.

So, build with that in mind: keep user inputs concise, limit how many words the model can produce per request, and consider batching or caching repeated answers. Treat output length like the chef’s cooking time—plan it carefully to stay within budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
