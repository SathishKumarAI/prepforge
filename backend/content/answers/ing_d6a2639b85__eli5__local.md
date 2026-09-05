---
qid: ing_d6a2639b85__eli5__local
question: 'Q: What is "Label Bias" in In-Context Learning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 205
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:14:40-05:00'
sources: []
---

Think of in‑context learning as a student trying to guess what word comes next in a story. The “label” is the answer the student must give—like choosing *cat* or *dog*. **Label bias** happens when the clues (the context) make one label look far more likely than it really is, simply because of how the examples are written.

Imagine you’re reading a recipe book that lists only desserts before any savory dishes. When asked “What’s a good snack?” you’ll lean toward dessert items, even if there are many healthy options. The bias comes from the distribution of labels in the training snippets, not from the true balance of choices. In AI, if most examples show label A, the model will over‑predict A, making it hard to learn when label B is correct. It’s a “contextual echo” that skews the model’s judgment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
