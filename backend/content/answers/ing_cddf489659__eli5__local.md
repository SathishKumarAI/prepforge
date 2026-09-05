---
qid: ing_cddf489659__eli5__local
question: 'Explain: Amazon EventBridge — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 207
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:01:28-05:00'
sources: []
---

Think of Amazon EventBridge like a smart, invisible post office that lives inside the cloud. When one part of your system (say, an online store) does something—like “a new order was placed”—it writes a short note called an **event** and drops it into this post office. You set up rules telling the post office where to send each type of note: maybe to a payment service, to an inventory checker, or to a notification app. The great part is that you never have to build or run any servers; the post office runs automatically for you (that’s **serverless**). It only “wakes up” when there’s mail, so it’s cheap and scales with your traffic. In short, EventBridge routes events between services without you having to manage infrastructure, letting each part of your application talk to the right people at the right time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
