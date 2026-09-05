---
qid: ing_25038527f5__eli5__local
question: 'Q47: How do you defend against prompt injection attacks?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 238
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:34:42-05:00'
sources: []
---

Imagine your AI is a kitchen chef who follows recipes (prompts) given by the user. A **prompt‑injection attack** is like someone slipping a hidden ingredient into the recipe—so the chef unknowingly adds something dangerous to the dish.

To defend against this, you set up a few safety steps:

1. **Recipe filter (input validation)** – Before the chef sees it, scan the prompt for suspicious words or code that could change the recipe’s intent.
2. **Chef training (model fine‑tuning)** – Teach the model to recognize when a prompt tries to trick it and respond with “I’m sorry, I can’t do that” instead of following the hidden instructions.
3. **Ingredient lock (output filtering)** – After the dish is made, check the final answer for anything that looks like a policy violation or malicious content; if found, scrub or refuse it.

Together, these layers act like a kitchen’s safety system—catching tampered recipes before they reach the chef and ensuring no harmful dishes are served.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
