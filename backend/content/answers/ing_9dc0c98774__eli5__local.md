---
qid: ing_9dc0c98774__eli5__local
question: 'Explain: Event Notification — What do you mean by \u201cEvent-Driven\u201d?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 201
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:47:36-05:00'
sources: []
---

Think of a smart home with a voice‑activated assistant. The assistant doesn’t keep checking the room all the time; it sits quietly until someone says “Hey, lights!” or a motion sensor detects movement. That moment—when something happens—is an **event**.  

In machine learning, *event‑driven* means your system waits for such triggers instead of constantly polling data. For example, a fraud‑detection model only runs when a new transaction is posted; a recommendation engine updates only when a user adds a product to the cart. The event (new data point) fires a notification that tells the model “now’s the time to act.”  

So, *event‑driven* in ML = a reactive workflow: listen for events → receive a notification → execute the appropriate learning or inference step. It keeps resources focused and responses timely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
