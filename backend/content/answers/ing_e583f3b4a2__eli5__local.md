---
qid: ing_e583f3b4a2__eli5__local
question: What is over-refusal, and how do you manage the helpfulness-vs-safety tension?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 307
total_tokens: 474
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:38:25-05:00'
sources: []
---

Imagine a friendly barista who’s always ready to pour coffee for anyone who walks in, but one day the shop gets a sudden storm of people demanding drinks that could burn their tongue or cause allergies. The barista must decide: should they keep serving everyone (helpfulness) or refuse some orders to protect customers from harm (safety)?  

In AI, *over‑refusal* happens when the system says “no” too often—like a barista who stops making coffee for almost every request because it’s scared of possible problems. The trade‑off is the **helpfulness‑vs‑safety tension**: a model that’s super helpful may give wrong or dangerous answers; one that’s very safe may refuse useful requests.

Managing this balance is like training the barista to know when a cup could be unsafe (e.g., too hot) and when it’s fine. Developers do this by:

1. **Clear rules** – setting limits on what the AI can say.
2. **Layered checks** – letting a “second opinion” flag risky responses before they’re sent.
3. **Learning from feedback** – adjusting how often the system says “I’m sorry, I can’t help with that.”

The goal is to keep the AI helpful while still protecting users—just as a careful barista keeps everyone safe without shutting down the shop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
