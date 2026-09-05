---
qid: ing_97e78ac9ab__eli5__local
question: 'Explain: For the most part, use positional arguments'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 230
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:38:29-05:00'
sources: []
---

Think of a recipe that you’ll follow to bake a cake. The recipe lists ingredients in a fixed order: flour, sugar, eggs, butter, then baking powder. When you read the list, you know exactly which ingredient goes into which bowl because you trust the position—first is flour, second is sugar, and so on.

In machine learning code, *positional arguments* work the same way. A function (like a recipe) expects inputs in a specific order: first the data matrix, then the labels, followed by the number of epochs, etc. You just drop each value into its place—no need to label them explicitly. If you mix up the order, the code will still run but will use the wrong values for the wrong parameters, leading to errors or unexpected results.

So, using positional arguments is like following a recipe: quick and efficient when the order is clear, but you must be careful not to shuffle the steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
