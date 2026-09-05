---
qid: ing_60409f36cf__eli5__local
question: 'Explain: Faithfulness Evaluation — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 216
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:08:59-05:00'
sources: []
---

Imagine your LLM is a storyteller who reads a recipe book and then tells you how to bake a cake. **Faithfulness evaluation** checks whether the story it gives actually follows what’s in the book, not just sounds plausible or catchy.

Think of the recipe book as the *source text* (the facts) and the story as the *model’s answer*. If the storyteller says “use 3 cups of flour” when the book says “2 cups,” that’s a mistake. Faithfulness scores count how many such mistakes happen—like a teacher marking an essay for factual errors.

So, in practice, we feed the model a prompt, let it answer, then compare its words to the original facts (using reference answers or automated checks). The higher the match, the more “faithful” the model is. This helps us trust that the AI isn’t just making up information but staying true to what it was given.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
