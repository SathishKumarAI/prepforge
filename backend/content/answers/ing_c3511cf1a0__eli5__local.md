---
qid: ing_c3511cf1a0__eli5__local
question: 'Explain: Webhooks — Polling vs Webhooks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 172
total_tokens: 330
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:45:32-05:00'
sources: []
---

Imagine you’re waiting for your favorite radio station to play a new song.  
*Polling* is like checking the station’s schedule every minute to see if the song has started—every check costs time and battery even when nothing changes.  
A *webhook* is a doorbell that rings only when the song actually starts; you get an instant notification without constantly listening.

**Webhook** – a small piece of code on your server that receives a message (the “doorbell”) from another service whenever something happens.  
**Polling** – repeatedly asking the other service, “Has anything changed?” at fixed intervals.

With webhooks you save resources and react instantly; with polling you may miss updates or waste effort waiting for nothing to happen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
