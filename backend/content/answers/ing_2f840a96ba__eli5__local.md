---
qid: ing_2f840a96ba__eli5__local
question: 'Explain: You have retrieved chunks and a question. How do you actually
  build the prompt? Assume some documents are irrelevant and two of them contradict
  each other.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 219
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:51:21-05:00'
sources: []
---

Imagine you’re writing a recipe for a potluck dinner. First, you read every dish (the retrieved chunks) but only keep the ones that actually fit the theme—those are your *relevant* pieces. If two dishes say “add salt” and “omit salt,” you note the conflict like a kitchen memo: “Note: one source says add salt, another says skip it.”  

When you write the prompt (the recipe card), you start with the question as the title (“How to cook this dish?”). Then you list the useful ingredients (relevant chunks) in order of importance, adding your conflict note where needed. Finally, you ask the AI to combine these clues into a single, clear answer: “Using the listed ingredients and considering the conflicting salt advice, explain how to finish the dish.”  

So you filter out useless dishes, flag contradictions, then assemble a tidy prompt that guides the AI toward a consistent solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
