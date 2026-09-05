---
qid: ing_121015b7f0__eli5__local
question: 'Explain: somebody comes in between and changes it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 203
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:04:20-05:00'
sources: []
---

Imagine you’re teaching a child to recognize pictures of cats. The child looks at many photos (the training data) and learns what makes a cat look like one. Now, suppose a friend walks in halfway through the lesson and starts pointing out that “all animals with whiskers are cats.” That friend is **intervening**—they’re changing the way the child (our model) learns by adding new information or rules.

In machine learning this is called an *intervention*. It can happen at any step: you might change the data, tweak how features are calculated, or even adjust the training algorithm. The goal is to steer the model toward better performance or fairness, but it also means we’re no longer letting the model learn purely from the raw data; we’re guiding its learning path with new insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
