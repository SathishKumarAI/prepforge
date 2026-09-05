---
qid: vq_4f919c7d87__eli5__local
question: what is currying in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 207
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:11:12-05:00'
sources: []
---

Think of a recipe that you want to bake a cake for different occasions.  
You first choose the **cake type** (flour, sugar, eggs). Once that’s set, the same recipe can be used again just by picking a new **frosting flavor** or **topping**.

In Scala, *currying* is like splitting a function into two parts:  
1. The first part takes the “cake type” (the first argument) and returns a new function that remembers it.  
2. The second part takes the “frosting flavor” (the second argument) and does the work.

So instead of calling `makeCake(type, frosting)` all at once, you write `makeCake(type)(frosting)`.  
Currying lets you reuse the first part with many different second parts, just like reusing a base cake recipe for many toppings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
