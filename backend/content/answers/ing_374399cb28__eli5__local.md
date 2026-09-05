---
qid: ing_374399cb28__eli5__local
question: 'Explain: Three Core Functionalities of GraphQL — REST vs GraphQL - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 275
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:03:22-05:00'
sources: []
---

Imagine you’re ordering a pizza.  
With **REST**, you call one big kitchen: “Give me the whole menu.” The kitchen sends back every dish (even those you don’t need). You might end up with extra ingredients, or you may have to make another trip for something missing.

**GraphQL** is like telling the chef exactly what you want: “Just give me a pepperoni slice and a side of garlic knots, no more, no less.” The kitchen only prepares those items, saving time and effort.

The three core features that let GraphQL do this are:

1. **Precise Queries** – You ask for specific fields (e.g., name, price) just like picking the exact toppings you want.
2. **Single Endpoint** – All requests go to one address, so you never need a new door for each kind of data.
3. **Typed Schema** – The kitchen’s menu is written in a clear recipe book; clients know what types (e.g., `Pizza`, `Order`) exist and how they relate.

In short, GraphQL lets you request exactly the shape of data you need, from one place, with a self‑describing “menu.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
