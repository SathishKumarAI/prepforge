---
qid: ing_8f2ebd68d8__eli5__local
question: Your agent charged a customer's card twice. The trace shows one tool call.
  What happened, and how do you prevent it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 251
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:24:01-05:00'
sources: []
---

Imagine your agent is like a cashier who has to hand a receipt to the customer *after* they’ve paid. If the cashier prints the receipt only once but still presses the “charge” button twice, the customer’s card will be taken twice even though the cashier looked at the screen just one time.

In our case the agent used a single tool call—“charge_card”—but the system that runs that tool accidentally executed it two times. This can happen when the code that sends the request to the payment gateway is written in a way that repeats itself, or when the function is called from two places at once (a “race condition”).

**How to stop it**

1. **Add a guard:** Before charging, check if an identical charge already exists for that order.
2. **Use a transaction lock:** Make the call atomic so only one instance can run at a time.
3. **Log everything:** Keep a record of each request and its response; if you see duplicates, investigate.

With these steps, your agent will be like a careful cashier who double‑checks before pressing the button—no accidental double charges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
