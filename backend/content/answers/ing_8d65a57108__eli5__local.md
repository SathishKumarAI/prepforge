---
qid: ing_8d65a57108__eli5__local
question: 'Explain: Builders — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 242
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:20:43-05:00'
sources: []
---

Think of a bakery that only makes bread when customers order it, not every day. The kitchen (the *server*) is always ready but stays idle until an order comes in; the baker (the *function*) starts kneading, baking, and cooling exactly when needed and stops once the loaf is done.

In AWS **Serverless Computing**, you write small pieces of code called “functions.” You upload them to a cloud service (like Amazon’s Lambda). Whenever something happens—a new file appears, an API call arrives, or a timer triggers—AWS automatically starts your function, gives it the resources it needs for that moment, and then shuts it down when finished. No servers are ever left running idle, so you only pay for the exact time your code executes.

**Unavoidable terms:**
- **Function:** A short piece of code that performs a specific task.
- **Lambda (AWS Lambda):** AWS’s service that runs functions on demand.
- **Serverless:** An approach where developers don’t manage servers; the cloud provider handles them automatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
