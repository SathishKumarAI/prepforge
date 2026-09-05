---
qid: ing_1ede860bbf__eli5__local
question: About 10% of your training labels are wrong. What happens, and what do you
  do about it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 228
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:25:09-05:00'
sources: []
---

Imagine a chef learning to make soup from a cookbook that has some recipes written incorrectly—about one out of ten are wrong. The chef will still learn the general idea of how soups taste, but when he follows a faulty recipe he might add too much salt or the wrong spice, and his dishes will sometimes be off‑key. In machine learning, those mislabelled data points act like the wrong recipes: they confuse the model, making it less confident and slightly biased toward the mistakes.

To fix this, we do two things:

1. **Spot the bad labels** – just as a chef would taste test each soup, we run quick checks or ask experts to review suspicious examples.
2. **Reduce their influence** – we either discard them or give them smaller weight when training, so they don’t pull the model astray.

With these steps, the model learns from the reliable “recipes” and its predictions become much more accurate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
