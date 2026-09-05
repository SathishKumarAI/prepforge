---
qid: ing_adf53913e2__eli5__local
question: 'Explain: Explain passed by value and passed by reference.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 214
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:13:07-05:00'
sources: []
---

Think of a recipe card (the data) you want to share with a friend who is cooking.  

*Passed by value*: You hand your friend a **copy** of the recipe card. She can flip, highlight, or erase parts on her copy, but whatever she does never changes the original card you kept. In programming, passing by value gives the function its own separate copy of the data; edits inside the function stay local.

*Passed by reference*: Instead of a copy, you give your friend a **pointer** to the very same recipe card. Now any change she makes—adding a dash of spice or deleting an ingredient—affects the original card instantly. In code, passing by reference hands the function a direct link (reference) to the original data, so modifications are seen outside the function.

So, value = copy‑safe; reference = shared and mutable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
