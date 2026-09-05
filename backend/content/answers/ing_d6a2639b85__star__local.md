---
qid: ing_d6a2639b85__star__local
question: 'Q: What is "Label Bias" in In-Context Learning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 282
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:37:59-05:00'
sources: []
---

**Situation** – While leading a prototype for a customer‑support chatbot at my previous company, we noticed that the model kept misclassifying “refund” requests as “technical support”, especially when users used vague language like “I need help with my order”.

**Task** – I had to reduce this label bias so the bot would route cases correctly, aiming for a 20% drop in misclassification within two weeks.

**Action** – First, I collected a balanced set of labeled examples and deliberately shuffled them in the prompt. Then I experimented with “demonstration balancing”: adding an equal number of positive and negative examples per label in the context window. I also introduced a small “label‑confidence” token after each example to encourage the model to weigh labels more evenly. Finally, I ran A/B tests comparing the baseline prompt against the new balanced one, monitoring precision/recall for each class.

**Result** – The balanced prompt cut misclassification of refund cases from 35% down to 12%, improving overall routing accuracy by 18%. I learned that in‑context learning is highly sensitive to the distribution of examples, and subtle prompt engineering can correct systemic label bias without retraining the model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
