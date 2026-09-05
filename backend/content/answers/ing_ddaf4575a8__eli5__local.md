---
qid: ing_ddaf4575a8__eli5__local
question: 'Explain: Custom function calling alongside sandbox tools'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 226
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:25:23-05:00'
sources: []
---

Think of a machine‑learning model as a chef in a kitchen that can only use ingredients from its pantry (the “sandbox”). When the chef needs something special—say, a rare spice that isn’t stocked—the owner gives the chef a *custom recipe card* (a custom function). The card tells the chef exactly how to combine the pantry items with the new spice and where to put it in the dish.  

In practice, sandbox tools let the model run only safe, pre‑approved code or data. A custom function lets you add one extra step—like fetching a fresh dataset from an external API—while still keeping the rest of the process inside the protected kitchen. The chef follows the recipe card, uses the pantry safely, and produces the final dish (prediction) without breaking any rules.  

*Sandbox*: a controlled environment that restricts what code can do or access. *Custom function*: a user‑defined piece of code you give to the model so it can perform a specific task outside its normal sandbox.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
