---
qid: ing_2bfb8cd6ca__eli5__local
question: 'Explain: Account for Uneven Key Popularity — Consistent Hashing | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 320
total_tokens: 485
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:45:13-05:00'
sources: []
---

Imagine a pizza shop that has many ovens (servers) and a huge menu of toppings (keys). Some toppings—like pepperoni or mushrooms—are very popular, while others like truffle oil are rare. If we simply hand every topping to an oven based on its name, the most common ones would pile up in one oven, overloading it, while other ovens sit idle.

Consistent hashing solves this by first placing each oven around a circle and then mapping every topping to a point on that same circle using a simple “hash” recipe. When you want to bake a pizza with a particular topping, you walk clockwise from the topping’s point until you hit an oven; that oven is responsible for all pizzas containing that topping. Because toppings are spread around the circle by their hash, even if pepperoni is requested a thousand times more than truffle oil, each request still lands on its own nearby oven. If one oven breaks or a new one arrives, only a few toppings shift to different ovens—just like moving a few pizza orders from one oven to another—so the system stays balanced and stable.

Key terms:  
- **Hash**: A recipe that turns any topping name into a number on the circle.  
- **Oven (server)**: The machine that actually prepares pizzas.  
- **Consistent hashing**: The method of placing toppings and ovens on the same circle so load spreads evenly and changes cause minimal reshuffling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
