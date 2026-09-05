---
qid: ing_96df153b64__eli5__local
question: How do you select and order few-shot examples? What are the known pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 273
total_tokens: 436
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:37:06-05:00'
sources: []
---

Imagine teaching a child how to sort fruit by color using just a handful of examples. You show three apples (red), two bananas (yellow) and one grape (purple). The child learns that “red” means apple, “yellow” means banana, etc., and then can guess the color of any new fruit.

In AI, *few‑shot prompting* works the same way: you give the model a few labeled examples (“this sentence is about sports; this one is politics”) and ask it to label something new. The order matters because the model tends to copy the last example it saw (a bias called “inference drift”). If your last example is noisy or from a different topic, the model may mislabel everything after that.

Common pitfalls:
1. **Wrong ordering** – putting a confusing example last can override earlier correct ones.
2. **Too few or too many examples** – one is often enough; too many can overwhelm the short context window.
3. **Inconsistent labeling** – mixing styles (e.g., “sports” vs “sport”) makes the model unsure.

So pick clear, representative examples, keep them consistent, and place the most reliable one last to guide the model’s final decision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
