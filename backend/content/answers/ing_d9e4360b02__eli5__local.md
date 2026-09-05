---
qid: ing_d9e4360b02__eli5__local
question: What's the difference between a jailbreak and a prompt injection? Why does
  the distinction matter operationally?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 196
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:19:25-05:00'
sources: []
---

Think of an AI as a helpful robot in a kitchen that follows recipes you give it.  
A **prompt injection** is like slipping extra instructions into the recipe text itself—“Add salt, then stir.” The robot reads this new line and obeys because it’s inside the instruction sheet.  
A **jailbreak** is more like giving the robot a secret key that lets it ignore the kitchen rules entirely; it can start cooking whatever it wants, even if the recipe says otherwise.

Why does it matter? If you only face prompt injections, you just need to scrub your recipes for hidden notes—easy to spot and fix. A jailbreak bypasses those safeguards altogether, so you must lock down the robot’s entire permission system (the “jail”) before someone can break in. In short, injection tweaks the instructions; a jailbreak cracks the whole safety cage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
