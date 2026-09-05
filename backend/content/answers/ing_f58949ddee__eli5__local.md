---
qid: ing_f58949ddee__eli5__local
question: 'Explain: Progressive Tool Discovery for Token Efficiency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 253
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:03:31-05:00'
sources: []
---

Imagine you’re writing a recipe book but can only use 100 words per page. You start with a simple “basic” cooking method that works for all dishes, but it takes many words to explain every step. A better way is to discover *special tools*—like a pre‑heated oven or a spice grinder—that let you describe each dish more briefly and precisely.

In machine learning this is called **Progressive Tool Discovery for Token Efficiency**.  
- *Token*: a word or symbol the model reads (think of it as a page in your book).  
- *Tool*: a reusable operation, such as “add two numbers” or “look up a fact.”  

You begin with a single generic tool (“do everything”), which needs many tokens to explain. Then you let the system try new tools on small sub‑problems; if a new tool reduces the word count, it’s kept and used later. Over time, the model builds a toolbox of concise operations that let it solve complex tasks using far fewer tokens—just like your recipe book becomes shorter while still covering every dish.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
