---
qid: ing_153aca2c57__eli5__local
question: 'Explain: Event-Carried State Transfer — What do you mean by \u201cEvent-Driven\u201d?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 213
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:08:58-05:00'
sources: []
---

**Event‑driven** means the system reacts to “events” – small, self‑contained signals that something has happened.  
Imagine a kitchen where a chef (the learning algorithm) only moves from one task to another when a timer rings or a pot boils. The chef doesn’t keep checking every second; instead she waits for the event (“timer finished”) and then starts the next step.  

In machine‑learning pipelines, an **event** could be “new data arrives,” “a model has finished training,” or “performance drops below a threshold.” When that event fires, the system (e.g., a scheduler or orchestrator) automatically triggers the appropriate action—like retraining, updating a deployment, or alerting an engineer.  

So, *event‑driven* is simply: **“Do something only when a specific signal appears,”** rather than continuously polling or running everything all the time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
