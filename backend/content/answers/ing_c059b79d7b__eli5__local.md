---
qid: ing_c059b79d7b__eli5__local
question: What does JSON data look like? — JSON And BSON | MongoDB
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 276
total_tokens: 438
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:41:35-05:00'
sources: []
---

Think of JSON as a tidy, handwritten recipe card that tells your computer how to make something. The card is made up of **key‑value pairs**—the “ingredients” (keys) and their amounts or instructions (values). Keys are always strings in double quotes, just like ingredient names: `"flour"`. Values can be:

- a number (`42`) – the amount of an ingredient,
- a string (`"cup"`) – a unit or note,
- a boolean (`true`/`false`) – “yes” or “no” instructions,
- **null** – meaning “none” or “unknown,”
- another JSON object (a nested card) – a sub‑recipe, e.g. `"sauce": { "tomato": 3 }`,
- or an array – a list of items, e.g. `"toppings": ["pepper", "cheese"]`.

All objects are wrapped in curly braces `{}` and arrays in square brackets `[]`. Commas separate each key‑value pair, just like bullet points on a recipe card. This simple, human‑readable structure lets programs quickly read the “recipe” and build data structures—much like following a clear cooking instruction to get the final dish.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
