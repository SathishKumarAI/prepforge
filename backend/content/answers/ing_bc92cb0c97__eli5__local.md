---
qid: ing_bc92cb0c97__eli5__local
question: 'Explain: Drawbacks of REST — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 259
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:36:09-05:00'
sources: []
---

Imagine you’re ordering food from a menu (REST). The kitchen knows exactly how to make each dish, but if you want a combo—say a burger, fries, and a drink—you have to place three separate orders. You’ll receive the burger first, then the fries, then the drink, or sometimes one of them gets lost or delayed. That’s the main drawback of REST: every request pulls exactly what it was told to pull, so you can end up with too little (missing data) or too much (unnecessary information), and you may need several round‑trips.

GraphQL is like a waiter who takes a single, detailed request: “Give me the burger with cheese, no onions, and the fries cut into squares.” The kitchen knows exactly what you want in one go. You get precisely that data, no extras, no omissions, and only one trip to the kitchen. This reduces network traffic, speeds up loading times, and keeps your app leaner.

So, REST can be slow and wasteful when you need multiple pieces of related information, whereas GraphQL lets you fetch exactly what you want in a single request, making apps faster and more efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
