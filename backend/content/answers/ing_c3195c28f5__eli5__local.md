---
qid: ing_c3195c28f5__eli5__local
question: 'Explain: IV. Backing Services — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 206
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:45:18-05:00'
sources: []
---

Think of a machine‑learning model as a chef’s recipe that must work no matter where it’s cooked.  
The **12‑Factor App** says the “backing services” (the kitchen appliances) should be treated like separate, replaceable appliances—just a connection string away.

* **Backing service** = any external resource the app talks to: a database, a cache, an email server, or a cloud‑storage bucket.  
* The app never embeds its address inside the code; it reads a single URL from the environment (like a label on a jar).  
* That URL can point to a local test appliance during development and to a powerful production appliance when deployed.

So, the chef keeps the recipe unchanged while swapping ovens or refrigerators by simply changing a single “connection string.” This keeps the model portable, scalable, and easy to maintain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
